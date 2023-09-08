import { prisma } from "@/server/db";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, {params}:{ params: { token: string}}) {
    const { token } = params;
    const user = await prisma.user.findFirst({
       where: {
         AND: [
          {
            emailVerified: null
          },
         {
          verificationToken: {
            some: {
                AND: [
                    {
                     expires: {
                        lte: new Date(Date.now())
                     }
                    },
                    {
                        token,
                    }
                ]
            }
          }
         }
        ]
       }
    })

    if(!user) {
       throw new Error('Invalid token')
    }

    await prisma.user.update({
        where: {
            id: user.id,
        },
        data: {
            emailVerified: new Date(Date.now()),
        }
    })

    redirect("/home");
}