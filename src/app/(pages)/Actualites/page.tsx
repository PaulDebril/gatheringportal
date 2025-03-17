"use client";
import React from "react";
import ArticleList from "@/app/components/Article/ArticleList";
import Title from "@/app/components/Title";

export default function ActualitesPage() {
  return (
    <main className="min-h-screen py-10 bg-gray-50 dark:bg-black pt-28">
      <div className="flex flex-col items-center">
        <Title text="ACTUALITES" />
        <ArticleList/>
      </div>
    </main>
  );
}
