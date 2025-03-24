# Détail des fonctionnalités – *GatheringPortal*

Le site propose des outils, des actualités et une expérience enrichie pour accompagner les joueurs au quotidien.



## Page Actualités

- Présente les dernières **actualités** du jeu Magic: The Gathering.
- Mises à jour sur les **nouvelles extensions**, produits, événements ...
- Articles rédigés via une interface d’administration.
- Interface claire pour parcourir les publications par date.

---

## Page Guide *(à venir)*

- Espace dédié à l’apprentissage et à la progression des joueurs.
- Contenu prévu :
  - **Guides pour débutants**
  - **Stratégies avancées**
  - Explications sur les formats (Commander, Standard, etc.)
- Cette page est prévue pour une prochaine version.

---

## Page Cartes

- Permet de rechercher une **carte Magic par son nom**.
- Affichage des résultats avec images et nom des cartes.
- En cliquant sur une carte, une **fiche détaillée** s’ouvre :
  - Illustration
  - Description complète
  - Types, couleurs, coût, rareté, texte de règles
  - (Possibilité d’intégrer les formats et extensions dans une version future)

---

## Page Collection *(à venir)*

- Fonctionnalité prévue pour permettre aux utilisateurs de :
  - Répertorier leur propre collection de cartes.
  - Organiser leurs cartes par édition, couleur, rareté, etc.
  - Suivre ce qu’ils possèdent déjà pour éviter les doublons.
- Interface à venir, liée au compte utilisateur.

---

## Page Decks *(à venir)*

- Fonction prévue pour **créer, modifier et sauvegarder ses decks personnalisés**.
- Fonctionnalités envisagées :
  - Création manuelle ou via recherche intégrée.
  - Calcul du mana curve, ratio de couleurs, types de cartes.
  - Enregistrement de plusieurs versions d’un même deck.

---

## Pages Utilisateur

- **Connexion / Inscription**
- **Page de préférences** :
  - Personnalisation de l’expérience utilisateur.
  - Activation ou désactivation des **notifications push**.
- Gestion du compte.

---

## Interface d’administration

- Accessible uniquement aux utilisateurs avec rôle "admin".
- Permet de :
  - **Créer, modifier *(à venir)* ou supprimer *(à venir)* des articles** pour la section Actualités.
  - Gérer les publications depuis un panneau de gestion interne. (à venir)

---

## Fonctionnalités PWA (Progressive Web App)

**GatheringPortal** fonctionne comme une application web progressive (PWA), offrant une expérience fluide, rapide et fiable, même sans connexion internet.

### Installation

- Le site peut être **installé sur les navigateurs compatibles** (Chrome, Edge, etc.).
- Une fois installé, il se comporte comme une application autonome (icône sur l’écran d’accueil, lancement sans barre d’adresse).

### Mise en cache & mode hors-ligne

- Un **service worker** gère la **mise en cache des ressources** essentielles.
- En cas de **perte de connexion**, les pages précédemment visitées restent accessibles.
- L’utilisateur peut actualiser sans perdre entièrement le contenu : le site reste **quasiment fonctionnel hors ligne**.

### Notifications push

- Les utilisateurs peuvent **activer les notifications push** dans leurs préférences.
- Lorsqu’un **nouvel article est publié**, une **notification est envoyée automatiquement**.
- Fonctionne sur ordinateur et mobile, selon les autorisations du navigateur.

---

## Technologies utilisées

- **Frontend et backend** : Next.js (React)
- **Langage principal** : TypeScript
- **Base de données** : Supabase (PostgreSQL)
- **PWA** : next-pwa
- **Versionnement** : Git / GitHub (dépôt public)
- **Déploiement** : Vercel

---

## Fonctionnalités à venir (roadmap)

Dans le **temps imparti pour le projet de cours "TypeScript & PWA"**, nous n’avons pas pu implémenter l’ensemble des fonctionnalités envisagées.  
Voici toutefois un aperçu de ce que nous aimerions développer par la suite pour enrichir **GatheringPortal** :

- Finalisation des pages **Guide**, **Collection** et **Decks**
- Intégration d’un **moteur de recherche avancé** avec filtres multicritères pour les cartes
- **Profils utilisateurs enrichis** : statistiques personnelles
- Amélioration continue de la **performance, de l’ergonomie et de l’accessibilité mobile**
- Nouveaux outils pour les joueurs

> Ces évolutions visent à faire de GatheringPortal un véritable espace central pour les joueurs de Magic: The Gathering, à la fois pratique, communautaire et évolutif.
