"use client";
import React from "react";
import Banner from "@/app/components/Banner";
import Link from "next/link";
import Image from "next/image";
import type { ToolWithLink } from "@/app/types/toolTypes";


const tools: ToolWithLink[] = [
  {
    id: 1,
    title: "Calculateur de points",
    description: "Calculez rapidement vos points de vie et suivez vos compteurs en jeu.",
    externalUrl: "/outils/lifecounter"
  },
  {
    id: 2,
    title: "Jouer à distance",
    description: "Rejoignez vos amis et jouez à Magic en ligne via Spelltable.",
    externalUrl: "https://spelltable.wizards.com/"
  },
  {
    id: 3,
    title: "Card Market",
    description: "Achetez et vendez vos cartes Magic sur la plus grande plateforme européenne.",
    externalUrl: "https://www.cardmarket.com/fr"
  },
];

const ToolCard: React.FC<{ tool: ToolWithLink }> = ({ tool }) => {
  const isExternal = tool.externalUrl.startsWith("http");
  const cardContent = (
    <div className="group relative rounded shadow overflow-hidden cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>
      <div className="relative p-6 flex flex-col h-full transition-opacity duration-200 group-hover:opacity-0">
        <div className="bg-belerine p-2">
          <h2 className="text-3xl font-bold text-white text-center beleren-font">
            {tool.title}
          </h2>
        </div>
        <p className="mt-4 text-gray-300 flex-1 text-center">
          {tool.description}
        </p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 opacity-0 group-hover:opacity-100">
        <span className="text-xl font-bold text-white">Découvrir</span>
      </div>
    </div>
  );
  return isExternal ? (
    <a href={tool.externalUrl} target="_blank" rel="noopener noreferrer">
      {cardContent}
    </a>
  ) : (
    <Link href={tool.externalUrl}>
      {cardContent}
    </Link>
  );
};

export default function OutilsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Banner
        image="/images/banner.png"
        title="OUTILS"
        description="Découvrez les outils qui vous aideront à devenir un meilleur joueur de Magic: The Gathering."
      />
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </main>
  );
}
