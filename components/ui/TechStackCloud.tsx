"use client"

import dynamic from 'next/dynamic'

const IconCloud = dynamic(
    () => import('@/components/ui/interactive-icon-cloud').then(mod => ({ default: mod.IconCloud })),
    {
        ssr: false,
        loading: () => (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "400px"
            }}>
                <div className="loading-spinner" />
            </div>
        )
    }
)

export default function TechStackCloud({ iconSlugs }: { iconSlugs: string[] }) {
    return <IconCloud iconSlugs={iconSlugs} />
}
