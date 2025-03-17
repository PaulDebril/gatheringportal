'use client'
import React, { useState, useEffect } from 'react'
import ArticleItem from '@/app/components/Article/ArticleItem'
import { fetchArticles } from '@/app/services/articleService'
import { Article } from '@/app/types/articleTypes'

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchArticles()
        setArticles(data)
      } catch{
        setError('Impossible de charger les articles.')
      } finally {
        setLoading(false)
      }
    }
    loadArticles()
  }, [])

  if (loading) return <p className="text-center">Chargement des articles...</p>
  if (error) return <p className="text-center text-red-500">{error}</p>

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {articles.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}

export default ArticleList