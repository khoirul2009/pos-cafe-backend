import { prisma } from '@/lib/database';
import { HttpException } from '@/lib/http-execption';
import deleteImage from '@/utils/delete-image';
import uploadImage from '@/utils/upload-image';

export default class GalleryService {
  async all(searchParams: URLSearchParams) {
    const page = parseInt(searchParams.get('page') ?? '1') || 1;
    const pageSize = parseInt(searchParams.get('pageSize') ?? '10') || 10;

    const gallery = await prisma.gallery.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: { created_at: 'desc' }
    });

    return gallery;
  }

  async create(formData: FormData) {
    const imageFile = formData.get('image') as File;
    let gallery = {
      title: formData.get('title') as string,
      image: ''
    };

    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!validTypes.includes(imageFile.type)) {
      throw new Error('Invalid image type');
    }

    const image = await uploadImage(imageFile);

    if (!image && image != null) {
      throw new HttpException(500, 'Failed to upload image');
    }

    gallery.image = image;

    const newGallery = await prisma.gallery.create({
      data: gallery
    });

    return newGallery;
  }

  async update(id: number, formData: FormData) {
    const existGallery = await prisma.gallery.findUnique({ where: { id } });

    if (!existGallery) {
      throw new HttpException(404, 'Gallery not found');
    }

    const imageFile = formData.get('image') as File;

    let gallery = {
      title: formData.get('title') as string,
      image: ''
    };

    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (gallery.image && !validTypes.includes(imageFile.type)) {
      throw new HttpException(400, 'Invalid image type');
    }

    if (gallery.image) {
      const image = await uploadImage(imageFile);

      if (!image && image != null) {
        throw new HttpException(500, 'Failed to upload image');
      }

      gallery.image = image;
    }

    const updatedGallery = await prisma.gallery.update({
      where: { id },
      data: gallery
    });

    return updatedGallery;
  }

  async delete(id: number) {
    const existGallery = await prisma.gallery.findUnique({ where: { id } });

    if (!existGallery) {
      throw new HttpException(404, 'Gallery not found');
    }

    if (existGallery.image) {
      deleteImage(existGallery.image);
    }

    await prisma.gallery.delete({ where: { id } });

    return existGallery;
  }

  async findById(id: number) {
    const gallery = await prisma.gallery.findUnique({ where: { id } });

    if (!gallery) {
      throw new HttpException(404, 'Gallery not found');
    }

    return gallery;
  }
}
