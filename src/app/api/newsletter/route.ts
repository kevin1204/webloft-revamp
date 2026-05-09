import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const apiKey = process.env.MAILERLITE_API_KEY;
    if (!apiKey) {
      console.error('MAILERLITE_API_KEY is not set');
      return NextResponse.json({ error: 'Newsletter service is not configured.' }, { status: 500 });
    }

    const body: Record<string, unknown> = { email };
    if (process.env.MAILERLITE_GROUP_ID) {
      body.groups = [process.env.MAILERLITE_GROUP_ID];
    }

    const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    });

    // MailerLite returns 200 (update) or 201 (create) on success
    // It also returns 409 for unsubscribed users trying to re-subscribe — treat as success
    if (res.ok || res.status === 409) {
      return NextResponse.json({ success: true });
    }

    const data = await res.json().catch(() => ({}));
    console.error('MailerLite error:', res.status, data);
    return NextResponse.json({ error: 'Subscription failed. Please try again.' }, { status: 500 });
  } catch (err) {
    console.error('Newsletter route error:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
