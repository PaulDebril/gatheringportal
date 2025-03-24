"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const HomeCards = () => {
  const cards = [
    {
      title: "ACTUALITÉS",
      href: "/news",
      image: "/images/hero-bg.jpg",
      description: "Retrouvez les dernières infos et annonces autour de Magic."
    },
    {
      title: "GUIDES",
      href: "/guides",
      image: "/images/HomeCards/card_guides.png",      
      description: "Découvrez des conseils et astuces pour bien débuter."
    },
    {
      title: "CARTES",
      href: "/cards",
      image: "/images/HomeCards/card_cards.png",      
      description: "Parcourez notre bibliothèque de cartes pour enrichir vos decks."
    },
    {
      title: "DECK BUILDER",
      href: "/decks",
      image: "/images/HomeCards/card_decks.png",      
      description: "Créez, organisez et optimisez vos decks en quelques clics."
    },
    {
      title: "OUTILS",
      href: "/tools",
      image: "/images/HomeCards/card_tools.png",      
      description: "Découvrez divers outils pour améliorer votre expérience Magic."
    },
    {
      title: "COLLECTION",
      href: "/collection",
      image: "/images/HomeCards/card_collection.png",
      description: "Explorez votre collection et suivez vos cartes favorites."
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <Link
            key={index}
            href={card.href}
            className="block bg-neutral-800 shadow-lg rounded overflow-hidden transition transform hover:scale-105 h-50"
          >
            <div className="flex h-full">
              <div
                className="relative w-1/2"
                style={{ clipPath: 'polygon(0 0, 85% 0, 70% 100%, 0 100%)' }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={300}
                  height={300}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="w-1/2 p-4 flex flex-col justify-center">
                <h2 className="text-xl font-bold beleren-font">{card.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {card.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;
