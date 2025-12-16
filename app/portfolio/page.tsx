import type { Metadata } from 'next'
import { promises as fs } from 'fs'
import path from 'path'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Card from '@/components/Card/Card'
import Button from '@/components/Button/Button'
import styles from './portfolio.module.css'

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'Explore our portfolio of successful digital projects and case studies showcasing our expertise in web development, SEO, and digital marketing.',
}

async function getProjects() {
    try {
        const dbPath = path.join(process.cwd(), 'data', 'projects.json')
        // Check if file exists to prevent crash on first run
        try {
            await fs.access(dbPath)
        } catch {
            return []
        }

        const data = await fs.readFile(dbPath, 'utf-8')
        return JSON.parse(data)
    } catch (error) {
        console.error('Failed to load projects:', error)
        return []
    }
}

export default async function PortfolioPage() {
    const projects = await getProjects()

    // Dynamic categories + 'All'
    const uniqueCategories = Array.from(new Set(projects.map((p: any) => p.category)))
    const categories = ['All', ...uniqueCategories] as string[]

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
                            {projects.map((project: any, index: number) => (
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
                                            {project.tags.map((tag: string, idx: number) => (
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
