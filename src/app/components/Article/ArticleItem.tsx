"use client";
import React from "react";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { Article } from "@/app/types/articleTypes";
import Link from "next/link";
import Image from "next/image";

interface ActuItemProps {
  article: Article;
  imageHeight: string;
  titleClass: string;
  textSize: string;
  onClick?: () => void;
}

const getRelativeTime = (dateStr: string): string => {
  const now = new Date();
  const publishedDate = new Date(dateStr);
  const diffMs = now.getTime() - publishedDate.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
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

const ArticleItem: React.FC<ActuItemProps> = ({
  article,
  imageHeight,
  titleClass,
  textSize,
  onClick,
}) => {
  return (
    <Link href={`/news/${article.id}`}>
      <div
        onClick={onClick}
        role="button"
        tabIndex={0}
        className="bg-neutral-800 rounded shadow cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none h-full flex flex-col"
      >
        <Image
          src={article.imageUrl || "/images/hero-bg.jpg"}
          alt={article.title}
          className={`w-full ${imageHeight} object-cover rounded-t`}
          width={800}
          height={400}
                  />
        <div className="p-4 flex flex-col flex-1">
          <div className="flex items-center justify-between">
            <div className="nav-item parallelogram-actualite text-xs uppercase">
              <span className="parallelogram-text beleren-font">
                {article.category}
              </span>
            </div>
            <div className="flex items-center space-x-1 text-xs uppercase beleren-font">
              <span className="inline-flex items-center">
                <MdOutlineAccessTimeFilled className="mr-1" />
                <span>{article.readingTime} min</span>
              </span>
              <span>•</span>
              <span>{getRelativeTime(article.publishedAt)}</span>
            </div>
          </div>
          <h2 className={`${titleClass} mt-2 beleren-font`}>
            {article.title}
          </h2>
          <p className={`${textSize} mt-1 flex-1`}>
            {article.description.substring(0, 100)}
            {article.description.length > 100 ? "..." : ""}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleItem;
