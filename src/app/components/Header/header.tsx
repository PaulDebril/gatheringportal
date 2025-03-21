"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/app/lib/useAuth";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const { user, loading } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`w-full fixed py-4 px-8 z-9999 beleren-font flex items-center transition-all duration-300 ${
        isScrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex-1" />

      <nav className="flex-none">
        <ul className="flex items-center space-x-6 text-xl">
          <li>
            <Link
              href="/actualites"
              className={`nav-item ${
                isActive("/actualites") ? "text-[#e2b155]" : ""
              }`}
            >
              Actualités
            </Link>
          </li>
          <li>
            <Link
              href="/guide"
              className={`nav-item ${
                isActive("/guide") ? "text-[#e2b155]" : ""
              }`}
            >
              Guide
            </Link>
          </li>
          <li>
            <Link
              href="/outils"
              className={`nav-item ${
                isActive("/outils") ? "text-[#e2b155]" : ""
              }`}
            >
              Outils
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image
                src="/images/icon.png"
                alt="Logo"
                width={30}
                height={30}
                className="mx-4"
              />
            </Link>
          </li>
          <li>
            <Link
              href="/cartes"
              className={`nav-item ${
                isActive("/cartes") ? "text-[#e2b155]" : ""
              }`}
            >
              Cartes
            </Link>
          </li>
          <li>
            <Link
              href="/collection"
              className={`nav-item ${
                isActive("/collection") ? "text-[#e2b155]" : ""
              }`}
            >
              Collection
            </Link>
          </li>
          <li>
            <Link
              href="/decks"
              className={`nav-item ${
                isActive("/decks") ? "text-[#e2b155]" : ""
              }`}
            >
              Deck Builder
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex-1 flex justify-end">
        {loading ? (
          <p>Chargement...</p>
        ) : user ? (
          <Link href="/mon-compte">
            <button className="parallelogram-button">
              <span className="parallelogram-text">Mon Compte</span>
            </button>
          </Link>
        ) : (
          <Link href="/auth">
            <button className="parallelogram-button">
              <span className="parallelogram-text">Se connecter</span>
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
