/**
 * This is the primary router for your server.
 * All routers added in /api/routers should be manually added here.
*/

import { exampleRouter } from "./routers/example";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
    example: exampleRouter,
})

export type AppRouter = typeof appRouter;