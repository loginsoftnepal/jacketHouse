import { sendEmail } from "@/lib/mailer";
import { unixTime } from "@/lib/utils";
import { prisma } from "@/server/db";
import { message } from "antd";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
       
      const data = await req.json();
      const { email } = data;

      let user;
      if(email) {
        user = await prisma.user.findUnique({
             where: {
              email: email
             }
        })
      } else {
         return NextResponse.json({
          error: "You must provide an email."
         })
      }

      if(user) {
         const verificationToken = await prisma.verificationToken.findFirst({
          where: {
            userId: user.id,
           }
         })

         if(verificationToken && (unixTime(new Date(Date.now())) < unixTime(new Date(verificationToken.expires)))) {
            const deletedVerificationToken = await prisma.verificationToken.delete({
              where: {
                id: verificationToken.id,
              }
            })

            if(!deletedVerificationToken) {
               throw new Error("Failed to delete verification token.")
            }
         }

         const userId = user.id;
         const token = `${randomUUID()}${randomUUID()}`.replace(/-/g, '')

         const newVerificationToken = await prisma.verificationToken.create({
          data: {
            userId: user.id,
            token: token,
            expires: new Date(Date.now() * 1000 * 60 * 30)
          }
         })

         const messageData = {
          from: process.env.EMAIL_USERNAME,
          to: email,
          subject: 'Please activate your account.',
          html: `<h5>Hello ${name}</h5>
                 <h6>Please activate your account by clicking this link: ${process.env.SERVER_URL}/api/activate/${newVerificationToken.token}</h6>
          `
         }

         await sendEmail(messageData)
         return NextResponse.json({
          user: {
            name: user.name,
            email: user.email
          }
         })
      }
    } catch (error: any) {
       return new NextResponse(
        JSON.stringify({
          status: 'error',
          message: error.message,
        }),
        { status: 500 },
       )
    }
}