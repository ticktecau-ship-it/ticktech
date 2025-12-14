import type { Metadata } from 'next'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Card from '@/components/Card/Card'
import Button from '@/components/Button/Button'
import { SparklesCore } from '@/components/ui/sparkles'
import styles from './about.module.css'

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about TickTec Digital Solution - a team of passionate digital experts committed to transforming businesses through innovative solutions.',
}

export default function AboutPage() {
    const values = [
        {
            icon: '🎯',
            title: 'Mission-Driven',
            description: 'We are committed to delivering exceptional results that exceed expectations and drive real business growth.'
        },
        {
            icon: '💡',
            title: 'Innovation First',
            description: 'We stay ahead of digital trends and leverage cutting-edge technologies to give you a competitive advantage.'
        },
        {
            icon: '🤝',
            title: 'Client-Focused',
            description: 'Your success is our success. We build lasting partnerships based on trust, transparency, and results.'
        },
        {
            icon: '⚡',
            title: 'Excellence',
            description: 'We maintain the highest standards in everything we do, from strategy to execution and support.'
        }
    ]

    const team = [
        { name: 'Sarah Johnson', role: 'CEO & Founder', emoji: '👩‍💼' },
        { name: 'Michael Chen', role: 'CTO', emoji: '👨‍💻' },
        { name: 'Emily Rodriguez', role: 'Creative Director', emoji: '👩‍🎨' },
        { name: 'David Kim', role: 'Head of Marketing', emoji: '👨‍💼' }
    ]

    const stats = [
        { number: '500+', label: 'Projects Completed' },
        { number: '250+', label: 'Happy Clients' },
        { number: '50+', label: 'Team Members' },
        { number: '15+', label: 'Years Experience' }
    ]

    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.particles}></div>
                    <div className={styles.sparklesBackground}>
                        <SparklesCore
                            background="transparent"
                            minSize={0.4}
                            size={1.2}
                            density={80}
                            className="w-full h-full"
                            color="#00E5FF"
                            speed={0.5}
                        />
                    </div>
                    <div className="container">
                        <div className={styles.heroContent}>
                            <h1>
                                About <span className="text-gradient">TickTec Digital</span>
                            </h1>
                            <p className={styles.heroDescription}>
                                We are a full-service digital agency passionate about helping businesses
                                thrive in the digital age. With expertise spanning web development, SEO,
                                marketing, and branding, we deliver comprehensive solutions that drive results.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className={styles.stats}>
                    <div className="container">
                        <div className={styles.statsGrid}>
                            {stats.map((stat, index) => (
                                <div key={index} className={styles.statCard}>
                                    <div className={styles.statCardInner}>
                                        <div className={styles.statGlow}></div>
                                        <div className={styles.statNumber}>{stat.number}</div>
                                        <div className={styles.statLabel}>{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className={styles.storySection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2>Our <span className="text-gradient">Story</span></h2>
                            <p>From humble beginnings to digital excellence</p>
                        </div>
                        <div className={styles.story}>
                            <div className={styles.storyContent}>
                                <p>
                                    Founded in 2009, TickTec Digital Solution began with a simple mission:
                                    to help businesses harness the power of digital technology to achieve
                                    their goals. What started as a small team of passionate developers has
                                    grown into a full-service digital agency serving clients worldwide.
                                </p>
                                <p>
                                    Over the years, we've completed 500+ projects, helped 250+ businesses
                                    transform their digital presence, and built a team of 50+ talented
                                    professionals. Our success is built on a foundation of innovation,
                                    expertise, and an unwavering commitment to client success.
                                </p>
                                <p>
                                    Today, we continue to push boundaries, embrace new technologies, and
                                    deliver exceptional digital experiences that make a real difference
                                    for our clients.
                                </p>
                            </div>
                            <div className={styles.storyVisual}>
                                <div className={styles.storyShape}></div>
                                <div className={styles.storyOrb}></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className={styles.valuesSection}>
                    <div className={styles.particles}></div>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2>Our <span className="text-gradient">Values</span></h2>
                            <p>The principles that guide everything we do</p>
                        </div>
                        <div className={styles.valuesGrid}>
                            {values.map((value, index) => (
                                <Card key={index} variant="glass" className={styles.valueCard}>
                                    <div className={styles.valueIcon}>{value.icon}</div>
                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className={styles.teamSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2>Meet Our <span className="text-gradient">Team</span></h2>
                            <p>The talented people behind our success</p>
                        </div>
                        <div className={styles.teamGrid}>
                            {team.map((member, index) => (
                                <Card key={index} variant="glass" className={styles.teamCard}>
                                    <div className={styles.teamMember}>
                                        <div className={styles.teamAvatar}>{member.emoji}</div>
                                        <h4>{member.name}</h4>
                                        <p className={styles.teamRole}>{member.role}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.cta}>
                    <div className={styles.sparklesBackground}>
                        <SparklesCore
                            background="transparent"
                            minSize={0.4}
                            size={1.2}
                            density={80}
                            className="w-full h-full"
                            color="#00E5FF"
                            speed={0.5}
                        />
                    </div>
                    <div className="container">
                        <div className={styles.ctaContent}>
                            <h2>Ready to Work Together?</h2>
                            <p>Let's discuss how we can help your business grow</p>
                            <div className={styles.ctaButtons}>
                                <Button href="/contact" size="lg" variant="secondary">
                                    Get In Touch
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
