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
