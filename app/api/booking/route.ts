import ErrorHandling from '@/lib/error-handling';
import BookingService from '@/services/booking-service';
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import authConfig from '@/auth.config';
import { prisma } from '@/lib/database';
import { HttpException } from '@/lib/http-execption';

export async function GET(req: NextRequest) {
  try {
    const bookingService = new BookingService();
    const url = new URL(req.url);
    const bookings = await bookingService.all(url.searchParams);

    return NextResponse.json(bookings);
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const bookingService = new BookingService();
    const session = await auth();

    if (!session || !session.user || !session.user.email) {
      throw new HttpException(401, 'Unauthorized');
    }

    const { date, time, location, service_id } = await req.json();
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    });

    if (!user) {
      throw new HttpException(401, 'Unauthorized');
    }

    const booking = await bookingService.create({
      date,
      time,
      location,
      service_id,
      user_id: user.id
    });

    return NextResponse.json(booking);
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}
