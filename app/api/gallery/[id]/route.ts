import ErrorHandling from '@/lib/error-handling';
import GalleryService from '@/services/gallery-service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const service = new GalleryService();
    const gallery = await service.findById(parseInt(params.id));

    return NextResponse.json({ data: gallery });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const service = new GalleryService();
    const formData = await req.formData();
    const gallery = await service.update(
      parseInt(params.id as string),
      formData
    );

    return NextResponse.json({ data: gallery });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const service = new GalleryService();
    await service.delete(parseInt(params.id));

    return NextResponse.json({ message: 'Gallery deleted' });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}
