import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: string; // Tambahkan role
    } & DefaultSession['user'];
  }

  interface User extends DefaultUser {
    role: string; // Tambahkan role
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: string; // Tambahkan role ke JWT
  }
}
