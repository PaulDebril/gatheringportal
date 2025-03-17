"use client";
import React from "react";
import ArticleList from "@/app/components/Article/ArticleList";
import Title from "./components/Title";
import Newsletter from "./components/Newsletter/page";

export default function Home() {

  return (
    <main>
      <section className="relative h-screen">
        <div
          className="absolute inset-0 blur-sm bg-cover"
          style={{ backgroundImage: "url('images/bg2.png')" }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-7xl font-bold text-[#e2b155] beleren-font max-w-3xl text-center">
            Explorer l'univers de Magic The Gathering
          </h1>
        </div>
      </section>
      <section className="py-10">
        <div className="flex flex-col items-center pt-5">
          <Title text="ACTUALITES" />
          <ArticleList />
        </div>
      </section>
      <section className="py-10">
        <div className="flex flex-col items-center pt-5">
          <Newsletter/>
        </div>
      </section>
    </main>
  );
}
