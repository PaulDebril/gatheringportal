import Banner from '@/app/components/Banner'
import ComingSoon from '@/app/components/ComingSoon'

export default function GuidePage() {
  return (
    <main className="flex flex-col">
      <Banner 
        image="/images/banner.png"
        title="OUTILS"
        description="Découvrez les outils qui vous aideront à devenir un meilleur joueur de Magic: The Gathering."
      />
      <ComingSoon />
    </main>
  )
}
