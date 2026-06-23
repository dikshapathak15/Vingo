import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

console.log("EMAIL",process.env.EMAIL);
console.log("PASS",process.env.PASS);

const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 465,
  secure: true, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

export const sendOtpMail = async (to, otp) =>{

  await transporter.sendMail({
    from :  process.env.EMAIL,
    to,
    subject: "Resetyour password",
    html: `<p>Your otp for password reser is <b>${otp}</b>. It expires in 5 minutes.</p>`

  })
}