import type { Metadata } from 'next'
import SeoContent from './SeoContent'

export const metadata: Metadata = {
    title: 'SEO Services | TickTec Digital Solution',
    description: 'Boost your online visibility and drive organic traffic with our comprehensive SEO strategies. Keyword research, on-page optimization, technical SEO, and more.',
}

export default function SEOPage() {
    return <SeoContent />
}
