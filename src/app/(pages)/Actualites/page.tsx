"use client";
import React from "react";
import ArticleList from "@/app/components/Article/ArticleList";
import Banner from "@/app/components/Banner";

export default function ActualitesPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black">
      <Banner 
        image="/images/banner.png"
        title="ACTUALITÉS"
        description="Découvrez les dernières nouvelles et mises à jour"
      />
      <div className="flex flex-col items-center py-10">
      <ArticleList mode="articles" />
      </div>
    </main>
  );
}
