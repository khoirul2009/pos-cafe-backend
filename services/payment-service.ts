import { prisma } from '@/lib/database';
import { HttpException } from '@/lib/http-execption';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

type PaymentStoreRequest = {
  payment_method: string;
  booking_id: number;
  acquirer: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  type: string;
};

type PaymentUpdateRequest = {
  transaction_status: string;
  order_id: string;
};

type PaymentPayloadType = {
  payment_type: string;
  transaction_details: {
    order_id: string;
    gross_amount: number;
  };
  bank_transfer?: {
    bank: string;
  };
  customer_details: {
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
  };
  echannel?: {
    bill_info1: string;
    bill_info2: string;
  };
  item_details?: any;
  shopeepay?: {
    callback_url: string;
  };
  gopay?: {
    callback_url: string;
    enable_callback: boolean;
  };
};

const midtransBaseUrl = process.env.MIDTRANS_BASE_URL;
const midtransServerKey = process.env.MIDTRANS_SERVER_KEY;

export default class PaymentService {
  async createBilling(data: PaymentStoreRequest) {
    const booking = await prisma.booking.findUnique({
      where: { id: data.booking_id },
      include: {
        service: true
      }
    });
    const payment_uuid = uuid();

    if (!booking) {
      throw new HttpException(404, 'Booking not found');
    }

    let paymentPayload: PaymentPayloadType = {
      payment_type: data.payment_method,
      transaction_details: {
        order_id: payment_uuid,
        gross_amount: booking.service.price - booking.service.price * 0.5
      },
      customer_details: {
        email: data.email,
        first_name: data.first_name,
        last_name: data.last_name,
        phone: data.phone
      },
      item_details: {
        id: booking.id,
        price: booking.service.price - booking.service.price * 0.5,
        quantity: 1,
        name: booking.service.title
      }
    };

    if (data.payment_method === 'e-wallet') {
      paymentPayload.payment_type = data.acquirer;
      if (data.acquirer === 'shopeepay') {
        paymentPayload.shopeepay = {
          callback_url: process.env.NEXTAUTH_URL! + `/payment/${payment_uuid}`
        };
      }
      if (data.acquirer === 'gopay') {
        paymentPayload.gopay = {
          callback_url: process.env.NEXTAUTH_URL! + `/payment/${payment_uuid}`,
          enable_callback: true
        };
      }
    }

    if (data.payment_method === 'bank_transfer') {
      paymentPayload.bank_transfer = {
        bank: data.acquirer
      };
    }

    const reqPayment = await axios.post(
      `${midtransBaseUrl}/charge`,
      paymentPayload,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Basic ${btoa(midtransServerKey!.toString())}`
        }
      }
    );

    if (reqPayment.status == 201) {
      throw new HttpException(
        parseInt(reqPayment.data.status_code),
        reqPayment.data.status_message
      );
    }
    let qrUrl = null;
    let paymentUrl = null;
    let bilingNum = null;
    if (data.payment_method === 'qris') {
      qrUrl =
        reqPayment.data.actions.find(
          (action: any) => action.name === 'generate-qr-code'
        )?.url || '';
    }

    if (data.payment_method === 'e-wallet') {
      paymentUrl =
        reqPayment.data.actions.find(
          (action: any) => action.name === 'deeplink-redirect'
        )?.url || '';
    }

    if (data.payment_method === 'bank_transfer') {
      bilingNum = reqPayment.data.va_numbers[0]?.va_number || ''; // Ambil VA pertama yang tersedia
    }

    const saveData = await prisma.payment.create({
      data: {
        amount: parseInt(reqPayment.data.gross_amount),
        payment_uuid: reqPayment.data.order_id,
        status: 'pending',
        booking_id: booking.id,
        payment_method: data.payment_method,
        acquirer: data.acquirer,
        billing_num: bilingNum,
        qr_url: qrUrl,
        redirect_url: paymentUrl,
        type: data.type
      }
    });

    return saveData;
  }

  async findBillingByUUID(uuid: string) {
    const data = await prisma.payment.findFirst({
      where: {
        payment_uuid: uuid
      }
    });

    if (!data) {
      throw new HttpException(404, 'Payment not found');
    }

    return data;
  }

  async updateBilling(data: PaymentUpdateRequest) {
    const checking = await prisma.payment.findFirst({
      where: {
        payment_uuid: data.order_id
      }
    });

    if (!checking) {
      throw new HttpException(404, 'Payment not found');
    }

    if (data.transaction_status === 'settlement') {
      await prisma.booking.updateMany({
        where: {
          AND: [{ id: checking.booking_id }, { status: 'pending' }]
        },
        data: {
          status: 'confirmed'
        }
      });
    }

    return await prisma.payment.updateMany({
      where: {
        payment_uuid: data.order_id
      },
      data: {
        status: data.transaction_status
      }
    });
  }
  async cancelTransaction() {}
}
