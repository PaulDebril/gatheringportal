"use client";
import React from "react";

interface BannerProps {
  image: string;
  title: string;
  description: string;
}

const Banner: React.FC<BannerProps> = ({ image, title, description }) => {
  return (
    <section
      className="relative w-full bg-cover bg-center h-90"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
        <h1 className="text-5xl font-bold beleren-font text-[#e2b155]">{title}</h1>
        <p className="mt-4 text-xl beleren-font text-white">{description}</p>
      </div>
    </section>
  );
};

export default Banner;
