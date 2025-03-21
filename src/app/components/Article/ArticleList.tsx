"use client";
import React, { useState, useEffect } from "react";
import { fetchArticles } from "@/app/services/articleService";
import { Article } from "@/app/types/articleTypes";
import ArticleItem from "./ArticleItem";

interface ArticleListProps {
  mode?: "home" | "articles";
}

const ArticleList: React.FC<ArticleListProps> = ({ mode = "home" }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchArticles();
        setArticles(data);
      } catch {
        setError("Impossible de charger les articles.");
      } finally {
        setLoading(false);
      }
    };
    loadArticles();
  }, []);

  if (loading)
    return <p className="text-center">Chargement des articles...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  const articlesToShow = mode === "home" ? articles.slice(0, 5) : articles;

  if (mode === "home") {
    return (
      <div className="max-w-6xl mx-auto px-4 pt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-white">
          {articlesToShow.slice(0, 2).map((article) => (
            <ArticleItem
              key={article.id}
              article={article}
              imageHeight="h-40"
              titleClass="text-lg font-bold"
              textSize="text-base"
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articlesToShow.slice(2, 5).map((article) => (
            <ArticleItem
              key={article.id}
              article={article}
              imageHeight="h-32"
              titleClass="text-md font-semibold"
              textSize="text-sm"
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="max-w-6xl mx-auto px-4 pt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articlesToShow.map((article) => (
            <ArticleItem
              key={article.id}
              article={article}
              imageHeight="h-40"
              titleClass="text-lg font-bold"
              textSize="text-base"
            />
          ))}
        </div>
      </div>
    );
  }
};

export default ArticleList;
