# Guide d'Internationalisation - RoastMe

## Vue d'ensemble

L'application RoastMe est entièrement internationalisée et supporte 12 langues différentes. Tous les textes de l'interface utilisateur sont traduits et s'adaptent automatiquement à la langue sélectionnée par l'utilisateur.

## Langues Supportées

- 🇫🇷 **Français** (fr) - Langue par défaut
- 🇺🇸 **English** (en)
- 🇪🇸 **Español** (es)
- 🇩🇪 **Deutsch** (de)
- 🇮🇹 **Italiano** (it)
- 🇵🇹 **Português** (pt)
- 🇳🇱 **Nederlands** (nl)
- 🇷🇺 **Русский** (ru)
- 🇯🇵 **日本語** (ja)
- 🇰🇷 **한국어** (ko)
- 🇸🇦 **العربية** (ar) - Support RTL
- 🇨🇳 **中文** (zh)

## Architecture de l'Internationalisation

### 1. Structure des Fichiers

```
app/
├── locales/
│   ├── index.ts          # Export principal et utilitaires
│   ├── fr.ts             # Traductions françaises
│   ├── en.ts             # Traductions anglaises
│   ├── es.ts             # Traductions espagnoles
│   └── ...               # Autres langues
├── hooks/
│   └── useLanguage.ts    # Hook principal pour l'internationalisation
└── components/
    └── LanguageSelector.tsx  # Sélecteur de langue
```

### 2. Hook useLanguage

Le hook principal `useLanguageApp` fournit :

```typescript
const { 
  currentLanguage,      // Code de langue actuel (ex: 'fr', 'en')
  translations,         // Objet contenant toutes les traductions
  changeLanguage,       // Fonction pour changer de langue
  isInitialized        // État d'initialisation
} = useLanguageApp()
```

### 3. Structure des Traductions

Chaque fichier de langue suit cette structure :

```typescript
export const fr = {
  // Informations de base
  languageName: 'Français',
  title: 'RoastMe Chat - L\'IA qui te Roaste ! 🔥',
  
  // Sections organisées
  chatRoastIA: {
    heroTitle: 'Chat Roast IA Gratuit...',
    features: {
      roastWithoutFilters: 'Roast Sans Filtres',
      // ...
    }
  },
  
  // Messages d'erreur et de chargement
  error: {
    title: 'Oups ! Une erreur s\'est produite',
    // ...
  }
}
```

## Utilisation dans les Composants

### 1. Import du Hook

```typescript
import { useLanguageApp } from '../hooks/useLanguage'

export default function MonComposant() {
  const { currentLanguage, translations, changeLanguage } = useLanguageApp()
  
  // Utilisation des traductions
  return (
    <div>
      <h1>{translations.title}</h1>
      <p>{translations.chatRoastIA.heroSubtitle}</p>
    </div>
  )
}
```

### 2. Traductions avec Fallback

```typescript
// Avec valeur par défaut en cas de traduction manquante
{translations.chatRoastIA?.features?.roastWithoutFilters || 'Roast Sans Filtres'}

// Ou avec chaînage optionnel
{translations.chatRoastIA?.features?.roastWithoutFilters}
```

### 3. Changement de Langue

```typescript
const { changeLanguage } = useLanguageApp()

// Changer vers l'anglais
changeLanguage('en')

// Changer vers l'espagnol
changeLanguage('es')
```

## Fonctionnalités Avancées

### 1. Détection Automatique de la Langue

L'application détecte automatiquement :
- La langue du navigateur de l'utilisateur
- La langue précédemment sélectionnée (stockée dans localStorage)
- La langue par défaut (français)

### 2. Support RTL (Right-to-Left)

Les langues RTL (arabe) sont automatiquement supportées :
- Direction du texte inversée
- Attribut `dir="rtl"` sur le document
- Mise en page adaptée

### 3. Format de Temps Localisé

Chaque langue a son propre format de temps :
- Français : `fr-FR`
- Anglais : `en-US`
- Espagnol : `es-ES`

## Ajout d'une Nouvelle Langue

### 1. Créer le Fichier de Traduction

```typescript
// app/locales/pl.ts (Polonais)
export const pl = {
  languageName: 'Polski',
  title: 'RoastMe Chat - AI która Cię Roastuje! 🔥',
  // ... toutes les traductions
}
```

### 2. Ajouter à l'Index

```typescript
// app/locales/index.ts
import { pl } from './pl'

export const locales = {
  // ... autres langues
  pl
}

export type LocaleKey = 'fr' | 'en' | 'es' | /* ... */ | 'pl'
```

### 3. Ajouter au Sélecteur

```typescript
// app/components/LanguageSelector.tsx
const supportedLanguages = [
  // ... autres langues
  { code: 'pl', name: 'Polski', flag: '🇵🇱', native: 'Polski' }
]
```

## Bonnes Pratiques

### 1. Organisation des Clés

- Utilisez une structure hiérarchique claire
- Groupez les traductions par fonctionnalité
- Utilisez des noms descriptifs et cohérents

### 2. Gestion des Fallbacks

- Toujours fournir une valeur par défaut
- Utilisez le chaînage optionnel (`?.`)
- Testez avec des traductions manquantes

### 3. Performance

- Les traductions sont chargées une seule fois
- Le changement de langue est instantané
- Pas de rechargement de page nécessaire

## Test et Débogage

### 1. Page de Test

Accédez à `/language-test` pour :
- Tester toutes les langues
- Vérifier les traductions
- Déboguer les problèmes

### 2. Outils de Développement

```typescript
// Dans la console du navigateur
console.log('Langue actuelle:', currentLanguage)
console.log('Traductions:', translations)
```

### 3. Vérification des Traductions Manquantes

```typescript
// Vérifier si une clé existe
if (!translations.chatRoastIA?.features?.newFeature) {
  console.warn('Traduction manquante pour newFeature')
}
```

## Dépannage

### 1. Traductions Non Chargées

- Vérifiez que le hook `useLanguageApp` est bien importé
- Assurez-vous que `isInitialized` est `true`
- Vérifiez la console pour les erreurs

### 2. Changement de Langue Non Effectif

- Vérifiez que `changeLanguage` est bien appelé
- Assurez-vous que la langue est supportée
- Vérifiez le localStorage

### 3. Problèmes de RTL

- Vérifiez que l'attribut `dir` est bien mis à jour
- Testez avec la langue arabe
- Vérifiez les styles CSS pour le support RTL

## Conclusion

L'internationalisation de RoastMe est conçue pour être :
- **Simple à utiliser** : Un seul hook à importer
- **Robuste** : Gestion des erreurs et fallbacks
- **Performante** : Chargement unique des traductions
- **Extensible** : Facile d'ajouter de nouvelles langues

Pour toute question ou problème, consultez la page de test `/language-test` ou vérifiez la console du navigateur.
