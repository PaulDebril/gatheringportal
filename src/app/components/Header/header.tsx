"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full fixed py-4 flex justify-between items-center px-8 z-9999 beleren-font" >
      <div className="flex items-center">
        <Link href="/">
        <Image
            src="/images/icon.png"
            alt="icon"
            width={20}
            height={20}
            className="mr-2 text-[#544040]"
          />
        </Link>
        <Link href="/" className="text-2xl font-bold" >
          Gathering Portal
        </Link>
      </div>
      <nav>
        <ul className="flex items-center space-x-6 text-xl" >
          <li>
            <Link href="/Actualites" className="hover:underline">
              Actualités
            </Link>
          </li>
          <li>
            <Link href="/guide" className="hover:underline">
              Guide
            </Link>
          </li>
          <li>
            <Link href="/cartes" className="hover:underline">
              Cartes
            </Link>
          </li>
          <li>
            <Link href="/decks" className="hover:underline">
              Deck Builder
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <button className="border rounded bg-amber-950 text-white border-amber-950 py-1 px-4">
          Se connecter
        </button>
      </div>
    </header>
  );
};

export default Header;
