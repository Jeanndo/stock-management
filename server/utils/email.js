import nodemailer from 'nodemailer'

const sendEmail = async options=>{
 const transporter = nodemailer.createTransport({
   service:process.env.EMAIL_HOST,
   port:process.env.EMAIL_PORT,
//    secure: false,
   auth:{
     user:process.env.EMAIL_USERNAME,
     pass:process.env.EMAIL_PASSWORD
   }
 })

 const emailOptions = {
    from:'stockman <hello@stockman.io>',
    to:options.email,
    subject:options.subject,
    text:options.message
 }
await transporter.sendMail(emailOptions)

}

export default sendEmail 