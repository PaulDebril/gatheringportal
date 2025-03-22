"use client";
import React, { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
  const [phone, setPhone] = useState<string>("");

  const [notifications, setNotifications] = useState<boolean>(false);
  const [newsletter, setNewsletter] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const router = useRouter();

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
        setPhone("");
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleSaveInfo = (e: FormEvent) => {
    e.preventDefault();
    if (user) {
      const updatedUser = { ...user, username, email };
      setUser(updatedUser);
      setMessage("Mise à jour réussie !");
      setEditingInfo(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/auth");
    } catch (err) {
      console.error("Erreur lors de la déconnexion :", err);
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
                      Nom d'utilisateur :
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
                    <label htmlFor="phone" className="block font-bold mb-2">
                      Numéro de téléphone :
                    </label>
                    <input
                      id="phone"
                      type="text"
                      className="w-full p-2 rounded bg-neutral-700 text-white"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Non renseigné"
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
                        setPhone("");
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
                    <strong>Nom d'utilisateur :</strong> {user.username}
                  </p>
                  <p className="mt-4">
                    <strong>Email :</strong> {user.email}
                  </p>
                  <p className="mt-4">
                    <strong>Numéro de téléphone :</strong> {phone || "Non renseigné"}
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
              <div className="space-y-6">
                <div className="flex items-center">
                  <label htmlFor="notifications" className="mr-4 font-bold">
                    Notifications :
                  </label>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      id="notifications"
                      checked={notifications}
                      onChange={(e) => setNotifications(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#d18700] dark:peer-focus:ring-[#d18700] dark:bg-gray-700 peer-checked:bg-[#d18700] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:after:translate-x-full"></div>
                    <span className="ml-3 text-sm font-medium text-gray-300">
                      {notifications ? "Activées" : "Désactivées"}
                    </span>
                  </label>
                </div>
                <div className="flex items-center">
                  <label htmlFor="newsletter" className="mr-4 font-bold">
                    Newsletter :
                  </label>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      id="newsletter"
                      checked={newsletter}
                      onChange={(e) => setNewsletter(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#d18700] dark:peer-focus:ring-[#d18700] dark:bg-gray-700 peer-checked:bg-[#d18700] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:after:translate-x-full"></div>
                    <span className="ml-3 text-sm font-medium text-gray-300">
                      {newsletter ? "Abonné(e)" : "Non abonné(e)"}
                    </span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
