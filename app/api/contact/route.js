// app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.ZOHO_SMTP_HOST,
    port: Number(process.env.ZOHO_SMTP_PORT),
    secure: Number(process.env.ZOHO_SMTP_PORT) === 465, // true for 465, false for 587
    auth: {
      user: process.env.ZOHO_SMTP_USER,
      pass: process.env.ZOHO_SMTP_PASS,
    },
  });
}

export async function POST(request) {
  console.log("POST /api/contact hit");

  try {
    const body = await request.json();
    const { name, email, phone, details } = body;

    console.log("Payload:", { name, email, phone, details });

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const transporter = getTransporter();

    const toEmail = process.env.ZOHO_TO_EMAIL || process.env.ZOHO_SMTP_USER;

    await transporter.sendMail({
      from: `"Killer Performance Digital" <${process.env.ZOHO_SMTP_USER}>`,
      to: toEmail,
      replyTo: email, // so you can just hit Reply
      subject: "New enquiry from your website",
      text: `
New lead from your contact form:

Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}

Details:
${details || "-"}
      `.trim(),
    });

    console.log("New lead emailed via Zoho:", { name, email });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
