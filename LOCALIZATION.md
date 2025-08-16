# Système de Localisation - RoastMe Chat

## Vue d'ensemble

RoastMe Chat supporte maintenant **12 langues** avec détection automatique de la langue du navigateur et interface complètement traduite.

## Langues Supportées

| Code | Langue | Drapeau | Nom |
|------|---------|---------|-----|
| `fr` | Français | 🇫🇷 | Français |
| `en` | Anglais | 🇺🇸 | English |
| `es` | Espagnol | 🇪🇸 | Español |
| `de` | Allemand | 🇩🇪 | Deutsch |
| `it` | Italien | 🇮🇹 | Italiano |
| `pt` | Portugais | 🇵🇹 | Português |
| `nl` | Néerlandais | 🇳🇱 | Nederlands |
| `ru` | Russe | 🇷🇺 | Русский |
| `ja` | Japonais | 🇯🇵 | 日本語 |
| `ko` | Coréen | 🇰🇷 | 한국어 |
| `zh` | Chinois | 🇨🇳 | 中文 |
| `ar` | Arabe | 🇸🇦 | العربية |

## Fonctionnalités

### 🔍 Détection Automatique
- **Détection de la langue du navigateur** : L'application détecte automatiquement la langue préférée de l'utilisateur
- **Fallback intelligent** : Si la langue n'est pas supportée, l'anglais est utilisé par défaut
- **Persistance** : La langue choisie est sauvegardée dans le localStorage

### 🌐 Sélecteur de Langue
- **Interface intuitive** : Bouton avec icône globe dans l'en-tête
- **Affichage compact** : Drapeaux et noms des langues
- **Responsive** : S'adapte aux différentes tailles d'écran
- **Accessibilité** : Support des lecteurs d'écran

### 📱 Interface Traduite
- **Tous les textes** : Titres, boutons, messages d'erreur, placeholders
- **Message de bienvenue** : Adapté à chaque langue et culture
- **Format d'heure** : Respecte les conventions locales
- **Messages système** : États de chargement, erreurs, avertissements

## Architecture Technique

### Structure des Fichiers
```
app/
├── locales/
│   ├── index.ts          # Export de toutes les traductions
│   ├── fr.ts            # Traductions françaises
│   ├── en.ts            # Traductions anglaises
│   ├── es.ts            # Traductions espagnoles
│   └── ...              # Autres langues
├── hooks/
│   └── useLanguage.ts   # Hook de gestion des langues
└── components/
    └── LanguageSelector.tsx  # Composant de sélection
```

### Hook useLanguage
```typescript
const { 
  currentLanguage,    // Code de la langue actuelle
  translations,       // Objet des traductions
  changeLanguage,     // Fonction de changement
  supportedLanguages  // Liste des langues supportées
} = useLanguage()
```

### Format des Traductions
```typescript
export const fr = {
  title: 'RoastMe Chat',
  welcomeMessage: 'Message de bienvenue...',
  inputPlaceholder: 'Placeholder...',
  timeFormat: 'fr-FR',
  // ... autres traductions
}
```

## Utilisation

### Détection Automatique
1. L'utilisateur visite l'application
2. La langue du navigateur est détectée automatiquement
3. L'interface s'affiche dans la langue détectée
4. La langue est sauvegardée pour les prochaines visites

### Changement Manuel
1. Cliquer sur l'icône globe dans l'en-tête
2. Sélectionner la langue souhaitée dans le menu déroulant
3. L'interface se met à jour instantanément
4. La nouvelle langue est sauvegardée

### Ajout d'une Nouvelle Langue
1. Créer un fichier `app/locales/xx.ts`
2. Ajouter les traductions dans le format standard
3. Exporter depuis `app/locales/index.ts`
4. Ajouter dans le hook `useLanguage.ts`
5. Ajouter dans `supportedLanguages`

## Avantages

- **Expérience utilisateur améliorée** : Interface dans la langue native
- **Accessibilité mondiale** : Support de nombreuses langues
- **Performance optimisée** : Traductions statiques, pas de chargement API
- **Maintenance facile** : Structure modulaire et extensible
- **SEO amélioré** : Contenu multilingue pour les moteurs de recherche

## Support Technique

Pour toute question sur le système de localisation :
- Vérifier que la langue est bien exportée dans `index.ts`
- Contrôler que le code de langue est ajouté dans `useLanguage.ts`
- S'assurer que toutes les clés de traduction sont présentes
- Tester avec différentes langues du navigateur
