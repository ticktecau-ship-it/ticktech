import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import styles from './dashboard.module.css'
import AdminSidebar from '../components/AdminSidebar'
import { supabaseAdmin } from '@/lib/supabase'

export default async function Dashboard() {
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
                console.error('Dashboard messages error:', error)
            } else {
                messages = data || []
            }
        }
    } catch (error) {
        console.error('Error reading messages:', error)
    }

    // Calculate stats
    const totalMessages = messages.length
    const today = new Date().toISOString().split('T')[0]
    const newToday = messages.filter((m: any) => (m.created_at || '').startsWith(today)).length
    const pendingQuotes = messages.filter((m: any) => m.type === 'quote').length
    const contactMessages = messages.filter((m: any) => m.type === 'contact').length

    // Get recent messages (last 10)
    const recentMessages = messages.slice(0, 10)

    return (
        <div className={styles.container}>
            <AdminSidebar />

            <div className={styles.mainWrapper}>
                <main className={styles.content}>
                    {/* Header */}
                    <div className={styles.header}>
                        <div>
                            <h1 className={styles.pageTitle}>Dashboard Overview</h1>
                            <p className={styles.pageSubtitle}>Welcome back! Here's what's happening today.</p>
                        </div>
                        <div className={styles.headerActions}>
                            <button className={styles.refreshBtn}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
                                </svg>
                                Refresh
                            </button>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className={styles.statsGrid}>
                        <div className={`${styles.statCard} ${styles.statCardPrimary}`}>
                            <div className={styles.statIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                            </div>
                            <div className={styles.statContent}>
                                <div className={styles.statLabel}>Total Messages</div>
                                <div className={styles.statValue}>{totalMessages}</div>
                            </div>
                        </div>

                        <div className={`${styles.statCard} ${styles.statCardSuccess}`}>
                            <div className={styles.statIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <div className={styles.statContent}>
                                <div className={styles.statLabel}>New Today</div>
                                <div className={styles.statValue}>{newToday}</div>
                            </div>
                        </div>

                        <div className={`${styles.statCard} ${styles.statCardWarning}`}>
                            <div className={styles.statIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                    <line x1="16" y1="13" x2="8" y2="13" />
                                    <line x1="16" y1="17" x2="8" y2="17" />
                                    <polyline points="10 9 9 9 8 9" />
                                </svg>
                            </div>
                            <div className={styles.statContent}>
                                <div className={styles.statLabel}>Pending Quotes</div>
                                <div className={styles.statValue}>{pendingQuotes}</div>
                            </div>
                        </div>

                        <div className={`${styles.statCard} ${styles.statCardInfo}`}>
                            <div className={styles.statIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <div className={styles.statContent}>
                                <div className={styles.statLabel}>Contact Inquiries</div>
                                <div className={styles.statValue}>{contactMessages}</div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className={styles.quickActions}>
                        <h2 className={styles.sectionTitle} style={{ borderTop: 'none', paddingTop: 0 }}>Quick Actions</h2>
                        <div className={styles.actionsGrid}>
                            <Link href="/admin/messages" className={styles.actionCard}>
                                <div className={styles.actionIcon}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <div className={styles.actionContent}>
                                    <div className={styles.actionTitle}>View Messages</div>
                                    <div className={styles.actionDesc}>Check all inquiries</div>
                                </div>
                            </Link>

                            <Link href="/admin/portfolio" className={styles.actionCard}>
                                <div className={styles.actionIcon}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                        <line x1="3" y1="9" x2="21" y2="9" />
                                        <line x1="9" y1="21" x2="9" y2="9" />
                                    </svg>
                                </div>
                                <div className={styles.actionContent}>
                                    <div className={styles.actionTitle}>Portfolio</div>
                                    <div className={styles.actionDesc}>Manage projects</div>
                                </div>
                            </Link>

                            <Link href="/admin/settings" className={styles.actionCard}>
                                <div className={styles.actionIcon}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                    </svg>
                                </div>
                                <div className={styles.actionContent}>
                                    <div className={styles.actionTitle}>Settings</div>
                                    <div className={styles.actionDesc}>Configure system</div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Recent Messages */}
                    <div style={{ marginTop: '2rem' }}>
                        <h2 className={styles.sectionTitle}>Recent Messages</h2>
                        <div className={styles.recentMessages}>
                        {recentMessages.length === 0 ? (
                            <div className={styles.emptyState}>
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                                <h3>No messages yet</h3>
                                <p>Customer submissions will appear here.</p>
                            </div>
                        ) : (
                            <div className={styles.tableWrapper}>
                                <table className={styles.messageList}>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Type</th>
                                            <th>Service</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recentMessages.map((msg: any) => (
                                            <tr key={msg.id}>
                                                <td>
                                                    <div className={styles.dateCell}>
                                                        {new Date(msg.created_at).toLocaleDateString('en-US', {
                                                            month: 'short',
                                                            day: 'numeric',
                                                            year: 'numeric'
                                                        })}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={styles.nameCell}>
                                                        <div className={styles.avatar}>
                                                            {msg.name.charAt(0).toUpperCase()}
                                                        </div>
                                                        <span>{msg.name}</span>
                                                    </div>
                                                </td>
                                                <td className={styles.emailCell}>{msg.email}</td>
                                                <td>
                                                    <span className={`${styles.badge} ${msg.type === 'quote' ? styles.badgeQuote : styles.badgeContact}`}>
                                                        {msg.type === 'quote' ? '💼 Quote' : '✉️ Contact'}
                                                    </span>
                                                </td>
                                                <td className={styles.serviceCell}>{msg.service || '—'}</td>
                                                <td>
                                                    <span className={`${styles.badge} ${styles.badgeNew}`}>
                                                        {msg.status || 'New'}
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className={styles.actionButtons}>
                                                        <a
                                                            href="/admin/messages"
                                                            className={styles.viewLink}
                                                        >
                                                            View / Delete
                                                        </a>
                                                        <a
                                                            href={`mailto:${msg.email}?subject=Re: ${msg.type === 'quote' ? 'Quote Request' : 'Contact Inquiry'}&body=Hi ${msg.name},%0D%0A%0D%0A`}
                                                            className={styles.iconBtn}
                                                            title={`Reply to ${msg.email}`}
                                                        >
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <polyline points="9 11 12 14 22 4" />
                                                                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
