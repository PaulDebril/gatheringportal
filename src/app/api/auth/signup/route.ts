import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { createClient } from '@/app/lib/supabase'

const JWT_SECRET = process.env.JWT_SECRET || 'votre_cle_secrete'

export async function POST(request: Request) {
  try {
    const { username, email, password } = await request.json()
    const supabase = await createClient()

    const { data: existingUser } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single()

    if (existingUser) {
      return NextResponse.json(
        { error: 'Utilisateur déjà existant' },
        { status: 400 }
      )
    }

    const salt = await bcrypt.genSalt(10)
    const password_hash = await bcrypt.hash(password, salt)

    const { data: user, error } = await supabase
      .from('users')
      .insert([{ username, email, password_hash }])
      .select()
      .single()

    if (error || !user) {
      return NextResponse.json(
        { error: error?.message || 'Erreur lors de l’inscription' },
        { status: 500 }
      )
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: '7d',
    })

    const response = NextResponse.json({ message: 'Inscription réussie' })
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 7 jours
      path: '/',
    })

    return response
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
