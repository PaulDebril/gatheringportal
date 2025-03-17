"use client";
import Link from "next/link";
import React from "react";

const HomeCards = () => {
  const cards = [
    {
      title: "ACTUALITÉS",
      href: "/Actualites",
      image: "/images/magicPerso.png",
      description: "Retrouvez les dernières infos et annonces autour de Magic."
    },
    {
      title: "GUIDE",
      href: "/Guide",
      image: "/images/magicPerso.png",
      description: "Découvrez des conseils et astuces pour bien débuter."
    },
    {
      title: "CARTES",
      href: "/cartes",
      image: "/images/magicPerso.png",
      description: "Parcourez notre bibliothèque de cartes pour enrichir vos decks."
    },
    {
      title: "DECK BUILDER",
      href: "/decks",
      image: "/images/magicPerso.png",
      description: "Créez, organisez et optimisez vos decks en quelques clics."
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <Link
            key={index}
            href={card.href}
            className="block bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105"
          >
            <div className="relative h-60 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
              <img
                src={card.image}
                alt={card.title}
                className="object-contain w-auto h-full"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold beleren-font">{card.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {card.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;
