'use client'

import React, { useState, useEffect } from 'react'
import { motion, Variants } from 'framer-motion'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Card from '@/components/Card/Card'
import Button from '@/components/Button/Button'
import styles from './web-development.module.css'
import commonStyles from '../service-detail.module.css'
import {
    IconBrandReact,
    IconBrandNextjs,
    IconBrandNodejs,
    IconBrandTypescript,
    IconDeviceMobile,
    IconShoppingCart,
    IconCode,
    IconDatabase,
    IconRocket,
    IconSettings,
    IconBrandWordpress,
    IconShoppingBag,
    IconBrandMongodb,
    IconChevronDown,
    IconSearch,
    IconPalette,
    IconBrowser,
    IconWand,
    IconTrendingUp,
    IconShieldCheck,
    IconBolt,
    IconHeadset,
    IconBuildingStore,
    IconStethoscope,
    IconHome,
    IconSchool
} from '@tabler/icons-react'

const TypewriterCode = () => {
    const [displayedLines, setDisplayedLines] = useState<any[]>([])
    const [currentLineIndex, setCurrentLineIndex] = useState(0)
    const [currentCharIndex, setCurrentCharIndex] = useState(0)

    const codeLines = [
        [
            { text: 'const', type: 'keyword' },
            { text: ' ', type: 'text' },
            { text: 'createExperience', type: 'function' },
            { text: ' = ', type: 'text' },
            { text: 'async', type: 'keyword' },
            { text: ' () ', type: 'text' },
            { text: '=>', type: 'operator' },
            { text: ' {', type: 'text' }
        ],
        [
            { text: '  const', type: 'keyword' },
            { text: ' ', type: 'text' },
            { text: 'web', type: 'variable' },
            { text: ' = ', type: 'text' },
            { text: 'await', type: 'keyword' },
            { text: ' ', type: 'text' },
            { text: 'build', type: 'function' },
            { text: '({', type: 'text' }
        ],
        [
            { text: '    quality: ', type: 'text' },
            { text: "'Premium'", type: 'string' },
            { text: ',', type: 'text' }
        ],
        [
            { text: '    performance: ', type: 'text' },
            { text: "'Ultra-Fast'", type: 'string' },
            { text: ',', type: 'text' }
        ],
        [
            { text: '    design: ', type: 'text' },
            { text: "'Modern'", type: 'string' }
        ],
        [
            { text: '  });', type: 'text' }
        ],
        [
            { text: '  return', type: 'keyword' },
            { text: ' ', type: 'text' },
            { text: 'web', type: 'variable' },
            { text: '.', type: 'text' },
            { text: 'launch', type: 'function' },
            { text: '();', type: 'text' }
        ],
        [
            { text: '};', type: 'text' }
        ]
    ]

    useEffect(() => {
        if (currentLineIndex >= codeLines.length) return

        const currentLine = codeLines[currentLineIndex]
        const fullLineText = currentLine.map(token => token.text).join('')

        if (currentCharIndex < fullLineText.length) {
            const timeout = setTimeout(() => {
                setCurrentCharIndex(prev => prev + 1)
            }, 30 + Math.random() * 30) // Random typing speed

            return () => clearTimeout(timeout)
        } else {
            const timeout = setTimeout(() => {
                setCurrentLineIndex(prev => prev + 1)
                setCurrentCharIndex(0)
            }, 400) // Pause at end of line

            return () => clearTimeout(timeout)
        }
    }, [currentLineIndex, currentCharIndex])

    const renderLine = (lineTokens: any[], lineIndex: number) => {
        if (lineIndex > currentLineIndex) return null

        let charCount = 0
        const isCurrentLine = lineIndex === currentLineIndex

        return (
            <span key={lineIndex} className={styles.line}>
                {lineTokens.map((token: any, tokenIndex: number) => {
                    // Logic to show partial token if we are on the current line being typed
                    if (isCurrentLine && charCount >= currentCharIndex) return null

                    let tokenText = token.text
                    if (isCurrentLine) {
                        const remainingChars = currentCharIndex - charCount
                        if (remainingChars < token.text.length) {
                            tokenText = token.text.slice(0, remainingChars)
                        }
                    }

                    charCount += token.text.length

                    return (
                        <span key={tokenIndex} className={styles[token.type] || ''}>
                            {tokenText}
                        </span>
                    )
                })}
                {isCurrentLine && <span className={styles.cursor}></span>}
            </span>
        )
    }

    return (
        <div className={styles.codeContent}>
            {codeLines.map((line, index) => renderLine(line, index))}
        </div>
    )
}


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

