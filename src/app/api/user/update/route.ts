import { NextResponse } from 'next/server';
import { createClient } from '@/app/lib/supabase';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'votre_cle_secrete';

export async function PUT(request: Request) {
  try {
    const token = (await cookies()).get('token')?.value;
    if (!token) {
      return NextResponse.json({ error: 'Token manquant' }, { status: 401 });
    }

    let payload;
    try {
      payload = jwt.verify(token, JWT_SECRET) as { userId: string; email: string };
    } catch {
      return NextResponse.json({ error: 'Token invalide' }, { status: 401 });
    }

    const { username, email } = await request.json();

    const supabase = await createClient();

    const { data, error } = await supabase
      .from('users')
      .update({ username, email })
      .eq('id', payload.userId)
      .single(); 
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      {
        message: 'Utilisateur mis à jour avec succès',
        user: data,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error('Erreur lors de la mise à jour de l\'utilisateur :', err);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}