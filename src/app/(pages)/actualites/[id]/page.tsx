import ArticleDetail from '@/app/components/Article/ArticleDetail'

interface ArticleDetailPageProps {
  params: { id: string }
}

export default function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  console.log("ID reçu:", params.id)

  return (
    <main className="pt-16">
      <ArticleDetail id={params.id} />
    </main>
  )
}