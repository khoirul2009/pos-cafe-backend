import { NextResponse } from 'next/server';
import { HttpException } from './http-execption';
import { Prisma } from '@prisma/client';
import z from 'zod';

export default class ErrorHandling {
  static handle(error: Error) {
    if (error instanceof HttpException) {
      return NextResponse.json(
        { message: error.message },
        { status: error.statusCode }
      );
    }

    if (error instanceof z.ZodError) {
      const errors = error.format();
      return NextResponse.json({ errors }, { status: 422 });
    }

    console.error(error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
