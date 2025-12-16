import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

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

        const { messageId } = await request.json()

        if (!messageId) {
            return NextResponse.json(
                { error: 'Message ID is required' },
                { status: 400 }
            )
        }

        // Read messages file
        const fs = await import('fs')
        const path = await import('path')
        const dbPath = path.join(process.cwd(), 'data', 'messages.json')

        if (!fs.existsSync(dbPath)) {
            return NextResponse.json(
                { error: 'Messages file not found' },
                { status: 404 }
            )
        }

        const fileContent = fs.readFileSync(dbPath, 'utf-8')
        let messages = JSON.parse(fileContent)

        // Filter out the message to delete
        const filteredMessages = messages.filter((msg: any) => msg.id !== messageId)

        if (filteredMessages.length === messages.length) {
            return NextResponse.json(
                { error: 'Message not found' },
                { status: 404 }
            )
        }

        // Write back to file
        fs.writeFileSync(dbPath, JSON.stringify(filteredMessages, null, 2))

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
