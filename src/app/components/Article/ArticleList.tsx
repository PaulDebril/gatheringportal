"use client";
import React from "react";
import ArticleItem, { Article } from "./ArticleItem";

interface ArticleListProps {
  articles: Article[];
  limit?: number;
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, limit }) => {
  const displayedArticles = limit ? articles.slice(0, limit) : articles;
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {displayedArticles.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
