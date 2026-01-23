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

// ✅ ADD THIS HELPER (place it under getTransporter, above POST)
async function verifyRecaptcha(token) {
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    throw new Error("Missing RECAPTCHA_SECRET_KEY env var");
  }

  const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: token,
    }),
  });

  return await verifyRes.json();
}

export async function POST(request) {
  console.log("POST /api/contact hit");

  try {
    const body = await request.json();

    // ✅ ADD THIS BLOCK RIGHT HERE (immediately after request.json())
    const { recaptchaToken, recaptchaAction } = body;

    if (!recaptchaToken) {
      return NextResponse.json({ error: "Missing reCAPTCHA token." }, { status: 400 });
    }

    const recaptchaResult = await verifyRecaptcha(recaptchaToken);

    if (!recaptchaResult?.success) {
      return NextResponse.json({ error: "reCAPTCHA verification failed." }, { status: 400 });
    }

    // Optional but recommended: make sure action matches what you sent from the client
    if (recaptchaResult.action && recaptchaAction && recaptchaResult.action !== recaptchaAction) {
      return NextResponse.json({ error: "reCAPTCHA action mismatch." }, { status: 400 });
    }

    // v3 score check (tune this threshold later)
    const score = typeof recaptchaResult.score === "number" ? recaptchaResult.score : null;
    if (score !== null && score < 0.5) {
      return NextResponse.json({ error: "reCAPTCHA score too low." }, { status: 400 });
    }

    // ✅ NOW continue with your existing fields
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
