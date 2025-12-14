import type { Metadata } from 'next'
import ContentWritingContent from './ContentWritingContent'

export const metadata: Metadata = {
    title: 'Content Writing Services | TickTec Digital Solution',
    description: 'Engage your audience with compelling, SEO-optimized content that drives results. Blog posts, website copy, product descriptions, and more.',
}

export default function ContentWritingPage() {
    return <ContentWritingContent />
}
