'use client'

import React, { useState } from 'react'
import Card from '@/components/Card/Card'
import Button from '@/components/Button/Button'
import styles from './portfolio.module.css'
import { motion, AnimatePresence } from 'framer-motion'

interface Project {
    id: string
    title: string
    category: string
    description: string
    tags: string[]
    gradient: string
}

interface PortfolioContentProps {
    initialProjects: Project[]
    categories: string[]
}

export default function PortfolioContent({ initialProjects, categories }: PortfolioContentProps) {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [filteredProjects, setFilteredProjects] = useState(initialProjects)

    const handleFilter = (category: string) => {
        setSelectedCategory(category)
        if (category === 'All') {
            setFilteredProjects(initialProjects)
        } else {
            setFilteredProjects(initialProjects.filter(project => project.category === category))
        }
    }

    return (
        <>
            {/* Filter Section */}
            <section className={styles.filterSection}>
                <div className="container">
                    <div className={styles.filters}>
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`${styles.filterButton} ${selectedCategory === category ? styles.activeFilter : ''}`}
                                onClick={() => handleFilter(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="section-sm">
                <div className="container">
                    <motion.div layout className={styles.projectsGrid}>
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    key={project.id}
                                >
                                    <Card variant="default" className={styles.projectCard}>
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
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredProjects.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)' }}>
                            <p>No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
