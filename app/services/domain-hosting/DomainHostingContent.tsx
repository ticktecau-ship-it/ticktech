'use client'

import React, { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Card from '@/components/Card/Card'
import Button from '@/components/Button/Button'
import styles from './domain-hosting.module.css'
import commonStyles from '../service-detail.module.css'
import {
    IconWorld,
    IconServer,
    IconDeviceDesktop,
    IconDatabase,
    IconLock,
    IconLifebuoy,
    IconCloudLock,
    IconRocket,
    IconCloud,
    IconShieldLock,
    IconWifi,
    IconCheck,
    IconShieldCheck,
    IconChevronDown,
    IconSearch,
    IconBolt,
    IconHeadset,
    IconBuildingStore,
    IconBriefcase,
    IconPencil,
    IconCode
} from '@tabler/icons-react'

// Animation Variants
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
}

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

// Custom specialized card animation
const cardVariant: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
        rotateX: -10
    },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20
        }
    }
}

export default function DomainHostingContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const faqs = [
        {
            question: "What is the difference between shared and dedicated hosting?",
            answer: "Shared hosting means your website shares server resources with other sites, making it cost-effective for smaller sites. Dedicated hosting gives you an entire server for yourself, offering maximum performance and control for larger applications."
        },
        {
            question: "Do you offer free SSL certificates?",
            answer: "Yes! All our hosting plans come with free Let's Encrypt SSL certificates to ensure your website is secure and trusted by visitors and search engines."
        },
        {
            question: "Can I transfer my existing domain to you?",
            answer: "Absolutely. We offer free domain transfer services and our support team will guide you through the entire process to ensure zero downtime."
        },
        {
            question: "Do you provide backups?",
            answer: "Yes, we perform daily automated backups of your website and database. You can easily restore your site from a backup point with just one click."
        },
        {
            question: "Is there a money-back guarantee?",
            answer: "We offer a 30-day money-back guarantee on all our hosting plans. If you're not satisfied, you can cancel within the first month for a full refund."
        }
    ]

    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* Modern Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroBackground}>
                        <div className={`${styles.heroBlob} ${styles.heroBlob1}`}></div>
                        <div className={`${styles.heroBlob} ${styles.heroBlob2}`}></div>
                    </div>

                    <div className="container">
                        <div className={styles.heroContent}>
                            <motion.div
                                className={styles.heroText}
                                initial="hidden"
                                animate="visible"
                                variants={staggerContainer}
                            >
                                <motion.div className={styles.badge} variants={fadeInUp}>
                                    ⚡ High Performance Infrastructure
                                </motion.div>
                                <motion.h1 className={styles.heroTitle} variants={fadeInUp}>
                                    Secure, Scalable <br />
                                    <span className="text-gradient">Cloud Hosting</span>
                                </motion.h1>
                                <motion.p className={styles.heroDescription} variants={fadeInUp}>
                                    Experience lightning-fast speeds and 99.9% uptime with our premium hosting solutions.
                                    Whether you're launching a startup or scaling an enterprise, our global CDN and
                                    dedicated support have you covered.
                                </motion.p>
                                <motion.div className={styles.heroButtons} variants={fadeInUp}>
                                    <Button href="/contact" size="lg" variant="primary">
                                        Deploy Now
                                    </Button>
                                    <Button href="/portfolio" size="lg" variant="outline">
                                        Explore Plans
                                    </Button>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                className={styles.heroVisual}
                                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >


                                {/* Futuristic HUD Dashboard Card */}
                                <div className={styles.serverHud}>
                                    <div className={styles.scanLine}></div>

                                    <div className={styles.hudHeader}>
                                        <div className={styles.hudTitle}>
                                            <div className={styles.liveIndicator}></div>
                                            SERVER_STATUS: ONLINE
                                        </div>
                                        <div className={styles.hudControls}>
                                            <div className={styles.controlDot} style={{ background: '#ef4444' }}></div>
                                            <div className={styles.controlDot} style={{ background: '#f59e0b' }}></div>
                                            <div className={styles.controlDot} style={{ background: '#10b981' }}></div>
                                        </div>
                                    </div>

                                    <div className={styles.hudBody}>
                                        <div className={styles.hudGrid}>
                                            {/* Terminal Effect */}
                                            <div className={styles.terminal}>
                                                <div className={styles.terminalHeader}>root@ticktec-server:~#</div>
                                                <span className={styles.codeLine}>&gt; initializing systems...</span>
                                                <span className={styles.codeLine}>&gt; connecting global CDN...</span>
                                                <span className={styles.codeLine} style={{ color: '#38bdf8' }}>&gt; optimization complete</span>
                                                <span className={styles.codeLine} style={{ color: '#facc15' }}>&gt; waiting for requests...</span>
                                                <span className={styles.codeLine} style={{ animationDelay: '4.5s' }}>&gt; _</span>
                                            </div>

                                            {/* Load Graph Visual */}
                                            <div className={styles.loadGraph}>
                                                <div className={styles.graphBars}>
                                                    <div className={styles.bar}></div>
                                                    <div className={styles.bar} style={{ height: '40%' }}></div>
                                                    <div className={styles.bar} style={{ height: '70%' }}></div>
                                                    <div className={styles.bar} style={{ height: '50%' }}></div>
                                                    <div className={styles.bar} style={{ height: '85%' }}></div>
                                                    <div className={styles.bar} style={{ height: '60%' }}></div>
                                                </div>
                                                <div className={styles.loadLabel}>
                                                    <span>CPU Load</span>
                                                    <span style={{ color: '#10b981' }}>12%</span>
                                                </div>
                                            </div>

                                            {/* Uptime Badge */}
                                            <div className={styles.uptimeContainer}>
                                                <div className={styles.uptimeLeft}>
                                                    <div className={styles.shieldIcon}>
                                                        <IconShieldCheck size={24} />
                                                    </div>
                                                    <div className={styles.uptimeText}>
                                                        <h4>Guaranteed Uptime</h4>
                                                        <span>Monitoring Active</span>
                                                    </div>
                                                </div>
                                                <div className={styles.checkMark}><IconCheck size={18} stroke={3} /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="section" style={{ background: 'var(--background-secondary)' }}>
                    <div className="container">
                        <motion.div
                            className={commonStyles.sectionHeader}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2>Easy <span className="text-gradient">Deployment</span></h2>
                            <p>Get your site online in minutes</p>
                        </motion.div>

                        <div className={styles.processStepsContainer}>
                            {[
                                {
                                    icon: <IconSearch size={28} />,
                                    title: 'Choose Plan',
                                    desc: 'Select the hosting package that fits your needs.'
                                },
                                {
                                    icon: <IconServer size={28} />,
                                    title: 'Configure',
                                    desc: 'Set up your domain and server preferences.'
                                },
                                {
                                    icon: <IconRocket size={28} />,
                                    title: 'Deploy',
                                    desc: 'Launch your website with one click.'
                                },
                                {
                                    icon: <IconWifi size={28} />,
                                    title: 'Go Live',
                                    desc: 'Your site is now instantly accessible worldwide.'
                                }
                            ].map((step, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.processStep}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <div className={styles.processStepIcon}>
                                        {step.icon}
                                    </div>
                                    <div className={styles.processStepContent}>
                                        <h3>{step.title}</h3>
                                        <p>{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="section">
                    <div className="container">
                        <motion.div
                            className={commonStyles.sectionHeader}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2>Our Hosting <span className="text-gradient">Solutions</span></h2>
                            <p>Powerful, reliable hosting for every need</p>
                        </motion.div>
                        <motion.div
                            className={commonStyles.featuresGrid}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconWorld size={48} stroke={1.5} /></div>
                                    <h3>Domain Registration</h3>
                                    <p>Register your perfect domain name with all major extensions (.com, .net, .org, and more).</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconDeviceDesktop size={48} stroke={1.5} /></div>
                                    <h3>Shared Hosting</h3>
                                    <p>Affordable, reliable hosting perfect for small to medium-sized websites and blogs.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconServer size={48} stroke={1.5} /></div>
                                    <h3>VPS Hosting</h3>
                                    <p>Dedicated resources and enhanced performance for growing businesses and applications.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconDatabase size={48} stroke={1.5} /></div>
                                    <h3>Dedicated Servers</h3>
                                    <p>Maximum power and control with fully dedicated server resources for enterprise needs.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconLock size={48} stroke={1.5} /></div>
                                    <h3>SSL Certificates</h3>
                                    <p>Secure your website and build trust with industry-standard SSL encryption.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconLifebuoy size={48} stroke={1.5} /></div>
                                    <h3>24/7 Technical Support</h3>
                                    <p>Round-the-clock expert support to keep your website running smoothly.</p>
                                </Card>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Features Cloud Section */}
                <section className={commonStyles.techSection}>
                    <div className="container">
                        <motion.div
                            className={commonStyles.sectionHeader}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2>Hosting <span className="text-gradient">Features</span></h2>
                            <p>Everything you need for a successful online presence</p>
                        </motion.div>
                        <motion.div
                            className={styles.techCloud}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            {[
                                { icon: IconWifi, name: '99.9% Uptime' },
                                { icon: IconDatabase, name: 'SSD Storage' },
                                { icon: IconCloudLock, name: 'Free Backups' },
                                { icon: IconDeviceDesktop, name: 'cPanel Access' },
                                { icon: IconServer, name: 'Email Hosting' },
                                { icon: IconWorld, name: 'CDN Integration' },
                                { icon: IconShieldLock, name: 'DDoS Protection' },
                                { icon: IconRocket, name: 'Easy Migration' }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.techCloudItem}
                                    variants={fadeInUp}
                                >
                                    <item.icon className={styles.techCloudIcon} size={48} stroke={1.5} />
                                    <span className={styles.techCloudLabel}>{item.name}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Industries/Trust Section */}
                <section className="section">
                    <div className="container">
                        <motion.div
                            className={commonStyles.sectionHeader}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2>Who <span className="text-gradient">Trusts Us</span></h2>
                            <p>Reliable hosting for every type of website</p>
                        </motion.div>

                        <div className={styles.industriesContainer}>
                            {[
                                { icon: <IconBuildingStore size={20} />, name: 'E-commerce Stores' },
                                { icon: <IconRocket size={20} />, name: 'Tech Startups' },
                                { icon: <IconBriefcase size={20} />, name: 'Small Business' },
                                { icon: <IconServer size={20} />, name: 'Enterprise' },
                                { icon: <IconPencil size={20} />, name: 'Bloggers' },
                                { icon: <IconCode size={20} />, name: 'Developers' }
                            ].map((industry, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.industryPill}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className={styles.industryPillIcon}>{industry.icon}</div>
                                    <h3>{industry.name}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="section">
                    <div className="container">
                        <motion.div
                            className={commonStyles.sectionHeader}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2>Why Choose Our <span className="text-gradient">Hosting Services</span>?</h2>
                            <p>Performance, security, and support you can rely on.</p>
                        </motion.div>

                        <motion.div
                            className={styles.benefitsListModern}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            {[
                                {
                                    icon: <IconBolt size={32} />,
                                    title: 'Lightning Fast',
                                    desc: 'SSD storage and global CDN ensure your site loads instantly for users everywhere.'
                                },
                                {
                                    icon: <IconWifi size={32} />,
                                    title: '99.9% Uptime',
                                    desc: 'We guarantee your website stays online with redundant infrastructure.'
                                },
                                {
                                    icon: <IconShieldLock size={32} />,
                                    title: 'Enhanced Security',
                                    desc: 'Advanced firewalls and malware scanning keep your data safe 24/7.'
                                },
                                {
                                    icon: <IconServer size={32} />,
                                    title: 'Scalable Growth',
                                    desc: 'Upgrade resources instantly as your traffic grows without downtime.'
                                },
                                {
                                    icon: <IconHeadset size={32} />,
                                    title: 'Expert Support',
                                    desc: 'Our technical team is available 24/7 to solve any hosting issues.'
                                },
                                {
                                    icon: <IconDeviceDesktop size={32} />,
                                    title: 'Easy Management',
                                    desc: 'Intuitive cPanel dashboard makes managing your site a breeze.'
                                }
                            ].map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.benefitRow}
                                    variants={fadeInUp}
                                >
                                    <div className={styles.benefitNumber}>
                                        {(index + 1).toString().padStart(2, '0')}
                                    </div>
                                    <div className={styles.benefitTitleWrapper}>
                                        <div className={styles.benefitRowIcon}>{benefit.icon}</div>
                                        <h3>{benefit.title}</h3>
                                    </div>
                                    <div className={styles.benefitRowDesc}>
                                        {benefit.desc}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className={commonStyles.faqSection}>
                    <div className="container">
                        <motion.div
                            className={commonStyles.sectionHeader}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2>Frequently Asked <span className="text-gradient">Questions</span></h2>
                            <p>Answers to your hosting and domain questions</p>
                        </motion.div>

                        <div className={commonStyles.faqContainer}>
                            {faqs.map((faq, index) => (
                                <div key={index} className={commonStyles.faqItem}>
                                    <button
                                        className={commonStyles.faqQuestion}
                                        onClick={() => toggleFaq(index)}
                                    >
                                        {faq.question}
                                        <IconChevronDown
                                            className={`${commonStyles.faqIcon} ${openFaq === index ? commonStyles.open : ''}`}
                                            size={20}
                                        />
                                    </button>
                                    <motion.div
                                        className={commonStyles.faqAnswer}
                                        initial={false}
                                        animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className={commonStyles.faqAnswerContent}>
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <motion.section
                    className={commonStyles.cta}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <div className="container">
                        <Card variant="gradient" className={commonStyles.ctaCard}>
                            <h2>Ready to Get Your Website Online?</h2>
                            <p>Choose the perfect hosting plan for your needs</p>
                            <div className={commonStyles.ctaButtons}>
                                <Button href="/contact" size="lg" variant="secondary">
                                    View Hosting Plans
                                </Button>
                                <Button href="/services" size="lg" variant="outline">
                                    View All Services
                                </Button>
                            </div>
                        </Card>
                    </div>
                </motion.section>
            </main>
            <Footer />
        </>
    )
}
