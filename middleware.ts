// Protecting routes with next-auth
// https://next-auth.js.org/configuration/nextjs#middleware
// https://nextjs.org/docs/app/building-your-application/routing/middleware

import NextAuth from 'next-auth';
import authConfig from './auth.config';
import { NextResponse } from 'next/server';

const { auth } = NextAuth(authConfig);

export default auth(function middleware(req) {
  const isAuthenticated = !!req.auth;

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  const role = req.auth?.user.role;

  // Role-based protection
  const isAdminRoute = req.nextUrl.pathname.startsWith('/dashboard');
  const protectedUserRoutes = ['/booking', '/checkout', '/payment', '/profile'];
  const isUserRoute = protectedUserRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  // Hanya admin yang bisa mengakses /dashboard
  if (isAdminRoute && role !== 'admin') {
    return NextResponse.redirect(new URL('/403', req.url));
  }

  // Lanjutkan jika memenuhi syarat
  return NextResponse.next();
});

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/booking/:path*',
    '/profile',
    '/payment/:path*',
    '/checkout/:path*'
  ]
};
