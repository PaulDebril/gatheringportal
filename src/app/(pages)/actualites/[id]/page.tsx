import ArticleDetail from '@/app/components/Article/ArticleDetail'

export default function ArticleDetailPage({ params }: { params: { id: string } }) {
  console.log(params.id)
  return (
    <main className="pt-16">
      <ArticleDetail id={params.id} />
    </main>
  )
}