import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import { createClient } from '@/app/lib/supabase'
import { cookies } from 'next/headers'

const JWT_SECRET = process.env.JWT_SECRET || 'votre_cle_secrete'

export async function GET() {
  try {
    const cookieStore = cookies()
    const token = (await cookieStore).get('token')?.value

    if (!token) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string }

    if (!decoded?.userId) {
      return NextResponse.json({ error: 'Token invalide' }, { status: 401 })
    }
    const supabase = createClient()

    const { data: user, error } = await (await supabase)
      .from('users')
      .select('id, username, email, role, created_at')
      .eq('id', decoded.userId)
      .single()

    if (error || !user) {
      return NextResponse.json(
        { error: 'Utilisateur non trouvé' },
        { status: 404 }
      )
    }

    return NextResponse.json({ user })
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
