import Banner from '@/app/components/Banner'
import ComingSoon from '@/app/components/ComingSoon'

export default function GuidePage() {
  return (
    <main className="flex flex-col">
      <Banner 
        image="/images/banner.png"
        title="OUTILS"
        description="Retrouver tous les outils pour vous aider à jouer et collectionner"
      />
      <ComingSoon />
    </main>
  )
}
