## Documentation Technique du Frontend

## Structure du Projet
```
frontend/src/
├── components/      # Composants réutilisables
├── pages/          # Pages de l'application
├── services/       # Communication avec l'API
├── types/          # Définitions TypeScript
├── App.tsx         # Point d'entrée de l'application
└── main.tsx        # Rendu principal
```

## Rôles des Fichiers Clés

### `App.tsx`
- Gère le routing de l'application
- Initialise les contextes globaux
- Intègre les fournisseurs d'état

### `services/api.ts`
```typescript
// Configuration Axios de base
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000
});
```
- Gère les intercepteurs de requêtes/réponses
- Centralise les appels API

### `types/index.ts`
- Définit les interfaces TypeScript
- Exporte les types communs (Produit, Commande...)

## Conventions de Développement
1. Nommage des composants : PascalCase
2. Découpage fonctionnel par feature
3. Tests unitaires avec Vitest
4. Validation des props avec PropTypes

## Fonctionnalités Clés
- Système de recherche avec debounce
- Panier persistant avec localStorage
- Animation de transition fluide
- Gestion d'état avec Context API