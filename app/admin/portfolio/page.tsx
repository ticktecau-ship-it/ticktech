import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { promises as fs } from 'fs'
import path from 'path'
import PortfolioManager from './PortfolioManager'

async function getProjects() {
    try {
        const dbPath = path.join(process.cwd(), 'data', 'projects.json')
        const data = await fs.readFile(dbPath, 'utf-8')
        return JSON.parse(data)
    } catch (error) {
        return []
    }
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
