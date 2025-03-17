import { Article } from '@/app/types/articleTypes'

const API_BASE_URL = '/api/articles'

/**
 * Récupère la liste des articles depuis l'API.
 */
export async function fetchArticles(): Promise<Article[]> {
  try {
    const res = await fetch(API_BASE_URL)
    if (!res.ok) {
      throw new Error('Erreur lors de la récupération des articles.')
    }

    const data = await res.json()
    return data.map((item: any) => ({
      id: item.id,
      title: item.title,
      description: item.content,
      imageUrl: item.image_url,
      author: item.author_id || 'Inconnu',
      category: 'Actualité',
      publishedAt: item.created_at,
      readingTime: Math.ceil(item.content.length / 200),
    }))
  } catch (error) {
    console.error('Erreur lors du chargement des articles:', error)
    return []
  }
}