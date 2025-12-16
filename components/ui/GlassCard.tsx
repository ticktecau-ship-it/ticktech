import React from 'react'
import styles from './GlassCard.module.css'

interface GlassCardProps {
    children: React.ReactNode
    className?: string
    hover?: boolean
    variant?: 'default' | 'lg'
}

export default function GlassCard({
    children,
    className = '',
    hover = true,
    variant = 'default'
}: GlassCardProps) {
    const variantClass = variant === 'lg' ? styles.glassLg : styles.glass
    const hoverClass = hover ? styles.glassHover : ''

    return (
        <div className={`${styles.card} ${variantClass} ${hoverClass} ${className}`}>
            {children}
        </div>
    )
}
