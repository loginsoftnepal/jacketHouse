import { type Session } from 'next-auth';
import { prisma } from '../db';
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { TRPCError, initTRPC } from '@trpc/server';
import { getServerAuthSession } from '../auth';
import { ZodError } from 'zod';
import superjson from 'superjson';

/**
 * 1. CONTEXT
 * This section defines the "contexts" that are available in the backend API
 * These allow you to access things when processing a request, like the database, the session, etc.
 */

interface CreateContextOptions {
    session: Session | null;
}

/**
 * This helper generates the "internals" for a tRPC context. if you need to use it, you can 
 * export it from here.
*/
const createInnerTRPCContext = (opts: CreateContextOptions) => {
    return {
        session: opts.session,
        prisma,
    }
};

/**
 * This is the actual context you will use in your router. It will be used to process every request
 * that goes through your tRPC endpoint.
*/

export const createTRPCContext = async (opts: CreateNextContextOptions) => {
    const { req, res } = opts;

    const session = await getServerAuthSession({req, res});
    return createInnerTRPCContext({
        session,
    });
};


/**
 * 2. INITIALIZATION
 * This is where the tRPC API is initialized, connecting the context and transformer. We also parse
 * ZodErrors so that you get typesaftey on the frontend if your procedure fails due to validation
 * errors on the backend. 
*/

const t = initTRPC.context<typeof createTRPCContext>().create({
    transformer: superjson,
    errorFormatter({ shape, error }) {
        return {
            ...shape,
            data: {
                ...shape.data,
                zodError:
                  error.cause instanceof ZodError ? error.cause.flatten() : null,
            },
        };
    },
});


/**
 * 3. ROUTER and PROCEDURE (THE IMPORTANT BIT)
 * These are the pieces you use to build your tRPC API. You should import these a lot in 
 * the "/src/server/api/routers" directory.
*/

export const createTRPCRouter = t.router;

/**
 * Public unauthenticated procedure
 * 
 * This is the base piece you use to build new queries and mutations on your tRPC API. It does not gurantee that 
 * a user querying is authorized, but you can still access user session data if they
 * are logged in.
*/

export const publicProcedure = t.procedure;

/** 
 * Reusable middleware that enforeces users are logged in before running the precedure. 
*/

const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
    if (!ctx.session?.user) {
        throw new TRPCError({ code: "UNAUTHORIZED"});
    }

    return next({
        ctx: {
            //infers the `session` as non-nullable
            session: { ...ctx.session, user: ctx.session.user },
        },
    });
});


/**
 * Protected authenticated procedure
 * If you want a query or mutation to ONLY be accessible to logged in users, use this.
 * It verifies the session is valid and guarantees `ctx.session.user` is  not null.
*/

export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);
