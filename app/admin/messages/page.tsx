import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import styles from './messages.module.css'
import AdminSidebar from '../components/AdminSidebar'
import MessagesClient from './MessagesClient'
import { supabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export default async function MessagesPage() {
    const cookieStore = cookies()
    const token = cookieStore.get('admin_token')

    if (!token) {
        redirect('/admin/login')
    }

    // Load messages from Supabase
    let messages: any[] = []
    try {
        if (supabaseAdmin) {
            const { data, error } = await supabaseAdmin
                .from('messages')
                .select('*')
                .order('created_at', { ascending: false })

            if (error) {
                console.error('Admin messages error:', error)
            } else {
                messages = data || []
            }
        }
    } catch (error) {
        console.error('Error reading messages:', error)
    }

    // Already ordered by created_at desc, but keep sort to be safe
    messages.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())

    return (
        <div className={styles.container}>
            <AdminSidebar />

            <div className={styles.mainWrapper}>
                <main className={styles.content}>
                    {/* Header */}
                    <div className={styles.header}>
                        <div>
                            <h1 className={styles.pageTitle}>Messages & Inquiries</h1>
                            <p className={styles.pageSubtitle}>Manage all customer messages and quote requests</p>
                        </div>
                        <div className={styles.headerActions}>
                            <button className={styles.filterBtn}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                                </svg>
                                Filter
                            </button>
                            <button className={styles.exportBtn}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Export
                            </button>
                        </div>
                    </div>

                    <MessagesClient initialMessages={messages} />
                </main>
            </div>
        </div>
    )
}
