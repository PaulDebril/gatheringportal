import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { createClient } from '@/app/lib/supabase'

const JWT_SECRET = process.env.JWT_SECRET || 'votre_cle_secrete'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    const supabase = await createClient()

    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single()

    if (error || !user) {
      return NextResponse.json(
        { error: 'Utilisateur non trouvé' },
        { status: 400 }
      )
    }

    const isValid = await bcrypt.compare(password, user.password_hash)
    if (!isValid) {
      return NextResponse.json(
        { error: 'Mot de passe invalide' },
        { status: 400 }
      )
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: '7d',
    })

    const response = NextResponse.json({ message: 'Connexion réussie' })
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })

    return response
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
