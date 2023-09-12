import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { getServerSession, type NextAuthOptions } from 'next-auth'
import { prisma } from './db'
import { env } from '../env.mjs'
import { compare } from 'bcryptjs'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { GetServerSidePropsContext } from 'next'
import { redirect } from 'next/navigation'

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
      console.log(token)
      return {
        ...session,
        user: {
          ...token,
        },
      }
    },
    jwt: ({ token, user, trigger, session }) => {
      if (trigger === 'update') {
        return { ...token, ...session.user }
      }
      if (user) {
        console.log('we are here user', user)
        const u = user as unknown as any
        return {
          ...token,
          ...user,
          randomKey: u.randomKey,
        }
      }
      return token
    },
  },
  session: {
    strategy: 'jwt',
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'example@gmail.com',
        },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
          include: {
            accounts: true, //include the associated accounts
          },
        })

        if (
          !user ||
          !(await compare(credentials.password, user.password as string))
        ) {
          return null
        }

        // if(!user.emailVerified) {
        //    console.log(user);
        //    return redirect('/auth/new-user')
        // }

        return {
          id: user.id.toString(),
          email: user.email,
          name: user.name,
          image: user.image,
          emailVerified: user.emailVerified,
          isGoogleAuth: user.accounts?.length > 0 ? true : false,
          randomKey: 'Hey cool',
        }
      },
    }),
  ],
}

/**
 * Wrapper for getServerSession so that you don't need to
 * import the authOptions in every file.
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext['req']
  res: GetServerSidePropsContext['res']
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions)
}
