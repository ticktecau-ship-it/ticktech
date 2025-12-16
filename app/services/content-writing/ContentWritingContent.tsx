'use client'

import React, { useState, useEffect } from 'react'
import { motion, Variants } from 'framer-motion'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Card from '@/components/Card/Card'
import Button from '@/components/Button/Button'
import styles from './content-writing.module.css'
import commonStyles from '../service-detail.module.css'
import {
    IconNews,
    IconWorld,
    IconShoppingBag,
    IconSearch,
    IconBrandTwitter,
    IconMail,
    IconFileText,
    IconBook2,
    IconFileDescription,
    IconMicrophone,
    IconAd,
    IconPencil,
    IconMessageCircle,
    IconChevronDown,
    IconSparkles,
    IconEdit,
    IconCheck,
    IconBuildingStore,
    IconBriefcase,
    IconStethoscope,
    IconHome,
    IconCoffee,
    IconBoxSeam,
    IconChartLine,
    IconDeviceDesktopAnalytics,
    IconRocket,
    IconBolt,
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

const ContentWriterEffect = () => {
    const [currentText, setCurrentText] = useState('')
    const [phase, setPhase] = useState<'writing' | 'deleting' | 'paused'>('writing')
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0)

    // Stages of content writing simulation:
    // 1. Write a rough draft sentence
    // 2. Pause (think/research)
    // 3. Delete a weak word
    // 4. Write a better word
    // 5. Complete the thought

    // Simplified for visual effect:
    // Cycle through sentences with backspace effect
    const sentences = [
        { text: "We create content that is good.", action: "delete", deleteCount: 5, nextPart: "exceptional." },
        { text: "Optimized for Google search.", action: "delete", deleteCount: 14, nextPart: "Search Engines & Humans." },
        { text: "Words that sell your product.", action: "delete", deleteCount: 18, nextPart: "tell your brand's story." }
    ]

    useEffect(() => {
        const sentenceData = sentences[currentSentenceIndex]
        let fullTargetText = sentenceData.text
        if (phase === 'writing' && currentText.length === fullTargetText.length && sentenceData.action === 'delete') {
            // If we finished writing the base sentence and need to delete, switch to deleting after pause
            const timeout = setTimeout(() => setPhase('deleting'), 1000)
            return () => clearTimeout(timeout)
        }

        // Handle "nextPart" - effectively this component logic is a bit complex for a simple prop.
        // Let's implement a simpler standard typewriter with backspace for now to ensure robustness.

    }, [currentText, phase, currentSentenceIndex])

    // Better implementation: A single useEffect state machine
    const [displayContent, setDisplayContent] = useState("")
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [typingSpeed, setTypingSpeed] = useState(100)

    useEffect(() => {
        const toRotate = [
            "We create content that converts.",
            "We research deeply for accuracy.",
            "We proofread for perfection.",
            "Your story, told beautifully."
        ];

        const handleTyping = () => {
            const i = loopNum % toRotate.length;
            const fullText = toRotate[i];

            setDisplayContent(isDeleting
                ? fullText.substring(0, displayContent.length - 1)
                : fullText.substring(0, displayContent.length + 1)
            );

            setTypingSpeed(isDeleting ? 40 : 100 + Math.random() * 50);

            if (!isDeleting && displayContent === fullText) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
            } else if (isDeleting && displayContent === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayContent, isDeleting, loopNum, typingSpeed]);

    return (
        <div className={styles.contentCard}>
            <div className={styles.typingContainer}>
                <div className={styles.typingHeader}>
                    <div className={styles.dots}>
                        <div className={`${styles.dot} ${styles.dotRed}`}></div>
                        <div className={`${styles.dot} ${styles.dotYellow}`}></div>
                        <div className={`${styles.dot} ${styles.dotGreen}`}></div>
                    </div>
                    <span style={{ marginLeft: '1rem', fontSize: '0.9rem', opacity: 0.7 }}>Draft.docx</span>
                </div>
                <div className={styles.typingBody}>
                    <p className={styles.typingLine}>
                        <span className={styles.textGray}>Subject:</span> Content Strategy
                    </p>
                    <br />
                    <div className={styles.typingText}>
                        {displayContent}
                        <span className={styles.cursor}></span>
                    </div>
                </div>

                {/* Visual Status Indicators */}
                <div className={styles.statusBadges}>
                    <motion.div
                        className={styles.statusBadge}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        {isDeleting ? "✍️ Editing..." : "🔍 Researching..."}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}


export default function ContentWritingContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const faqs = [
        {
            question: "Do you write SEO-optimized content?",
            answer: "Yes, all our content is written with SEO best practices in mind, including keyword research, proper heading structure, and meta descriptions to help you rank higher."
        },
        {
            question: "Can I request revisions?",
            answer: "Absolutely! We offer unlimited revisions to ensure the content meets your expectations and perfectly aligns with your brand voice."
        },
        {
            question: "What is your turnaround time?",
            answer: "Turnaround time depends on the project size, but typically we deliver blog posts and articles within 3-5 business days. Rush options are available."
        },
        {
            question: "Do you provide images with the content?",
            answer: "We can provide royalty-free stock images upon request to accompany your articles and blog posts."
        },
        {
            question: "Who owns the content after it's written?",
            answer: "You do. Once the project is paid for, you have full ownership and copyright of the content. We do not recycle or resell your content."
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
                                    ✒️ Craft Your Story
                                </motion.div>
                                <motion.h1 className={styles.heroTitle} variants={fadeInUp}>
                                    Content that <br />
                                    <span className="text-gradient">Connects & Converts</span>
                                </motion.h1>
                                <motion.p className={styles.heroDescription} variants={fadeInUp}>
                                    Engage your audience with compelling, SEO-optimized content.
                                    From blog posts to technical whitepapers, we create words that resonate
                                    and drive real business results.
                                </motion.p>
                                <motion.div className={styles.heroButtons} variants={fadeInUp}>
                                    <Button href="/contact" size="lg" variant="primary">
                                        Order Content
                                    </Button>
                                    <Button href="/portfolio" size="lg" variant="outline">
                                        View Samples
                                    </Button>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                className={styles.heroVisual}
                                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >


                                <ContentWriterEffect />
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
                            <h2>How We <span className="text-gradient">Write</span></h2>
                            <p>From blank page to published perfection</p>
                        </motion.div>

                        <div className={styles.processStepsContainer}>
                            {[
                                {
                                    icon: <IconMessageCircle size={28} />,
                                    title: 'Briefing',
                                    desc: 'Understanding your goals and audience.'
                                },
                                {
                                    icon: <IconSearch size={28} />,
                                    title: 'Research',
                                    desc: 'Deep dive into the topic & keywords.'
                                },
                                {
                                    icon: <IconEdit size={28} />,
                                    title: 'Drafting',
                                    desc: 'Crafting the initial content.'
                                },
                                {
                                    icon: <IconCheck size={28} />,
                                    title: 'Review',
                                    desc: 'Editing and polishing for quality.'
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
                            <h2>Content Writing <span className="text-gradient">Services</span></h2>
                            <p>Professional content for every need</p>
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
                                    <div className={commonStyles.featureIcon}><IconNews size={48} stroke={1.5} /></div>
                                    <h3>Blog Posts & Articles</h3>
                                    <p>Engaging, informative blog content that attracts readers and boosts your SEO rankings.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconWorld size={48} stroke={1.5} /></div>
                                    <h3>Website Copy</h3>
                                    <p>Persuasive website content that converts visitors into customers and reflects your brand.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconShoppingBag size={48} stroke={1.5} /></div>
                                    <h3>Product Descriptions</h3>
                                    <p>Compelling product descriptions that highlight features and drive sales.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconSearch size={48} stroke={1.5} /></div>
                                    <h3>SEO Content</h3>
                                    <p>Keyword-optimized content designed to rank well in search engines and attract organic traffic.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconBrandTwitter size={48} stroke={1.5} /></div>
                                    <h3>Social Media Content</h3>
                                    <p>Engaging posts and captions that build your social media presence and drive engagement.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconMail size={48} stroke={1.5} /></div>
                                    <h3>Email Newsletters</h3>
                                    <p>Compelling email content that nurtures leads and keeps your audience engaged.</p>
                                </Card>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Merged Specialties & Industries Section */}
                <section className={commonStyles.techSection}>
                    <div className="container">
                        <div className={styles.splitSectionContainer}>
                            {/* Left Column: Specialties */}
                            <div className={styles.splitColumn}>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    style={{ marginBottom: '2rem', textAlign: 'left' }}
                                >
                                    <h2>Content <span className="text-gradient">Specialties</span></h2>
                                    <p className={commonStyles.sectionDescription} style={{ margin: 0 }}>Expert writing across all formats</p>
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
                                        { icon: IconFileText, name: 'Technical Writing' },
                                        { icon: IconFileDescription, name: 'Case Studies' },
                                        { icon: IconBook2, name: 'White Papers' },
                                        { icon: IconNews, name: 'Press Releases' },
                                        { icon: IconWorld, name: 'Landing Pages' },
                                        { icon: IconBook2, name: 'E-books' },
                                        { icon: IconMicrophone, name: 'Video Scripts' },
                                        { icon: IconAd, name: 'Ad Copy' }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className={styles.techCloudItem}
                                            variants={fadeInUp}
                                        >
                                            <item.icon className={styles.techCloudIcon} size={40} stroke={1.5} />
                                            {/* <span className={styles.techCloudLabel}>{item.name}</span> */}
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
                                    <p className={commonStyles.sectionDescription} style={{ margin: 0 }}>Specialized content for diverse sectors</p>
                                </motion.div>

                                <div className={styles.industriesContainer} style={{ justifyContent: 'flex-start' }}>
                                    {[
                                        { icon: <IconBuildingStore size={20} />, name: 'E-commerce' },
                                        { icon: <IconDeviceDesktopAnalytics size={20} />, name: 'SaaS' },
                                        { icon: <IconBriefcase size={20} />, name: 'Finance' },
                                        { icon: <IconStethoscope size={20} />, name: 'Healthcare' },
                                        { icon: <IconHome size={20} />, name: 'Real Estate' },
                                        { icon: <IconRocket size={20} />, name: 'Startups' }
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
                            <h2>Why Choose Our <span className="text-gradient">Content Writing</span> Services?</h2>
                            <p>We deliver content that engages, converts, and ranks.</p>
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
                                    icon: <IconSparkles size={32} />,
                                    title: 'Expert Writers',
                                    desc: 'Our team consists of subject-matter experts who understand the nuances of your industry.'
                                },
                                {
                                    icon: <IconSearch size={32} />,
                                    title: 'SEO Optimized',
                                    desc: 'Every piece is crafted to rank high on Google while remaining engaging for human readers.'
                                },
                                {
                                    icon: <IconFileText size={32} />,
                                    title: 'Original Content',
                                    desc: '100% plagiarism-free content, written from scratch to reflect your unique brand voice.'
                                },
                                {
                                    icon: <IconMessageCircle size={32} />,
                                    title: 'Brand Consistency',
                                    desc: 'We adopt your brand tone and style guide to ensure a unified voice across all channels.'
                                },
                                {
                                    icon: <IconBolt size={32} />,
                                    title: 'Fast Turnaround',
                                    desc: 'Reliable delivery schedules that keep your content calendar full and on time.'
                                },
                                {
                                    icon: <IconCheck size={32} />,
                                    title: 'Unlimited Revisions',
                                    desc: 'We are committed to your satisfaction and will refine the content until it is perfect.'
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
                            <p>Common questions about our content services</p>
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
                            <h2>Ready to Create Compelling Content?</h2>
                            <p>Let's craft content that engages your audience and drives results</p>
                            <div className={commonStyles.ctaButtons}>
                                <Button href="/contact" size="lg" variant="secondary">
                                    Get a Quote
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
