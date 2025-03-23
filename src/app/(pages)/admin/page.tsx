"use client";
import React, { useState } from "react";
import ComingSoon from "@/app/components/ComingSoon";
import { createArticle } from "@/app/services/articleService";

type AdminTab = "ajouter" | "modifier" | "supprimer";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<AdminTab>("ajouter");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleCreateArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let image_url = "";
      if (imageFile) {
        image_url = "https://ztdkrhwqzsldqalpebbl.supabase.co/storage/v1/object/public/articles//hero%20copie.jpg"
      }
      const payload = { title, content, image_url };
      await createArticle(payload);
      setMessage("Article créé avec succès !");
      setTitle("");
      setContent("");
      setImageFile(null);
    } catch (error) {
      setMessage("Erreur lors de la création de l&apos;article.");
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "ajouter":
        return (
          <div>
            <h1 className="beleren-font text-2xl font-bold mb-4">Ajouter un article</h1>
            <form onSubmit={handleCreateArticle} className="space-y-4">
              <div>
                <label htmlFor="title" className="block font-bold mb-2">
                  Titre de l&apos;article :
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2 rounded bg-neutral-700 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="content" className="block font-bold mb-2">
                  Contenu de l&apos;article :
                </label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full p-2 rounded bg-neutral-700 text-white"
                  rows={6}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="image"
                  className="block mb-2 text-sm font-bold text-white"
                >
                  Image de l&apos;article (optionnel) :
                </label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setImageFile(e.target.files[0]);
                    }
                  }}
                  className={`
                    block w-full text-sm text-white 
                    border border-neutral-500 rounded-lg cursor-pointer 
                    bg-neutral-700 focus:outline-none
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-none file:border-0
                    file:text-sm file:font-semibold
                    file:bg-[#d18700] file:text-white
                    hover:file:bg-[#d18700]/90
                  `}
                />
              </div>
              {message && <p className="text-green-500">{message}</p>}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="bg-[#d18700] border border-[#d18700] text-white py-1 px-2 transform skew-x-[-10deg] cursor-pointer rounded-none text-sm"
                >
                  <span className="inline-block transform skew-x-[10deg] beleren-font">
                    Créer l&apos;article
                  </span>
                </button>
              </div>
            </form>
          </div>
        );
      case "modifier":
        return (
          <div>
            <h1 className="text-2xl font-bold mb-4 beleren-font">Modifier un article</h1>
            <ComingSoon />
          </div>
        );
      case "supprimer":
        return (
          <div>
            <h1 className="text-2xl font-bold mb-4 beleren-font">Supprimer un article</h1>
            <ComingSoon />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="flex flex-col items-center min-h-screen pt-32">
      <div className="bg-neutral-800 rounded shadow p-8 text-white w-11/12 md:w-3/4">
        <div className="flex">
          <aside className="w-1/4 border-r border-neutral-700 p-4">
            <ul>
              <li>
                <button
                  onClick={() => setActiveTab("ajouter")}
                  className={`w-full text-left py-2 px-4 rounded-none beleren-font ${
                    activeTab === "ajouter"
                      ? "bg-[#d18700] font-bold"
                      : "hover:bg-gray-700"
                  }`}
                >
                  Ajouter un article
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("modifier")}
                  className={`w-full text-left py-2 px-4 mt-2 rounded-none beleren-font ${
                    activeTab === "modifier"
                      ? "bg-[#d18700] font-bold"
                      : "hover:bg-gray-700"
                  }`}
                >
                  Modifier un article
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("supprimer")}
                  className={`w-full text-left py-2 px-4 mt-2 rounded-none beleren-font ${
                    activeTab === "supprimer"
                      ? "bg-[#d18700] font-bold"
                      : "hover:bg-gray-700"
                  }`}
                >
                  Supprimer un article
                </button>
              </li>
            </ul>
          </aside>
          <section className="w-3/4 p-4">{renderContent()}</section>
        </div>
      </div>
    </main>
  );
}
