import { auth } from '@/auth';
import ErrorHandling from '@/lib/error-handling';
import { HttpException } from '@/lib/http-execption';
import UserService from '@/services/user-service';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const session = await auth();

    if (!session || !session.user || !session.user.email) {
      throw new HttpException(401, 'Unauthorized');
    }
    const { password, new_password } = await req.json();
    const service = new UserService();
    await service.passwordReset(session.user.email, password, new_password);

    return NextResponse.json({
      data: 'OK'
    });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}
