import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

function getClientIp(req: Request) {
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }
  return req.headers.get('x-real-ip') ?? 'unknown';
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const prev = requestLog.get(ip) ?? [];
  const recent = prev.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  requestLog.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX_REQUESTS;
}

function normalizeField(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return NextResponse.json({ success: false, message: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    const payload = await req.json();
    const name = normalizeField(payload?.name);
    const email = normalizeField(payload?.email);
    const message = normalizeField(payload?.message);

    if (!name || name.length > 100) {
      return NextResponse.json({ success: false, message: 'Invalid name.' }, { status: 400 });
    }
    if (!EMAIL_REGEX.test(email) || email.length > 200) {
      return NextResponse.json({ success: false, message: 'Invalid email.' }, { status: 400 });
    }
    if (!message || message.length > 5000) {
      return NextResponse.json({ success: false, message: 'Invalid message.' }, { status: 400 });
    }
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json({ success: false, message: 'Mail service is not configured.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 메일 내용 설정
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'hoon7589@gmail.com',
      subject: `[Portfolio] Mail Received from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('sendMail error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
  }
}
