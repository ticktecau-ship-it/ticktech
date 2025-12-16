import { NextRequest, NextResponse } from 'next/server';
import { resend, EMAIL_CONFIG, emailTemplates } from '@/lib/resend';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { type, to, ...data } = body;

        // Validate required fields
        if (!type || !to) {
            return NextResponse.json(
                { error: 'Missing required fields: type and to' },
                { status: 400 }
            );
        }

        // Get the appropriate email template
        let emailContent;
        switch (type) {
            case 'contact':
                if (!data.name || !data.email || !data.message) {
                    return NextResponse.json(
                        { error: 'Missing required fields for contact form' },
                        { status: 400 }
                    );
                }
                emailContent = emailTemplates.contactForm(data);
                break;

            case 'quote':
                if (!data.name || !data.email || !data.service || !data.message) {
                    return NextResponse.json(
                        { error: 'Missing required fields for quote request' },
                        { status: 400 }
                    );
                }
                emailContent = emailTemplates.quoteRequest(data);
                break;

            default:
                return NextResponse.json(
                    { error: 'Invalid email type' },
                    { status: 400 }
                );
        }

        // Prepare User Confirmation Email
        const userEmailContent = emailTemplates.userConfirmation({
            name: data.name,
            service: data.service
        });

        // Send emails using Resend concurrently
        const [adminEmailResult, userEmailResult] = await Promise.all([
            // Email to Admin
            resend.emails.send({
                from: EMAIL_CONFIG.from,
                to: [to],
                subject: emailContent.subject,
                html: emailContent.html,
                replyTo: data.email
            }),
            // Email to User
            resend.emails.send({
                from: EMAIL_CONFIG.from,
                to: [data.email],
                subject: userEmailContent.subject,
                html: userEmailContent.html,
            })
        ]);

        // Check for Admin Email Error (Priority)
        if (adminEmailResult.error) {
            console.error('Admin email error:', adminEmailResult.error);
            return NextResponse.json(
                { error: 'Failed to send email to admin', details: adminEmailResult.error },
                { status: 500 }
            );
        }

        // Log User Email Error if it happens (Non-blocking)
        if (userEmailResult.error) {
            console.warn('User confirmation email error:', userEmailResult.error);
        }

        // Save to local JSON file (simulating a database)
        try {
            const fs = await import('fs');
            const path = await import('path');

            const dbPath = path.join(process.cwd(), 'data', 'messages.json');
            let messages = [];

            if (fs.existsSync(dbPath)) {
                const fileContent = fs.readFileSync(dbPath, 'utf-8');
                try {
                    messages = JSON.parse(fileContent);
                } catch (e) {
                    messages = [];
                }
            }

            const newMessage = {
                id: Date.now().toString(),
                created_at: new Date().toISOString(),
                type,
                ...data,
                status: 'new'
            };

            messages.unshift(newMessage); // Add to beginning
            fs.writeFileSync(dbPath, JSON.stringify(messages, null, 2));

        } catch (dbError) {
            console.error('Failed to save message to local DB:', dbError);
            // Don't fail the request if saving fails, email is more important
        }

        return NextResponse.json(
            {
                success: true,
                message: 'Emails sent successfully',
                id: adminEmailResult.data?.id
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Email API error:', error);
        return NextResponse.json(
            { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
