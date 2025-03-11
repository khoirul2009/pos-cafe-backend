import { NextResponse } from 'next/server';
import { HttpException } from './http-execption';
import z from 'zod';
import { AxiosError } from 'axios';

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

    if (error instanceof AxiosError) {
      console.error(error.response?.data);
      return NextResponse.json(
        { message: error.response?.data.status_message },
        { status: error.response?.status }
      );
    }

    console.error(error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
