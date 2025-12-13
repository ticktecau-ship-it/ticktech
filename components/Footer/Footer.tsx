import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const services = [
        'Web Development',
        'SEO Services',
        'Digital Marketing',
        'Content Writing',
        'Domain & Hosting',
        'Branding & Logo Design'
    ]

    const quickLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/services', label: 'Services' },
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/contact', label: 'Contact' },
    ]

    const socialLinks = [
        { icon: '📘', label: 'Facebook', href: '#' },
        { icon: '🐦', label: 'Twitter', href: '#' },
        { icon: '📷', label: 'Instagram', href: '#' },
        { icon: '💼', label: 'LinkedIn', href: '#' },
    ]

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <div className={styles.brand}>
                            <span className={styles.brandIcon}>⚡</span>
                            <h3>TickTec Digital</h3>
                        </div>
                        <p className={styles.description}>
                            Transforming businesses through innovative digital solutions.
                            We craft exceptional experiences that drive growth and success.
                        </p>
                        <div className={styles.social}>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className={styles.socialLink}
                                    aria-label={social.label}
                                    title={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Services</h4>
                        <ul className={styles.list}>
                            {services.map((service) => (
                                <li key={service}>
                                    <Link href="/services" className={styles.link}>
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Quick Links</h4>
                        <ul className={styles.list}>
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={styles.link}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Get In Touch</h4>
                        <ul className={styles.list}>
                            <li className={styles.contactItem}>
                                <span className={styles.contactIcon}>📧</span>
                                <a href="mailto:info@tictacdigital.com" className={styles.link}>
                                    info@tictacdigital.com
                                </a>
                            </li>
                            <li className={styles.contactItem}>
                                <span className={styles.contactIcon}>📱</span>
                                <a href="tel:+1234567890" className={styles.link}>
                                    +1 (234) 567-890
                                </a>
                            </li>
                            <li className={styles.contactItem}>
                                <span className={styles.contactIcon}>📍</span>
                                <span className={styles.contactText}>
                                    123 Digital Street, Tech City
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {currentYear} TickTec Digital Solution. All rights reserved.
                    </p>
                    <div className={styles.bottomLinks}>
                        <Link href="#" className={styles.bottomLink}>Privacy Policy</Link>
                        <Link href="#" className={styles.bottomLink}>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
