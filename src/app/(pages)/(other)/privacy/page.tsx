"use client";

import React from "react";
import Banner from "@/app/components/ui/Banner";

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="min-h-screen text-[#CCCCCC] pb-10">
      <Banner 
        image="/images/banner.png"
        title="Politique de confidentialité"
        description="Découvrez comment Gathering Portal protège vos données et respecte votre vie privée."
      />
      <div className="bg-neutral-800 rounded shadow-lg max-w-screen-xl mx-auto w-full p-8 mt-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 beleren-font">
          Politique de confidentialité
        </h1>
        <p className="mb-4 leading-relaxed">
          Chez Gathering Portal, nous attachons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité décrit comment nous collectons, utilisons, stockons et protégeons vos informations.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Collecte de données</h2>
        <p className="mb-4 leading-relaxed">
          Nous ne recueillons que les informations suivantes : votre pseudo, votre adresse mail et votre numéro de téléphone. Ces données sont collectées lors de votre inscription ou lorsque vous nous contactez.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Utilisation des données</h2>
        <p className="mb-4 leading-relaxed">
          Les informations collectées sont utilisées pour gérer votre compte, vous contacter en cas de besoin et vous tenir informé des mises à jour du site. Nous ne vendons ni ne partageons vos données personnelles avec des tiers sans votre consentement.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Sécurité</h2>
        <p className="mb-4 leading-relaxed">
          Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données contre tout accès non autorisé, altération ou divulgation.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Vos droits</h2>
        <p className="mb-4 leading-relaxed">
          Vous disposez du droit d&apos;accéder, de rectifier ou de supprimer vos données personnelles.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Modifications de la politique</h2>
        <p className="mb-4 leading-relaxed">
          Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page et prendront effet dès leur mise en ligne.
        </p>
        <p className="mb-4 leading-relaxed">
          En utilisant notre site, vous acceptez les termes de cette politique de confidentialité.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
