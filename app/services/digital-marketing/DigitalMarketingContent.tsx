'use client'

import React, { useState, useEffect } from 'react'
import { motion, Variants, AnimatePresence } from 'framer-motion'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Card from '@/components/Card/Card'
import Button from '@/components/Button/Button'
import styles from './digital-marketing.module.css'
import commonStyles from '../service-detail.module.css'
import {
    IconBrandGoogle,
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconBrandTiktok,
    IconBrandYoutube,
    IconBrandPinterest,
    IconMail,
    IconChartBar,
    IconTarget,
    IconUsers,
    IconClick,
    IconMessageCircle,
    IconHeart,

    IconChevronDown,
    IconSearch,
    IconPalette,
    IconRocket,
    IconTrendingUp,
    IconBuildingStore,
    IconStethoscope,
    IconHome,
    IconSchool,
    IconDeviceDesktop,
    IconBriefcase
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

const MarketingGrowthEffect = () => {
    const [likes, setLikes] = useState(1200)
    const [clicks, setClicks] = useState(850)
    const [shares, setShares] = useState(45)
    const [phase, setPhase] = useState<'launch' | 'viral' | 'success'>('launch')
    const [emojis, setEmojis] = useState<{ id: number, type: string, x: number, y: number }[]>([])

    useEffect(() => {
        let interval: NodeJS.Timeout
        let emojiInterval: NodeJS.Timeout

        const startCampaign = () => {
            setPhase('launch')
            setLikes(1200)
            setClicks(850)
            setShares(45)

            setTimeout(() => {
                setPhase('viral')
                // Viral growth simulation
                interval = setInterval(() => {
                    setLikes(prev => prev + Math.floor(Math.random() * 50))
                    setClicks(prev => prev + Math.floor(Math.random() * 30))
                    setShares(prev => prev + Math.floor(Math.random() * 5))
                }, 100)

                emojiInterval = setInterval(() => {
                    const newEmoji = {
                        id: Date.now(),
                        type: ['❤️', '👍', '🔥', '🚀', '💰'][Math.floor(Math.random() * 5)],
                        x: Math.random() * 100,
                        y: Math.random() * 100
                    }
                    setEmojis(prev => [...prev, newEmoji])
                    setTimeout(() => {
                        setEmojis(prev => prev.filter(e => e.id !== newEmoji.id))
                    }, 2000)
                }, 300)

                setTimeout(() => {
                    clearInterval(interval)
                    clearInterval(emojiInterval)
                    setPhase('success')
                    setTimeout(startCampaign, 5000)
                }, 4000)
            }, 1000)
        }

        startCampaign()
        return () => {
            clearInterval(interval)
            clearInterval(emojiInterval)
        }
    }, [])

    return (
        <div className={styles.marketingCard}>
            <div className={styles.campaignHeader}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <div className={styles.avatarRing}>
                        <div className={styles.avatar}>🚀</div>
                    </div>
                    <div>
                        <div className={styles.headerTitle}>Viral Campaign</div>
                        <div className={styles.headerMeta}>Target: Global</div>
                    </div>
                </div>
                <div className={styles.liveBadge} style={{ opacity: phase === 'viral' ? 1 : 0.5 }}>
                    <div className={styles.liveDot}></div> LIVE
                </div>
            </div>

            <div className={styles.metricsGrid}>
                <div className={`${styles.metricItem} ${phase === 'viral' ? styles.active : ''}`}>
                    <span className={styles.metricValue}>{(likes / 1000).toFixed(1)}k</span>
                    <span className={styles.metricLabel}>Likes</span>
                </div>
                <div className={`${styles.metricItem} ${phase === 'viral' ? styles.active : ''}`}>
                    <span className={styles.metricValue}>{(clicks / 1000).toFixed(1)}k</span>
                    <span className={styles.metricLabel}>Clicks</span>
                </div>
                <div className={`${styles.metricItem} ${phase === 'viral' ? styles.active : ''}`}>
                    <span className={styles.metricValue}>{shares}</span>
                    <span className={styles.metricLabel}>Shares</span>
                </div>
                <div className={styles.metricItem}>
                    <span className={styles.metricValue}>4.8%</span>
                    <span className={styles.metricLabel}>Conv. Rate</span>
                </div>
            </div>

            {phase === 'viral' && (
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden' }}>
                    <AnimatePresence>
                        {emojis.map(emoji => (
                            <motion.div
                                key={emoji.id}
                                className={styles.floatingEmoji}
                                style={{ left: `${emoji.x}%`, top: `${70}%` }}
                                initial={{ opacity: 0, scale: 0.5, y: 0 }}
                                animate={{ opacity: 1, scale: 1.5, y: -100, rotate: Math.random() * 360 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                            >
                                {emoji.type}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            )}

            <AnimatePresence>
                {phase === 'success' && (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className={styles.roiBadge}
                    >
                        🚀 ROI +450% Exceeded!
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default function DigitalMarketingContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const faqs = [
        {
            question: "Which platforms are best for my business?",
            answer: "The best platforms depend on your target audience and business goals. We analyze your market to recommend the most effective mix of channels, whether it's Google Ads, Facebook, LinkedIn, or TikTok."
        },
        {
            question: "How long does it take to see results?",
            answer: "PPC campaigns can show results almost immediately, while SEO and social media strategies typically take 3-6 months to build significant momentum. We focus on both quick wins and long-term growth."
        },
        {
            question: "How do you measure success?",
            answer: "We focus on Key Performance Indicators (KPIs) that matter to your business, such as conversions, leads, ROI, and cost per acquisition (CPA), not just vanity metrics like likes or impressions."
        },
        {
            question: "What is the recommended budget?",
            answer: "Budgets vary widely based on your industry and competition. We help you determine a budget that allows for testing and optimization while maximizing your return on ad spend."
        },
        {
            question: "Do you provide monthly reports?",
            answer: "Yes, we provide comprehensive monthly reports and regular check-ins to review performance, discuss insights, and outline future strategy adjustments."
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
                                    📢 Amplify Your Brand
                                </motion.div>
                                <motion.h1 className={styles.heroTitle} variants={fadeInUp}>
                                    Reach the <br />
                                    <span className="text-gradient">Right Audience</span>
                                </motion.h1>
                                <motion.p className={styles.heroDescription} variants={fadeInUp}>
                                    Maximize your ROI with data-driven digital marketing campaigns.
                                    We help you connect with customers across all digital channels and
                                    drive measurable business growth.
                                </motion.p>
                                <motion.div className={styles.heroButtons} variants={fadeInUp}>
                                    <Button href="/contact" size="lg" variant="primary">
                                        Start Your Campaign
                                    </Button>
                                    <Button href="/portfolio" size="lg" variant="outline">
                                        View Success Stories
                                    </Button>
                                </motion.div>

                            </motion.div>

                            <motion.div
                                className={styles.heroVisual}
                                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >


                                <MarketingGrowthEffect />
                            </motion.div>
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
                            <h2>Our Digital Marketing <span className="text-gradient">Solutions</span></h2>
                            <p>Comprehensive strategies to grow your online presence</p>
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
                                    <div className={commonStyles.featureIcon}><IconUsers size={48} stroke={1.5} /></div>
                                    <h3>Social Media Marketing</h3>
                                    <p>Build engaged communities and drive conversions through strategic social media campaigns.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconClick size={48} stroke={1.5} /></div>
                                    <h3>PPC Advertising</h3>
                                    <p>Get instant visibility with targeted pay-per-click campaigns on Google, Facebook, and more.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconMail size={48} stroke={1.5} /></div>
                                    <h3>Email Marketing</h3>
                                    <p>Nurture leads and retain customers with personalized email campaigns that convert.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconTarget size={48} stroke={1.5} /></div>
                                    <h3>Content Marketing</h3>
                                    <p>Attract and engage your audience with valuable, SEO-optimized content that drives results.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconChartBar size={48} stroke={1.5} /></div>
                                    <h3>Analytics & Reporting</h3>
                                    <p>Track performance with detailed analytics and insights to optimize your campaigns.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconMessageCircle size={48} stroke={1.5} /></div>
                                    <h3>Conversion Optimization</h3>
                                    <p>Maximize ROI by optimizing your funnels and improving conversion rates.</p>
                                </Card>
                            </motion.div>
                        </motion.div>
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
                            <h2>How We <span className="text-gradient">Work</span></h2>
                            <p>Our proven process to deliver excellence</p>
                        </motion.div>

                        <div className={styles.processStepsContainer}>
                            {[
                                {
                                    icon: <IconSearch size={28} />,
                                    title: 'Strategy',
                                    desc: 'Analysis and planning.'
                                },
                                {
                                    icon: <IconPalette size={28} />,
                                    title: 'Content',
                                    desc: 'Creating engaging assets.'
                                },
                                {
                                    icon: <IconRocket size={28} />,
                                    title: 'Launch',
                                    desc: 'Executing the campaign.'
                                },
                                {
                                    icon: <IconTrendingUp size={28} />,
                                    title: 'Optimize',
                                    desc: 'Maximizing ROI.'
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

                {/* Merged Platforms & Industries Section */}
                <section className={commonStyles.techSection}>
                    <div className="container">
                        <div className={styles.splitSectionContainer}>
                            {/* Left Column: Platforms */}
                            <div className={styles.splitColumn}>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    style={{ marginBottom: '2rem', textAlign: 'left' }}
                                >
                                    <h2>Platforms We <span className="text-gradient">Master</span></h2>
                                    <p className={commonStyles.sectionDescription} style={{ margin: 0 }}>Expert campaigns across major channels</p>
                                </motion.div>
                                <motion.div
                                    className={styles.techCloud}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={staggerContainer}
                                    style={{ justifyContent: 'flex-start', gap: '2rem', padding: '1rem 0' }}
                                >
                                    {[
                                        { icon: IconBrandGoogle, name: 'Google Ads' },
                                        { icon: IconBrandFacebook, name: 'Facebook' },
                                        { icon: IconBrandInstagram, name: 'Instagram' },
                                        { icon: IconBrandLinkedin, name: 'LinkedIn' },
                                        { icon: IconBrandTwitter, name: 'Twitter/X' },
                                        { icon: IconBrandTiktok, name: 'TikTok' },
                                        { icon: IconBrandYoutube, name: 'YouTube' },
                                        { icon: IconBrandPinterest, name: 'Pinterest' }
                                    ].map((tech, index) => (
                                        <motion.div
                                            key={index}
                                            className={styles.techCloudItem}
                                            variants={fadeInUp}
                                        >
                                            <tech.icon className={styles.techCloudIcon} size={40} stroke={1.5} />
                                            {/* <span className={styles.techCloudLabel}>{tech.name}</span> */}
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Right Column: Industries */}
                            <div className={styles.splitColumn}>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    style={{ marginBottom: '2rem', textAlign: 'left' }}
                                >
                                    <h2>Industries We <span className="text-gradient">Serve</span></h2>
                                    <p className={commonStyles.sectionDescription} style={{ margin: 0 }}>Specialized strategies for diverse sectors</p>
                                </motion.div>

                                <div className={styles.industriesContainer} style={{ justifyContent: 'flex-start' }}>
                                    {[
                                        { icon: <IconBuildingStore size={20} />, name: 'E-commerce & Retail' },
                                        { icon: <IconDeviceDesktop size={20} />, name: 'SaaS & Tech' },
                                        { icon: <IconBriefcase size={20} />, name: 'Professional Services' },
                                        { icon: <IconStethoscope size={20} />, name: 'Healthcare' },
                                        { icon: <IconHome size={20} />, name: 'Real Estate' },
                                        { icon: <IconSchool size={20} />, name: 'Education' }
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
                            <h2>Why Choose Our <span className="text-gradient">Digital Marketing</span> Services?</h2>
                            <p>We deliver measurable results that impact your bottom line.</p>
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
                                    icon: <IconTrendingUp size={32} />,
                                    title: 'Multi-Channel Expertise',
                                    desc: 'We create cohesive campaigns across all digital channels (Social, Search, Email) for maximum impact and reach.'
                                },
                                {
                                    icon: <IconChartBar size={32} />,
                                    title: 'Data-Driven Decisions',
                                    desc: 'Every strategy and adjustment is backed by deep data analysis and real-time performance metrics.'
                                },
                                {
                                    icon: <IconPalette size={32} />,
                                    title: 'Creative Excellence',
                                    desc: 'Compelling ad copy, stunning visuals, and engaging content that captures attention and drives action.'
                                },
                                {
                                    icon: <IconTarget size={32} />,
                                    title: 'Targeted Campaigns',
                                    desc: 'We identify and reach your ideal customer profile with laser consistency, minimizing wasted ad spend.'
                                },
                                {
                                    icon: <IconHeart size={32} />,
                                    title: 'Brand Loyalty',
                                    desc: 'Beyond just sales, we help build a loyal community around your brand that advocates for you.'
                                },
                                {
                                    icon: <IconMessageCircle size={32} />,
                                    title: 'Transparent Reporting',
                                    desc: 'Crystal clear, detailed reports showing exactly where every dollar went and the return it generated.'
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
                            <p>Answers to your digital marketing queries</p>
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
                            <h2>Ready to Grow Your Business Online?</h2>
                            <p>Let's create a digital marketing strategy that delivers real results</p>
                            <div className={commonStyles.ctaButtons}>
                                <Button href="/contact" size="lg" variant="secondary">
                                    Get Free Consultation
                                </Button>
                                <Button href="/services" size="lg" variant="outline">
                                    View All Services
                                </Button>
                            </div>
                        </Card>
                    </div>
                </motion.section>
            </main >
            <Footer />
        </>
    )
}
