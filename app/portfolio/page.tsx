import type { Metadata } from 'next'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Card from '@/components/Card/Card'
import Button from '@/components/Button/Button'
import styles from './portfolio.module.css'

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'Explore our portfolio of successful digital projects and case studies showcasing our expertise in web development, SEO, and digital marketing.',
}

export default function PortfolioPage() {
    const projects = [
        {
            title: 'E-Commerce Platform Redesign',
            category: 'Web Development',
            description: 'Complete redesign and development of a modern e-commerce platform with improved UX and 150% increase in conversions.',
            tags: ['Next.js', 'E-commerce', 'UX Design'],
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
            title: 'SEO Campaign Success',
            category: 'SEO',
            description: 'Comprehensive SEO strategy that increased organic traffic by 300% and improved search rankings for 50+ keywords.',
            tags: ['SEO', 'Content Strategy', 'Analytics'],
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
            title: 'Brand Identity Refresh',
            category: 'Branding',
            description: 'Complete brand refresh including logo design, visual identity, and brand guidelines for a tech startup.',
            tags: ['Branding', 'Logo Design', 'Visual Identity'],
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        },
        {
            title: 'Social Media Growth',
            category: 'Digital Marketing',
            description: 'Strategic social media campaign that grew followers by 500% and increased engagement by 400% in 6 months.',
            tags: ['Social Media', 'Content Marketing', 'Analytics'],
            gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
        },
        {
            title: 'SaaS Product Launch',
            category: 'Web Development',
            description: 'Full-stack development of a SaaS platform with user authentication, payment integration, and analytics dashboard.',
            tags: ['React', 'Node.js', 'SaaS'],
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
        },
        {
            title: 'Content Marketing Strategy',
            category: 'Content Writing',
            description: 'Developed and executed content strategy that generated 200+ high-quality leads through blog content and whitepapers.',
            tags: ['Content Strategy', 'SEO Writing', 'Lead Generation'],
            gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
        }
    ]

    const categories = ['All', 'Web Development', 'SEO', 'Digital Marketing', 'Branding', 'Content Writing']

    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className="container">
                        <div className={styles.heroContent}>
                            <h1>
                                Our <span className="text-gradient">Portfolio</span>
                            </h1>
                            <p className={styles.heroDescription}>
                                Explore our successful projects and case studies that showcase our
                                expertise in delivering exceptional digital solutions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Filter Section */}
                <section className={styles.filterSection}>
                    <div className="container">
                        <div className={styles.filters}>
                            {categories.map((category) => (
                                <button key={category} className={styles.filterButton}>
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className="section-sm">
                    <div className="container">
                        <div className={styles.projectsGrid}>
                            {projects.map((project, index) => (
                                <Card key={index} variant="default" className={styles.projectCard}>
                                    <div
                                        className={styles.projectHeader}
                                        style={{ background: project.gradient }}
                                    >
                                        <span className={styles.projectCategory}>{project.category}</span>
                                    </div>
                                    <div className={styles.projectContent}>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <div className={styles.tags}>
                                            {project.tags.map((tag, idx) => (
                                                <span key={idx} className={styles.tag}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className={styles.statsSection}>
                    <div className="container">
                        <div className={styles.statsGrid}>
                            <div className={styles.statItem}>
                                <h3>500+</h3>
                                <p>Projects Delivered</p>
                            </div>
                            <div className={styles.statItem}>
                                <h3>250+</h3>
                                <p>Happy Clients</p>
                            </div>
                            <div className={styles.statItem}>
                                <h3>98%</h3>
                                <p>Client Satisfaction</p>
                            </div>
                            <div className={styles.statItem}>
                                <h3>15+</h3>
                                <p>Years Experience</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.cta}>
                    <div className="container">
                        <div className={styles.ctaContent}>
                            <h2>Like What You See?</h2>
                            <p>Let's create something amazing for your business</p>
                            <Button href="/contact" size="lg" variant="secondary">
                                Start Your Project
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
