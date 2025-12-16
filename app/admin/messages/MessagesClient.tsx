'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './messages.module.css'

interface Message {
    id: string
    created_at: string
    type: string
    name: string
    email: string
    phone?: string
    service?: string
    message: string
    status?: string
}

export default function MessagesClient({ initialMessages }: { initialMessages: Message[] }) {
    const [messages, setMessages] = useState<Message[]>(initialMessages)
    const [deleting, setDeleting] = useState<string | null>(null)
    const router = useRouter()

    const handleDelete = async (messageId: string) => {
        if (!confirm('Are you sure you want to delete this message?')) {
            return
        }

        setDeleting(messageId)

        try {
            const response = await fetch('/api/admin/delete-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ messageId }),
            })

            if (response.ok) {
                // Remove from local state
                setMessages(messages.filter(msg => msg.id !== messageId))
            } else {
                alert('Failed to delete message')
            }
        } catch (error) {
            console.error('Delete error:', error)
            alert('Failed to delete message')
        } finally {
            setDeleting(null)
        }
    }

    // Calculate stats
    const totalMessages = messages.length
    const unreadMessages = messages.filter((m: any) => !m.read).length
    const quoteRequests = messages.filter((m: any) => m.type === 'quote').length
    const contactMessages = messages.filter((m: any) => m.type === 'contact').length

    return (
        <>
            {/* Stats Overview */}
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

                <div className={`${styles.statCard} ${styles.statCardWarning}`}>
                    <div className={styles.statIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="16" x2="12" y2="12" />
                            <line x1="12" y1="8" x2="12.01" y2="8" />
                        </svg>
                    </div>
                    <div className={styles.statContent}>
                        <div className={styles.statLabel}>Unread</div>
                        <div className={styles.statValue}>{unreadMessages}</div>
                    </div>
                </div>

                <div className={`${styles.statCard} ${styles.statCardInfo}`}>
                    <div className={styles.statIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                        </svg>
                    </div>
                    <div className={styles.statContent}>
                        <div className={styles.statLabel}>Quote Requests</div>
                        <div className={styles.statValue}>{quoteRequests}</div>
                    </div>
                </div>

                <div className={`${styles.statCard} ${styles.statCardSuccess}`}>
                    <div className={styles.statIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                    </div>
                    <div className={styles.statContent}>
                        <div className={styles.statLabel}>Contact Messages</div>
                        <div className={styles.statValue}>{contactMessages}</div>
                    </div>
                </div>
            </div>

            {/* Messages List */}
            <div className={styles.messagesSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>All Messages</h2>
                    <div className={styles.searchBox}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.35-4.35" />
                        </svg>
                        <input type="text" placeholder="Search messages..." />
                    </div>
                </div>

                {messages.length === 0 ? (
                    <div className={styles.emptyState}>
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        <h3>No messages yet</h3>
                        <p>Customer inquiries and quote requests will appear here.</p>
                    </div>
                ) : (
                    <div className={styles.messagesList}>
                        {messages.map((msg: any, index: number) => (
                            <div key={msg.id || index} className={styles.messageCard}>
                                <div className={styles.messageHeader}>
                                    <div className={styles.messageUser}>
                                        <div className={styles.userAvatar}>
                                            {msg.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div className={styles.userInfo}>
                                            <div className={styles.userName}>{msg.name}</div>
                                            <div className={styles.userEmail}>{msg.email}</div>
                                        </div>
                                    </div>
                                    <div className={styles.messageMeta}>
                                        <span className={`${styles.badge} ${msg.type === 'quote' ? styles.badgeQuote : styles.badgeContact}`}>
                                            {msg.type === 'quote' ? '💼 Quote Request' : '✉️ Contact'}
                                        </span>
                                        <div className={styles.messageDate}>
                                            {new Date(msg.created_at).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.messageBody}>
                                    {msg.service && (
                                        <div className={styles.messageService}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <polyline points="12 6 12 12 16 14" />
                                            </svg>
                                            Service: <strong>{msg.service}</strong>
                                        </div>
                                    )}
                                    {msg.message && (
                                        <div className={styles.messageText}>
                                            {msg.message}
                                        </div>
                                    )}
                                    {msg.phone && (
                                        <div className={styles.messagePhone}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                            </svg>
                                            {msg.phone}
                                        </div>
                                    )}
                                </div>

                                <div className={styles.messageActions}>
                                    <a
                                        href={`mailto:${msg.email}?subject=Re: ${msg.type === 'quote' ? 'Quote Request' : 'Contact Inquiry'}&body=Hi ${msg.name},%0D%0A%0D%0A`}
                                        className={styles.actionBtn}
                                        title={`Reply to ${msg.email}`}
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="9 11 12 14 22 4" />
                                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                        </svg>
                                        Reply
                                    </a>
                                    <button
                                        className={`${styles.actionBtn} ${styles.deleteBtn}`}
                                        onClick={() => handleDelete(msg.id)}
                                        disabled={deleting === msg.id}
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M3 6h18" />
                                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                        </svg>
                                        {deleting === msg.id ? 'Deleting...' : 'Delete'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}
