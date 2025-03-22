"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import type { ToolWithLink } from "@/app/types/toolTypes";
import { FaExternalLinkAlt } from "react-icons/fa";

const ToolCard: React.FC<{ tool: ToolWithLink }> = ({ tool }) => {
  const isExternal = tool.externalUrl.startsWith("http");
  const cardContent = (
    <div className="group relative rounded shadow overflow-hidden cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg h-full w-full">
      <div className="absolute inset-0">
        <Image
          src={tool.imageUrl}
          alt={tool.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>
      <div className="relative p-8 flex flex-col h-full transition-opacity duration-200 group-hover:opacity-0">
        <div className="bg-belerine p-2">
          <h2 className="text-4xl font-bold text-white text-center beleren-font">
            {tool.title}
          </h2>
        </div>
        <p className="mt-6 text-gray-300 flex-1 text-center">
          {tool.description}
        </p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 opacity-0 group-hover:opacity-100">
        <span className="text-4xl font-bold text-white beleren-font">Découvrir</span>
      </div>
      {isExternal ? (
        <div className="absolute top-2 right-2">
          <FaExternalLinkAlt className="text-white text-lg" />
        </div>
      ) : (
        <div className="absolute top-2 right-2 pr-2">
          <Image
            src="/images/icon.png"
            alt="Logo"
            width={24}
            height={24}
          />
        </div>
      )}
    </div>
  );
  return isExternal ? (
    <a href={tool.externalUrl} target="_blank" rel="noopener noreferrer">
      {cardContent}
    </a>
  ) : (
    <Link href={tool.externalUrl}>
      {cardContent}
    </Link>
  );
};

export default ToolCard;
