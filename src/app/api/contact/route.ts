import { NextRequest, NextResponse } from 'next/server';

// Cloudflare Turnstile Secret Key
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;

/** Escape user-supplied strings before embedding them in HTML email bodies. */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function verifyTurnstileToken(token: string, ip?: string): Promise<boolean> {
  if (!TURNSTILE_SECRET_KEY) {
    console.error('TURNSTILE_SECRET_KEY is not configured');
    return false;
  }

  try {
    const formData = new FormData();
    formData.append('secret', TURNSTILE_SECRET_KEY);
    formData.append('response', token);
    if (ip) {
      formData.append('remoteip', ip);
    }

    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    return result.success === true;
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      company,
      projectType,
      budget,
      message,
      website, // Honeypot field
      turnstileToken,
      timeSpent,
    } = body;

    // ===== SPAM PROTECTION LAYER 1: Honeypot Check =====
    if (website && website.trim() !== '') {
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      );
    }

    // ===== SPAM PROTECTION LAYER 2: Time Validation =====
    if (timeSpent !== undefined && timeSpent < 3) {
      return NextResponse.json(
        { error: 'Please take your time filling out the form' },
        { status: 400 }
      );
    }

    // ===== SPAM PROTECTION LAYER 3: Turnstile Verification =====
    if (!TURNSTILE_SECRET_KEY) {
      console.error('TURNSTILE_SECRET_KEY is not set in environment variables');
      return NextResponse.json(
        { error: 'Security configuration error. Please contact us directly at info@webloftstudio.com' },
        { status: 500 }
      );
    }

    if (!turnstileToken) {
      return NextResponse.json(
        { error: 'Security verification failed. Please refresh the page and try again.' },
        { status: 400 }
      );
    }

    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown';

    const isTurnstileValid = await verifyTurnstileToken(turnstileToken, ip);

    if (!isTurnstileValid) {
      return NextResponse.json(
        { error: 'Security verification failed. Please refresh the page and try again.' },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set in environment variables');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us directly at info@webloftstudio.com' },
        { status: 500 }
      );
    }

    // Escape all user input before embedding in HTML
    const safeName        = escapeHtml(name);
    const safeEmail       = escapeHtml(email);
    const safeCompany     = escapeHtml(company || '');
    const safeProjectType = escapeHtml(projectType);
    const safeBudget      = escapeHtml(budget || '');
    const safeMessage     = escapeHtml(message);

    // Email 1: Notification to business owner
    const notificationEmail = {
      from: 'info@webloftstudio.com',
      to: ['kevin.ortega2011@gmail.com', 'info@webloftstudio.com'],
      reply_to: email,
      subject: `New Contact Form Submission from ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #009E69;">New Contact Form Submission</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Company:</strong> ${safeCompany || 'Not provided'}</p>
            <p><strong>Project Type:</strong> ${safeProjectType}</p>
            <p><strong>Budget:</strong> ${safeBudget || 'Not specified'}</p>
          </div>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${safeMessage}</p>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px;">
              This message was sent from the Webloft Studio contact form.
            </p>
            <p style="color: #009E69; font-size: 16px; font-weight: bold;">
              💡 Simply reply to this email to respond to ${safeName} (${safeEmail})
            </p>
            <p style="color: #666; font-size: 14px;">
              Your reply will be sent from info@webloftstudio.com to ${safeEmail}
            </p>
          </div>
        </div>
      `,
    };

    // Email 2: Confirmation to the user
    const confirmationEmail = {
      from: 'info@webloftstudio.com',
      to: email,
      subject: `Thank you for contacting Webloft Studio!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #009E69;">Thank You for Contacting Webloft Studio!</h2>

          <p>Hi ${safeName},</p>

          <p>Thank you for reaching out to us! We've received your message and will get back to you within 24 hours.</p>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Message Summary</h3>
            <p><strong>Project Type:</strong> ${safeProjectType}</p>
            <p><strong>Budget:</strong> ${safeBudget || 'Not specified'}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: white; padding: 10px; border-radius: 4px;">${safeMessage}</p>
          </div>

          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Check out our <a href="https://webloftstudio.com/projects" style="color: #009E69;">recent projects</a></li>
            <li>Learn more <a href="https://webloftstudio.com/about" style="color: #009E69;">about our team</a></li>
            <li>Follow us on social media for updates</li>
          </ul>

          <p>We look forward to working with you!</p>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px;">
              Best regards,<br>
              <strong>The Webloft Studio Team</strong><br>
              <a href="mailto:info@webloftstudio.com" style="color: #009E69;">info@webloftstudio.com</a>
            </p>
          </div>
        </div>
      `,
    };

    // Send notification email (required — failure returns error to the user)
    const notificationResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(notificationEmail),
    });

    if (!notificationResponse.ok) {
      const errorData = await notificationResponse.json().catch(() => ({}));
      console.error('Notification email error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send your message. Please try again or contact us directly at info@webloftstudio.com' },
        { status: 500 }
      );
    }

    // Send confirmation email (best-effort — failure does not block success response)
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(confirmationEmail),
    }).then((res) => {
      if (!res.ok) {
        res.json().catch(() => {}).then((err) => console.error('Confirmation email error:', err));
      }
    }).catch((err) => console.error('Confirmation email sending error:', err));

    return NextResponse.json(
      { message: 'Message sent successfully! Check your email for confirmation.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form unexpected error:', error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: 'Failed to process message. Please try again or contact us directly at info@webloftstudio.com' },
      { status: 500 }
    );
  }
}
