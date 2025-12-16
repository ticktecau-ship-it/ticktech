import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { email, password } = body

        // In a real app, these should be in .env
        // For now, we'll use these credentials
        const adminEmail = process.env.ADMIN_EMAIL || 'ticktec.au@gmail.com'
        const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'

        if (email === adminEmail && password === adminPassword) {
            cookies().set('admin_token', 'authenticated', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 * 7, // 1 week
                path: '/',
            })

            return NextResponse.json({ success: true })
        }

        return NextResponse.json(
            { error: 'Invalid credentials' },
            { status: 401 }
        )
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
