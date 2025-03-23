"use client";

import React, { createContext, useState, useEffect, useContext } from "react";

type User = {
  id: string;
  username: string;
} | null;

type AuthContextProps = {
  user: User;
  loading: boolean;
  error: string | null;
  refreshUser: () => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const refreshUser = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/me");
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Erreur lors de la récupération de l'utilisateur");
      }

      setUser(data.user);
      setError(null);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Une erreur inconnue est survenue");
      }
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, error, refreshUser, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
