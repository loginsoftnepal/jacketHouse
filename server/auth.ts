import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { getServerSession, type NextAuthOptions } from 'next-auth';
import { prisma } from './db';
import { env } from '../env.mjs';
import CredentialsProvider from 'next-auth/providers/credentials';
import { GetServerSidePropsContext } from 'next';

export const authOptions: NextAuthOptions = {
    pages: {
       signIn: '/auth/signin',
       signOut: '/auth/signout',
       error: '/auth/error',
       verifyRequest: '/auth/verify-request',
       newUser: '/auth/new-user',
    },
   callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
  },
    session: {
        strategy: 'jwt',
    },
    adapter: PrismaAdapter(prisma),
    providers: [
       CredentialsProvider({
         name: "Credentials",

         credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" },
         },

      async authorize(credentials, req) {
      // You need to provide your own logic here that takes the credentials
      // submitted and returns either a object representing a user or value
      // that is false/null if the credentials are invalid.
      // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
      // You can also use the `req` object to obtain additional parameters
      // (i.e., the request IP address)
      if(!credentials?.username || !credentials?.password) {
        return null;
      }

      const res = await fetch("/your/endpoint", {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" }
      })
      const user = await res.json()

      // If no error and we have user data, return it
      if (res.ok && user) {
        return user
      }
      // Return null if user data could not be retrieved
      return null
    }
       }),
    ],
};


/**
 * Wrapper for getServerSession so that you don't need to
 * import the authOptions in every file. 
*/
export const getServerAuthSession = (ctx: {
    req: GetServerSidePropsContext["req"];
    res: GetServerSidePropsContext["res"];
}) => {
    return getServerSession(ctx.req, ctx.res, authOptions);
}