"use client";
import React, { useState, useEffect } from "react";
import { subscribeUser, unsubscribeUser, sendNotification } from "@/app/lib/actions";

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export default function PushNotificationsPreferences() {
  const [subscription, setSubscription] = useState<PushSubscription | null>(null);
  const [message, setMessage] = useState("");
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
 
  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/", updateViaCache: "none" })
        .then(async (registration) => {
          const sub = await registration.pushManager.getSubscription();
          setSubscription(sub);
          if (sub) {
            setNotificationsEnabled(true);
          }
        })
        .catch((error) =>
          console.error("Service Worker registration failed:", error)
        );
    }
  }, []);

  async function subscribeToPush() {
    try {
      const registration = await navigator.serviceWorker.ready;
      const sub = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!
        ),
      });
      setSubscription(sub);
      const serializedSub = JSON.parse(JSON.stringify(sub));
      await subscribeUser(serializedSub);
      alert("Vous êtes désormais abonné aux notifications !");
    } catch (error) {
      console.error("Erreur lors de l’abonnement aux notifications:", error);
    }
  }

  async function unsubscribeFromPush() {
    if (subscription) {
      try {
        await subscription.unsubscribe();
        await unsubscribeUser(subscription);
        setSubscription(null);
        alert("Vous êtes désormais désabonné des notifications.");
      } catch (error) {
        console.error("Erreur lors du désabonnement :", error);
      }
    }
  }

  async function simulateNewArticle() {
    if (subscription) {
      try {
        await sendNotification(
          message || "Un nouvel article vient d'être publié !"
        );
        alert("Notification envoyée !");
      } catch (error) {
        console.error("Erreur lors de l’envoi de la notification:", error);
      }
    } else {
      alert("Vous devez d'abord vous abonner aux notifications.");
    }
  }

  async function handleToggleChange() {
    const newValue = !notificationsEnabled;
    setNotificationsEnabled(newValue);
    if (newValue && !subscription) {
      await subscribeToPush();
    } else if (!newValue && subscription) {
      await unsubscribeFromPush();
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-10 min-h-screen pt-16 md:pt-32">
      <div className="mb-8 bg-neutral-800 rounded shadow p-6 md:p-8 text-white">
        <h1 className="text-3xl font-bold mb-6 text-center beleren-font">
          Préférences utilisateur
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start mb-8">
          <label htmlFor="notifications-toggle" className="mr-4 font-bold whitespace-nowrap">
            Notifications :
          </label>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="notifications-toggle"
              checked={notificationsEnabled}
              onChange={handleToggleChange}
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#d18700] dark:peer-focus:ring-[#d18700] dark:bg-gray-700 peer-checked:bg-[#d18700] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:after:translate-x-full"></div>
            <span className="ml-3 text-sm font-medium text-gray-300">
              {notificationsEnabled ? "Activées" : "Désactivées"}
            </span>
          </label>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            Tester l&apos;envoi d&apos;une notification
          </h2>
          <input
            type="text"
            placeholder="Titre ou message de l'article"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 rounded bg-neutral-700 text-white mb-4"
          />
          <div className="flex">
            <button
              onClick={simulateNewArticle}
              className="ml-auto bg-[#d18700] text-white px-4 py-2 rounded beleren-font"
            >
              Envoyer notification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
