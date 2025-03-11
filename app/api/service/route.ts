import { serviceSchema } from '@/form-validation/service-schema';
import { prisma } from '@/lib/database';
import ErrorHandling from '@/lib/error-handling';
import uploadImage from '@/utils/upload-image';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const pageSize = parseInt(searchParams.get('pageSize') ?? '10');
    const page = parseInt(searchParams.get('page') ?? '1');

    const totalItems = await prisma.service.count();
    const services = await prisma.service.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: {
        created_at: 'desc'
      },
      include: {
        category: true
      }
    });

    return NextResponse.json({
      data: services,
      totalItems,
      page,
      pageSize,
      totalPages: Math.ceil(totalItems / pageSize)
    });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const data = {
      title: formData.get('title'),
      price: formData.get('price'),
      image: formData.get('image'),
      discount: formData.get('discount'),
      description: formData.get('description'),
      category_id: formData.get('category_id'),
      available: formData.get('available')
    };

    // If validation passes, proceed with image upload
    const imageName = await uploadImage(data.image as unknown as File);

    // Further processing...
    const newService = await prisma.service.create({
      data: {
        ...data,
        title: data.title?.toString() ?? '',
        description: data.description?.toString() ?? '',
        image: imageName,
        category_id: parseInt(data.category_id?.toString() ?? '0'),
        price: parseInt(data.price?.toString() ?? '0'),
        discount: parseInt(data.discount?.toString() ?? '0'),
        available: data.available === 'true'
      }
    });

    return NextResponse.json({
      data: newService
    });
  } catch (error: any) {
    // General error handling
    return ErrorHandling.handle(error);
  }
}
