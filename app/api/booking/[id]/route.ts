import ErrorHandling from '@/lib/error-handling';
import BookingService from '@/services/booking-service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const service = new BookingService();
    const data = await service.findById(parseInt(params.id));

    return NextResponse.json({
      data: data
    });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}