const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" }
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

export default function WebDevContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const faqs = [
        {
            question: "How long does it take to build a website?",
            answer: "The timeline varies based on complexity. A simple brochure site might take 2-3 weeks, while a complex e-commerce or custom web application can take 8-12 weeks or more."
        },
        {
            question: "Will my website be mobile-friendly?",
            answer: "Absolutely. We adopt a mobile-first approach, ensuring your website looks and functions perfectly on desktops, tablets, and smartphones."
        },
        {
            question: "Can I update the website myself?",
            answer: "Yes! We build websites using user-friendly Content Management Systems (CMS) like WordPress or custom dashboards, allowing you to easily update text and images."
        },
        {
            question: "Do you provide hosting and maintenance?",
            answer: "Yes, we offer comprehensive hosting and maintenance packages to ensure your website remains secure, fast, and up-to-date after launch."
        },
        {
            question: "What is the cost of a custom website?",
            answer: "Costs depend on the scope and features. We provide transparent, custom quotes based on your specific requirements rather than a one-size-fits-all pricing."
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
                                    🚀 Premium Web Solutions
                                </motion.div>
                                <motion.h1 className={styles.heroTitle} variants={fadeInUp}>
                                    Build the <br />
                                    <span className="text-gradient">Future</span> of Web
                                </motion.h1>
                                <motion.p className={styles.heroDescription} variants={fadeInUp}>
                                    Transform your ideas into high-performance, scalable web applications.
                                    We combine cutting-edge technology with stunning design to deliver digital experiences that matter.
                                </motion.p>
                                <motion.div className={styles.heroButtons} variants={fadeInUp}>
                                    <Button href="/contact" size="lg" variant="primary">
                                        Start Your Project
                                    </Button>
                                    <Button href="/portfolio" size="lg" variant="outline">
                                        View Our Work
                                    </Button>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                className={styles.heroVisual}
                                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >


                                <div className={styles.codeCard}>
                                    <div className={styles.codeHeader}>
                                        <div className={`${styles.dot} ${styles.dotRed}`}></div>
                                        <div className={`${styles.dot} ${styles.dotYellow}`}></div>
                                        <div className={`${styles.dot} ${styles.dotGreen}`}></div>
                                    </div>
                                    <TypewriterCode />
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
                            <h2>What We <span className="text-gradient">Offer</span></h2>
                            <p>Comprehensive web development solutions tailored to your needs</p>
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
                                    <div className={commonStyles.featureIcon}><IconDeviceMobile size={48} stroke={1.5} /></div>
                                    <h3>Responsive Design</h3>
                                    <p>Beautiful, mobile-first websites that work flawlessly on all devices and screen sizes.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconShoppingCart size={48} stroke={1.5} /></div>
                                    <h3>E-commerce Solutions</h3>
                                    <p>Powerful online stores with secure payment processing and inventory management.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconCode size={48} stroke={1.5} /></div>
                                    <h3>Custom Web Applications</h3>
                                    <p>Tailored web apps built to solve your unique business challenges and workflows.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconDatabase size={48} stroke={1.5} /></div>
                                    <h3>CMS Integration</h3>
                                    <p>Easy-to-use content management systems so you can update your site anytime.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconRocket size={48} stroke={1.5} /></div>
                                    <h3>Performance Optimization</h3>
                                    <p>Lightning-fast loading speeds and optimized performance for better user experience.</p>
                                </Card>
                            </motion.div>
                            <motion.div variants={cardVariant} className={styles.featureCardWrapper}>
                                <Card variant="default" className={commonStyles.featureCard}>
                                    <div className={commonStyles.featureIcon}><IconSettings size={48} stroke={1.5} /></div>
                                    <h3>Ongoing Maintenance</h3>
                                    <p>Regular updates, security patches, and technical support to keep your site running smoothly.</p>
                                </Card>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Technologies Section */}
                <section className={commonStyles.techSection}>
                    <div className="container">
                        <motion.div
                            className={commonStyles.sectionHeader}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2>Technologies We <span className="text-gradient">Use</span></h2>
                            <p>Modern tech stack for cutting-edge solutions</p>
                        </motion.div>
                        <motion.div
                            className={styles.techCloud}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            {[
                                { icon: IconBrandReact, name: 'React' },
                                { icon: IconBrandNextjs, name: 'Next.js' },
                                { icon: IconBrandTypescript, name: 'TypeScript' },
                                { icon: IconBrandNodejs, name: 'Node.js' },
                                { icon: IconBrandWordpress, name: 'WordPress' },
                                { icon: IconShoppingBag, name: 'Shopify' },
                                { icon: IconBrandMongodb, name: 'MongoDB' },
                                { icon: IconDatabase, name: 'PostgreSQL' }
                            ].map((tech, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.techCloudItem}
                                    variants={scaleIn}
                                >
                                    <tech.icon className={styles.techCloudIcon} size={48} stroke={1.5} />
                                    <span className={styles.techCloudLabel}>{tech.name}</span>
                                </motion.div>
                            ))}
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
                                    title: 'Discovery',
                                    desc: 'Creating the roadmap.'
                                },
                                {
                                    icon: <IconPalette size={28} />,
                                    title: 'Design',
                                    desc: 'Crafting the visual experience.'
                                },
                                {
                                    icon: <IconCode size={28} />,
                                    title: 'Develop',
                                    desc: 'Building robust code.'
                                },
                                {
                                    icon: <IconRocket size={28} />,
                                    title: 'Launch',
                                    desc: 'Lift off to success.'
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
                            <p>Specialized web solutions for diverse sectors</p>
                        </motion.div>

                        <div className={styles.industriesContainer}>
                            {[
                                { icon: <IconBuildingStore size={20} />, name: 'E-commerce & Retail' },
                                { icon: <IconStethoscope size={20} />, name: 'Healthcare & Medical' },
                                { icon: <IconHome size={20} />, name: 'Real Estate & Property' },
                                { icon: <IconSchool size={20} />, name: 'Education & LMS' },
                                { icon: <IconRocket size={20} />, name: 'Startups & SaaS' },
                                { icon: <IconShoppingBag size={20} />, name: 'Fashion & Lifestyle' }
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
                            <h2>Why Choose Our <span className="text-gradient">Web Development</span> Services?</h2>
                            <p>We deliver more than just code; we deliver value.</p>
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
                                    icon: <IconWand size={32} />,
                                    title: 'Custom Solutions',
                                    desc: 'Every project is unique. We build tailored solutions that fit your specific needs and business goals perfectly.'
                                },
                                {
                                    icon: <IconTrendingUp size={32} />,
                                    title: 'Scalable Architecture',
                                    desc: 'Built to grow with your business, from startup to enterprise level, handling increased traffic effortlessly.'
                                },
                                {
                                    icon: <IconSearch size={32} />,
                                    title: 'SEO Optimized',
                                    desc: 'Clean code, semantic structure, and fastest load times ensure your site ranks well in search engines.'
                                },
                                {
                                    icon: <IconShieldCheck size={32} />,
                                    title: 'Security First',
                                    desc: 'We implement industry-standard security measures to protect your data and your users\' privacy.'
                                },
                                {
                                    icon: <IconBolt size={32} />,
                                    title: 'Fast Delivery',
                                    desc: 'Our agile development process ensures timely delivery without compromising on code quality.'
                                },
                                {
                                    icon: <IconHeadset size={32} />,
                                    title: 'Ongoing Support',
                                    desc: 'We\'re here for you even after launch with dedicated maintenance and update packages.'
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


                {/* NEW SECTION 1: Animated Code Transformation - NO CARDS */}
                <section className="section" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', overflow: 'hidden', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1 }}>
                        <div style={{ position: 'absolute', top: '10%', left: '5%', width: '300px', height: '300px', borderRadius: '50%', background: 'white', filter: 'blur(100px)' }}></div>
                        <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '400px', height: '400px', borderRadius: '50%', background: 'white', filter: 'blur(120px)' }}></div>
                    </div>

                    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            style={{ textAlign: 'center', marginBottom: '4rem' }}
                        >
                            <h2 style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}>Code to <span style={{ color: '#fbbf24' }}>Reality</span></h2>
                            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem' }}>Watch your ideas come to life</p>
                        </motion.div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                style={{ flex: 1, minWidth: '300px' }}
                            >
                                <div style={{ background: '#1a1a2e', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 25px 50px rgba(0,0,0,0.3)' }}>
                                    <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem' }}>
                                        <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ff5f56' }}></div>
                                        <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                                        <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#27c93f' }}></div>
                                    </div>
                                    <div style={{ fontFamily: 'monospace', fontSize: '0.95rem', lineHeight: '1.8' }}>
                                        <div><span style={{ color: '#c678dd' }}>const</span> <span style={{ color: '#e06c75' }}>website</span> <span style={{ color: '#56b6c2' }}>=</span> <span style={{ color: '#98c379' }}>{'{'}</span></div>
                                        <div style={{ paddingLeft: '1.5rem' }}><span style={{ color: '#e5c07b' }}>design</span>: <span style={{ color: '#98c379' }}>'modern'</span>,</div>
                                        <div style={{ paddingLeft: '1.5rem' }}><span style={{ color: '#e5c07b' }}>speed</span>: <span style={{ color: '#98c379' }}>'ultra-fast'</span>,</div>
                                        <div style={{ paddingLeft: '1.5rem' }}><span style={{ color: '#e5c07b' }}>responsive</span>: <span style={{ color: '#d19a66' }}>true</span></div>
                                        <div><span style={{ color: '#98c379' }}>{'}'}</span></div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                style={{ fontSize: '4rem', color: 'white' }}
                            >
                                →
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                style={{ flex: 1, minWidth: '300px' }}
                            >
                                <div style={{ background: 'white', borderRadius: '16px', padding: '3rem', boxShadow: '0 25px 50px rgba(0,0,0,0.3)' }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🚀</div>
                                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Beautiful Website</h3>
                                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                            <span style={{ padding: '8px 16px', background: '#667eea', color: 'white', borderRadius: '20px', fontSize: '0.9rem' }}>Modern</span>
                                            <span style={{ padding: '8px 16px', background: '#764ba2', color: 'white', borderRadius: '20px', fontSize: '0.9rem' }}>Fast</span>
                                            <span style={{ padding: '8px 16px', background: '#fbbf24', color: 'white', borderRadius: '20px', fontSize: '0.9rem' }}>Responsive</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* NEW SECTION 2: Circular Progress Metrics - NO CARDS */}
                <section className="section" style={{ background: 'var(--background-secondary)' }}>
                    <div className="container">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            style={{ textAlign: 'center', marginBottom: '4rem' }}
                        >
                            <h2>Performance <span className="text-gradient">Excellence</span></h2>
                            <p>Metrics that matter for your success</p>
                        </motion.div>

                        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '3rem' }}>
                            {[
                                { label: 'Speed', value: 98, color: '#10b981', icon: '⚡' },
                                { label: 'SEO', value: 100, color: '#8b5cf6', icon: '🎯' },
                                { label: 'Security', value: 95, color: '#3b82f6', icon: '🔒' },
                                { label: 'UX Score', value: 97, color: '#f59e0b', icon: '✨' }
                            ].map((metric, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15, type: 'spring', stiffness: 200 }}
                                    style={{ position: 'relative', width: '200px', height: '200px' }}
                                >
                                    <svg width="200" height="200" style={{ transform: 'rotate(-90deg)' }}>
                                        <circle cx="100" cy="100" r="85" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="12" />
                                        <motion.circle
                                            cx="100"
                                            cy="100"
                                            r="85"
                                            fill="none"
                                            stroke={metric.color}
                                            strokeWidth="12"
                                            strokeLinecap="round"
                                            strokeDasharray={`${2 * Math.PI * 85}`}
                                            initial={{ strokeDashoffset: 2 * Math.PI * 85 }}
                                            whileInView={{ strokeDashoffset: (2 * Math.PI * 85) * (1 - metric.value / 100) }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: index * 0.15 }}
                                        />
                                    </svg>
                                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                                        <div style={{ fontSize: '2.5rem' }}>{metric.icon}</div>
                                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: metric.color }}>{metric.value}%</div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{metric.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* NEW SECTION 3: Diagonal Split Comparison - NO CARDS */}
                <section className="section" style={{ background: 'var(--background-primary)', overflow: 'hidden' }}>
                    <div className="container">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            style={{ textAlign: 'center', marginBottom: '4rem' }}
                        >
                            <h2>Old vs <span className="text-gradient">New</span></h2>
                            <p>The evolution of web development</p>
                        </motion.div>

                        <div style={{ position: 'relative', height: '500px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }}>
                            <motion.div
                                initial={{ x: '-100%' }}
                                whileInView={{ x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '50%',
                                    height: '100%',
                                    background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
                                    clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
                                    padding: '3rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}
                            >
                                <h3 style={{ fontSize: '2rem', color: 'white', marginBottom: '2rem' }}>❌ Traditional</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {['Slow Loading', 'Poor Mobile UX', 'Hard to Update', 'Limited Features'].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 + i * 0.1 }}
                                            style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(255,255,255,0.8)' }}
                                        >
                                            <div style={{ width: '8px', height: '8px', background: '#ef4444', borderRadius: '50%' }}></div>
                                            {item}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ x: '100%' }}
                                whileInView={{ x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    width: '50%',
                                    height: '100%',
                                    background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                                    clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)',
                                    padding: '3rem',
                                    paddingLeft: '5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}
                            >
                                <h3 style={{ fontSize: '2rem', color: 'white', marginBottom: '2rem' }}>✅ Modern Stack</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {['Lightning Fast', 'Mobile First', 'Easy Updates', 'Unlimited Power'].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 + i * 0.1 }}
                                            style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'white' }}
                                        >
                                            <div style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 10px #22c55e' }}></div>
                                            {item}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* NEW SECTION 4: Horizontal Scrolling Timeline - NO CARDS */}
                <section className="section" style={{ background: 'var(--background-secondary)', overflow: 'hidden' }}>
                    <div className="container">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            style={{ textAlign: 'center', marginBottom: '4rem' }}
                        >
                            <h2>Development <span className="text-gradient">Journey</span></h2>
                            <p>Your project timeline from start to finish</p>
                        </motion.div>

                        <div style={{ position: 'relative', padding: '2rem 0' }}>
                            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%)', transform: 'translateY(-50%)' }}></div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
                                {[
                                    { phase: 'Discovery', icon: '🔍', color: '#8b5cf6', week: 'Week 1' },
                                    { phase: 'Design', icon: '🎨', color: '#6366f1', week: 'Week 2-3' },
                                    { phase: 'Build', icon: '⚙️', color: '#3b82f6', week: 'Week 4-6' },
                                    { phase: 'Test', icon: '🧪', color: '#10b981', week: 'Week 7' },
                                    { phase: 'Launch', icon: '🚀', color: '#ec4899', week: 'Week 8' }
                                ].map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 }}
                                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.2, rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                            style={{
                                                width: '100px',
                                                height: '100px',
                                                borderRadius: '50%',
                                                background: step.color,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '3rem',
                                                boxShadow: `0 10px 30px ${step.color}50`,
                                                border: '5px solid var(--background-secondary)',
                                                marginBottom: '1.5rem'
                                            }}
                                        >
                                            {step.icon}
                                        </motion.div>
                                        <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: step.color }}>{step.phase}</h4>
                                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 'bold' }}>{step.week}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* NEW SECTION 5: Hexagonal Security Grid - NO CARDS */}
                <section className="section" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: 'white' }}>
                    <div className="container">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            style={{ textAlign: 'center', marginBottom: '4rem' }}
                        >
                            <h2 style={{ color: 'white' }}>Security <span style={{ color: '#22d3ee' }}>Shield</span></h2>
                            <p style={{ color: 'rgba(255,255,255,0.8)' }}>Multi-layered protection for your peace of mind</p>
                        </motion.div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                            {[
                                { icon: '🔒', title: 'SSL/TLS', desc: 'Encrypted connections', color: '#22d3ee' },
                                { icon: '🛡️', title: 'Firewall', desc: 'DDoS protection', color: '#a78bfa' },
                                { icon: '🔐', title: 'Data Lock', desc: 'AES-256 encryption', color: '#34d399' },
                                { icon: '👁️', title: 'Monitor', desc: '24/7 surveillance', color: '#fbbf24' },
                                { icon: '🔄', title: 'Backup', desc: 'Auto recovery', color: '#fb7185' },
                                { icon: '✅', title: 'Compliant', desc: 'GDPR ready', color: '#60a5fa' }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 150 }}
                                    whileHover={{ y: -10, boxShadow: `0 20px 40px ${feature.color}40` }}
                                    style={{
                                        background: `linear-gradient(135deg, ${feature.color}20 0%, ${feature.color}10 100%)`,
                                        border: `2px solid ${feature.color}`,
                                        borderRadius: '20px',
                                        padding: '2rem',
                                        textAlign: 'center',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <div style={{
                                        position: 'absolute',
                                        top: '-50%',
                                        right: '-50%',
                                        width: '200%',
                                        height: '200%',
                                        background: `radial-gradient(circle, ${feature.color}15 0%, transparent 70%)`,
                                        pointerEvents: 'none'
                                    }}></div>

                                    <div style={{ fontSize: '3.5rem', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>{feature.icon}</div>
                                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: feature.color, position: 'relative', zIndex: 1 }}>{feature.title}</h4>
                                    <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', position: 'relative', zIndex: 1 }}>{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
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
                            <h2 style={{ color: 'white' }}>Live <span style={{ color: '#fbbf24' }}>Code Preview</span></h2>
                            <p style={{ color: 'rgba(255,255,255,0.9)' }}>See how we transform ideas into interactive experiences</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{
                                background: 'rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '20px',
                                padding: '2rem',
                                border: '1px solid rgba(255,255,255,0.2)',
                                marginTop: '3rem'
                            }}
                        >
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div style={{ background: '#1e1e1e', borderRadius: '12px', padding: '1.5rem' }}>
                                    <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
                                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                                    </div>
                                    <pre style={{ color: '#a9b7c6', fontSize: '0.9rem', margin: 0, fontFamily: 'monospace' }}>
                                        {`<div className="hero">
  <h1>Welcome</h1>
  <button>Get Started</button>
</div>`}
                                    </pre>
                                </div>
                                <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Welcome</h3>
                                        <button style={{ padding: '12px 32px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer' }}>Get Started</button>
                                    </div>
                                </div>
                            </div>
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
                            <p>Everything you need to know about our web development process</p>
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
                            <h2>Ready to Build Your Dream Website?</h2>
                            <p>Let's discuss your project and create something amazing together</p>
                            <div className={commonStyles.ctaButtons}>
                                <Button href="/contact" size="lg" variant="secondary">
                                    Get a Free Quote
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
