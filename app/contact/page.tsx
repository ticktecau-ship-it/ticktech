import type { Metadata } from 'next'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Card from '@/components/Card/Card'
import ContactForm from '@/components/ContactForm/ContactForm'
import styles from './contact.module.css'

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with TickTec Digital Solution. Let\'s discuss how we can help transform your digital presence and grow your business.',
}

export default function ContactPage() {
    const contactInfo = [
        {
            icon: '📧',
            title: 'Email',
            value: 'info@tictacdigital.com',
            link: 'mailto:info@tictacdigital.com'
        },
        {
            icon: '📱',
            title: 'Phone',
            value: '+1 (234) 567-890',
            link: 'tel:+1234567890'
        },
        {
            icon: '📍',
            title: 'Address',
            value: '123 Digital Street, Tech City, TC 12345',
            link: null
        }
    ]

    const officeHours = [
        { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
        { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
        { day: 'Sunday', hours: 'Closed' }
    ]

    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className="container">
                        <div className={styles.heroContent}>
                            <h1>
                                Get In <span className="text-gradient">Touch</span>
                            </h1>
                            <p className={styles.heroDescription}>
                                Ready to transform your digital presence? We'd love to hear from you.
                                Fill out the form below and our team will get back to you within 24 hours.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="section">
                    <div className="container">
                        <div className={styles.contactGrid}>
                            {/* Contact Form */}
                            <div className={styles.formSection}>
                                <h2>Send Us a Message</h2>
                                <p className={styles.formDescription}>
                                    Tell us about your project and we'll get back to you as soon as possible.
                                </p>
                                <ContactForm />
                            </div>

                            {/* Contact Info */}
                            <div className={styles.infoSection}>
                                <div className={styles.infoCard}>
                                    <h3>Contact Information</h3>
                                    <div className={styles.contactList}>
                                        {contactInfo.map((info, index) => (
                                            <div key={index} className={styles.contactItem}>
                                                <span className={styles.contactIcon}>{info.icon}</span>
                                                <div>
                                                    <h4>{info.title}</h4>
                                                    {info.link ? (
                                                        <a href={info.link} className={styles.contactValue}>
                                                            {info.value}
                                                        </a>
                                                    ) : (
                                                        <p className={styles.contactValue}>{info.value}</p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.infoCard}>
                                    <h3>Office Hours</h3>
                                    <div className={styles.hoursList}>
                                        {officeHours.map((schedule, index) => (
                                            <div key={index} className={styles.hoursItem}>
                                                <span className={styles.day}>{schedule.day}</span>
                                                <span className={styles.hours}>{schedule.hours}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.infoCard}>
                                    <h3>Follow Us</h3>
                                    <div className={styles.socialLinks}>
                                        <a href="#" className={styles.socialLink} aria-label="Facebook">📘</a>
                                        <a href="#" className={styles.socialLink} aria-label="Twitter">🐦</a>
                                        <a href="#" className={styles.socialLink} aria-label="Instagram">📷</a>
                                        <a href="#" className={styles.socialLink} aria-label="LinkedIn">💼</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className={styles.faqSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2>Frequently Asked <span className="text-gradient">Questions</span></h2>
                        </div>
                        <div className={styles.faqGrid}>
                            <Card variant="default">
                                <h4>How long does a typical project take?</h4>
                                <p>Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while complex applications can take 2-3 months or more.</p>
                            </Card>
                            <Card variant="default">
                                <h4>What is your pricing structure?</h4>
                                <p>We offer customized pricing based on your specific needs. Contact us for a detailed quote tailored to your project requirements.</p>
                            </Card>
                            <Card variant="default">
                                <h4>Do you offer ongoing support?</h4>
                                <p>Yes! We provide maintenance packages and ongoing support to ensure your digital solutions continue to perform optimally.</p>
                            </Card>
                            <Card variant="default">
                                <h4>Can you work with our existing team?</h4>
                                <p>Absolutely! We're experienced in collaborating with in-house teams and can seamlessly integrate into your workflow.</p>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
