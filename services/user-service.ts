import { prisma } from '@/lib/database';
import { HttpException } from '@/lib/http-execption';
import { User } from '@/prisma/generated/client';
import bcrypt from 'bcryptjs';

type UserUpdateRequest = {
  name: string;
  phone: string;
  role: string;
};
type UserStoreRequest = {
  name: string;
  password: string;
  email: string;
};

export default class UserService {
  async create(user: UserStoreRequest) {
    user.password = await bcrypt.hash(user.password, 10);

    const data = prisma.user.create({
      data: user
    });

    return data;
  }

  async update(user: UserUpdateRequest, id: number) {
    const data = prisma.user.update({
      where: { id },
      data: {
        name: user.name,
        phone: user.phone,
        role: user.role
      }
    });
  }

  async authorize(email: string, password: string) {
    const data = await prisma.user.findUnique({ where: { email } });

    if (!data) {
      throw new HttpException(400, 'Invalid credentials');
    }

    const comparePassword = await bcrypt.compare(password, data.password);

    if (!comparePassword) {
      throw new HttpException(400, 'Invalid credentials');
    }

    return data;
  }
}
