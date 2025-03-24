"use client";
import React from "react";
import ArticleList from "@/app/components/Article/ArticleList";
import Banner from "@/app/components/ui/Banner";

export default function NewsPage() {
  return (
    <main className="min-h-screen">
      <Banner 
        image="/images/Banner/banner_news.jpg"
        title="ACTUALITÉS"
        description="Découvrez les dernières nouvelles et mises à jour"
      />
      <div className="flex flex-col items-center py-10">
      <ArticleList mode="articles" />
      </div>
    </main>
  );
}
