import { notFound } from 'next/navigation'
import Title from '@/app/components/ui/Title'
import Image from 'next/image'
import { getCardById } from '@/app/services/scryfallService'
import { ScryfallCardDetail } from '@/app/types/scryfallTypes'

export default async function CardDetailPage({ params, }: { params: Promise<{ id: string }> }) {
  const { id } = await params;  try {
    const card: ScryfallCardDetail = await getCardById(id)

    const imageUrl =
      card.image_uris?.png ||
      card.image_uris?.large ||
      card.image_uris?.normal ||
      card.image_uris?.small ||
      card.card_faces?.[0]?.image_uris?.png ||
      card.card_faces?.[0]?.image_uris?.large ||
      card.card_faces?.[0]?.image_uris?.normal ||
      card.card_faces?.[0]?.image_uris?.small

    return (
      <main className="pt-28 flex flex-col items-center min-h-screen">
        <Title text={card.name} />

        <div className="flex flex-col md:flex-row mt-8 gap-8 w-full max-w-6xl">
          <div className="flex justify-center md:justify-start w-full md:w-1/2">
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={card.name}
                className="max-w-sm w-full h-auto object-cover"
                width={500}
                height={700}
              />
            )}
          </div>

          <div className="flex flex-col space-y-2 w-full md:w-1/2">
            <p><strong>ID :</strong> {card.id}</p>
            {card.mana_cost && <p><strong>Coût en mana :</strong> {card.mana_cost}</p>}
            {card.type_line && <p><strong>Type :</strong> {card.type_line}</p>}
            {card.oracle_text && <p><strong>Texte oracle :</strong> {card.oracle_text}</p>}
            {card.set_name && <p><strong>Extension :</strong> {card.set_name}</p>}
            {card.rarity && <p><strong>Rareté :</strong> {card.rarity}</p>}
            {card.artist && <p><strong>Artiste :</strong> {card.artist}</p>}
            {card.flavor_text && <p><strong>Texte d&apos;ambiance :</strong> {card.flavor_text}</p>}
            {card.power && card.toughness && (
              <p><strong>Force / Endurance :</strong> {card.power} / {card.toughness}</p>
            )}
          </div>
        </div>
      </main>
    )
  } catch {
    notFound()
  }
}