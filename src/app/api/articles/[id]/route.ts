import { NextResponse } from 'next/server'
import { createClient } from '@/app/lib/supabase' // Vérifiez le chemin correct

/**
 * @swagger
 * /api/articles/{id}:
 *   get:
 *     summary: Récupérer un article par ID
 *     description: Retourne un article spécifique selon son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'article à récupérer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Article récupéré avec succès
 *       404:
 *         description: Article non trouvé
 *       500:
 *         description: Erreur serveur
 */
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const supabase = await createClient()
  const { data: article, error } = await supabase
    .from('articles')
    .select('*')
    .eq('id', params.id)
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  if (!article) {
    return NextResponse.json({ error: 'Article introuvable' }, { status: 404 })
  }

  return NextResponse.json(article, { status: 200 })
}