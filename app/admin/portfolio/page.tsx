import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import PortfolioManager from './PortfolioManager'
import { supabaseAdmin } from '@/lib/supabase'

async function getProjects() {
    if (!supabaseAdmin) return []

    const { data, error } = await supabaseAdmin
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Admin portfolio getProjects error:', error)
        return []
    }

    return data || []
}

export default async function PortfolioAdminPage() {
    const cookieStore = cookies()
    const token = cookieStore.get('admin_token')

    if (!token) {
        redirect('/admin/login')
    }

    const projects = await getProjects()

    return <PortfolioManager projects={projects} />
}
