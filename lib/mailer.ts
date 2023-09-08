import nodemailer from 'nodemailer';

interface ISendEmail {
    from?: string,
    to: string,
    subject: string,
    html: string,
}

const transporter = nodemailer.createTransport({
    host: 'mail.logindesigns.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
})

export async function sendEmail({from, to, subject, html}:ISendEmail) {
    try {
       const info = await transporter.sendMail({
         from: from,
         to: to,
         subject: subject,
         html: html
       })

       console.log("Message sent: %s", info.messageId)
    }catch(error) {
        console.log(error)
    }
}