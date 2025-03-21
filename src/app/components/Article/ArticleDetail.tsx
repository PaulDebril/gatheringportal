"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { fetchArticleById } from "@/app/services/articleService";
import { Article } from "@/app/types/articleTypes";

interface ArticleDetailProps {
  id: string;
}

const getRelativeTime = (dateStr: string): string => {
  const now = new Date();
  const publishedDate = new Date(dateStr);
  const diffMs = now.getTime() - publishedDate.getTime();
  const diffMinutes = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays > 0) {
    return `il y a ${diffDays} jour${diffDays > 1 ? "s" : ""}`;
  } else if (diffHours > 0) {
    return `il y a ${diffHours} heure${diffHours > 1 ? "s" : ""}`;
  } else if (diffMinutes > 0) {
    return `il y a ${diffMinutes} minute${diffMinutes > 1 ? "s" : ""}`;
  } else {
    return "à l'instant";
  }
};

const ArticleDetail: React.FC<ArticleDetailProps> = ({ id }) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (id) {
      const loadArticle = async () => {
        try {
          const data = await fetchArticleById(id);
          if (data) {
            setArticle(data);
          } else {
            setError("Article introuvable");
          }
        } catch {
          setError("Erreur lors du chargement de l'article");
        } finally {
          setLoading(false);
        }
      };
      loadArticle();
    }
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!article) return <p>Article non trouvé.</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 min-h-screen">
      <div className="bg-neutral-800 rounded shadow overflow-hidden">
        <div className="relative w-full h-64">
          <Image
            src={article.imageUrl || "/images/hero-bg.jpg"}
            alt={article.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="p-8 pt-4">
          <div className="flex justify-between items-center">
            <div className="nav-item parallelogram-actualite text-xs uppercase">
              <span className="parallelogram-text beleren-font">
                {article.category}
              </span>
            </div>
            <div className="flex items-center space-x-1 text-gray-300">
              <MdOutlineAccessTimeFilled className="mr-1" />
              <span>{article.readingTime} min</span>
              <span>•</span>
              <span>{getRelativeTime(article.publishedAt)}</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold mt-4 text-white">
            {article.title}
          </h1>
          <p className="mt-2 text-gray-300">Par {article.author}</p>
          <p className="mt-4 text-white">{article.description}</p>
          <Link href="/actualites">
            <span className="mt-4 inline-block text-blue-500 hover:underline cursor-pointer">
              Retour aux actualités
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
