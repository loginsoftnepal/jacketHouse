import { sendEmail } from "@/lib/mailer";
import { unixTime } from "@/lib/utils";
import { prisma } from "@/server/db";
import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
    try {

    const data = await req.json();
    const {email} = data;

    let user;
    if(email) {
        user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
    }else {
       return NextResponse.json({
          error: "You must provide an email."
       })
    }

    if(user) {
        const forgetPassword = await prisma.forgetPasswordToken.findFirst({
            where: {
                userId: user.id,
            }
        })

        if(forgetPassword && (unixTime(new Date(Date.now())) < unixTime(new Date(forgetPassword.expires)))) {
           const deletedForgetPassword = await prisma.forgetPasswordToken.delete({
                where: {
                    id: forgetPassword.id,
                }
            })

            if(!deletedForgetPassword) {
                throw new Error("Failed to delete forget password.")
            }
        }

        const userId = user.id;
        const token = `${randomUUID()}${randomUUID()}`.replace(/-/g, '')

        const newForgetPasswordToken = await prisma.forgetPasswordToken.create({
            data: {
                userId: user.id,
                token: token,
                expires: new Date(Date.now() * 1000 * 60 * 30) 
            }
        })
        
        const messageData = {
            from: process.env.EMAIL_USERNAME,
            to: email,
            subject: 'Reset your password.',
            html: `Hey there!, your password reset token is: ${process.env.SERVER_URL}/reset-password?token=${newForgetPasswordToken.token}&userId=${userId}`
        }

        console.log(newForgetPasswordToken);
        
        await sendEmail(messageData);
        return NextResponse.json({
           status: 'success',
           message: 'Reset email sent successfully.'
        })
    }
 } catch(error: any) {
     return NextResponse.json(error.message)
 }
}