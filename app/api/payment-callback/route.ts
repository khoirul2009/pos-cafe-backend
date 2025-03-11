import ErrorHandling from '@/lib/error-handling';
import PaymentService from '@/services/payment-service';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const service = new PaymentService();

    service.updateBilling({
      order_id: body.order_id,
      transaction_status: body.transaction_status
    });

    return NextResponse.json({
      data: 'OK'
    });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}
