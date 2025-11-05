import { adminNewOrderTemplate } from "@/templates/adminNewOrderTemplate";
import { clientEmailTemplate } from "@/templates/clientEmailTemplate";
import nodemailer from "nodemailer";

const transparent = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_USER,
    pass: process.env.NEXT_PUBLIC_SMTP_PASS,
  },
});


export const sendThankForOrder = async (data: {
  name: string;
  email: string;
  messanger: string;
  message: string;
}) => {
    await transparent.sendMail({
      to: data?.email,
      from: process.env.NEXT_PUBLIC_SMTP_USER,
      subject: "Thanks for the order.",
      html: clientEmailTemplate(data),
    });
};

export const sendAdminNotification = async (data: {
  name: string;
  email: string;
  messanger: string;
  message: string;
}) => {
   try {
     await transparent.sendMail({
       from: `"Сайт Portfolio" <${process.env.ADMIN_EMAIL}>`,
       to: process.env.NEXT_PUBLIC_SMTP_USER,
       subject: "🛒 Нове замовлення на сайті",
       html: adminNewOrderTemplate(data),
     });
   } catch (error) {
    console.log("SEND_ADMIN_NOTIFICATION_ERROR", error);
    
   }
};