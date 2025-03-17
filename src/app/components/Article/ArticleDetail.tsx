'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import { Article } from '@/app/types/articleTypes'
import { fetchArticleById } from '@/app/services/articleService'

interface ArticleDetailProps {
  id: string
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ id }) => {
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const data = await fetchArticleById(id)
        console.log(data)
        console.log(data)
        if (!data) {
          setError('Article introuvable.')
        }
        setArticle(data)
      } catch {
        setError('Impossible de charger cet article.')
      } finally {
        setLoading(false)
      }
    }
    loadArticle()
  }, [id])

  if (loading) return <p className="text-center">Chargement...</p>
  if (error) return <p className="text-center text-red-500">{error}</p>
  if (!article) return null

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <Image
        src={article.imageUrl}
        alt={article.title}
        width={800}
        height={450}
        className="rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{article.title}</h1>
      <p className="text-gray-600 mt-2">
        Publié le {format(new Date(article.publishedAt), 'dd MMMM yyyy', { locale: fr })}
      </p>
      <p className="text-gray-500 text-sm mt-1">Auteur : {article.author}</p>
      <p className="text-gray-700 mt-4">{article.description}</p>
    </div>
  )
}

export default ArticleDetail