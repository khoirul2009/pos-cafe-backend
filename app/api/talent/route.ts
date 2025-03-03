import ErrorHandling from '@/lib/error-handling';
import TalentService from '@/services/talent-service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const taletService = new TalentService();
    const searchParams = new URL(req.url).searchParams;
    const talent = await taletService.all(searchParams);

    return NextResponse.json(talent, { status: 200 });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const talentService = new TalentService();
    const formData = await req.formData();
    const talent = await talentService.create(formData);

    return NextResponse.json({ data: talent }, { status: 201 });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}
