"use client";

import React, { useRef, useState } from "react";
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

export default function Home() {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const landingRef = useRef(null);
  const homeCardsRef = useRef(null);
  const newsletterRef = useRef(null);
  const actualitesRef = useRef(null);

  const titleText = "Gathering Portal";
  const titleWords = titleText.split(" ");

  return (
    <main>
      <section
        ref={landingRef}
        className="relative h-screen"
      >
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
                  onAnimationComplete={() => isPortal && setShowSubtitle(true)}
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

      <section
        ref={homeCardsRef}
        className="h-screen py-10"
      >
        <div className="flex flex-col items-center pt-15 h-full">
          <Title text="EXPLORER GATHERING PORTAL" />
          <HomeCards />
        </div>
      </section>

      <section
        ref={newsletterRef}
        className="h-screen py-10"
      >
        <div className="flex flex-col items-center pt-5 h-full">
          <Newsletter />
        </div>
      </section>

      <section
        ref={actualitesRef}
        className="h-screen py-10"
      >
        <div className="flex flex-col items-center pt-5 h-full">
          <Title text="ACTUALITES" />
          <ArticleList />
        </div>
      </section>
    </main>
  );
}
