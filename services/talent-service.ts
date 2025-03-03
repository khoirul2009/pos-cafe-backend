import { prisma } from '@/lib/database';
import { HttpException } from '@/lib/http-execption';
import deleteImage from '@/utils/delete-image';
import uploadImage from '@/utils/upload-image';

export default class TalentService {
  async all(searchParams: URLSearchParams) {
    const page = searchParams.get('page') || '1';
    const per_page = searchParams.get('per_page') || '10';

    const data = await prisma.talent.findMany({
      where: {
        name: {
          contains: searchParams.get('name') || ''
        }
      },
      take: parseInt(per_page),
      skip: (parseInt(page) - 1) * parseInt(per_page),

      orderBy: {
        id: 'desc'
      }
    });

    return {
      data,
      pagination: {
        page: parseInt(page),
        pageSize: parseInt(per_page),
        totalItems: await prisma.talent.count(),
        totalPages: Math.ceil(
          (await prisma.talent.count()) / parseInt(per_page)
        )
      }
    };
  }

  async findById(id: number) {
    const data = await prisma.talent.findFirst({
      where: {
        id
      }
    });

    return data;
  }

  async create(formData: FormData) {
    let data = {
      name: formData.get('name')?.toString(),
      image: formData.get('image'),
      position: formData.get('position')?.toString(),
      description: formData.get('description')?.toString()
    };

    let imageName = null;

    if (data.image) {
      imageName = await uploadImage(data.image as unknown as File);
    }

    const newTalent = await prisma.talent.create({
      data: {
        ...data,
        name: data.name?.toString() ?? '',
        description: data.description?.toString() ?? '',
        position: data.position?.toString() ?? '',
        image: imageName !== null ? imageName : ''
      }
    });

    return newTalent;
  }

  async update(id: number, formData: FormData) {
    let data = {
      name: formData.get('name')?.toString(),
      image: formData.get('image'),
      position: formData.get('position')?.toString(),
      description: formData.get('description')?.toString()
    };

    const oldTalent = await prisma.talent.findFirst({
      where: {
        id
      }
    });

    if (!oldTalent) {
      throw new HttpException(404, 'Talent not found');
    }

    let imageName = null;

    if (data.image) {
      imageName = await uploadImage(data.image as unknown as File);
      deleteImage(oldTalent.image);
    }

    const newTalent = await prisma.talent.update({
      where: {
        id
      },
      data: {
        ...data,
        name: data.name?.toString() ?? '',
        description: data.description?.toString() ?? '',
        position: data.position?.toString() ?? '',
        image: imageName !== null ? imageName : ''
      }
    });

    return newTalent;
  }

  async delete(id: number) {
    const oldTalent = await prisma.talent.findFirst({
      where: {
        id
      }
    });

    if (!oldTalent) {
      throw new HttpException(404, 'Talent not found');
    }

    deleteImage(oldTalent.image);

    await prisma.talent.delete({
      where: {
        id
      }
    });

    return 'Talent deleted';
  }
}
