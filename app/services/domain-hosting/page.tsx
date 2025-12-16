import type { Metadata } from 'next'
import DomainHostingContent from './DomainHostingContent'

export const metadata: Metadata = {
    title: 'Domain & Hosting Services | TickTec Digital Solution',
    description: 'Reliable domain registration and hosting solutions to keep your website running smoothly 24/7. Shared hosting, VPS, dedicated servers, and more.',
}

export default function DomainHostingPage() {
    return <DomainHostingContent />
}
