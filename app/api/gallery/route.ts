import ErrorHandling from '@/lib/error-handling';
import GalleryService from '@/services/gallery-service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const galleryService = new GalleryService(); // Buat instance di sini
    const searchParams = new URL(req.url).searchParams;
    const gallery = await galleryService.all(searchParams);

    return NextResponse.json({ data: gallery }, { status: 200 });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const galleryService = new GalleryService(); // Buat instance di sini
    const formData = await req.formData();
    const gallery = await galleryService.create(formData);

    return NextResponse.json({ data: gallery }, { status: 201 });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}
