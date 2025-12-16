import type { Metadata } from 'next'
import BrandingContent from './BrandingContent'

export const metadata: Metadata = {
    title: 'Branding & Logo Design Services | TickTec Digital Solution',
    description: 'Create a memorable brand identity that resonates with your audience and stands out from the competition. Logo design, brand strategy, visual identity, and more.',
}

export default function BrandingPage() {
    return <BrandingContent />
}
