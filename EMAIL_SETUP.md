# 📧 Email Setup Guide - Resend Integration

## ✅ Current Status
Email functionality is **WORKING** with Resend API! The contact form successfully sends emails.

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=re_your_actual_api_key_here
```

**Important:** Never commit your API key to version control. The `.env.local` file is already in `.gitignore`.

### Current Setup
- **Sender Email:** `onboarding@resend.dev` (Resend's verified domain)
- **Recipient Email:** `delivered@resend.dev` (Resend's test inbox)
- **API Route:** `/api/send-email`

## 📝 How It Works

### 1. Contact Form (`components/ContactForm/ContactForm.tsx`)
The form collects:
- Name
- Email
- Phone
- Service selection
- Message

On submission, it sends a POST request to `/api/send-email`.

### 2. API Route (`app/api/send-email/route.ts`)
Handles email sending using Resend SDK:
- Validates request data
- Formats email content
- Sends via Resend API
- Returns success/error response

### 3. Email Templates
Two types of emails are sent:
- **Contact Form:** Customer inquiry emails
- **Quote Request:** Detailed quote request emails

## 🚀 Testing

### Test the API Directly
```powershell
$body = @{
    type='contact'
    to='delivered@resend.dev'
    name='Test User'
    email='test@example.com'
    phone='+92 300 1234567'
    message='Testing Resend API'
} | ConvertTo-Json

Invoke-WebRequest -Uri 'http://localhost:3000/api/send-email' -Method POST -Body $body -ContentType 'application/json' -UseBasicParsing
```

### Test via Contact Form
1. Navigate to `http://localhost:3000/contact`
2. Fill in the form
3. Click "Send Message"
4. Check for success message

## 🔄 Production Setup

### Option 1: Use Resend Test Email (Current - For Testing)
✅ **Already configured**
- Recipient: `delivered@resend.dev`
- No domain verification needed
- Perfect for development and testing

### Option 2: Verify Your Domain (For Production)
To send emails to actual customer addresses:

1. **Add Your Domain in Resend Dashboard:**
   - Go to https://resend.com/domains
   - Click "Add Domain"
   - Enter your domain (e.g., `ticktec.com`)

2. **Add DNS Records:**
   Resend will provide DNS records to add to your domain:
   - SPF record
   - DKIM records
   - DMARC record (optional but recommended)

3. **Update the Code:**
   In `components/ContactForm/ContactForm.tsx`, change:
   ```typescript
   to: 'delivered@resend.dev', // Resend test email
   ```
   To:
   ```typescript
   to: 'info@ticktec.com', // Your actual email
   ```

4. **Update Sender Email (Optional):**
   In `app/api/send-email/route.ts`, change:
   ```typescript
   from: 'onboarding@resend.dev',
   ```
   To:
   ```typescript
   from: 'noreply@ticktec.com', // Your domain email
   ```

### Option 3: Use Different Email Service
If you prefer another service:
- **SendGrid:** Popular alternative
- **Mailgun:** Good for high volume
- **AWS SES:** Cost-effective for large scale
- **Nodemailer:** Self-hosted SMTP

## 📊 Resend Free Tier Limits
- **100 emails/day**
- **3,000 emails/month**
- 1 verified domain
- Test email (`delivered@resend.dev`) always available

## 🐛 Troubleshooting

### Error: "Can't send email using this domain"
**Cause:** Trying to send to an unverified domain
**Solution:** Use `delivered@resend.dev` or verify your domain

### Error: "Missing API key"
**Cause:** `RESEND_API_KEY` not set in `.env.local`
**Solution:** Add your API key to `.env.local` and restart the dev server

### Error: "Rate limit exceeded"
**Cause:** Exceeded free tier limits
**Solution:** Wait for the limit to reset or upgrade your Resend plan

### Emails not arriving
1. Check Resend dashboard for delivery status
2. Verify API key is correct
3. Check spam folder
4. Ensure domain is verified (if not using test email)

## 📱 Email Templates

### Contact Form Email
```
Subject: New Contact Form Submission from [Name]

Name: [Customer Name]
Email: [Customer Email]
Phone: [Customer Phone]
Service: [Selected Service]

Message:
[Customer Message]
```

### Quote Request Email
```
Subject: New Quote Request from [Name]

Name: [Customer Name]
Email: [Customer Email]
Phone: [Customer Phone]
Service: [Selected Service]
Budget: [Budget Range]
Timeline: [Project Timeline]

Project Details:
[Project Description]
```

## 🔐 Security Best Practices

1. **Never commit API keys** - Always use environment variables
2. **Validate input** - API route validates all incoming data
3. **Rate limiting** - Consider adding rate limiting for production
4. **CORS** - API route only accepts POST requests
5. **Error handling** - Errors are logged but not exposed to client

## 📈 Next Steps for Production

1. ✅ Verify your domain in Resend
2. ✅ Update recipient email to your actual email
3. ✅ Add rate limiting to prevent abuse
4. ✅ Set up email notifications for failed sends
5. ✅ Monitor email delivery rates in Resend dashboard
6. ✅ Consider adding email templates with HTML formatting
7. ✅ Add auto-reply functionality for customers

## 🎯 Quick Reference

### Get Resend API Key
1. Sign up at https://resend.com
2. Go to API Keys section
3. Create a new API key
4. Copy and add to `.env.local`

### Restart Dev Server After Changing .env.local
```bash
npm run dev
```

### Check Email Logs
Visit: https://resend.com/emails

---

**Status:** ✅ Email system is fully functional and ready for testing!
**Last Updated:** January 2025
