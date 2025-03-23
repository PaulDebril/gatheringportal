"use client";
import React, { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import { updateUser } from "@/app/services/userService"; 

interface User {
  id: string;
  username: string;
  email: string;
  role: string;
  created_at: string;
}

export default function MyAccount() {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<"info" | "settings">("info");

  const [editingInfo, setEditingInfo] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const router = useRouter();
  const { refreshUser } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/me");
        if (!res.ok) {
          throw new Error("Erreur lors de la récupération des informations du compte.");
        }
        const data = await res.json();
        setUser(data.user);
        setUsername(data.user.username);
        setEmail(data.user.email);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleSaveInfo = async (e: FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setSaving(true);
    setMessage("");
    setError("");

    try {
      await updateUser({ username, email });

      setUser((prev) => (prev ? { ...prev, username, email } : null));

      setMessage("Mise à jour réussie !");
      setEditingInfo(false);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      await refreshUser();
      router.push("/auth");
    } catch (err) {
      console.error("Erreur lors de la déconnexion :", err);
    }
  };

  const handleExportData = () => {
    alert("Vos données personnelles ont été exportées !");
  };

  const handleAccountDeletion = () => {
    const confirmation = window.confirm("Êtes-vous sûr de vouloir désactiver votre compte ?");
    if (confirmation) {
      alert("Votre compte a été désactivé.");
      router.push("/auth");
    }
  };

  if (loading) return <p>Chargement...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!user) return <p>Aucun utilisateur trouvé.</p>;

  return (
    <div className="max-w-7xl mx-auto p-10 min-h-screen pt-32">
      <div className="bg-neutral-800 rounded shadow p-8 text-white flex">
        <aside className="w-1/4 pr-4 border-r border-neutral-700 flex flex-col justify-between">
          <nav>
            <ul>
              <li>
                <button
                  onClick={() => setActiveTab("info")}
                  className={`w-full beleren-font text-left py-2 px-4 ${
                    activeTab === "info" ? "bg-[#d18700] font-bold" : "hover:bg-gray-700"
                  }`}
                >
                  Mes Informations
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`w-full beleren-font text-left py-2 px-4 mt-2 ${
                    activeTab === "settings" ? "bg-[#d18700] font-bold" : "hover:bg-gray-700"
                  }`}
                >
                  Paramètres
                </button>
              </li>
              <li>
                <button
                  onClick={() => router.push("/admin")}
                  className="w-full beleren-font text-left py-2 px-4 mt-2 hover:bg-gray-700"
                >
                  Administration
                </button>
              </li>
            </ul>
          </nav>
          <div>
            <button
              onClick={handleLogout}
              className="w-full beleren-font text-left py-2 px-4 mt-4 text-red-500 hover:bg-gray-700"
            >
              Se déconnecter
            </button>
          </div>
        </aside>

        <section className="w-3/4 pl-4">
          {activeTab === "info" ? (
            <div>
              <h1 className="text-3xl font-bold mb-6 text-center beleren-font">
                Mes Informations
              </h1>
              {editingInfo ? (
                <form onSubmit={handleSaveInfo} className="mt-6">
                  <div className="mb-6">
                    <label htmlFor="username" className="block font-bold mb-2">
                      Nom d&apos;utilisateur :
                    </label>
                    <input
                      id="username"
                      type="text"
                      className="w-full p-2 rounded bg-neutral-700 text-white"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block font-bold mb-2">
                      Email :
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-2 rounded bg-neutral-700 text-white"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-6">
                    <Link href="/account/change-password">
                      <span className="text-sm font-medium text-[#d18700] hover:underline">
                        Changer mon mot de passe
                      </span>
                    </Link>
                  </div>
                  {message && <p className="text-green-500 mb-4">{message}</p>}
                  {error && <p className="text-red-500 mb-4">{error}</p>}
                  <div className="flex space-x-4 justify-end">
                    <button
                      type="submit"
                      disabled={saving}
                      className="bg-[#d18700] border border-[#d18700] text-white py-1 px-2 transform skew-x-[-10deg] cursor-pointer rounded-none text-sm"
                    >
                      <span className="inline-block transform skew-x-[10deg] beleren-font">
                        Enregistrer
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setEditingInfo(false);
                        setUsername(user.username);
                        setEmail(user.email);
                        setMessage("");
                        setError("");
                      }}
                      className="bg-gray-600 border border-gray-600 text-white py-1 px-2 transform skew-x-[-10deg] cursor-pointer rounded-none text-sm hover:bg-gray-500"
                    >
                      <span className="inline-block transform skew-x-[10deg] beleren-font">
                        Annuler
                      </span>
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <p className="mt-6">
                    <strong>Nom d&apos;utilisateur :</strong> {user.username}
                  </p>
                  <p className="mt-4">
                    <strong>Email :</strong> {user.email}
                  </p>
                  <div className="mt-4">
                    <Link href="/account/change-password">
                      <span className="text-sm font-medium text-[#d18700] hover:underline">
                        Changer mon mot de passe
                      </span>
                    </Link>
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={() => setEditingInfo(true)}
                      className="mt-6 bg-[#d18700] border border-[#d18700] text-white py-1 px-2 transform skew-x-[-10deg] cursor-pointer rounded-none text-sm"
                    >
                      <span className="inline-block transform skew-x-[10deg] beleren-font">
                        Modifier
                      </span>
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div>
              <h1 className="text-3xl font-bold mb-6 text-center beleren-font">
                Paramètres
              </h1>
              <div className="flex items-center mb-8">
                <label className="mr-4 font-bold">
                  Téléchargez vos données personnelles
                </label>
                <button
                  onClick={handleExportData}
                  className="bg-[#d18700] border border-[#d18700] text-white py-1 px-2 transform skew-x-[-10deg] cursor-pointer rounded-none text-sm"
                >
                  <span className="inline-block transform skew-x-[10deg] beleren-font">
                    Télécharger
                  </span>
                </button>
              </div>
              <div className="flex items-center">
                <label className="mr-4 font-bold">Désactiver le compte</label>
                <button
                  onClick={handleAccountDeletion}
                  className="bg-[#d18700] border border-[#d18700] text-white py-1 px-2 transform skew-x-[-10deg] cursor-pointer rounded-none text-sm"
                >
                  <span className="inline-block transform skew-x-[10deg] beleren-font">
                    Désactiver
                  </span>
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}