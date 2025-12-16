# TickTec Digital Solution

A modern, production-ready Next.js digital agency website built with the App Router, featuring beautiful animations, SEO optimization, and mobile-first design.

## 🚀 Features

- **Next.js 14 App Router** - Latest Next.js features with server components
- **TypeScript** - Type-safe development
- **Modern Design** - Beautiful gradients, glassmorphism, and smooth animations
- **SEO Optimized** - Comprehensive metadata and semantic HTML
- **Fully Responsive** - Mobile-first design that works on all devices
- **Reusable Components** - Modular component architecture
- **5 Complete Pages** - Home, About, Services, Portfolio, and Contact

## 📦 Installation

Due to PowerShell execution policy restrictions, you'll need to enable script execution first:

### Option 1: Enable PowerShell Scripts (Recommended)
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then install dependencies:
```bash
npm install
```

### Option 2: Use CMD Instead
Open Command Prompt (cmd.exe) and run:
```bash
npm install
```

## 🏃‍♂️ Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
tic-tac-digital/
├── app/
│   ├── about/              # About page
│   ├── contact/            # Contact page with form
│   ├── portfolio/          # Portfolio/case studies page
│   ├── services/           # Services page
│   ├── globals.css         # Global styles and design tokens
│   ├── layout.tsx          # Root layout with SEO metadata
│   └── page.tsx            # Home page
├── components/
│   ├── Button/             # Reusable button component
│   ├── Card/               # Card component with variants
│   ├── ContactForm/        # Contact form with validation
│   ├── Footer/             # Site footer
│   └── Header/             # Navigation header
├── next.config.js
├── package.json
└── tsconfig.json
```

## 🎨 Design System

### Colors
- **Primary**: Purple gradient (`hsl(262, 83%, 58%)`)
- **Secondary**: Cyan (`hsl(195, 100%, 50%)`)
- **Accent**: Pink (`hsl(340, 82%, 52%)`)

### Typography
- **Headings**: Outfit (Google Fonts)
- **Body**: Inter (Google Fonts)

### Components
- **Button**: 4 variants (primary, secondary, outline, ghost)
- **Card**: 3 variants (default, glass, gradient)
- Smooth hover animations and transitions
- Glassmorphism effects

## 📄 Pages

### Home (`/`)
- Hero section with animated shapes
- Stats showcase
- Services preview grid
- Call-to-action sections

### About (`/about`)
- Company story
- Core values
- Team members
- Mission statement

### Services (`/services`)
- 6 detailed service cards:
  - Web Development
  - SEO Services
  - Digital Marketing
  - Content Writing
  - Domain & Hosting
  - Branding & Logo Design
- Process overview
- Feature lists for each service

### Portfolio (`/portfolio`)
- Project showcase with gradient cards
- Category filters
- Success statistics
- Case study highlights

### Contact (`/contact`)
- Contact form with validation
- Contact information
- Office hours
- FAQ section
- Social media links

## 🔧 Customization

### Update Brand Colors
Edit `app/globals.css` and modify the CSS custom properties:

```css
:root {
  --primary: hsl(262, 83%, 58%);
  --secondary: hsl(195, 100%, 50%);
  --accent: hsl(340, 82%, 52%);
}
```

### Update Company Information
- **Footer**: Edit `components/Footer/Footer.tsx`
- **Contact Info**: Edit `app/contact/page.tsx`
- **SEO Metadata**: Edit `app/layout.tsx`

### Add New Pages
Create a new folder in `app/` with a `page.tsx` file:

```tsx
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export default function NewPage() {
  return (
    <>
      <Header />
      <main>
        {/* Your content */}
      </main>
      <Footer />
    </>
  )
}
```

## 🚀 Building for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**:
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Add environment variables if needed:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `SUPABASE_SERVICE_ROLE_KEY`
     - `RESEND_API_KEY`
   - Click "Deploy"

3. **SEO Files**:
   - ✅ `robots.txt` - Auto-generated at `/robots.txt`
   - ✅ `sitemap.xml` - Auto-generated at `/sitemap.xml`
   - Both files are dynamically generated using Next.js 14 App Router

### Environment Variables

Create a `.env.local` file with:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
RESEND_API_KEY=your_resend_api_key
```


## 📱 Mobile Responsiveness

All pages are fully responsive with breakpoints at:
- Mobile: < 640px
- Tablet: < 968px
- Desktop: > 968px

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Alt text placeholders for images

## 🔮 Future Enhancements

- Blog section with CMS integration
- Client testimonials carousel
- Dark mode toggle
- Multi-language support
- Advanced form handling with backend integration
- Image optimization with Next.js Image component
- Analytics integration

## 📝 License

This project is open source and available for customization.

## 🤝 Support

For questions or support, contact:
- Email: info@tictacdigital.com
- Phone: +1 (234) 567-890

---

Built with ❤️ using Next.js 14
