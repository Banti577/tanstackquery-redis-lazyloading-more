import { NextRequest, NextResponse } from "next/server";
import Contact from '../Model/message.model';
import { handler } from "@/utils/handleConnection";
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    await handler(); 

    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }


    await Contact.insertOne({
      firstName: name,
      email: email,
      message: message,
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.FROM_EMAIL,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return NextResponse.json(
      { message: `Message sent successfully, ${name}` },
      { status: 201 }
    );
  } catch (err) {
console.log(err)
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}