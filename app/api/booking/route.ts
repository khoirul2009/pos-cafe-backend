import ErrorHandling from '@/lib/error-handling';
import BookingService from '@/services/booking-service';
import { NextRequest, NextResponse } from 'next/server';

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
    const bookingData = await req.json();
    const booking = await bookingService.create(bookingData);

    return NextResponse.json(booking);
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}
