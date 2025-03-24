import Banner from '@/app/components/ui/Banner'
import ComingSoon from '@/app/components/ui/ComingSoon'

export default function CollectionPage() {
  return (
    <main className="flex flex-col">
      <Banner 
        image="/images/Banner/banner_collection.png"
        title="COLLECTION"
        description="Retrouver ici votre collection de cartes Magic: The Gathering."
      />
      <ComingSoon />
    </main>
  )
}
