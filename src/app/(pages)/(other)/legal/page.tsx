"use client";
import React from "react";
import Banner from "@/app/components/ui/Banner";
import Link from "next/link";

const LegalMentions: React.FC = () => {
  return (
    <section className="min-h-screen text-[#CCCCCC] pb-10">
      <Banner 
        image="/images/banner.png"
        title="Mentions légales"
        description="Découvrez les informations légales concernant Gathering Portal."
      />
      <div className="bg-neutral-800 rounded shadow-lg max-w-screen-xl mx-auto w-full p-8 mt-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 beleren-font">
          Mentions légales
        </h1>
        <p className="mb-4 leading-relaxed">
          Gathering Portal est un site web développé par deux développeurs, Paul Debril et Marine Langrez. Le site utilise Supabase pour sa gestion de données et est hébergé sur Vercel.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Éditeur du site</h2>
        <p className="mb-4 leading-relaxed">
          Paul Debril et Marine Langrez<br />
        </p>
        <h2 className="text-2xl font-semibold mb-4">Hébergeur</h2>
        <p className="mb-4 leading-relaxed">
          Le site est hébergé par Vercel.<br />
          Site web : <Link href="https://vercel.com" className="text-[#d18700] hover:underline">https://vercel.com</Link>
        </p>
        <h2 className="text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
        <p className="mb-4 leading-relaxed">
          Tous les contenus présents sur ce site, y compris les textes, images, logos et vidéos, sont la propriété exclusive de Gathering Portal ou de leurs propriétaires respectifs. Toute reproduction ou représentation, totale ou partielle, sans autorisation préalable est interdite.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Responsabilité</h2>
        <p className="mb-4 leading-relaxed">
          Gathering Portal ne saurait être tenu responsable des dommages directs ou indirects pouvant survenir lors de l&apos;utilisation du site. Les informations sont fournies à titre indicatif et peuvent être modifiées sans préavis.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
        <p className="mb-4 leading-relaxed">
          Le site utilise des cookies pour améliorer l&apos;expérience utilisateur. En continuant de naviguer sur le site, vous acceptez notre utilisation des cookies conformément à notre politique.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Données personnelles</h2>
        <p className="mb-4 leading-relaxed">
          Pour toute question relative à vos données personnelles, veuillez consulter notre{" "}
          <Link href="/privacy" className="text-[#d18700] hover:underline">
            Politique de confidentialité
          </Link>.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Modification des mentions légales</h2>
        <p className="mb-4 leading-relaxed">
          Gathering Portal se réserve le droit de modifier à tout moment les présentes mentions légales. Nous vous invitons à les consulter régulièrement.
        </p>
      </div>
    </section>
  );
};

export default LegalMentions;
