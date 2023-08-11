import { prisma } from "@/lib/prisma";
import { type NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import  CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    callbacks: {
        session: ({ session, user }) => ({
            ...session,
            user: {
                ...session.user,
                id: user.id,
            },
        }),
    },
    session: {
        strategy: "jwt",
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
             name: 'Credentails',
             credentials: {
                username: { label: 'Username', type: 'text', placeholder: 'rational cayote' },
                password: { label: "Password", type: 'password'}
             },
             async authorize(credentials, req) {
                const user = { id: "1", name: "Admin", email: "admin@admin.com" };
                return user;
             }
        })
    ]
}