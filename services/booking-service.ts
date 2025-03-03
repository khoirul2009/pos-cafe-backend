import { prisma } from '@/lib/database';
import { HttpException } from '@/lib/http-execption';
import { Booking } from '@prisma/client';

export default class BookingService {
  async all(searchParams: URLSearchParams) {
    const page = parseInt(searchParams.get('page') ?? '1') || 1;
    const pageSize = parseInt(searchParams.get('pageSize') ?? '10') || 10;
    const data = await prisma.booking.findMany({
      include: {
        user: true,
        service: true
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
  async create(data: Booking) {
    return await prisma.booking.create({
      data
    });
  }
  async update(data: Booking, id: number) {
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
      where: { id }
    });
  }
}
