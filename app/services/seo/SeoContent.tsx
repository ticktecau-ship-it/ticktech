'use client'

import React, { useState, useEffect } from 'react'
import { motion, Variants } from 'framer-motion'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Card from '@/components/Card/Card'
import Button from '@/components/Button/Button'
import styles from './seo.module.css'
import commonStyles from '../service-detail.module.css'
import {
    IconSearch,
    IconChartBar,
    IconTarget,
    IconLink,
    IconDeviceDesktopAnalytics,
    IconWorld,
    IconBrandGoogle,
    IconTrendingUp,
    IconReportAnalytics,

    IconChevronDown,
    IconPalette,
    IconRocket,
    IconAward,
    IconBuildingStore,
    IconBriefcase,
    IconStethoscope,
    IconHome,
    IconSchool
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

const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 }
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

const SeoGrowthEffect = () => {
    const [score, setScore] = useState(0)
    const [phase, setPhase] = useState<'analyzing' | 'optimizing' | 'success'>('analyzing')

    useEffect(() => {
        let interval: NodeJS.Timeout

        const startSimulation = () => {
            setScore(0)
            setPhase('analyzing')

            // Phase 1: Analyzing (0-40%)
            let current = 0
            interval = setInterval(() => {
                if (current < 45) {
                    current += 1
                    setScore(current)
                } else {
                    // Phase 2: Optimizing (45-85%)
                    clearInterval(interval)
                    setPhase('optimizing')

                    let optInterval = setInterval(() => {
                        if (current < 92) {
                            current += (Math.random() > 0.5 ? 2 : 1)
                            setScore(current)
                        } else {
                            // Phase 3: Success (92-100%)
                            clearInterval(optInterval)
                            setPhase('success')
                            setScore(98)

                            // Reset loop
                            setTimeout(startSimulation, 6000)
                        }
                    }, 80)
                }
            }, 60)
        }

        startSimulation()
        return () => clearInterval(interval)
    }, [])

    return (
        <div className={styles.seoCard}>
            <div className={styles.cardGlow}></div>

            {/* Progress Circle Layer */}
            <div className={styles.scoreContainer}>
                <svg className={styles.progressRing} width="200" height="200">
                    <circle
                        className={styles.progressRingBackground}
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="12"
                        fill="transparent"
                        r="90"
                        cx="100"
                        cy="100"
                    />
                    <circle
                        className={styles.progressRingCircle}
                        stroke={phase === 'success' ? '#22c55e' : '#8b5cf6'}
                        strokeWidth="12"
                        fill="transparent"
                        r="90"
                        cx="100"
                        cy="100"
                        style={{
                            strokeDasharray: `${2 * Math.PI * 90} ${2 * Math.PI * 90}`,
                            strokeDashoffset: (2 * Math.PI * 90) - ((score / 100) * 2 * Math.PI * 90),
                            transition: 'stroke-dashoffset 0.1s ease, stroke 0.5s ease'
                        }}
                    />
                </svg>

                {/* Center Content */}
                <div className={styles.scoreContent}>
                    {phase === 'success' ? (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className={styles.rankBadge}
                        >
                            <span className={styles.rankLabel}>Rank</span>
                            <span className={styles.rankValue}>#1</span>
                        </motion.div>
                    ) : (
                        <div className={styles.scoreValueContainer}>
                            <span className={styles.scoreValue}>{score}</span>
                            <span className={styles.scoreLabel}>SEO Score</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Floating Keyword Chips - Removed */}
            <div className={styles.keywordsContainer}>
                <div className={styles.statusText}>
                    {phase === 'analyzing' && "Running Site Audit..."}
                    {phase === 'optimizing' && "Optimizing Content..."}
                    {phase === 'success' && "Market Dominated"}
                </div>
            </div>
        </div>
    )
}



export default function SeoContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const faqs = [
        {
            question: "How long does it take for SEO to work?",
            answer: "SEO is a long-term strategy. Typically, you start seeing initial improvements in 3-4 months, with significant results in 6-12 months, depending on your industry and competition."
        },
        {
            question: "Is your SEO white-hat?",
            answer: "Strictly. We only use ethical, white-hat SEO techniques approved by Google. We never use risky shortcuts that could get your site penalized."
        },
        {
            question: "Do you guarantee #1 rankings?",
            answer: "No reputable agency can guarantee a #1 ranking because Google's algorithms are constantly changing. However, we guarantee we will implement the best strategies to maximize your chances of ranking highly."
        },
        {
            question: "Do I need SEO if I'm running ads?",
            answer: "Yes. Ads stop bringing traffic the moment you stop paying. SEO provides long-term, sustainable organic traffic and builds credibility that ads cannot match."
        },
        {
            question: "What is included in your SEO audit?",
            answer: "Our audit covers technical issues, on-page optimization, content quality, backlink profile, and competitor analysis to give you a complete picture of your SEO health."
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
                                    📈 Proven Results
                                </motion.div>
                                <motion.h1 className={styles.heroTitle} variants={fadeInUp}>
                                    Master the <br />
                                    <span className="text-gradient">Search Engines</span>
                                </motion.h1>
                                <motion.p className={styles.heroDescription} variants={fadeInUp}>
                                    Boost your online visibility and drive organic traffic with our comprehensive
                                    SEO strategies. We help your business rank higher in search results and attract
                                    more qualified leads.
                                </motion.p>
                                <motion.div className={styles.heroButtons} variants={fadeInUp}>
                                    <Button href="/contact" size="lg" variant="primary">
                                        Get SEO Audit
                                    </Button>
                                    <Button href="/portfolio" size="lg" variant="outline">
                                        View Case Studies
                                    </Button>
                                </motion.div>

                            </motion.div>

                            <motion.div
                                className={styles.heroVisual}
                                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >


                                <SeoGrowthEffect />
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
                            <h2>Our SEO <span className="text-gradient">Services</span></h2>
                            <p>Comprehensive SEO solutions to dominate search rankings</p>
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
                                    <div className={commonStyles.featureIcon}><IconTarget size={48} stroke={1.5} /></div>
                                    <h3>Keyword Research</h3>
                                    <p>In-depth analysis to identify high-value keywords that drive targeted traffic to your site.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconDeviceDesktopAnalytics size={48} stroke={1.5} /></div>
                                    <h3>On-Page Optimization</h3>
                                    <p>Optimize your content, meta tags, and site structure for maximum search engine visibility.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconReportAnalytics size={48} stroke={1.5} /></div>
                                    <h3>Technical SEO</h3>
                                    <p>Fix technical issues, improve site speed, and ensure search engines can crawl your site efficiently.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconLink size={48} stroke={1.5} /></div>
                                    <h3>Link Building</h3>
                                    <p>Build high-quality backlinks from authoritative sites to boost your domain authority.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconWorld size={48} stroke={1.5} /></div>
                                    <h3>Local SEO</h3>
                                    <p>Dominate local search results and attract customers in your geographic area.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconChartBar size={48} stroke={1.5} /></div>
                                    <h3>SEO Audits & Reporting</h3>
                                    <p>Regular audits and detailed reports to track progress and identify opportunities.</p>
                                </Card>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Process Section */}
                {/* Process Section */}
                <section className={commonStyles.techSection} style={{ background: 'var(--background-secondary)' }}>
                    <div className="container">
                        <motion.div
                            className={commonStyles.sectionHeader}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2>Our SEO <span className="text-gradient">Process</span></h2>
                            <p>A proven methodology for sustainable results</p>
                        </motion.div>

                        <div className={styles.processStepsContainer}>
                            {[
                                {
                                    icon: <IconSearch size={28} />,
                                    title: 'Audit & Audit',
                                    desc: 'Deep dive into your current site performance.'
                                },
                                {
                                    icon: <IconTarget size={28} />,
                                    title: 'Strategy',
                                    desc: 'Defining keywords and competitor gaps.'
                                },
                                {
                                    icon: <IconTrendingUp size={28} />,
                                    title: 'Optimization',
                                    desc: 'On-page, technical, and content fixes.'
                                },
                                {
                                    icon: <IconReportAnalytics size={28} />,
                                    title: 'Reporting',
                                    desc: 'Transparent monthly performance tracking.'
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

                {/* Industries Section */}
                <section className="section">
                    <div className="container">
                        <motion.div
                            className={commonStyles.sectionHeader}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2>Industries We <span className="text-gradient">Serve</span></h2>
                            <p>Specialized SEO for high-growth sectors</p>
                        </motion.div>

                        <div className={styles.industriesContainer}>
                            {[
                                { icon: <IconBuildingStore size={20} />, name: 'E-commerce' },
                                { icon: <IconDeviceDesktopAnalytics size={20} />, name: 'SaaS & Tech' },
                                { icon: <IconBriefcase size={20} />, name: 'Legal & Finance' },
                                { icon: <IconStethoscope size={20} />, name: 'Medical/Health' },
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
                </section>

                {/* Benefits Section */}
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
                            <h2>Why Choose Our <span className="text-gradient">SEO Services</span>?</h2>
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
                                    icon: <IconChartBar size={32} />,
                                    title: 'Data-Driven Strategies',
                                    desc: 'We use analytics and research to create SEO strategies that deliver measurable results, not guesses.'
                                },
                                {
                                    icon: <IconAward size={32} />,
                                    title: 'White-Hat Techniques',
                                    desc: 'Ethical SEO practices that comply with search engine guidelines for long-term, penalty-free success.'
                                },
                                {
                                    icon: <IconReportAnalytics size={32} />,
                                    title: 'Transparent Reporting',
                                    desc: 'Regular updates and detailed reports so you always know exactly how your ranking and traffic are performing.'
                                },
                                {
                                    icon: <IconTarget size={32} />,
                                    title: 'Correction & Focus',
                                    desc: 'We focus on driving qualified traffic that converts into paying customers and revenue.'
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
                            <p>Common questions about Search Engine Optimization</p>
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
                            <h2>Ready to Dominate Search Rankings?</h2>
                            <p>Get a free SEO audit and discover how we can boost your online visibility</p>
                            <div className={commonStyles.ctaButtons}>
                                <Button href="/contact" size="lg" variant="secondary">
                                    Get Free SEO Audit
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
