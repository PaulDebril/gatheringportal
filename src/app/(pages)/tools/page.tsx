"use client";
import React from "react";
import Banner from "@/app/components/ui/Banner";
import type { ToolWithLink } from "@/app/types/toolTypes";
import ToolCard from "@/app/components/Tools/tools";

const tools: ToolWithLink[] = [
  {
    id: 1,
    title: "Lifecounter",
    description: "Calculez rapidement vos points de vie et suivez vos compteurs en jeu.",
    externalUrl: "/tools/lifecounter",
    imageUrl: "/images/Tool/tool-lifecounter.png"
  },
  {
    id: 2,
    title: "Jouer à distance",
    description: "Rejoignez vos amis et jouez à Magic en ligne via Spelltable.",
    externalUrl: "https://spelltable.wizards.com/",
    imageUrl: "/images/Tool/tool-spelltable.png"
  },
  {
    id: 3,
    title: "Card Market",
    description: "Achetez et vendez vos cartes Magic sur la plus grande plateforme européenne.",
    externalUrl: "https://www.cardmarket.com/fr",
    imageUrl: "/images/Tool/tool-cardmarket.png"
  },
  {
    id: 4,
    title: "TCG Player",
    description: "Découvrez vos cartes et comparez les prix sur TCG Player.",
    externalUrl: "https://www.tcgplayer.com/",
    imageUrl: "/images/Tool/tool-tcg-player.png"
  },
  {
    id: 5,
    title: "Mana Box",
    description: "Gérez votre collection et suivez vos ressources avec Mana Box.",
    externalUrl: "https://www.manabox.app/",
    imageUrl: "/images/Tool/tool-mana-box.png"
  },
  {
    id: 6,
    title: "Utapped.gg",
    description: "Analysez vos matchs et optimisez vos stratégies sur Utapped.gg.",
    externalUrl: "https://mtga.untapped.gg/",
    imageUrl: "/images/Tool/tool-untapped-gg.png"
  },
];


export default function ToolsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Banner
        image="/images/Banner/banner_tools.png"
        title="OUTILS"
        description="Découvrez les outils qui vous aideront à devenir un meilleur joueur de Magic: The Gathering."
      />
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </main>
  );
}
