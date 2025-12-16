'use client'

import React, { useState } from 'react'
import Button from '../Button/Button'
import styles from './ContactForm.module.css'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    })

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('submitting')

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: 'contact',
                    to: 'ticktec.au@gmail.com',
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    service: formData.service,
                    message: `Service: ${formData.service}\n\n${formData.message}`,
                }),
            })

            const data = await response.json()

            if (response.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', phone: '', service: '', message: '' })

                setTimeout(() => {
                    setStatus('idle')
                }, 5000)
            } else {
                console.error('Email error:', data)
                setStatus('error')

                setTimeout(() => {
                    setStatus('idle')
                }, 5000)
            }
        } catch (error) {
            console.error('Form submission error:', error)
            setStatus('error')

            setTimeout(() => {
                setStatus('idle')
            }, 5000)
        }
    }

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                    Full Name *
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    required
                    placeholder="John Doe"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                    Email Address *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    required
                    placeholder="john@example.com"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="+1 (234) 567-890"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="service" className={styles.label}>
                    Service Interested In *
                </label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={styles.select}
                    required
                >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="seo">SEO Services</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="content-writing">Content Writing</option>
                    <option value="domain-hosting">Domain & Hosting</option>
                    <option value="branding">Branding & Logo Design</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                    Project Details *
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    required
                    rows={6}
                    placeholder="Tell us about your project..."
                />
            </div>

            {status === 'success' && (
                <div className={styles.successMessage}>
                    ✓ Thank you!
                </div>
            )}

            {status === 'error' && (
                <div className={styles.errorMessage}>
                    ✗ Failed to send message. Please try again or email us directly at ticktec.au@gmail.com
                </div>
            )}

            <Button
                type="submit"
                size="lg"
                className={styles.submitButton}
            >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </Button>
        </form>
    )
}
