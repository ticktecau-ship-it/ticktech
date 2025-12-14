import type { Metadata } from 'next'
import DigitalMarketingContent from './DigitalMarketingContent'

export const metadata: Metadata = {
    title: 'Digital Marketing Services | TickTec Digital Solution',
    description: 'Reach your target audience and maximize ROI with data-driven digital marketing campaigns. Social media, PPC, email marketing, and more.',
}

export default function DigitalMarketingPage() {
    return <DigitalMarketingContent />
}
