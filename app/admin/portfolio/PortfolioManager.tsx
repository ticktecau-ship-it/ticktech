'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AdminSidebar from '../components/AdminSidebar'
import styles from '../dashboard/dashboard.module.css'

export default function PortfolioManager({ projects }: { projects: any[] }) {
    const router = useRouter()
    const [isAdding, setIsAdding] = useState(false)
    const [formData, setFormData] = useState({
        title: '',
        category: 'Web Development',
        description: '',
        tags: '',
    })

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this project?')) return

        const res = await fetch(`/api/projects?id=${id}`, { method: 'DELETE' })
        if (res.ok) {
            router.refresh()
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Random gradient for now
        const gradients = [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
        ]

        const newProject = {
            ...formData,
            tags: formData.tags.split(',').map(t => t.trim()),
            gradient: gradients[Math.floor(Math.random() * gradients.length)]
        }

        const res = await fetch('/api/projects', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProject)
        })

        if (res.ok) {
            setIsAdding(false)
            setFormData({ title: '', category: 'Web Development', description: '', tags: '' })
            router.refresh()
        }
    }

    return (
        <div className={styles.container}>
            <AdminSidebar />
            <div className="flex-1 ml-64 min-h-screen bg-[var(--background)]">
                <main className={styles.content}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <h1 className={styles.sectionTitle}>Portfolio Projects</h1>
                        <button
                            onClick={() => setIsAdding(!isAdding)}
                            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-6 py-2.5 rounded-lg shadow-lg shadow-blue-500/20 font-medium transition-all transform hover:-translate-y-0.5"
                        >
                            {isAdding ? 'Cancel' : 'Add New Project'}
                        </button>
                    </div>

                    {/* Form Section */}
                    {isAdding && (
                        <div className={`${styles.statCard} mb-8 border-l-4 border-l-blue-500`}>
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                Add New Project
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-2">Project Title</label>
                                        <input
                                            className="w-full bg-[#0B1C2D] border border-slate-700 rounded-lg p-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                            value={formData.title}
                                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                            required
                                            placeholder="e.g. E-Commerce Redesign"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-400 mb-2">Category</label>
                                        <select
                                            className="w-full bg-[#0B1C2D] border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                            value={formData.category}
                                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        >
                                            <option>Web Development</option>
                                            <option>SEO</option>
                                            <option>Digital Marketing</option>
                                            <option>Branding</option>
                                            <option>Content Writing</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Description</label>
                                    <textarea
                                        className="w-full bg-[#0B1C2D] border border-slate-700 rounded-lg p-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        rows={3}
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        required
                                        placeholder="Brief description of the project..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Tags (comma separated)</label>
                                    <input
                                        className="w-full bg-[#0B1C2D] border border-slate-700 rounded-lg p-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        placeholder="Next.js, React, SEO"
                                        value={formData.tags}
                                        onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="flex justify-end pt-4 border-t border-slate-700/50">
                                    <button type="submit" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-3 rounded-lg shadow-lg shadow-blue-500/20 font-bold transition-all transform hover:-translate-y-0.5">
                                        Save Project
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <div key={project.id} className={`${styles.statCard} group hover:border-blue-500/50 transition-all duration-300`}>
                                <div className="flex flex-col h-full justify-between">
                                    <div>
                                        <div
                                            className="h-2 w-full rounded-full mb-4 opacity-80"
                                            style={{ background: project.gradient || 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)' }}
                                        ></div>
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs font-bold px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                                {project.category}
                                            </span>
                                            <button
                                                onClick={() => handleDelete(project.id)}
                                                className="text-slate-500 hover:text-red-400 p-1.5 hover:bg-red-500/10 rounded-md transition-colors opacity-0 group-hover:opacity-100"
                                                title="Delete Project"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M3 6h18"></path>
                                                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                                    <path d="M8 6V4c0-1 1-2 2-2h4c0 1 1 2 2 2v2"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <h3 className="font-bold text-xl text-white mb-2 leading-tight">{project.title}</h3>
                                        <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag: string, idx: number) => (
                                            <span key={idx} className="text-xs text-slate-500 bg-slate-800/50 px-2 py-1 rounded border border-slate-700/50">#{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    )
}
