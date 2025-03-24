import Banner from '@/app/components/ui/Banner'
import ComingSoon from '@/app/components/ui/ComingSoon'

export default function GuidesPage() {
  return (
    <main className="flex flex-col">
      <Banner 
        image="/images/Banner/banner_guides.png"
        title="GUIDES"
        description="Suivez les guides pour apprendre à jouer avec les cartes"
      />
      <ComingSoon />
    </main>
  )
}
