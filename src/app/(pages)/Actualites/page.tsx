"use client";
import React from "react";
import ArticleList from "@/app/components/Article/ArticleList";
import { Article } from "@/app/components/Article/ArticleItem";
import Title from "@/app/components/Title";

const fakeArticles: Article[] = [
  {
    id: 1,
    title: "Analyse : L'évolution de la méta",
    description:
      "Une analyse approfondie sur l'évolution de la méta avec l'arrivée des dernières extensions et leurs impacts sur le jeu compétitif.",
    imageUrl: "/images/hero-bg.jpg",
    author: "Marine LANGREZ",
    category: "ANALYSE",
    publishedAt: "2025-03-17T10:00:00Z",
    readingTime: 5,
  },
  {
    id: 2,
    title: "Analyse : L'évolution de la méta",
    description:
      "Une analyse approfondie sur l'évolution de la méta avec l'arrivée des dernières extensions et leurs impacts sur le jeu compétitif.",
    imageUrl: "/images/hero-bg.jpg",
    author: "Marine LANGREZ",
    category: "ANALYSE",
    publishedAt: "2025-03-17T10:00:00Z",
    readingTime: 5,
  },
  {
    id: 3,
    title: "Analyse : L'évolution de la méta",
    description:
      "Une analyse approfondie sur l'évolution de la méta avec l'arrivée des dernières extensions et leurs impacts sur le jeu compétitif.",
    imageUrl: "/images/hero-bg.jpg",
    author: "Marine LANGREZ",
    category: "ANALYSE",
    publishedAt: "2025-03-17T10:00:00Z",
    readingTime: 5,
  },
  {
    id: 4,
    title: "Analyse : L'évolution de la méta",
    description:
      "Une analyse approfondie sur l'évolution de la méta avec l'arrivée des dernières extensions et leurs impacts sur le jeu compétitif.",
    imageUrl: "/images/hero-bg.jpg",
    author: "Marine LANGREZ",
    category: "ANALYSE",
    publishedAt: "2025-03-17T10:00:00Z",
    readingTime: 5,
  },
  {
    id: 5,
    title: "Analyse : L'évolution de la méta",
    description:
      "Une analyse approfondie sur l'évolution de la méta avec l'arrivée des dernières extensions et leurs impacts sur le jeu compétitif.",
    imageUrl: "/images/hero-bg.jpg",
    author: "Marine LANGREZ",
    category: "ANALYSE",
    publishedAt: "2025-03-17T10:00:00Z",
    readingTime: 5,
  },
  {
    id: 6,
    title: "Analyse : L'évolution de la méta",
    description:
      "Une analyse approfondie sur l'évolution de la méta avec l'arrivée des dernières extensions et leurs impacts sur le jeu compétitif.",
    imageUrl: "/images/hero-bg.jpg",
    author: "Marine LANGREZ",
    category: "ANALYSE",
    publishedAt: "2025-03-17T10:00:00Z",
    readingTime: 5,
  },
  {
    id: 7,
    title: "Analyse : L'évolution de la méta",
    description:
      "Une analyse approfondie sur l'évolution de la méta avec l'arrivée des dernières extensions et leurs impacts sur le jeu compétitif.",
    imageUrl: "/images/hero-bg.jpg",
    author: "Marine LANGREZ",
    category: "ANALYSE",
    publishedAt: "2025-03-17T10:00:00Z",
    readingTime: 5,
  },
  {
    id: 8,
    title: "Analyse : L'évolution de la méta",
    description:
      "Une analyse approfondie sur l'évolution de la méta avec l'arrivée des dernières extensions et leurs impacts sur le jeu compétitif.",
    imageUrl: "/images/hero-bg.jpg",
    author: "Marine LANGREZ",
    category: "ANALYSE",
    publishedAt: "2025-03-17T10:00:00Z",
    readingTime: 5,
  },
];

export default function ActualitesPage() {
  return (
    <main className="min-h-screen py-10 bg-gray-50 dark:bg-black pt-28">
      <div className="flex flex-col items-center">
        <Title text="ACTUALITES" />
        <ArticleList limit={8} articles={fakeArticles} />
      </div>
    </main>
  );
}
