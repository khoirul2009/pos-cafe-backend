import { serviceUpdateSchema } from '@/form-validation/service-schema';
import { prisma } from '@/lib/database';
import ErrorHandling from '@/lib/error-handling';
import uploadImage from '@/utils/upload-image';
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import { HttpException } from '@/lib/http-execption';
import deleteImage from '@/utils/delete-image';

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
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

    // Zod Validation
    let imageName = null;

    // If validation passes, proceed with image upload
    if (data.image) {
      imageName = await uploadImage(data.image as unknown as File);
    }

    // Further processing...
    const newService = await prisma.service.update({
      where: {
        id: parseInt(params.id)
      },
      data: {
        ...data,
        title: data.title?.toString() ?? undefined,
        description: data.description?.toString() ?? undefined,

        image: imageName !== null ? imageName : undefined,
        category_id: parseInt(data.category_id?.toString() ?? '0'),
        price: parseInt(data.price?.toString() ?? '0'),
        discount: parseInt(data.discount?.toString() ?? '0'),
        available: data.available === 'true'
      }
    });

    return NextResponse.json({
      data: 'Service updated successfully'
    });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const service = await prisma.service.findFirst({
      where: {
        id: parseInt(params.id)
      },
      include: {
        category: true
      }
    });

    if (!service) {
      throw new HttpException(404, 'query not found');
    }

    return NextResponse.json({
      data: service
    });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const service = await prisma.service.findFirst({
      where: { id: parseInt(params.id) }
    });

    if (service?.image) {
      deleteImage(service.image);
    }

    await prisma.service.delete({
      where: {
        id: parseInt(params.id)
      }
    });

    return NextResponse.json({
      message: 'Service deleted successfully'
    });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}
