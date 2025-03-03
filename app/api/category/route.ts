import { prisma } from '@/lib/database';
import ErrorHandling from '@/lib/error-handling';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const data = await prisma.category.findMany();

    return NextResponse.json({
      data
    });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title } = await req.json();

    const storeData = await prisma.category.create({
      data: {
        title
      }
    });

    return NextResponse.json({
      data: storeData
    });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}
