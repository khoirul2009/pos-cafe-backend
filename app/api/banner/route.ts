import { prisma } from '@/lib/database';
import ErrorHandling from '@/lib/error-handling';
import { HttpException } from '@/lib/http-execption';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') ?? '1') || 1;
    const pageSize = parseInt(searchParams.get('pageSize') ?? '10') || 10;

    const totalItems = await prisma.banner.count();
    const banners = await prisma.banner.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: { created_at: 'desc' }
    });

    return NextResponse.json({
      data: banners,
      pagination: {
        page,
        pageSize,
        totalItems,
        totalPages: Math.ceil(totalItems / pageSize)
      }
    });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const title = formData.get('title') as string;
    const link = formData.get('link') as string;
    const image = formData.get('image') as File;

    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!validTypes.includes(image.type)) {
      return NextResponse.json(
        { message: 'Invalid image type' },
        { status: 400 }
      );
    }

    const imageName = `${uuidv4()}-${image.name}`;
    const uploadPath = path.join(process.cwd(), 'public', 'uploads', imageName);

    const buffer = new Uint8Array(await image.arrayBuffer());
    fs.writeFileSync(uploadPath, buffer);

    const banner = await prisma.banner.create({
      data: {
        image: `/uploads/${imageName}`,
        title,
        link
      }
    });

    return NextResponse.json({ data: banner });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}
