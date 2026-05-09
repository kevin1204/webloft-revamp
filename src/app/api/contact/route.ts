import { NextRequest, NextResponse } from 'next/server';

// Cloudflare Turnstile Secret Key
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;

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
    console.log('=== CONTACT FORM API CALLED ===');
    
    const body = await request.json();
    console.log('Request body received:', body);
    
    const { 
      name, 
      email, 
      company, 
      projectType, 
      budget, 
      message, 
      website, // Honeypot field
      turnstileToken, 
      timeSpent 
    } = body;

    // ===== SPAM PROTECTION LAYER 1: Honeypot Check =====
    if (website && website.trim() !== '') {
      console.log('🚫 SPAM DETECTED: Honeypot field was filled');
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      );
    }

    // ===== SPAM PROTECTION LAYER 2: Time Validation =====
    // Reject submissions that happen too quickly (less than 3 seconds)
    // Real users take time to fill out forms
    if (timeSpent !== undefined && timeSpent < 3) {
      console.log('🚫 SPAM DETECTED: Form submitted too quickly:', timeSpent, 'seconds');
      return NextResponse.json(
        { error: 'Please take your time filling out the form' },
        { status: 400 }
      );
    }

    // ===== SPAM PROTECTION LAYER 3: Turnstile Verification =====
    if (!TURNSTILE_SECRET_KEY) {
      console.error('TURNSTILE_SECRET_KEY is not set in environment variables');
      // Continue without Turnstile if not configured (for development)
      // In production, you might want to return an error here
    } else {
      if (!turnstileToken) {
        console.log('🚫 SPAM DETECTED: Missing Turnstile token');
        return NextResponse.json(
          { error: 'Security verification failed. Please refresh the page and try again.' },
          { status: 400 }
        );
      }

      // Get client IP for Turnstile verification
      const ip = request.headers.get('x-forwarded-for') || 
                 request.headers.get('x-real-ip') || 
                 'unknown';

      const isTurnstileValid = await verifyTurnstileToken(turnstileToken, ip);
      
      if (!isTurnstileValid) {
        console.log('🚫 SPAM DETECTED: Invalid Turnstile token');
        return NextResponse.json(
          { error: 'Security verification failed. Please refresh the page and try again.' },
          { status: 400 }
        );
      }
    }

    console.log('✅ All spam protection checks passed');

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      console.log('Validation failed: Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Validation failed: Invalid email format');
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    console.log('Form validation passed');

    // Check environment variables
    console.log('Environment check:');
    console.log('- RESEND_API_KEY present:', !!process.env.RESEND_API_KEY);
    console.log('- RESEND_API_KEY starts with:', process.env.RESEND_API_KEY?.substring(0, 10) + '...');
    
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set in environment variables');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us directly at info@webloftstudio.com' },
        { status: 500 }
      );
    }

    // Log the form submission
    console.log('=== FORM SUBMISSION LOGGED ===');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Company:', company);
    console.log('Project Type:', projectType);
    console.log('Budget:', budget);
    console.log('Message:', message);
    console.log('Timestamp:', new Date().toISOString());

    // Send TWO emails: notification to you + confirmation to user
    console.log('=== ATTEMPTING TO SEND DUAL EMAILS ===');
    
    // Email 1: Notification to you (business owner) with reply-to header
    const notificationEmail = {
      from: 'info@webloftstudio.com',
      to: ['kevin.ortega2011@gmail.com', 'info@webloftstudio.com'],
      reply_to: email, // This makes replies go directly to the user
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #009E69;">New Contact Form Submission</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
          </div>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px;">
              This message was sent from the Webloft Studio contact form.
            </p>
            <p style="color: #009E69; font-size: 16px; font-weight: bold;">
              💡 Simply reply to this email to respond to ${name} (${email})
            </p>
            <p style="color: #666; font-size: 14px;">
              Your reply will be sent from info@webloftstudio.com to ${email}
            </p>
          </div>
        </div>
      `,
    };

    // Email 2: Confirmation to the user
    const confirmationEmail = {
      from: 'info@webloftstudio.com',
      to: email, // Send to the user who submitted the form
      subject: `Thank you for contacting Webloft Studio!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #009E69;">Thank You for Contacting Webloft Studio!</h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for reaching out to us! We've received your message and will get back to you within 24 hours.</p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Message Summary</h3>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: white; padding: 10px; border-radius: 4px;">${message}</p>
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

    console.log('Email data prepared:');
    console.log('- Notification to:', notificationEmail.to);
    console.log('- Reply-to:', notificationEmail.reply_to);
    console.log('- Confirmation to:', confirmationEmail.to);

    // Send notification email to you
    try {
      const notificationResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(notificationEmail),
      });

      console.log('Notification email response status:', notificationResponse.status);

      if (!notificationResponse.ok) {
        const errorData = await notificationResponse.json().catch(() => ({ message: 'Failed to parse error response' }));
        console.error('Notification email error:', errorData);
      } else {
        const result = await notificationResponse.json();
        console.log('Notification email sent successfully:', result);
      }
    } catch (notificationError) {
      console.error('Notification email sending error:', notificationError);
    }

    // Send confirmation email to user
    try {
      const confirmationResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(confirmationEmail),
      });

      console.log('Confirmation email response status:', confirmationResponse.status);

      if (!confirmationResponse.ok) {
        const errorData = await confirmationResponse.json().catch(() => ({ message: 'Failed to parse error response' }));
        console.error('Confirmation email error:', errorData);
      } else {
        const result = await confirmationResponse.json();
        console.log('Confirmation email sent successfully:', result);
      }
    } catch (confirmationError) {
      console.error('Confirmation email sending error:', confirmationError);
    }

    return NextResponse.json(
      { message: 'Message sent successfully! Check your email for confirmation.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('=== CONTACT FORM ERROR ===');
    console.error('Error details:', error);
    console.error('Error message:', error instanceof Error ? error.message : 'Unknown error');
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    
    return NextResponse.json(
      { error: 'Failed to process message. Please try again or contact us directly at info@webloftstudio.com' },
      { status: 500 }
    );
  }
}