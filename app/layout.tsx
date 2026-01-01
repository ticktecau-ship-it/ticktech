import type { Metadata } from 'next'
import { Providers } from '@/components/providers'
import './globals.css'

export const metadata: Metadata = {
    title: {
        default: 'TickTec Digital Solution | Digital Agency',
        template: '%s | TickTec Digital Solution'
    },
    description: 'Transform your digital presence with TickTec Digital Solution. Expert web development, SEO, digital marketing, and branding services.',
    keywords: ['digital agency', 'web development', 'SEO', 'digital marketing', 'branding', 'content writing', 'domain hosting'],
    authors: [{ name: 'TickTec Digital Solution' }],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://ticktec.com.au',
        siteName: 'TickTec Digital Solution',
        title: 'TickTec Digital Solution | Digital Agency',
        description: 'Transform your digital presence with expert digital solutions.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'TickTec Digital Solution | Digital Agency',
        description: 'Transform your digital presence with expert digital solutions.',
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: [
            { url: '/logo/Ticktec icon.png' },
            { url: '/logo/Ticktec icon.png', sizes: '32x32', type: 'image/png' },
            { url: '/logo/Ticktec icon.png', sizes: '192x192', type: 'image/png' },
            { url: '/logo/Ticktec icon.png', sizes: '512x512', type: 'image/png' },
        ],
        apple: [
            { url: '/logo/Ticktec icon.png' },
        ],
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}
