"use client";
import { useState, useEffect } from "react";

export default function OfflineBanner() {
  const [isOffline, setIsOffline] = useState(false);
    
  useEffect(() => {
    const updateOnlineStatus = () => setIsOffline(!navigator.onLine);

    updateOnlineStatus();

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div className="bg-yellow-400 p-2 text-center font-bold text-black">
      Vous êtes actuellement hors ligne.
    </div>
  );
}