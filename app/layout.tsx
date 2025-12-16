import type { Metadata } from 'next'
import { Providers } from '@/components/providers'
import './globals.css'

export const metadata: Metadata = {
    title: {
        default: 'Tic Tac Digital Solution | Digital Agency',
        template: '%s | Tic Tac Digital Solution'
    },
    description: 'Transform your digital presence with Tic Tac Digital Solution. Expert web development, SEO, digital marketing, and branding services.',
    keywords: ['digital agency', 'web development', 'SEO', 'digital marketing', 'branding', 'content writing', 'domain hosting'],
    authors: [{ name: 'Tic Tac Digital Solution' }],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://tictacdigital.com',
        siteName: 'Tic Tac Digital Solution',
        title: 'Tic Tac Digital Solution | Digital Agency',
        description: 'Transform your digital presence with expert digital solutions.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tic Tac Digital Solution | Digital Agency',
        description: 'Transform your digital presence with expert digital solutions.',
    },
    robots: {
        index: true,
        follow: true,
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
