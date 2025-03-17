import Title from '@/app/components/Title'
import CardSearch from '@/app/components/Cards/CardSearch'

export default function CardPage() {
  return (
    <main className="pt-28 flex flex-col min-h-screen">
      <div className="flex flex-col items-center">
        <Title text="CARTES" />
      </div>
      <CardSearch />
    </main>
  )
}
