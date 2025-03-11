import ErrorHandling from '@/lib/error-handling';
import BookingService from '@/services/booking-service';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { service_id } = await req.json();
    const service = new BookingService();
    const data = await service.notAvailableDate(service_id);
    return NextResponse.json({
      data
    });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}
