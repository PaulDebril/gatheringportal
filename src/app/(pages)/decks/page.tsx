import Banner from '@/app/components/ui/Banner'
import ComingSoon from '@/app/components/ui/ComingSoon'

export default function DecksPage() {
  return (
    <main className="flex flex-col">
      <Banner 
        image="/images/Banner/banner_decks.png"
        title="DECKS"
        description="Réalisez des decks pour jouer avec les cartes"
      />
      <ComingSoon />
    </main>
  )
}
