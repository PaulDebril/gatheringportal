import { NextResponse } from 'next/server'
import { createClient } from '@/app/lib/supabase' // Assurez-vous que le chemin est correct

/**
 * @swagger
 * /api/articles:
 *   get:
 *     summary: Récupérer tous les articles
 *     description: Retourne la liste complète des articles enregistrés
 *     responses:
 *       200:
 *         description: Liste des articles récupérée avec succès
 *       500:
 *         description: Erreur serveur
 */
export async function GET() {
  const supabase = await createClient()
  const { data: articles, error } = await supabase.from('articles').select('*')

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(articles, { status: 200 })
}

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const { title, content, author_id, image_url } = await request.json()

    const { data, error } = await supabase
      .from('articles')
      .insert([
        {
          title,
          content,
          author_id,
          image_url,
        },
      ])
      .select('*')
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data, { status: 201 })
  } catch (err) {
    console.error('Erreur lors de la création de l’article :', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}