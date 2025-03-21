"use client";
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Tool } from '@/app/types/toolTypes';

const ToolCard: React.FC<{ tool: Tool }> = ({ tool }) => {
    return (
      <Link href={`/outils/${tool.id}`}>
        <div className="group relative rounded shadow overflow-hidden cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bg.jpg"
              alt="Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-75"></div>
          </div>
          <div className="relative p-6 flex flex-col h-full transition-opacity duration-200 group-hover:opacity-0">
            <div className="bg-belerine p-2">
              <h2 className="text-3xl font-bold text-white text-center beleren-font">
                {tool.title}
              </h2>
            </div>
            <p className="mt-4 text-gray-300 flex-1 text-center">
              {tool.description}
            </p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 opacity-0 group-hover:opacity-100">
            <span className="text-3xl font-bold text-white beleren-font">Découvrir</span>
          </div>
        </div>
      </Link>
    );
  };
export default ToolCard;
