import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  company?: string; // honeypot
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message, company } = body;

  // Honeypot: bots fill every field, real users never see/fill this one.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const recipient = process.env.CONTACT_EMAIL_TO || "kalkidan75@gmail.com";
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASSWORD,
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
    // SMTP not configured yet in this environment. Log server-side so nothing
    // is silently lost, and tell the caller plainly rather than faking success.
    console.warn(
      "[contact-form] SMTP is not configured (SMTP_HOST/SMTP_USER/SMTP_PASSWORD env vars missing). " +
        "Submission received but NOT emailed:",
      { name, email, subject, message }
    );
    return NextResponse.json(
      {
        error:
          "The contact form is not fully configured yet (email delivery is pending SMTP setup). Your message was not sent — please email us directly in the meantime.",
      },
      { status: 503 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 587),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    });

    await transporter.sendMail({
      from: `"13 Suns Tours Website" <${SMTP_USER}>`,
      to: recipient,
      replyTo: email,
      subject: subject?.trim() ? `[13 Suns Tours] ${subject}` : `[13 Suns Tours] New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p><p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact-form] Failed to send email:", err);
    return NextResponse.json({ error: "Failed to send your message. Please try again later." }, { status: 502 });
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
