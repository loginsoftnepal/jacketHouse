import { createEnv } from '@t3-oss/env-nextjs';
import { z } from "zod";

export const env = createEnv({

    server: {
        DATABASE_URL: z.string().url(),
        PORT: z.string(),
        NODE_ENV: z.enum(["development", "test", "production"]),
        NEXTAUTH_SECRET: 
            process.env.NODE_ENV === "production"
                ? z.string().min(1)
                : z.string().min(1).optional(),
        NEXTAUTH_URL: z.preprocess(
            (str) => process.env.VERCEL_URL ?? str,
            process.env.VERCEL ? z.string().min(1) : z.string().url()
        ),
        SERVER_URL:
            process.env.NODE_ENV === "production"
              ? z.string().min(1)
              : z.string().min(1).optional()
    },

    client: {
        // NEXT_PUBLIC_CLIENTVAR:
        NEXT_PUBLIC_VERCEL_URL: process.env.VERCEL_URL_URL, 
    },
     runtimeEnv: {
        DATABASE_URL: process.env.DATABASE_URL,
        NODE_ENV: process.env.NODE_ENV,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        SERVER_URL: process.env.SERVER_URL,
        PORT: process.env.PORT,
        NEXT_PUBLIC_VERCEL_URL: process.env.VERCEL_URL,
     },

     skipValidation: !!process.env.SKIP_ENV_VALIDATION,

})