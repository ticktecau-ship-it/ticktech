import type { Metadata } from 'next'
import WebDevContent from './WebDevContent'

export const metadata: Metadata = {
    title: 'Web Development Services | TickTec Digital Solution',
    description: 'Transform your vision into reality with custom websites and web applications built using the latest technologies. Responsive design, e-commerce solutions, and more.',
}

export default function WebDevelopmentPage() {
    return <WebDevContent />
}
