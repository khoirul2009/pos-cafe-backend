import ErrorHandling from '@/lib/error-handling';
import TalentService from '@/services/talent-service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const service = new TalentService();
    const talent = await service.findById(parseInt(params.id));
    return NextResponse.json({ data: talent });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const service = new TalentService();
    const formData = await req.formData();
    const talent = await service.update(
      parseInt(params.id as string),
      formData
    );
    return NextResponse.json({ data: talent });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const service = new TalentService();
    await service.delete(parseInt(params.id));
    return NextResponse.json({ message: 'Talent deleted' });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}
