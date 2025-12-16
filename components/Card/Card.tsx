import React from 'react'
import styles from './Card.module.css'

interface CardProps {
    children: React.ReactNode
    variant?: 'default' | 'glass' | 'gradient'
    hover?: boolean
    className?: string
}

export default function Card({
    children,
    variant = 'default',
    hover = true,
    className = ''
}: CardProps) {
    const classes = `${styles.card} ${styles[variant]} ${hover ? styles.hover : ''} ${className}`

    return <div className={classes}>{children}</div>
}
