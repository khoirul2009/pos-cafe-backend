import { prisma } from '@/lib/database';
import { HttpException } from '@/lib/http-execption';

type BookingStoreRequest = {
  time: string;
  location: string;
  user_id: number;
  service_id: number;
  booking_dates: {
    date: string;
  }[];
};

type BookingUpdateRequest = {
  status: string;
};

export default class BookingService {
  async all(searchParams: URLSearchParams) {
    const page = parseInt(searchParams.get('page') ?? '1') || 1;
    const pageSize = parseInt(searchParams.get('pageSize') ?? '10') || 10;
    const userId = searchParams.get('user_id');

    const parsedUserId = userId ? parseInt(userId) : undefined;

    const data = await prisma.booking.findMany({
      where: parsedUserId ? { user_id: parsedUserId } : {}, // Hanya filter jika userId ada
      include: {
        user: true,
        service: true,
        booking_dates: {
          select: {
            date: true
          }
        }
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: { created_at: 'desc' }
    });

    return {
      data,
      page,
      pageSize,
      totalPages: Math.ceil(data.length / pageSize),
      totalItems: data.length
    };
  }

  async notAvailableDate(serviceId: number) {
    const data = await prisma.booking.findMany({
      where: { service_id: serviceId },
      include: { booking_dates: true }
    });

    // Flatten the array to return a single list of dates
    return data.flatMap((item) =>
      item.booking_dates.map((i) => {
        const date = new Date(i.date);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      })
    );
  }

  async create(data: BookingStoreRequest) {
    return await prisma.booking.create({
      data: {
        time: data.time,
        location: data.location,
        user_id: data.user_id,
        service_id: data.service_id,
        booking_dates: {
          createMany: {
            data: data.booking_dates
          }
        }
      }
    });
  }

  async update(data: BookingUpdateRequest, id: number) {
    const booking = await prisma.booking.findUnique({
      where: { id }
    });

    if (!booking) {
      throw new HttpException(404, 'Booking not found');
    }

    return await prisma.booking.update({
      where: { id },
      data
    });
  }
  async delete(id: number) {
    const booking = this.findById(id);

    if (!booking) {
      throw new HttpException(404, 'Booking not found');
    }

    return await prisma.booking.delete({
      where: { id }
    });
  }
  async findById(id: number) {
    return await prisma.booking.findUnique({
      where: { id },
      include: {
        service: true,
        payments: true,
        booking_dates: true
      }
    });
  }
}
