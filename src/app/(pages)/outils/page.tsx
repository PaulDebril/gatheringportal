import Banner from '@/app/components/Banner'
import ComingSoon from '@/app/components/ComingSoon'

export default function GuidePage() {
  return (
    <main className="flex flex-col">
      <Banner 
        image="/images/banner.png"
        title="COLLECTION"
        description="Retrouvez et gérez vos cartes"
      />
      <ComingSoon />
    </main>
  )
}
