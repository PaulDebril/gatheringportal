"use client";

import React, { useRef, useState, useEffect } from "react";
import ArticleList from "@/app/components/Article/ArticleList";
import Title from "./components/Title";
import HomeCards from "./components/HomeCards";
import HomeBanner from "./components/HomeBanner";
import styles from "./Home.module.css";

interface Section {
  name: string;
  ref: React.RefObject<HTMLElement | null>;
}

interface ScrollIndicatorProps {
  sections: Section[];
  activeSection: number;
  onClick: (index: number) => void;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  sections,
  activeSection,
  onClick,
}) => {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
      <ul className="space-y-4">
        {sections.map((section, index) => (
          <li
            key={index}
            className="flex items-center cursor-pointer"
            onClick={() => onClick(index)}
          >
            <div
              className={`w-3 h-3 rounded-full mr-2 ${
                activeSection === index ? "bg-yellow-500" : "bg-gray-400"
              }`}
            ></div>
            <span className="text-sm text-white">{section.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(0);

  const mainRef = useRef<HTMLDivElement>(null);
  const landingRef = useRef<HTMLElement>(null);
  const homeCardsRef = useRef<HTMLElement>(null);
  const newsletterRef = useRef<HTMLElement>(null);
  const actualitesRef = useRef<HTMLElement>(null);

  const sections: Section[] = [
    { name: "Accueil", ref: landingRef },
    { name: "Explorer", ref: homeCardsRef },
    { name: "Newsletter", ref: newsletterRef },
    { name: "Actualités", ref: actualitesRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!mainRef.current) return;
      const scrollPosition = mainRef.current.scrollTop;
      let currentIndex = 0;
      sections.forEach((section, index) => {
        if (section.ref.current) {
          const offsetTop = section.ref.current.offsetTop;
          if (scrollPosition >= offsetTop - 50) {
            currentIndex = index;
          }
        }
      });
      setActiveSection(currentIndex);
    };

    const mainEl = mainRef.current;
    if (mainEl) {
      mainEl.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (mainEl) {
        mainEl.removeEventListener("scroll", handleScroll);
      }
    };
  }, [sections]);

  const scrollToSection = (index: number) => {
    if (sections[index].ref.current) {
      sections[index].ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.pageBackground}>
      <div className="relative">
        <ScrollIndicator
          sections={sections}
          activeSection={activeSection}
          onClick={scrollToSection}
        />

        <main
          ref={mainRef}
          className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth "
        >
          <HomeBanner />

          <section ref={homeCardsRef} className="snap-start h-screen py-10">
            <div className="flex flex-col items-center pt-15 h-full">
              <Title text="EXPLORER GATHERING PORTAL" />
              <HomeCards />
            </div>
          </section>

          <section ref={newsletterRef} className="snap-start h-screen py-10">
            <div className="flex flex-col items-center pt-9 h-full  ">
              <div className="bg-neutral-900 w-full pt-5 pb-5">
              <ArticleList/>
              </div>
             
            </div>
          </section>

          <section ref={actualitesRef} className="snap-start h-screen py-10">
            <div className="flex flex-col items-center pt-5 h-full">
              <Title text="ACTUALITÉS" />
              <ArticleList />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
