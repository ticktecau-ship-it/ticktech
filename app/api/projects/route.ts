import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

// GET: Fetch all projects
export async function GET() {
    if (!supabaseAdmin) {
        return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 })
    }

    const { data, error } = await supabaseAdmin
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        console.error('GET /api/projects error:', error)
        return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })
    }

    return NextResponse.json(data || [])
}

// POST: Add new project
export async function POST(request: Request) {
    if (!supabaseAdmin) {
        return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 })
    }

    try {
        const body = await request.json()

        const { data, error } = await supabaseAdmin
            .from('projects')
            .insert({
                title: body.title,
                category: body.category,
                description: body.description,
                tags: body.tags,
                gradient: body.gradient,
            })
            .select('*')
            .single()

        if (error) {
            console.error('POST /api/projects error:', error)
            return NextResponse.json({ error: 'Failed to create project' }, { status: 500 })
        }

        return NextResponse.json(data)
    } catch (error) {
        console.error('POST /api/projects exception:', error)
        return NextResponse.json({ error: 'Failed to create project' }, { status: 500 })
    }
}

// DELETE: Remove project
export async function DELETE(request: Request) {
    if (!supabaseAdmin) {
        return NextResponse.json({ error: 'Supabase not configured' }, { status: 500 })
    }

    try {
        const { searchParams } = new URL(request.url)
        const id = searchParams.get('id')

        if (!id) {
            return NextResponse.json({ error: 'ID required' }, { status: 400 })
        }

        const { error } = await supabaseAdmin
            .from('projects')
            .delete()
            .eq('id', id)

        if (error) {
            console.error('DELETE /api/projects error:', error)
            return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 })
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('DELETE /api/projects exception:', error)
        return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 })
    }
}
