# GatheringPortal

**GatheringPortal**, est une application développée avec [Next.js](https://nextjs.org/)
Le projet utilise [Supabase](https://supabase.com/) comme **base de données**

Fait par Paul DEBRIL et Marine LANGREZ

## Fonctionnalités principales

**GatheringPortal** est un site web dédié aux fans du jeu de cartes **Magic: The Gathering**. Il propose plusieurs outils et ressources pour enrichir l’expérience des joueurs, notamment :

- **Recherche de cartes** : Explorez la base de données des cartes Magic pour consulter les détails, visuels et caractéristiques.
- **Outils** : Compteur de point de vie, outils externes etc.
- **Actualités et mises à jour** : Dernières annonces de Wizards of the Coast, les nouvelles éditions et les événements compétitifs, articles sur le lore ...
- **Contenu communautaire** : Guides pour tous les niveaux de joueurs.

>L’objectif est de centraliser tout ce dont un joueur de Magic a besoin au même endroit, dans une interface simple et moderne.

**Pour plus de détails sur les fonctionnalités, veuillez consulter le fichier [`README.features.md`](./README.features.md).**



## Prérequis

Avant de commencer l'installation, veuillez vous assurer d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (version recommandée : 18.x ou supérieure)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)



## Installation

1. **Cloner le dépôt :**

```bash
git clone https://github.com/PaulDebril/gatheringportal.git
cd gatheringportal
```

2. **Installer les dépendances :**

Avec npm :
```bash
npm install
```

Ou avec yarn :
```bash
yarn install
```

3. **Configurer les variables d’environnement :**

Créez un fichier `.env.local` à la racine du projet, puis ajoutez-y vos variables d’environnement (exemple) :

```env
NEXT_PUBLIC_SUPABASE_URL=replace_me
NEXT_PUBLIC_SUPABASE_ANON_KEY=replace_me
NEXT_PUBLIC_VAPID_PUBLIC_KEY=replace_me
VAPID_PRIVATE_KEY=replace_me
```



## Lancer l’environnement de développement

```bash
npm run dev
```

Ou :

```bash
yarn dev
```

L'application sera disponible à l'adresse : [http://localhost:3000](http://localhost:3000)

---

## Générer la version de production

```bash
npm run build
npm start
```

Ou :

```bash
yarn build
yarn start
```

---

## Licence
Ce projet est privé. Tous les droits sont réservés.
Vous n’êtes pas autorisé à copier, distribuer ou utiliser tout ou partie du code sans autorisation écrite préalable de l’auteur.