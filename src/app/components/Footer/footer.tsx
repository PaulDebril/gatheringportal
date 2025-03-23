"use client";
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Footer: React.FC = () => {
  const year: number = new Date().getFullYear();
  return (
    <footer className="bg-[#1F1F1F] text-[#CCCCCC] dark:bg-[#1F1F1F] dark:text-[#CCCCCC]">
      <div className="max-w-screen-xl mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0">
            <Image
              src="/images/icon.png"
              alt="Logo"
              width={30}
              height={30}
              className="mr-2"
            />
            <span className="text-xl font-semibold whitespace-nowrap">
              Gathering Portal
            </span>
          </Link>
          <ul className="flex flex-wrap items-center text-base">
            <li>
              <Link href="/about" className="mr-4 hover:underline md:mr-6">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="mr-4 hover:underline md:mr-6">
                Politique de confidentialité
              </Link>
            </li>

            <li>
              <Link href="/legal" className="mr-4 hover:underline md:mr-6">
                Mentions Légales
              </Link>
            </li>
           
          </ul>
        </div>
        <p className="mt-4 text-xs leading-relaxed">
          Certaines sections de Gathering Portal sont du contenu de fan non officiel autorisé par la Politique de contenu de Wizards of the Coast. Les informations sur Magic : The Gathering, y compris images et symboles de mana, sont protégées par le droit d&apos;auteur de Wizards of the Coast, LLC. Gathering Portal n&apos;est ni produit ni approuvé par Wizards of the Coast.
          <br />
          Les prix et offres indiqués sont des estimations quotidiennes et ne garantissent pas leur valeur finale. Consultez les magasins pour les tarifs définitifs.
        </p>
        <hr className="my-6 border-gray-600 sm:mx-auto" />
        <p className="text-center text-sm">
          © {year}{' '}
          <Link href="/" className="hover:underline">
            Gathering Portal
          </Link>
          . Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
