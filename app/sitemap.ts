import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://tictacdigital.com'

    // Static pages
    const staticPages = [
        '',
        '/about',
        '/contact',
        '/portfolio',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Service pages
    const services = [
        'web-development',
        'seo',
        'digital-marketing',
        'branding',
        'content-writing',
        'domain-hosting',
    ].map((service) => ({
        url: `${baseUrl}/services/${service}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }))

    return [...staticPages, ...services]
}
