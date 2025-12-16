'use client'

import React, { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Card from '@/components/Card/Card'
import Button from '@/components/Button/Button'
import styles from './branding.module.css'
import commonStyles from '../service-detail.module.css'
import {
    IconPalette,
    IconBrush,
    IconLayoutGrid,
    IconTypography,
    IconVector,
    IconBrandBehance,
    IconStack2,
    IconBulb,
    IconEye,
    IconCertificate,
    IconPresentation,
    IconFileDescription,
    IconWand,
    IconColorPicker,
    IconPencil,
    IconChevronDown,
    IconBolt,
    IconShieldCheck,
    IconSearch,
    IconRocket,
    IconBuildingStore,
    IconBriefcase,
    IconStethoscope,
    IconHome,
    IconCoffee,
    IconBoxSeam,
    IconTrendingUp,
    IconHeart,
    IconTarget
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

export default function BrandingContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const faqs = [
        {
            question: "What is included in a branding package?",
            answer: "Our branding packages typically include a primary logo, secondary marks, color palette, typography hierarchy, and a comprehensive brand handbook. We also offer add-ons like social media kits and stationery design."
        },
        {
            question: "How long does a branding project take?",
            answer: "Most branding projects take between 3 to 6 weeks. This timeline allows for in-depth research, concept development, and refinements to ensure the final result is perfect."
        },
        {
            question: "Do I own the rights to the designs?",
            answer: "Yes! Once the project is complete and payment is finalized, you have full ownership and copyright of all final deliverables."
        },
        {
            question: "Can you refresh an existing brand?",
            answer: "Absolutely. We specialize in brand evolutions—keeping the equity of your current brand while modernizing it for today's market."
        },
        {
            question: "What if I don't like the initial concepts?",
            answer: "We offer revision rounds as part of our process. We work closely with you, listening to your feedback to refine the direction until it perfectly aligns with your vision."
        }
    ]

    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* Sleek Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroBackground}>
                        <div className={styles.animatedGradient}></div>

                    </div>

                    <div className="container">
                        <div className={styles.heroContent}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className={styles.heroBadge}>
                                    <IconBolt size={16} color="#ec4899" />
                                    <span className={styles.heroBadgeText}>Premium Branding Services</span>
                                </div>

                                <h1 className={styles.heroTitle}>
                                    We Craft Brands That <br />
                                    <span className={styles.heroHighlight}>Defy Expectations</span>
                                </h1>

                                <p className={styles.heroDescription}>
                                    Transform your business with a visual identity that speaks louder than words.
                                    Sleek, modern, and strategically designed to make your mark in the digital age.
                                </p>

                                <div className={styles.heroButtons}>
                                    <Button href="/contact" size="lg" variant="primary">
                                        Start Project
                                    </Button>
                                    <Button href="/portfolio" size="lg" variant="outline">
                                        Our Work
                                    </Button>
                                </div>
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
                            <h2>Our Branding <span className="text-gradient">Services</span></h2>
                            <p>Complete brand identity solutions</p>
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
                                    <div className={commonStyles.featureIcon}><IconBrush size={48} stroke={1.5} /></div>
                                    <h3>Logo Design</h3>
                                    <p>Unique, memorable logos that capture your brand's essence and make a lasting impression.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconBulb size={48} stroke={1.5} /></div>
                                    <h3>Brand Strategy</h3>
                                    <p>Comprehensive brand positioning and strategy to differentiate you from competitors.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconEye size={48} stroke={1.5} /></div>
                                    <h3>Visual Identity</h3>
                                    <p>Complete visual system including colors, typography, and design elements.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconCertificate size={48} stroke={1.5} /></div>
                                    <h3>Brand Guidelines</h3>
                                    <p>Detailed brand books ensuring consistent application across all touchpoints.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconStack2 size={48} stroke={1.5} /></div>
                                    <h3>Marketing Materials</h3>
                                    <p>Business cards, brochures, and collateral that reinforce your brand identity.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconPresentation size={48} stroke={1.5} /></div>
                                    <h3>Brand Refresh</h3>
                                    <p>Modernize and revitalize your existing brand while maintaining recognition.</p>
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
                            <h2>How We <span className="text-gradient">Create</span></h2>
                            <p>From concept to rollout</p>
                        </motion.div>

                        <div className={styles.processStepsContainer}>
                            {[
                                {
                                    icon: <IconSearch size={28} />,
                                    title: 'Discovery',
                                    desc: 'Understanding your vision and market.'
                                },
                                {
                                    icon: <IconBulb size={28} />,
                                    title: 'Concept',
                                    desc: 'Exploring creative directions.'
                                },
                                {
                                    icon: <IconVector size={28} />,
                                    title: 'Design',
                                    desc: 'Crafting the visual identity system.'
                                },
                                {
                                    icon: <IconRocket size={28} />,
                                    title: 'Delivery',
                                    desc: 'Finalizing guidelines and assets.'
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

                {/* Deliverables Section */}
                <section className={commonStyles.techSection}>
                    <div className="container">
                        <motion.div
                            className={commonStyles.sectionHeader}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2>What You'll <span className="text-gradient">Receive</span></h2>
                            <p>Comprehensive brand assets for all your needs</p>
                        </motion.div>
                        <motion.div
                            className={styles.techCloud}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            {[
                                { icon: IconVector, name: 'Logo Design' },
                                { icon: IconPalette, name: 'Color Palette' },
                                { icon: IconTypography, name: 'Typography' },
                                { icon: IconCertificate, name: 'Guidelines' },
                                { icon: IconLayoutGrid, name: 'Stationery' },
                                { icon: IconBrandBehance, name: 'Social Kit' },
                                { icon: IconFileDescription, name: 'Patterns' },
                                { icon: IconStack2, name: 'Source Files' }
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
                            <h2>Industries We <span className="text-gradient">Brand</span></h2>
                            <p>Creating impact across diverse sectors</p>
                        </motion.div>

                        <div className={styles.industriesContainer}>
                            {[
                                { icon: <IconBuildingStore size={20} />, name: 'Retail & Fashion' },
                                { icon: <IconRocket size={20} />, name: 'Tech Startups' },
                                { icon: <IconCoffee size={20} />, name: 'Food & Beverage' },
                                { icon: <IconBriefcase size={20} />, name: 'Corporate' },
                                { icon: <IconHome size={20} />, name: 'Real Estate' },
                                { icon: <IconHeart size={20} />, name: 'Health & Wellness' }
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
                            <h2>Why Choose Our <span className="text-gradient">Branding Services</span>?</h2>
                            <p>We build brands that people love and remember.</p>
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
                                    icon: <IconTarget size={32} />,
                                    title: 'Strategic Approach',
                                    desc: 'We merge creative intuition with market strategy to build brands that are positioned for growth.'
                                },
                                {
                                    icon: <IconPalette size={32} />,
                                    title: 'Unique Designs',
                                    desc: 'Every element is custom-crafted to reflect your unique value proposition—no templates allowed.'
                                },
                                {
                                    icon: <IconSearch size={32} />,
                                    title: 'Research-Driven',
                                    desc: 'In-depth market and competitor analysis informs every color, font, and shape choice.'
                                },
                                {
                                    icon: <IconLayoutGrid size={32} />,
                                    title: 'Versatile Systems',
                                    desc: 'Design systems that work flawlessly across all mediums, from mobile apps to billboards.'
                                },
                                {
                                    icon: <IconShieldCheck size={32} />,
                                    title: 'Complete Ownership',
                                    desc: 'You receive full copyright and ownership of all final assets and source files.'
                                },
                                {
                                    icon: <IconBoxSeam size={32} />,
                                    title: 'Future-Proof',
                                    desc: 'We design timeless identities that can evolve with your business for years to come.'
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
                            <p>Everything you need to know about our branding process</p>
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
                            <h2>Ready to Build a Memorable Brand?</h2>
                            <p>Let's create a brand identity that sets you apart from the competition</p>
                            <div className={commonStyles.ctaButtons}>
                                <Button href="/contact" size="lg" variant="secondary">
                                    Start Your Brand Project
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
