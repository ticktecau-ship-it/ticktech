import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
export const resend = new Resend(process.env.RESEND_API_KEY);

// Email configuration
export const EMAIL_CONFIG = {
  from: 'TickTec Digital Solutions <onboarding@resend.dev>',
  // You can update this to your verified domain email later
  // e.g., 'TickTec Digital Solutions <hello@ticktec.com>'
};

// Email templates
export const emailTemplates = {
  contactForm: (data: {
    name: string;
    email: string;
    phone?: string;
    message: string;
  }) => ({
    subject: `New Contact Query from ${data.name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1f2937; background: #f3f4f6; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
            .header { background: linear-gradient(135deg, #0B1C2D 0%, #1B3A5F 100%); color: white; padding: 30px 20px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
            .badge { display: inline-block; background: #00E5FF; color: #0B1C2D; padding: 6px 16px; border-radius: 20px; font-size: 12px; font-weight: 600; margin-top: 10px; }
            .content { padding: 30px; }
            .field { margin-bottom: 20px; padding: 15px; background: #f9fafb; border-left: 4px solid #00E5FF; border-radius: 6px; }
            .label { font-weight: 600; color: #0B1C2D; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; }
            .value { color: #4b5563; font-size: 15px; }
            .message-box { background: #f0f9ff; padding: 20px; border-radius: 8px; border: 1px solid #bae6fd; margin-top: 10px; }
            .footer { background: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 New Contact Query</h1>
              <span class="badge">TICKTEC ADMIN</span>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name</div>
                <div class="value">${data.name}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email</div>
                <div class="value"><a href="mailto:${data.email}" style="color: #00E5FF; text-decoration: none;">${data.email}</a></div>
              </div>
              ${data.phone ? `
              <div class="field">
                <div class="label">📱 Phone</div>
                <div class="value"><a href="tel:${data.phone}" style="color: #00E5FF; text-decoration: none;">${data.phone}</a></div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">💬 Message</div>
                <div class="message-box">${data.message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>Received via TickTec Contact Form • ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</p>
            </div>
          </div>
        </body>
      </html>
    `,
  }),

  quoteRequest: (data: {
    name: string;
    email: string;
    phone?: string;
    service: string;
    budget?: string;
    message: string;
  }) => ({
    subject: `💼 Quote Request: ${data.service} - ${data.name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1f2937; background: #f3f4f6; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
            .header { background: linear-gradient(135deg, #0B1C2D 0%, #1B3A5F 100%); color: white; padding: 30px 20px; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
            .badge { display: inline-block; background: #fbbf24; color: #78350f; padding: 6px 16px; border-radius: 20px; font-size: 12px; font-weight: 600; margin-top: 10px; }
            .content { padding: 30px; }
            .highlight { background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 25px; border: 2px solid #fbbf24; }
            .highlight strong { font-size: 18px; color: #78350f; }
            .field { margin-bottom: 20px; padding: 15px; background: #f9fafb; border-left: 4px solid #00E5FF; border-radius: 6px; }
            .label { font-weight: 600; color: #0B1C2D; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; }
            .value { color: #4b5563; font-size: 15px; }
            .message-box { background: #f0f9ff; padding: 20px; border-radius: 8px; border: 1px solid #bae6fd; margin-top: 10px; }
            .footer { background: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>💼 New Quote Request</h1>
              <span class="badge">HIGH PRIORITY</span>
            </div>
            <div class="content">
              <div class="highlight">
                <strong>🎯 Service: ${data.service}</strong>
              </div>
              <div class="field">
                <div class="label">👤 Name</div>
                <div class="value">${data.name}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email</div>
                <div class="value"><a href="mailto:${data.email}" style="color: #00E5FF; text-decoration: none;">${data.email}</a></div>
              </div>
              ${data.phone ? `
              <div class="field">
                <div class="label">📱 Phone</div>
                <div class="value"><a href="tel:${data.phone}" style="color: #00E5FF; text-decoration: none;">${data.phone}</a></div>
              </div>
              ` : ''}
              ${data.budget ? `
              <div class="field">
                <div class="label">💰 Budget</div>
                <div class="value">${data.budget}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">💬 Project Details</div>
                <div class="message-box">${data.message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>Received via TickTec Quote Form • ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</p>
            </div>
          </div>
        </body>
      </html>
    `,
  }),

  userConfirmation: (data: {
    name: string;
    service?: string;
  }) => ({
    subject: `Thank You for Contacting TickTec! 🎉`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.8; color: #1f2937; background: #f3f4f6; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); }
            .header { background: linear-gradient(135deg, #00E5FF 0%, #6C7CFF 100%); color: white; padding: 50px 30px; text-align: center; position: relative; }
            .header::before { content: '✨'; position: absolute; top: 20px; left: 30px; font-size: 30px; opacity: 0.3; }
            .header::after { content: '✨'; position: absolute; bottom: 20px; right: 30px; font-size: 30px; opacity: 0.3; }
            .header h1 { margin: 0; font-size: 32px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .header p { margin: 10px 0 0 0; font-size: 16px; opacity: 0.95; }
            .content { padding: 40px 30px; }
            .greeting { font-size: 22px; font-weight: 600; color: #0B1C2D; margin-bottom: 20px; }
            .message { font-size: 16px; color: #4b5563; margin-bottom: 20px; line-height: 1.8; }
            .highlight-box { background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 25px; border-radius: 12px; border-left: 5px solid #00E5FF; margin: 25px 0; }
            .highlight-box strong { color: #0B1C2D; font-size: 18px; }
            .cta-button { display: inline-block; background: linear-gradient(135deg, #00E5FF 0%, #6C7CFF 100%); color: white; padding: 16px 32px; text-decoration: none; border-radius: 30px; font-weight: 600; font-size: 16px; margin: 20px 0; box-shadow: 0 4px 15px rgba(0, 229, 255, 0.3); transition: transform 0.2s; }
            .cta-button:hover { transform: translateY(-2px); }
            .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 25px 0; }
            .info-card { background: #f9fafb; padding: 20px; border-radius: 10px; text-align: center; border: 1px solid #e5e7eb; }
            .info-card .icon { font-size: 28px; margin-bottom: 10px; }
            .info-card .title { font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
            .info-card .value { font-size: 16px; font-weight: 600; color: #0B1C2D; }
            .footer { background: linear-gradient(180deg, #f9fafb 0%, #f3f4f6 100%); padding: 30px; text-align: center; border-top: 1px solid #e5e7eb; }
            .footer .brand { font-size: 20px; font-weight: 700; background: linear-gradient(135deg, #00E5FF 0%, #6C7CFF 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 15px; }
            .socials { margin: 20px 0; }
            .social-link { display: inline-block; width: 40px; height: 40px; margin: 0 8px; background: white; border-radius: 50%; text-decoration: none; line-height: 40px; font-size: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.2s; }
            .social-link:hover { transform: translateY(-3px); }
            .footer-text { font-size: 13px; color: #6b7280; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You! 🎉</h1>
              <p>We've received your message</p>
            </div>
            <div class="content">
              <div class="greeting">Hi ${data.name}! 👋</div>
              <div class="message">
                <p>Thank you for reaching out to <strong>TickTec Digital Solutions</strong>! We're excited to hear from you.</p>
                ${data.service ? `<p>We've received your inquiry about <strong style="color: #00E5FF;">${data.service}</strong> and our team is already reviewing your request.</p>` : ''}
              </div>
              
              <div class="highlight-box">
                <strong>⏱️ What happens next?</strong>
                <p style="margin: 10px 0 0 0; color: #4b5563;">Our team will review your message and get back to you within <strong>24 hours</strong> with a personalized response.</p>
              </div>

              <div class="info-grid">
                <div class="info-card">
                  <div class="icon">⚡</div>
                  <div class="title">Response Time</div>
                  <div class="value">24 Hours</div>
                </div>
                <div class="info-card">
                  <div class="icon">💯</div>
                  <div class="title">Success Rate</div>
                  <div class="value">100%</div>
                </div>
              </div>

              <div style="text-align: center; margin: 30px 0;">
                <a href="https://ticktec.com.au" class="cta-button">🌐 Visit Our Website</a>
              </div>

              <div class="message" style="background: #fef3c7; padding: 20px; border-radius: 10px; border-left: 4px solid #fbbf24;">
                <p style="margin: 0; color: #78350f;"><strong>💡 Pro Tip:</strong> While you wait, check out our portfolio and latest projects on our website!</p>
              </div>
            </div>
            
            <div class="footer">
              <div class="brand">TICKTEC</div>
              <p style="color: #4b5563; margin: 10px 0;">Digital Solutions That Transform Your Business</p>
              
              <div class="socials">
                <a href="https://facebook.com/ticktecdigital" class="social-link" title="Facebook">📘</a>
                <a href="https://twitter.com/ticktecdigital" class="social-link" title="Twitter">🐦</a>
                <a href="https://instagram.com/ticktecdigital" class="social-link" title="Instagram">📷</a>
                <a href="https://linkedin.com/company/ticktecdigital" class="social-link" title="LinkedIn">💼</a>
              </div>

              <div class="footer-text">
                <p>📧 <a href="mailto:ticktec.au@gmail.com" style="color: #00E5FF; text-decoration: none;">ticktec.au@gmail.com</a></p>
                <p style="margin-top: 15px;">© ${new Date().getFullYear()} TickTec Digital Solutions. All rights reserved.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
  }),
};
