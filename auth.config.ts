import { NextAuthConfig } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import UserService from './services/user-service';

const authConfig = {
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID ?? '',
    //   clientSecret: process.env.GITHUB_SECRET ?? ''
    // }),
    CredentialProvider({
      credentials: {
        email: {
          type: 'email'
        },
        password: {
          type: 'password'
        }
      },
      async authorize(credentials, req) {
        try {
          if (!credentials?.email || !credentials?.password) return null;

          const service = new UserService();
          const user = await service.authorize(
            credentials.email as string,
            credentials.password as string
          );

          return {
            id: user.id.toString(),
            email: user.email,
            image: '',
            name: user.name
          };
        } catch (error) {
          console.log(error);
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/sigin' //sigin page
  }
} satisfies NextAuthConfig;

export default authConfig;
