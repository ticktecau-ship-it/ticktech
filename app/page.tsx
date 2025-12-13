import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Button from '@/components/Button/Button'
import Card from '@/components/Card/Card'
import { IconCloud } from '@/components/ui/interactive-icon-cloud'
import { SparklesCore, Sparkles } from '@/components/ui/sparkles'
import { Compare } from '@/components/ui/compare'
import styles from './page.module.css'

export default function Home() {
    const services = [
        {
            icon: '💻',
            title: 'Web Development',
            description: 'Custom websites and web applications built with cutting-edge technologies for optimal performance.'
        },
        {
            icon: '🔍',
            title: 'SEO Services',
            description: 'Boost your online visibility and rank higher on search engines with our proven SEO strategies.'
        },
        {
            icon: '📱',
            title: 'Digital Marketing',
            description: 'Comprehensive digital marketing campaigns that drive engagement and conversions.'
        },
        {
            icon: '✍️',
            title: 'Content Writing',
            description: 'Compelling, SEO-optimized content that resonates with your audience and drives results.'
        },
        {
            icon: '🌐',
            title: 'Domain & Hosting',
            description: 'Reliable domain registration and hosting solutions to keep your website running smoothly.'
        },
        {
            icon: '🎨',
            title: 'Branding & Logo Design',
            description: 'Memorable brand identities and stunning logos that make your business stand out.'
        }
    ]

    const stats = [
        { number: '500+', label: 'Projects Completed' },
        { number: '250+', label: 'Happy Clients' },
        { number: '50+', label: 'Team Members' },
        { number: '15+', label: 'Years Experience' }
    ]

    const techStackSlugs = [
        'typescript',
        'javascript',
        'react',
        'nextdotjs',
        'nodedotjs',
        'html5',
        'css3',
        'tailwindcss',
        'figma',
        'git',
        'github',
        'visualstudiocode',
        'vercel',
        'firebase',
        'mongodb',
        'postgresql',
        'docker',
        'amazonaws',
        'googlecloud',
        'wordpress',
        'shopify',
        'wix',
        'adobephotoshop',
        'adobeillustrator',
        'canva',
        'slack',
        'trello',
        'notion',
        'googlechrome',
        'safari'
    ]

    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className="container">
                        <div className={styles.heroContent}>
                            <div className={styles.heroText}>
                                <h1 className="animate-fade-in">
                                    Transform Your Digital Presence with{' '}
                                    <span className="text-gradient">Innovation</span>
                                </h1>
                                <p className={styles.heroDescription}>
                                    We craft exceptional digital experiences that drive growth,
                                    engage audiences, and deliver measurable results for your business.
                                </p>
                                <div className={styles.heroButtons}>
                                    <Button href="/contact" size="lg">
                                        Get Started Today
                                    </Button>
                                    <Button href="/portfolio" variant="outline" size="lg">
                                        View Our Work
                                    </Button>
                                </div>
                            </div>
                            <div className={styles.heroVisual}>
                                <IconCloud iconSlugs={techStackSlugs} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className={styles.about}>
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
                        <div className={styles.aboutContent}>
                            <div className={styles.aboutText}>
                                <span className={styles.aboutLabel}>About Us</span>
                                <h2 className="animate-fade-in">
                                    Your Trusted Partner in{' '}
                                    <span className="text-gradient">Digital Excellence</span>
                                </h2>
                                <p className={styles.aboutDescription}>
                                    At <strong>TickTec Digital Solution</strong>, we are a full-service digital agency
                                    dedicated to transforming businesses through innovative IT solutions. Our expertise
                                    spans across web development, SEO optimization, digital marketing, and comprehensive
                                    branding services.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Stats Section - 3D Animated */}
                <section className={styles.stats}>
                    <div className="container">
                        <div className={styles.statsGrid}>
                            {stats.map((stat, index) => (
                                <div key={index} className={styles.statCard}>
                                    <div className={styles.statCardInner}>
                                        <div className={styles.statGlow}></div>
                                        <h3 className={styles.statNumber}>{stat.number}</h3>
                                        <p className={styles.statLabel}>{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className={`section ${styles.servicesSection}`}>
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
                        <div className={styles.sectionHeader}>
                            <h2>Our <span className="text-gradient">Services</span></h2>
                            <p className={styles.sectionDescription}>
                                Comprehensive digital solutions tailored to elevate your business
                            </p>
                        </div>
                        <div className={styles.servicesGrid}>
                            {services.map((service, index) => (
                                <Card key={index} variant="default">
                                    <div className={styles.serviceIcon}>{service.icon}</div>
                                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                                    <p className={styles.serviceDescription}>{service.description}</p>
                                    <a href="/services" className={styles.serviceLink}>
                                        Learn More →
                                    </a>
                                </Card>
                            ))}
                        </div>
                        <div className={styles.sectionCta}>
                            <Button href="/services" size="lg">
                                Explore All Services
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Portfolio Section */}
                <section className={`section ${styles.portfolioSection}`}>
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
                        <div className={styles.sectionHeader}>
                            <h2>Our Recent <span className="text-gradient">Projects</span></h2>
                            <p className={styles.sectionDescription}>
                                Explore our latest web design and development projects showcasing responsive designs across all devices
                            </p>
                        </div>
                        <div className={styles.portfolioGrid}>
                            {[
                                { image: '/Ticktec Mockup/1.png', device: 'Desktop', title: 'Project Alpha' },
                                { image: '/Ticktec Mockup/2.png', device: 'Mobile', title: 'Project Beta' },
                                { image: '/Ticktec Mockup/3.png', device: 'Tablet', title: 'Project Gamma' },
                                { image: '/Ticktec Mockup/4.png', device: 'Desktop', title: 'Project Delta' },
                                { image: '/Ticktec Mockup/5.png', device: 'Mobile', title: 'Project Epsilon' },
                                { image: '/Ticktec Mockup/6.png', device: 'Tablet', title: 'Project Zeta' }
                            ].map((project, index) => (
                                <div key={index} className={styles.portfolioCard}>
                                    <div className={styles.portfolioImageWrapper}>
                                        <img
                                            src={project.image}
                                            alt={`${project.title} - ${project.device} View`}
                                            className={styles.portfolioImage}
                                        />
                                        <div className={styles.portfolioOverlay}>
                                            <div className={styles.portfolioInfo}>
                                                <span className={styles.deviceBadge}>{project.device} View</span>
                                                <h3 className={styles.portfolioTitle}>{project.title}</h3>
                                                <p className={styles.portfolioDescription}>
                                                    Responsive web design optimized for {project.device.toLowerCase()} devices
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.sectionCta}>
                            <Button href="/portfolio" size="lg">
                                View All Projects
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Trusted Clients Section */}
                <section className={`section ${styles.clientsSection}`}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2>
                                <span className="text-gradient">Trusted by Industry Leaders</span>
                            </h2>
                            <p className={styles.sectionDescription}>
                                We're proud to partner with amazing companies who trust us with their digital success
                            </p>
                        </div>

                        <div className={styles.clientsContent}>
                            <div className={styles.clientsSliderWrapper}>
                                <div className={styles.clientsSlider}>
                                    {[
                                        { name: 'Al Kababi', logo: '/client/alkababi.png' },
                                        { name: 'Chauffeur Top', logo: '/client/ChauffeurTop.png' },
                                        { name: 'Executive Fleet', logo: '/client/Executivefleet.webp' },
                                        { name: 'Metro Guards', logo: '/client/metroguards.png' },
                                        { name: 'Ultimate Solar Energy', logo: '/client/ultimatesolrenergy.avif' },
                                        { name: 'Fresh Blood + Go', logo: '/client/freshplus.webp' }
                                    ].concat([
                                        { name: 'Al Kababi', logo: '/client/alkababi.png' },
                                        { name: 'Chauffeur Top', logo: '/client/ChauffeurTop.png' },
                                        { name: 'Executive Fleet', logo: '/client/Executivefleet.webp' },
                                        { name: 'Metro Guards', logo: '/client/metroguards.png' },
                                        { name: 'Ultimate Solar Energy', logo: '/client/ultimatesolrenergy.avif' },
                                        { name: 'Fresh Blood + Go', logo: '/client/freshplus.webp' }
                                    ]).map((client, index) => (
                                        <div key={index} className={styles.clientSlide}>
                                            <div className={styles.clientLogoWrapper}>
                                                <img
                                                    src={client.logo}
                                                    alt={`${client.name} Logo`}
                                                    className={styles.clientLogo}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className={styles.clientsSparkles}>
                            <div className={styles.clientsSparklesGradient} />
                            <div className={styles.clientsSparklesBase} />
                            <Sparkles
                                density={1200}
                                className={styles.sparklesEffect}
                                color="#00E5FF"
                                speed={0.5}
                                size={1.5}
                                minSize={0.4}
                                opacity={1}
                                minOpacity={0.1}
                            />
                        </div>

                        {/* FAQ Heading on Ellipse */}
                        <div className={styles.faqHeadingWrapper}>
                            <h2 className={styles.faqHeading}>
                                Frequently Asked <span className="text-gradient">Questions</span>
                            </h2>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className={styles.faqSection}>
                    <div className="container">
                        <div className={styles.sectionHeader} style={{ marginTop:"-72px"}}>
                            <h2>
                                <span className="text-gradient">FAQs</span>
                            </h2>
                            
                        </div>
                        <div className={styles.faqContent}>
                            {[
                                {
                                    question: "What services does TickTec Digital Solution offer?",
                                    answer: "We provide comprehensive digital solutions including web development, SEO optimization, digital marketing, content writing, domain & hosting services, and branding & logo design. Our team specializes in creating custom solutions tailored to your business needs."
                                },
                                {
                                    question: "How long does it take to complete a website project?",
                                    answer: "Project timelines vary depending on complexity and requirements. A basic website typically takes 2-4 weeks, while more complex projects with custom features may take 6-12 weeks. We'll provide you with a detailed timeline during our initial consultation."
                                },
                                {
                                    question: "Do you provide ongoing support after project completion?",
                                    answer: "Yes! We offer comprehensive post-launch support including website maintenance, updates, technical support, and optimization services. We believe in building long-term partnerships with our clients to ensure continued success."
                                },
                                {
                                    question: "What makes TickTec Digital Solution different from other agencies?",
                                    answer: "We combine technical expertise with creative innovation to deliver results-driven solutions. Our team stays updated with the latest technologies and trends, and we focus on creating measurable ROI for our clients. Plus, we provide personalized attention to every project, regardless of size."
                                },
                                {
                                    question: "Can you help with SEO and digital marketing?",
                                    answer: "Absolutely! Our SEO and digital marketing services are designed to increase your online visibility, drive traffic, and boost conversions. We use proven strategies including keyword optimization, content marketing, social media management, and paid advertising campaigns."
                                },
                                {
                                    question: "What is your pricing structure?",
                                    answer: "Our pricing is project-based and depends on your specific requirements, scope, and timeline. We offer flexible packages and custom solutions to fit different budgets. Contact us for a free consultation and detailed quote tailored to your needs."
                                }
                            ].map((faq, index) => (
                                <details key={index} className={styles.faqItem}>
                                    <summary className={styles.faqQuestion}>
                                        <span>{faq.question}</span>
                                        <span className={styles.faqIcon}>+</span>
                                    </summary>
                                    <div className={styles.faqAnswer}>
                                        <p>{faq.answer}</p>
                                    </div>
                                </details>
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
                            <h2>Ready to Transform Your Digital Presence?</h2>
                            <p>Let's create something amazing together. Get in touch with our team today.</p>
                            <div className={styles.ctaButtons}>
                                <Button href="/contact" size="lg" variant="secondary">
                                    Start Your Project
                                </Button>
                                <Button href="/about" size="lg" variant="outline">
                                    Learn About Us
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Before/After Comparison Section */}
                <section className={styles.comparisonSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2>
                                See The <span className="text-gradient">Transformation</span>
                            </h2>
                            <p className={styles.sectionDescription}>
                                Experience the dramatic difference our digital solutions make. Hover to compare before and after.
                            </p>
                        </div>

                        <div className={styles.comparisonContent}>
                            <div className={styles.comparisonGrid}>
                                <div className={styles.comparisonItem}>
                                    <h3 className={styles.comparisonTitle}>Website Redesign</h3>
                                    <p className={styles.comparisonDescription}>Modern, responsive design that converts</p>
                                    <Compare
                                        firstImage="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80"
                                        secondImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                                        firstImageClassName="object-cover"
                                        secondImageClassname="object-cover"
                                        className={styles.compareWidget}
                                        slideMode="hover"
                                        initialSliderPercentage={50}
                                    />
                                </div>

                                <div className={styles.comparisonItem}>
                                    <h3 className={styles.comparisonTitle}>Brand Identity</h3>
                                    <p className={styles.comparisonDescription}>Professional branding that stands out</p>
                                    <Compare
                                        firstImage="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
                                        secondImage="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80"
                                        firstImageClassName="object-cover"
                                        secondImageClassname="object-cover"
                                        className={styles.compareWidget}
                                        slideMode="hover"
                                        initialSliderPercentage={50}
                                    />
                                </div>

                                <div className={styles.comparisonItem}>
                                    <h3 className={styles.comparisonTitle}>Digital Marketing</h3>
                                    <p className={styles.comparisonDescription}>Campaigns that drive real results</p>
                                    <Compare
                                        firstImage="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80"
                                        secondImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                                        firstImageClassName="object-cover"
                                        secondImageClassname="object-cover"
                                        className={styles.compareWidget}
                                        slideMode="hover"
                                        initialSliderPercentage={50}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
