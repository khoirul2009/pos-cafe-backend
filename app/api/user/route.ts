import ErrorHandling from '@/lib/error-handling';
import UserService from '@/services/user-service';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();
    const service = new UserService();
    const action = await service.create({ name, email, password });

    return NextResponse.json({
      message: 'User created'
    });
  } catch (error: any) {
    return ErrorHandling.handle(error);
  }
}
