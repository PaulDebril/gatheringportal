import Banner from '@/app/components/Banner'
import ComingSoon from '@/app/components/ComingSoon'

export default function GuidePage() {
  return (
    <main className="flex flex-col">
      <Banner 
        image="/images/banner.png"
        title="GUIDE"
        description="Suivez les guides pour apprendre à jouer avec les cartes"
      />
      <ComingSoon />
    </main>
  )
}
