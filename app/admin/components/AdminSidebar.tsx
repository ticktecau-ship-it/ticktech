'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LogoutButton from '../dashboard/LogoutButton'
import styles from './AdminSidebar.module.css'

export default function AdminSidebar() {
    const pathname = usePathname()

    const isActive = (path: string) => pathname === path

    const menuItems = [
        {
            name: 'Dashboard', path: '/admin/dashboard', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
            )
        },
        {
            name: 'Messages', path: '/admin/messages', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            )
        },
        {
            name: 'Settings', path: '/admin/settings', icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M12 1v6m0 6v6m5.2-13.2l-4.2 4.2m0 6l-4.2 4.2M23 12h-6m-6 0H1m18.2 5.2l-4.2-4.2m0-6l-4.2-4.2"></path>
                </svg>
            )
        },
    ]

    return (
        <aside className={styles.sidebar}>
            {/* Brand */}
            <div className={styles.brand}>
                <div className={styles.brandContent}>
                    <span className={styles.brandLogo}>TickTec</span>
                    <span className={styles.brandBadge}>Admin</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className={styles.nav}>
                <div className={styles.navLabel}>Menu</div>
                <div className={styles.navItems}>
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`${styles.navLink} ${isActive(item.path) ? styles.navLinkActive : ''}`}
                        >
                            <span className={styles.navIcon}>
                                {item.icon}
                            </span>
                            <span className={styles.navText}>{item.name}</span>
                        </Link>
                    ))}
                </div>
            </nav>

            {/* User & Logout */}
            <div className={styles.userSection}>
                <div className={styles.userInfo}>
                    <div className={styles.userAvatar}>
                        AD
                    </div>
                    <div className={styles.userDetails}>
                        <div className={styles.userName}>Admin User</div>
                        <div className={styles.userEmail}>admin@ticktec.com</div>
                    </div>
                </div>
                <LogoutButton />
            </div>
        </aside>
    )
}
