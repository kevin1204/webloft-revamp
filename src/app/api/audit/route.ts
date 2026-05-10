import { NextRequest, NextResponse } from 'next/server';

/** Escape user-supplied strings before embedding them in HTML email bodies. */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, business, website, phone, _honeypot } = body;

    // Honeypot check
    if (_honeypot && _honeypot.trim() !== '') {
      return NextResponse.json({ error: 'Invalid submission' }, { status: 400 });
    }

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set in environment variables');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us directly at info@webloftstudio.com' },
        { status: 500 }
      );
    }

    // Escape all user input before embedding in HTML
    const safeName     = escapeHtml(name);
    const safeEmail    = escapeHtml(email);
    const safeBusiness = escapeHtml(business || '');
    const safeWebsite  = escapeHtml(website || '');
    const safePhone    = escapeHtml(phone || '');

    // Send notification to business
    const notificationResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'info@webloftstudio.com',
        to: ['kevin.ortega2011@gmail.com', 'info@webloftstudio.com'],
        reply_to: email,
        subject: `Free Website Audit Request from ${safeName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #009E69;">New Free Website Audit Request</h2>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${safeName}</p>
              <p><strong>Email:</strong> ${safeEmail}</p>
              <p><strong>Business:</strong> ${safeBusiness || 'Not provided'}</p>
              <p><strong>Website:</strong> ${safeWebsite || 'Not provided'}</p>
              <p><strong>Phone:</strong> ${safePhone || 'Not provided'}</p>
            </div>
            <p style="color: #009E69; font-weight: bold;">Reply to this email to respond to ${safeName}.</p>
          </div>
        `,
      }),
    });

    if (!notificationResponse.ok) {
      const errorData = await notificationResponse.json().catch(() => ({}));
      console.error('Audit notification email error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send request. Please contact us directly at info@webloftstudio.com' },
        { status: 500 }
      );
    }

    // Send confirmation to the user (best-effort — failure doesn't affect response)
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'info@webloftstudio.com',
        to: email,
        subject: 'Your Free Website Audit from Webloft Studio',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #009E69;">Your Website Audit Request is Confirmed!</h2>
            <p>Hi ${safeName},</p>
            <p>Thanks for requesting your free website audit! Our team will review${safeWebsite ? ` <strong>${safeWebsite}</strong>` : ' your website'} and send you a comprehensive audit report within 24–48 hours.</p>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">What happens next?</h3>
              <ul>
                <li>We'll analyze your website's performance, SEO, and UX</li>
                <li>You'll receive a detailed report within 24–48 hours</li>
                <li>We'll include a prioritized action plan to improve your site</li>
              </ul>
            </div>
            <p>If you have any questions, feel free to reply to this email.</p>
            <p>Best regards,<br><strong>The Webloft Studio Team</strong><br>
            <a href="mailto:info@webloftstudio.com" style="color: #009E69;">info@webloftstudio.com</a></p>
          </div>
        `,
      }),
    }).catch(() => {});

    return NextResponse.json(
      { message: 'Your audit request has been received! Check your email for confirmation.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Audit form unexpected error:', error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: 'Failed to process request. Please try again or contact us directly at info@webloftstudio.com' },
      { status: 500 }
    );
  }
}
