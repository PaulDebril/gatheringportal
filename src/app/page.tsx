"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ArticleList from "@/app/components/Article/ArticleList";
import Title from "./components/Title";
import Newsletter from "./components/Newsletter/page";
import HomeCards from "./components/HomeCards";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const letterContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

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
  const [showSubtitle, setShowSubtitle] = useState<boolean>(false);
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

  const titleText: string = "Gathering Portal";
  const titleWords: string[] = titleText.split(" ");

  return (
    <div className="relative">
      <ScrollIndicator
        sections={sections}
        activeSection={activeSection}
        onClick={scrollToSection}
      />

      <main
        ref={mainRef}
        className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth"
      >
        <section ref={landingRef} className="snap-start relative h-screen">
          <div
            className="absolute inset-0 blur-sm bg-cover"
            style={{ backgroundImage: "url('images/bg2.png')" }}
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.h1
              className="text-8xl font-bold text-[#e2b155] beleren-font text-center leading-tight"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {titleWords.map((word, index) => {
                const isPortal = word.toLowerCase() === "portal";
                return (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    onAnimationComplete={() =>
                      isPortal && setShowSubtitle(true)
                    }
                  >
                    {isPortal ? (
                      <motion.span
                        variants={letterContainerVariants}
                        className="inline-block"
                      >
                        {word.split("").map((letter, i) => (
                          <motion.span key={i} variants={letterVariants}>
                            {letter}
                          </motion.span>
                        ))}
                      </motion.span>
                    ) : (
                      word
                    )}
                    &nbsp;
                  </motion.span>
                );
              })}
            </motion.h1>
            <motion.p
              className="mt-4 text-3xl text-gray-200 beleren-font text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: showSubtitle ? 1 : 0 }}
              transition={{ duration: 2 }}
            >
              Explorer l&apos;univers et révéler le champion en vous
            </motion.p>
          </div>
        </section>

        <section ref={homeCardsRef} className="snap-start h-screen py-10">
          <div className="flex flex-col items-center pt-15 h-full">
            <Title text="EXPLORER GATHERING PORTAL" />
            <HomeCards />
          </div>
        </section>

        <section ref={newsletterRef} className="snap-start h-screen py-10">
          <div className="flex flex-col items-center pt-5 h-full">
            <Newsletter />
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
  );
};

export default Home;