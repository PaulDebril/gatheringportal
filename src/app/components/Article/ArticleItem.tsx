'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'
import { Article } from '@/app/types/articleTypes'

interface ArticleItemProps {
  article: Article
}

const ArticleItem: React.FC<ArticleItemProps> = ({ article }) => {
  const formattedDate = formatDistanceToNow(new Date(article.publishedAt), {
    addSuffix: true,
    locale: fr,
  })

  return (
    <Link
      href={`/articles/${article.id}`}
      className="block bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105"
    >
      <div className="relative w-full h-39">
        <Image
          src={article.imageUrl}
          alt={article.title}
          width={600}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <span className="bg-yellow-400 text-black text-xs font-bold uppercase px-3 py-1 rounded">
          {article.category}
        </span>
        <div className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2 mt-2">
          <span>{formattedDate}</span>
          <span className="font-bold">•</span>
          <span>{article.readingTime} minutes</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-2">
          {article.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 line-clamp-2">
          {article.description}
        </p>
      </div>
    </Link>
  )
}

export default ArticleItem