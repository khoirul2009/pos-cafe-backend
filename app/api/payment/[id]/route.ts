import ErrorHandling from '@/lib/error-handling';
import PaymentService from '@/services/payment-service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const service = new PaymentService();
    const data = await service.findBillingByUUID(params.id);
    return NextResponse.json({
      data
    });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}
