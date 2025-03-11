import ErrorHandling from '@/lib/error-handling';
import PaymentService from '@/services/payment-service';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const service = new PaymentService();
    const data = await service.createBilling(body);
    return NextResponse.json({
      data
    });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}
