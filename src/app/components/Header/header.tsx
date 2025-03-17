"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useAuth } from "@/app/lib/useAuth"; 

const Header: React.FC = () => {
  const { user, loading } = useAuth();

  return (
    <header className="w-full fixed py-4 flex justify-between items-center px-8 z-9999 beleren-font">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/images/icon.png"
            alt="icon"
            width={20}
            height={20}
            className="mr-2"
          />
        </Link>
        <Link href="/" className="text-2xl font-bold">
          Gathering Portal
        </Link>
      </div>
      <nav>
        <ul className="flex items-center space-x-6 text-xl">
          <li>
            <Link href="/actualites" className="hover:underline">
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
        {loading ? (
          <p>Chargement...</p>
        ) : user ? (
          <Link href="/mon-compte">
            <button className="border rounded bg-amber-950 text-white border-amber-950 py-1 px-4">
              Mon Compte
            </button>
          </Link>
        ) : (
          <Link href="/auth">
            <button className="border rounded bg-amber-950 text-white border-amber-950 py-1 px-4">
              Se connecter
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
