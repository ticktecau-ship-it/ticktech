import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import AdminSidebar from '../components/AdminSidebar'
import styles from '../dashboard/dashboard.module.css'

export default async function SettingsPage() {
    const cookieStore = cookies()
    const token = cookieStore.get('admin_token')

    if (!token) {
        redirect('/admin/login')
    }

    return (
        <div className={styles.container}>
            <AdminSidebar />

            <div className={styles.mainWrapper}>
                <main className={styles.content}>
                    <div className={styles.header}>
                        <div>
                            <h1 className={styles.pageTitle}>Settings</h1>
                            <p className={styles.pageSubtitle}>
                                Basic admin settings page. (No extra features added.)
                            </p>
                        </div>
                    </div>

                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <div className={styles.statContent}>
                                <div className={styles.statLabel}>Settings</div>
                                <div className={styles.statValue}>Coming soon</div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

