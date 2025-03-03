import { NextRequest, NextResponse } from 'next/server';

import ErrorHandling from '@/lib/error-handling';
import { HttpException } from '@/lib/http-execption';
import { prisma } from '@/lib/database';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const banner = await prisma.banner.findUnique({
      where: {
        id: parseInt(id)
      }
    });

    if (!banner) {
      throw new HttpException(404, 'Banner not found');
    }

    return NextResponse.json({ data: banner });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const formData = await req.formData();
    const { id } = params;
    const title = formData.get('title') as string;
    const link = formData.get('link') as string;
    const image = formData.get('image') as File;

    if (!id || !title || !link) {
      throw new HttpException(422, 'Banner not found');
    }

    const existingBanner = await prisma.banner.findUnique({
      where: { id: parseInt(id) }
    });

    if (existingBanner === null) {
      throw new HttpException(404, 'Banner not found');
    }

    let imagePath = existingBanner.image;

    // Jika ada file gambar baru, hapus gambar lama dan simpan yang baru
    if (image) {
      const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
      if (!validTypes.includes(image.type)) {
        throw new HttpException(422, 'Invalid image type');
      }
      const imageName = `${uuidv4()}-${image.name}`;
      const uploadPath = path.join(
        process.cwd(),
        'public',
        'uploads',
        imageName
      );

      const buffer = new Uint8Array(await image.arrayBuffer());
      fs.writeFileSync(uploadPath, buffer);

      // Hapus gambar lama
      const oldImagePath = path.join(process.cwd(), 'public', imagePath);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }

      // Update imagePath ke gambar baru
      imagePath = `/uploads/${imageName}`;
    }

    const banner = await prisma.banner.update({
      where: {
        id: parseInt(id)
      },
      data: {
        image: imagePath,
        title,
        link
      }
    });

    return NextResponse.json({ data: banner });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    if (!id) {
      throw new HttpException(422, 'ID is required');
    }

    const banner = await prisma.banner.findUnique({
      where: { id: parseInt(id) }
    });

    if (banner === null) {
      throw new HttpException(404, 'Banner not found');
    }

    const imagePath = path.join(process.cwd(), 'public', banner.image);
    if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);

    await prisma.banner.delete({
      where: { id: parseInt(id) }
    });

    return NextResponse.json({ data: banner });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}
