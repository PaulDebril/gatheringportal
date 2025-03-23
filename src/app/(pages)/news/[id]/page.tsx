import ArticleDetail from '@/app/components/Article/ArticleDetail';

export default async function NewsDetailPage({ params, }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  console.log(id);
  return (
    <main className="pt-16">
      <ArticleDetail id={id} />
    </main>
  );
}