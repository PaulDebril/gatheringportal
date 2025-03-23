"use client";

import React from "react";
import Banner from "@/app/components/Banner";

const About: React.FC = () => {
  return (
    <section className="min-h-screen text-[#CCCCCC]">
      <Banner 
        image="/images/banner.png"
        title="À propos"
        description="Découvrez notre histoire et notre engagement pour Magic : The Gathering."
      />
      <div className="bg-neutral-800 rounded shadow-lg max-w-screen-xl mx-auto w-full p-8 mt-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 beleren-font">
          À propos de Gathering Portal
        </h1>
        <p className="mb-4 leading-relaxed">
          Gathering Portal est un site dédié aux passionnés de{" "}
          <strong>Magic : The Gathering</strong>. Ce projet a été réalisé par des fans
          dans le but de partager des informations, des conseils et des outils autour de
          l&apos;univers Magic. Vous y trouverez plusieurs sections telles que :
        </p>
        <ul className="list-disc list-inside mb-4 pl-4">
          <li>Actualités sur l&apos;univers de Magic</li>
          <li>Guides et conseils pour bien débuter</li>
          <li>Outils pour créer et optimiser vos decks</li>
          <li>Une collection de cartes et de contenus de fans</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          Nous nous efforçons de fournir des informations précises et à jour, tout en respectant
          les droits d&apos;auteur et la Politique de contenu de{" "}
          <strong>Wizards of the Coast</strong>. Gathering Portal n&apos;est ni produit ni approuvé
          par Wizards of the Coast.
        </p>
        <p className="mb-4 leading-relaxed">
          Pour toute question, suggestion ou demande de collaboration, n&apos;hésitez pas à nous{" "}
          contacter. Votre avis nous est précieux pour faire évoluer ce site.
        </p>
      </div>
    </section>
  );
};

export default About;
