import type { Metadata } from 'next'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Card from '@/components/Card/Card'
import Button from '@/components/Button/Button'
import styles from './services.module.css'

export const metadata: Metadata = {
    title: 'Our Services',
    description: 'Comprehensive digital services including web development, SEO, digital marketing, content writing, domain & hosting, and branding solutions.',
}

export default function ServicesPage() {
    const services = [
        {
            icon: '💻',
            title: 'Web Development',
            slug: 'web-development',
            description: 'Transform your vision into reality with custom websites and web applications built using the latest technologies.',
            features: [
                'Responsive Design',
                'E-commerce Solutions',
                'Custom Web Applications',
                'CMS Integration',
                'Performance Optimization',
                'Ongoing Maintenance'
            ]
        },
        {
            icon: '🔍',
            title: 'SEO Services',
            slug: 'seo',
            description: 'Boost your online visibility and drive organic traffic with our comprehensive SEO strategies.',
            features: [
                'Keyword Research',
                'On-Page Optimization',
                'Technical SEO',
                'Link Building',
                'Local SEO',
                'SEO Audits & Reporting'
            ]
        },
        {
            icon: '📱',
            title: 'Digital Marketing',
            slug: 'digital-marketing',
            description: 'Reach your target audience and maximize ROI with data-driven digital marketing campaigns.',
            features: [
                'Social Media Marketing',
                'PPC Advertising',
                'Email Marketing',
                'Content Marketing',
                'Analytics & Reporting',
                'Conversion Optimization'
            ]
        },
        {
            icon: '✍️',
            title: 'Content Writing',
            slug: 'content-writing',
            description: 'Engage your audience with compelling, SEO-optimized content that drives results.',
            features: [
                'Blog Posts & Articles',
                'Website Copy',
                'Product Descriptions',
                'SEO Content',
                'Social Media Content',
                'Email Newsletters'
            ]
        },
        {
            icon: '🌐',
            title: 'Domain & Hosting',
            slug: 'domain-hosting',
            description: 'Reliable domain registration and hosting solutions to keep your website running smoothly 24/7.',
            features: [
                'Domain Registration',
                'Shared Hosting',
                'VPS Hosting',
                'Dedicated Servers',
                'SSL Certificates',
                '24/7 Technical Support'
            ]
        },
        {
            icon: '🎨',
            title: 'Branding & Logo Design',
            slug: 'branding',
            description: 'Create a memorable brand identity that resonates with your audience and stands out from the competition.',
            features: [
                'Logo Design',
                'Brand Strategy',
                'Visual Identity',
                'Brand Guidelines',
                'Marketing Materials',
                'Brand Refresh'
            ]
        }
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
                                Our <span className="text-gradient">Services</span>
                            </h1>
                            <p className={styles.heroDescription}>
                                Comprehensive digital solutions designed to elevate your business
                                and drive measurable results. From strategy to execution, we've got you covered.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="section">
                    <div className="container">
                        <div className={styles.servicesGrid}>
                            {services.map((service, index) => (
                                <Card key={index} variant="default" className={styles.serviceCard}>
                                    <div className={styles.serviceHeader}>
                                        <div className={styles.serviceIcon}>{service.icon}</div>
                                        <h3>{service.title}</h3>
                                    </div>
                                    <p className={styles.serviceDescription}>{service.description}</p>
                                    <div className={styles.features}>
                                        <h4>What's Included:</h4>
                                        <ul className={styles.featureList}>
                                            {service.features.map((feature, idx) => (
                                                <li key={idx}>
                                                    <span className={styles.checkmark}>✓</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={styles.serviceButtons}>
                                        <Button href={`/services/${service.slug}`} variant="primary" className={styles.serviceButton}>
                                            Learn More
                                        </Button>
                                        <Button href="/contact" variant="outline" className={styles.serviceButton}>
                                            Get Started
                                        </Button>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className={styles.processSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2>Our <span className="text-gradient">Process</span></h2>
                            <p>How we deliver exceptional results</p>
                        </div>
                        <div className={styles.processGrid}>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>01</div>
                                <h4>Discovery</h4>
                                <p>We learn about your business, goals, and target audience</p>
                            </div>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>02</div>
                                <h4>Strategy</h4>
                                <p>We develop a customized plan tailored to your needs</p>
                            </div>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>03</div>
                                <h4>Execution</h4>
                                <p>Our team brings your project to life with precision</p>
                            </div>
                            <div className={styles.processStep}>
                                <div className={styles.stepNumber}>04</div>
                                <h4>Optimization</h4>
                                <p>We continuously refine and improve for maximum results</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.cta}>
                    <div className="container">
                        <div className={styles.ctaContent}>
                            <h2>Ready to Get Started?</h2>
                            <p>Let's discuss which services are right for your business</p>
                            <div className={styles.ctaButtons}>
                                <Button href="/contact" size="lg" variant="secondary">
                                    Contact Us Today
                                </Button>
                                <Button href="/portfolio" size="lg" variant="outline">
                                    View Our Work
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
