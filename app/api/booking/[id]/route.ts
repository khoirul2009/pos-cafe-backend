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

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { status } = await req.json();
    const service = new BookingService();
    const data = await service.update(
      {
        status
      },
      parseInt(params.id)
    );
    return NextResponse.json({
      data: 'Ok'
    });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}
