import { ScryfallResponse, ScryfallCard, ScryfallCardDetail } from '@/app/types/scryfallTypes'

const SCRYFALL_API_BASE = 'https://api.scryfall.com/cards'

/**
 * Recherche de cartes sur Scryfall
 */
export async function searchCards(query: string): Promise<ScryfallCard[]> {
  try {
    const res = await fetch(`${SCRYFALL_API_BASE}/search?q=${encodeURIComponent(query)}`)
    const data: ScryfallResponse = await res.json()

    if (data.object === 'error' || !data.data) {
      throw new Error(data.details || 'Aucune carte trouvée.')
    }
    return data.data
  } catch (error) {
    console.error('Erreur lors de la recherche:', error)
    throw error
  }
}

/**
 * Récupère les détails d'une carte par ID depuis Scryfall.
 */
export async function getCardById(id: string): Promise<ScryfallCardDetail> {
    try {
      const res = await fetch(`${SCRYFALL_API_BASE}/${id}`)
      if (!res.ok) {
        throw new Error('Carte introuvable.')
      }
      return await res.json()
    } catch (error) {
      console.error('Erreur lors de la récupération de la carte:', error)
      throw error
    }
  }