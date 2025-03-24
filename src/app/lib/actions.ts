'use server'

import webpush from 'web-push';

webpush.setVapidDetails(
  'mailto:your-email@example.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

let subscriptions: PushSubscription[] = [];

export async function subscribeUser(sub: PushSubscription) {
  subscriptions.push(sub);
  return { success: true };
}

export async function unsubscribeUser(sub: PushSubscription) {
  subscriptions = subscriptions.filter((s) => s.endpoint !== sub.endpoint);
  return { success: true };
}

export async function sendNotification(message: string) {
  const payload = JSON.stringify({
    title: 'Nouvel Article',
    body: message,
    icon: 'images/icon-192x192.png',
  });

  console.log('Envoi de la notification :', payload);

  for (const sub of subscriptions) {
    const subJSON = (sub as PushSubscription).toJSON ? (sub as PushSubscription).toJSON() : sub;
    if (!subJSON.endpoint) {
      console.error('Abonnement invalide (endpoint manquant) :', sub);
      continue;
    }
    const validSub = subJSON as {
      endpoint: string;
      keys: {
        p256dh: string;
        auth: string;
      };
    };
    try {
      await webpush.sendNotification(validSub, payload);
    } catch (error) {
      console.error('Erreur lors de l’envoi de la notification:', error);
    }
  }
  console.log('Notifications envoyées avec succès !');
  return { success: true };
}