import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(request: NextRequest) {
    try {
        // Check authentication
        const cookieStore = cookies()
        const token = cookieStore.get('admin_token')

        if (!token) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            )
        }

        if (!supabaseAdmin) {
            return NextResponse.json(
                { error: 'Supabase not configured' },
                { status: 500 }
            )
        }

        const { messageId } = await request.json()

        if (!messageId) {
            return NextResponse.json(
                { error: 'Message ID is required' },
                { status: 400 }
            )
        }

        const { error } = await supabaseAdmin
            .from('messages')
            .delete()
            .eq('id', messageId)

        if (error) {
            console.error('Delete message Supabase error:', error)
            return NextResponse.json(
                { error: 'Failed to delete message' },
                { status: 500 }
            )
        }

        return NextResponse.json(
            { success: true, message: 'Message deleted successfully' },
            { status: 200 }
        )

    } catch (error) {
        console.error('Delete message error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
