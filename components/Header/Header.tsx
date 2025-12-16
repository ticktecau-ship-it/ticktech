'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'
import Button from '../Button/Button'

import { IconChevronDown } from '@tabler/icons-react'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        {
            href: '/services',
            label: 'Services',
            subItems: [
                { href: '/services/web-development', label: 'Web Development' },
                { href: '/services/seo', label: 'SEO Services' },
                { href: '/services/digital-marketing', label: 'Digital Marketing' },
                { href: '/services/content-writing', label: 'Content Writing' },
                { href: '/services/domain-hosting', label: 'Domain & Hosting' },
                { href: '/services/branding', label: 'Branding & Logo' }
            ]
        },
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/contact', label: 'Contact' },
    ]

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoIcon}>⚡</span>
                    <span className={styles.logoText}>
                        TickTec <span className="text-gradient">Digital</span>
                    </span>
                </Link>

                <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
                    {navLinks.map((link) => (
                        <div key={link.href} className={styles.navItem}>
                            {link.subItems ? (
                                <>
                                    <Link
                                        href={link.href}
                                        className={styles.navLink}
                                        onClick={(e) => {
                                            if (window.innerWidth <= 768) {
                                                e.preventDefault()
                                                setMobileServicesOpen(!mobileServicesOpen)
                                            } else {
                                                setIsMobileMenuOpen(false)
                                            }
                                        }}
                                        style={{ display: 'flex', alignItems: 'center' }}
                                    >
                                        {link.label}
                                        <IconChevronDown size={14} className={styles.dropdownArrow} />
                                    </Link>
                                    <div className={`${styles.dropdown} ${mobileServicesOpen ? styles.mobileOpen : ''}`}>
                                        {link.subItems.map((subItem) => (
                                            <Link
                                                key={subItem.href}
                                                href={subItem.href}
                                                className={styles.dropdownItem}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={link.href}
                                    className={styles.navLink}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            )}
                        </div>
                    ))}
                    <div className={styles.navCta}>
                        <Button href="/contact" size="sm">
                            Get Started
                        </Button>
                    </div>
                </nav>

                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}></span>
                </button>
            </div>
        </header>
    )
}
