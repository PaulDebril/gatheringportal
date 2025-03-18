import CardSearch from '@/app/components/Cards/CardSearch'
import Banner from '@/app/components/Banner'

export default function CardPage() {
  return (
    <main className="flex flex-col min-h-screen">
       <Banner 
        image="/images/banner.png"
        title="CARTES"
        description="Explorez les cartes de Magic: The Gathering"
      />
      <CardSearch />
    </main>
  )
}
