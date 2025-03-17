// Protecting routes with next-auth
// https://next-auth.js.org/configuration/nextjs#middleware
// https://nextjs.org/docs/app/building-your-application/routing/middleware

import NextAuth from 'next-auth';
import authConfig from './auth.config';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

const { auth } = NextAuth(authConfig);

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Jika tidak ada token, redirect ke login
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Role-based protection
  const isAdminRoute = req.nextUrl.pathname.startsWith('/admin');
  const isUserRoute =
    req.nextUrl.pathname.startsWith('/dashboard') ||
    req.nextUrl.pathname.startsWith('/profile');

  // Hanya admin yang bisa mengakses /admin
  if (isAdminRoute && token.role !== 'admin') {
    return NextResponse.redirect(new URL('/403', req.url));
  }

  // Semua user yang login bisa mengakses /dashboard & /profile
  if (isUserRoute && !token) {
    return NextResponse.redirect(new URL('/403', req.url));
  }

  return NextResponse.next(); // Lanjutkan jika memenuhi syarat
}

// Konfigurasi middleware hanya untuk halaman tertentu
export const config = {
  matcher: ['/dashboard/:path*', '/booking', '/profile']
};
