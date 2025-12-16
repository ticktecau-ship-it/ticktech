# Resend Email Setup - TickTec Digital Solutions

## ✅ Setup Complete!

Your Resend email integration has been successfully configured. Here's what was set up:

### 📦 Installed Packages
- `resend` - Official Resend SDK for sending emails

### 🔧 Configuration Files

1. **`.env.local`** - Environment variables (gitignored for security)
   ```
   RESEND_API_KEY=re_DfpYAmTD_DpaeZXvkdSTL6opBeErGvQTA
   ```

2. **`lib/resend.ts`** - Email utility and templates
   - Resend client initialization
   - Email templates for contact forms and quote requests
   - Reusable email configuration

3. **`app/api/send-email/route.ts`** - API endpoint
   - POST endpoint at `/api/send-email`
   - Handles contact and quote request emails
   - Error handling and validation

4. **`components/ContactForm.tsx`** - Sample contact form component
   - Ready-to-use contact form
   - Form validation
   - Success/error messaging
   - Beautiful, responsive design

## 🚀 Usage

### Contact Form (Already Integrated!)

Your existing contact form at `/contact` has been updated to use Resend! The form now:
- ✅ Sends real emails via Resend API
- ✅ Shows success/error messages
- ✅ Includes all form data (name, email, phone, service, message)

**Current recipient email**: `info@ticktec.com`

To change the recipient email, edit `components/ContactForm/ContactForm.tsx` line 37:
```typescript
to: 'your-email@example.com', // Change this
```

### Using the Quote Request Form Component

If you want to add a quote request form to another page:

```tsx
import QuoteRequestForm from '@/components/QuoteRequestForm';

export default function QuotePage() {
  return (
    <div>
      <h1>Request a Quote</h1>
      <QuoteRequestForm />
    </div>
  );
}
```

### Sending Emails Programmatically

#### Contact Form Email
```typescript
const response = await fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    type: 'contact',
    to: 'your-email@example.com',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567', // optional
    message: 'Hello, I would like to discuss a project...',
  }),
});
```

#### Quote Request Email
```typescript
const response = await fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    type: 'quote',
    to: 'your-email@example.com',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+1 (555) 987-6543', // optional
    service: 'Web Development',
    budget: '$5,000 - $10,000', // optional
    message: 'I need a custom website for my business...',
  }),
});
```

## 📧 Email Configuration

### Current Setup
- **From Address**: `TickTec Digital Solutions <onboarding@resend.dev>`
- This is Resend's default sending address for testing

### Using Your Own Domain (Recommended for Production)

1. **Verify your domain in Resend Dashboard**
   - Go to https://resend.com/domains
   - Add your domain (e.g., `ticktec.com`)
   - Add the required DNS records

2. **Update the email configuration** in `lib/resend.ts`:
   ```typescript
   export const EMAIL_CONFIG = {
     from: 'TickTec Digital Solutions <hello@ticktec.com>',
   };
   ```

## 🎨 Customizing Email Templates

Edit the templates in `lib/resend.ts`:

```typescript
export const emailTemplates = {
  contactForm: (data) => ({
    subject: `Your custom subject`,
    html: `Your custom HTML template`,
  }),
  // Add more templates as needed
};
```

## 🔒 Security Notes

- ✅ API key is stored in `.env.local` (gitignored)
- ✅ Never commit `.env.local` to version control
- ✅ API route includes validation and error handling
- ⚠️ Remember to update the recipient email address in your forms

## 🧪 Testing

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Navigate to your contact page** and test the form

3. **Check Resend Dashboard** for sent emails:
   - https://resend.com/emails

## 📝 Important Notes

- **Free Tier Limits**: Resend free tier allows 100 emails/day, 3,000 emails/month
- **Testing**: Currently using `onboarding@resend.dev` - emails will be sent but marked as test
- **Production**: Verify your domain for production use
- **Rate Limiting**: Consider implementing rate limiting on the API route for production

## 🆘 Troubleshooting

### Emails not sending?
1. Check that `.env.local` exists and contains the API key
2. Restart your dev server after adding environment variables
3. Check the browser console and server logs for errors
4. Verify your API key is valid in Resend dashboard

### Environment variables not loading?
- Restart your Next.js development server
- Ensure the file is named exactly `.env.local`
- Check that the file is in the root directory

## 📚 Resources

- [Resend Documentation](https://resend.com/docs)
- [Resend Dashboard](https://resend.com/emails)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

---

**Setup completed on**: December 14, 2025
**API Key**: Configured and ready to use
**Status**: ✅ Ready for development
