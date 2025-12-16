import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const dbPath = path.join(process.cwd(), 'data', 'projects.json')

// Helper to read DB
async function getProjects() {
    try {
        const data = await fs.readFile(dbPath, 'utf-8')
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}

// GET: Fetch all projects
export async function GET() {
    const projects = await getProjects()
    return NextResponse.json(projects)
}

// POST: Add new project
export async function POST(request: Request) {
    try {
        const body = await request.json()
        const projects = await getProjects()

        // Simple ID generation
        const newProject = {
            id: Date.now().toString(),
            ...body
        }

        // Add to beginning
        projects.unshift(newProject)

        // Save
        await fs.writeFile(dbPath, JSON.stringify(projects, null, 2))

        return NextResponse.json(newProject)
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create project' }, { status: 500 })
    }
}

// DELETE: Remove project
export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const id = searchParams.get('id')

        if (!id) {
            return NextResponse.json({ error: 'ID required' }, { status: 400 })
        }

        let projects = await getProjects()
        projects = projects.filter((p: any) => p.id !== id)

        await fs.writeFile(dbPath, JSON.stringify(projects, null, 2))

        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 })
    }
}
