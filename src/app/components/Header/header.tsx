"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";

const Header: React.FC = () => {
  const { user, loading } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className={`w-full fixed py-4 px-8 z-50 beleren-font flex items-center transition-all duration-300 ${
          isScrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="flex-none md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="flex-1 hidden md:block" />

        <nav className="flex-none hidden md:block">
          <ul className="flex items-center space-x-6 text-xl">
            <li>
              <Link
                href="/news"
                className={`group relative inline-block font-normal pt-[0.2rem] pb-[0.2rem] pl-[0.5rem] pr-[0.5rem] transition-colors duration-300 ${
                  isActive("/news")
                    ? "text-[#e2b155]"
                    : "hover:text-white"
                }`}
              >
                <span className="relative z-10">Actualités</span>
                <span
                  className="absolute -top-[2px] -left-[8px] -right-[8px] -bottom-[2px]
                             bg-[#d18700] transform skew-x-[-10deg] scale-x-[0.8] opacity-0
                             transition-all duration-300 ease-in-out -z-10 group-hover:opacity-100 group-hover:scale-x-100"
                />
              </Link>
            </li>
            <li>
              <Link
                href="/guides"
                className={`group relative inline-block font-normal pt-[0.2rem] pb-[0.2rem] pl-[0.5rem] pr-[0.5rem] transition-colors duration-300 ${
                  isActive("/guides")
                    ? "text-[#e2b155]"
                    : "hover:text-white"
                }`}
              >
                <span className="relative z-10">Guides</span>
                <span
                  className="absolute -top-[2px] -left-[8px] -right-[8px] -bottom-[2px]
                             bg-[#d18700] transform skew-x-[-10deg] scale-x-[0.8] opacity-0
                             transition-all duration-300 ease-in-out -z-10 group-hover:opacity-100 group-hover:scale-x-100"
                />
              </Link>
            </li>
            <li>
              <Link
                href="/tools"
                className={`group relative inline-block font-normal pt-[0.2rem] pb-[0.2rem] pl-[0.5rem] pr-[0.5rem] transition-colors duration-300 ${
                  isActive("/tools")
                    ? "text-[#e2b155]"
                    : "hover:text-white"
                }`}
              >
                <span className="relative z-10">Outils</span>
                <span
                  className="absolute -top-[2px] -left-[8px] -right-[8px] -bottom-[2px]
                             bg-[#d18700] transform skew-x-[-10deg] scale-x-[0.8] opacity-0
                             transition-all duration-300 ease-in-out -z-10 group-hover:opacity-100 group-hover:scale-x-100"
                />
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
                href="/cards"
                className={`group relative inline-block font-normal pt-[0.2rem] pb-[0.2rem] pl-[0.5rem] pr-[0.5rem] transition-colors duration-300 ${
                  isActive("/cards")
                    ? "text-[#e2b155]"
                    : "hover:text-white"
                }`}
              >
                <span className="relative z-10">Cartes</span>
                <span
                  className="absolute -top-[2px] -left-[8px] -right-[8px] -bottom-[2px]
                             bg-[#d18700] transform skew-x-[-10deg] scale-x-[0.8] opacity-0
                             transition-all duration-300 ease-in-out -z-10 group-hover:opacity-100 group-hover:scale-x-100"
                />
              </Link>
            </li>
            <li>
              <Link
                href="/collection"
                className={`group relative inline-block font-normal pt-[0.2rem] pb-[0.2rem] pl-[0.5rem] pr-[0.5rem] transition-colors duration-300 ${
                  isActive("/collection")
                    ? "text-[#e2b155]"
                    : "hover:text-white"
                }`}
              >
                <span className="relative z-10">Collection</span>
                <span
                  className="absolute -top-[2px] -left-[8px] -right-[8px] -bottom-[2px]
                             bg-[#d18700] transform skew-x-[-10deg] scale-x-[0.8] opacity-0
                             transition-all duration-300 ease-in-out -z-10 group-hover:opacity-100 group-hover:scale-x-100"
                />
              </Link>
            </li>
            <li>
              <Link
                href="/decks"
                className={`group relative inline-block font-normal pt-[0.2rem] pb-[0.2rem] pl-[0.5rem] pr-[0.5rem] transition-colors duration-300 ${
                  isActive("/decks")
                    ? "text-[#e2b155]"
                    : "hover:text-white"
                }`}
              >
                <span className="relative z-10">Deck</span>
                <span
                  className="absolute -top-[2px] -left-[8px] -right-[8px] -bottom-[2px]
                             bg-[#d18700] transform skew-x-[-10deg] scale-x-[0.8] opacity-0
                             transition-all duration-300 ease-in-out -z-10 group-hover:opacity-100 group-hover:scale-x-100"
                />
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex-1 flex justify-center md:hidden">
          <Link href="/">
            <Image
              src="/images/icon.png"
              alt="Logo"
              width={30}
              height={30}
            />
          </Link>
        </div>

        <div className="flex-1 hidden md:flex justify-end">
          {loading ? (
            <p>Chargement...</p>
          ) : user ? (
            <Link href="/account">
              <button className="bg-[#d18700] border border-[#d18700] text-white px-2 py-1 transform -skew-x-10 cursor-pointer">
                <span className="inline-block transform skew-x-10">
                  Mon Compte
                </span>
              </button>
            </Link>
          ) : (
            <Link href="/auth">
              <button className="bg-[#d18700] border border-[#d18700] text-white px-2 py-1 transform -skew-x-10 cursor-pointer">
                <span className="inline-block transform skew-x-10">
                  Se connecter
                </span>
              </button>
            </Link>
          )}
            <Link href="/user-preferences" className="ml-4">
              <button className="bg-[#d18700] border border-[#d18700] text-white px-2 py-1 transform -skew-x-10 cursor-pointer flex items-center justify-center">
              <span className="inline-block transform skew-x-10 items-center justify-center p-1">
                <RiUserSettingsFill />
              </span>
              </button>
            </Link>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed beleren-font inset-0 z-40 bg-black/70 flex items-center justify-center md:hidden">
          <div className="bg-black text-white p-6 w-full h-full flex flex-col items-center justify-center">
            <nav>
              <ul className="flex flex-col items-center space-y-6 text-2xl">
                <li>
                  <Link
                    href="/news"
                    className={`group relative inline-block font-normal pt-[0.2rem] pb-[0.2rem] pl-[0.5rem] pr-[0.5rem] transition-colors duration-300 ${
                      isActive("/news")
                        ? "text-[#e2b155]"
                        : "hover:text-white"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="relative z-10">Actualités</span>
                    <span
                      className="absolute -top-[2px] -left-[8px] -right-[8px] -bottom-[2px]
                                 bg-[#d18700] transform skew-x-[-10deg] scale-x-[0.8] opacity-0
                                 transition-all duration-300 ease-in-out -z-10 group-hover:opacity-100 group-hover:scale-x-100"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides"
                    className={`group relative inline-block font-normal pt-[0.2rem] pb-[0.2rem] pl-[0.5rem] pr-[0.5rem] transition-colors duration-300 ${
                      isActive("/guides")
                        ? "text-[#e2b155]"
                        : "hover:text-white"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="relative z-10">Guides</span>
                    <span
                      className="absolute -top-[2px] -left-[8px] -right-[8px] -bottom-[2px]
                                 bg-[#d18700] transform skew-x-[-10deg] scale-x-[0.8] opacity-0
                                 transition-all duration-300 ease-in-out -z-10 group-hover:opacity-100 group-hover:scale-x-100"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools"
                    className={`group relative inline-block font-normal pt-[0.2rem] pb-[0.2rem] pl-[0.5rem] pr-[0.5rem] transition-colors duration-300 ${
                      isActive("/tools")
                        ? "text-[#e2b155]"
                        : "hover:text-white"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="relative z-10">Outils</span>
                    <span
                      className="absolute -top-[2px] -left-[8px] -right-[8px] -bottom-[2px]
                                 bg-[#d18700] transform skew-x-[-10deg] scale-x-[0.8] opacity-0
                                 transition-all duration-300 ease-in-out -z-10 group-hover:opacity-100 group-hover:scale-x-100"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cards"
                    className={`group relative inline-block font-normal pt-[0.2rem] pb-[0.2rem] pl-[0.5rem] pr-[0.5rem] transition-colors duration-300 ${
                      isActive("/cards")
                        ? "text-[#e2b155]"
                        : "hover:text-white"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="relative z-10">Cartes</span>
                    <span
                      className="absolute -top-[2px] -left-[8px] -right-[8px] -bottom-[2px]
                                 bg-[#d18700] transform skew-x-[-10deg] scale-x-[0.8] opacity-0
                                 transition-all duration-300 ease-in-out -z-10 group-hover:opacity-100 group-hover:scale-x-100"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/collection"
                    className={`group relative inline-block font-normal pt-[0.2rem] pb-[0.2rem] pl-[0.5rem] pr-[0.5rem] transition-colors duration-300 ${
                      isActive("/collection")
                        ? "text-[#e2b155]"
                        : "hover:text-white"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="relative z-10">Collection</span>
                    <span
                      className="absolute -top-[2px] -left-[8px] -right-[8px] -bottom-[2px]
                                 bg-[#d18700] transform skew-x-[-10deg] scale-x-[0.8] opacity-0
                                 transition-all duration-300 ease-in-out -z-10 group-hover:opacity-100 group-hover:scale-x-100"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/decks"
                    className={`group relative inline-block font-normal pt-[0.2rem] pb-[0.2rem] pl-[0.5rem] pr-[0.5rem] transition-colors duration-300 ${
                      isActive("/decks")
                        ? "text-[#e2b155]"
                        : "hover:text-white"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="relative z-10">Deck</span>
                    <span
                      className="absolute -top-[2px] -left-[8px] -right-[8px] -bottom-[2px]
                                 bg-[#d18700] transform skew-x-[-10deg] scale-x-[0.8] opacity-0
                                 transition-all duration-300 ease-in-out -z-10 group-hover:opacity-100 group-hover:scale-x-100"
                    />
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="mt-8 flex flex-col items-center space-y-4 w-full px-4">
            <Link href="/user-preferences" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full max-w-xs bg-neutral-800 border border-neutral-800 text-white px-4 py-3 transform -skew-x-10 cursor-pointer">
                <span className="inline-block transform skew-x-10">Préférences</span>
              </button>
            </Link>
            {loading ? (
              <p className="text-center">Chargement...</p>
            ) : user ? (
              <Link href="/account" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full max-w-xs bg-[#d18700] border border-[#d18700] text-white px-4 py-3 transform -skew-x-10 cursor-pointer">
                  <span className="inline-block transform skew-x-10">Mon Compte</span>
                </button>
              </Link>
            ) : (
              <Link href="/auth" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full max-w-xs bg-[#d18700] border border-[#d18700] text-white px-4 py-3 transform -skew-x-10 cursor-pointer">
                  <span className="inline-block transform skew-x-10">Se connecter</span>
                </button>
              </Link>
            )}
          </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
