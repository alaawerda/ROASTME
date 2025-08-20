# Guide de Traduction - RoastMe

Ce guide explique comment utiliser le système de traduction complet de RoastMe, qui supporte 12 langues différentes.

## 🌍 Langues Supportées

- 🇫🇷 **Français** (fr) - Langue par défaut
- 🇺🇸 **English** (en) - Anglais
- 🇪🇸 **Español** (es) - Espagnol
- 🇩🇪 **Deutsch** (de) - Allemand
- 🇮🇹 **Italiano** (it) - Italien
- 🇵🇹 **Português** (pt) - Portugais
- 🇳🇱 **Nederlands** (nl) - Néerlandais
- 🇷🇺 **Русский** (ru) - Russe
- 🇯🇵 **日本語** (ja) - Japonais
- 🇰🇷 **한국어** (ko) - Coréen
- 🇸🇦 **العربية** (ar) - Arabe (RTL)
- 🇨🇳 **中文** (zh) - Chinois

## 🚀 Utilisation Rapide

### 1. Hook useLanguage

```tsx
import { useLanguage } from '../hooks/useLanguage';

const MyComponent = () => {
  const { t, locale, setLocale, localeData, isRTL } = useLanguage();
  
  return (
    <div>
      <h1>{t('welcome.title')}</h1>
      <button>{t('buttons.explore')}</button>
      <p>Langue actuelle: {locale}</p>
    </div>
  );
};
```

### 2. Fonction de traduction

```tsx
import { getTranslation } from '../locales';

const title = getTranslation('fr', 'welcome.title');
// Retourne: "Bienvenue sur RoastMe"
```

## 📚 Structure des Traductions

### Navigation
```tsx
t('nav.home')        // Accueil
t('nav.blog')        // Blog
t('nav.chat')        // Chat IA
t('nav.about')       // À propos
t('nav.contact')     // Contact
```

### Boutons
```tsx
t('buttons.explore') // Explorer
t('buttons.try')     // Essayer
t('buttons.discover') // Découvrir
t('buttons.learn')   // Apprendre
t('buttons.share')   // Partager
```



### Blog
```tsx
t('blog.title')           // Blog RoastMe
t('blog.subtitle')        // Découvre nos guides et astuces
t('blog.readMore')        // Lire la suite
t('blog.readTime')        // min de lecture
t('blog.publishedOn')     // Publié le
t('blog.author')          // Par
t('blog.category')        // Catégorie
```

### Accueil
```tsx
t('welcome.title')        // Bienvenue sur RoastMe
t('welcome.subtitle')     // La plateforme d'humour IA ultime
t('welcome.description')  // Découvre comment créer...
t('welcome.getStarted')   // Commencer
t('welcome.learnMore')    // En savoir plus
```

### Chat
```tsx
t('chat.title')           // Chat IA RoastMe
t('chat.subtitle')        // Discute avec notre IA...
t('chat.placeholder')     // Tapez votre message...
t('chat.send')            // Envoyer
t('chat.thinking')        // L'IA réfléchit...
```

## 🔧 Fonctionnalités Avancées

### Support RTL (Arabe)
```tsx
const { isRTL } = useLanguage();

// Le composant se met automatiquement en mode RTL pour l'arabe
<div dir={isRTL ? 'rtl' : 'ltr'}>
  {t('welcome.title')}
</div>
```

### Formatage des Dates
```tsx
import { formatDate } from '../locales';

const date = new Date();
const formattedDate = formatDate(date, 'fr');
// Retourne: "15 janvier 2024"
```

### Formatage des Nombres
```tsx
import { formatNumber, formatCurrency } from '../locales';

const number = 1234.56;
const formattedNumber = formatNumber(number, 'fr');
// Retourne: "1 234,56"

const amount = 99.99;
const formattedCurrency = formatCurrency(amount, 'fr', 'EUR');
// Retourne: "99,99 €"
```

### Détection Automatique de Langue
```tsx
import { getBrowserLocale } from '../locales';

const browserLang = getBrowserLocale();
// Détecte automatiquement la langue du navigateur
```

## 📝 Ajouter de Nouvelles Traductions

### 1. Ajouter une nouvelle clé dans toutes les langues

```tsx
// app/locales/fr.ts
export const fr = {
  // ... autres traductions
  newSection: {
    title: 'Nouveau Titre',
    description: 'Nouvelle description'
  }
};

// app/locales/en.ts
export const en = {
  // ... autres traductions
  newSection: {
    title: 'New Title',
    description: 'New description'
  }
};
```

### 2. Utiliser dans un composant

```tsx
const MyComponent = () => {
  const { t } = useLanguage();
  
  return (
    <div>
      <h2>{t('newSection.title')}</h2>
      <p>{t('newSection.description')}</p>
    </div>
  );
};
```

## 🎯 Bonnes Pratiques

### 1. Utiliser des clés descriptives
```tsx
// ✅ Bon
t('blog.posts.featured.title')

// ❌ Mauvais
t('b.p.f.t')
```

### 2. Grouper les traductions logiquement
```tsx
// ✅ Bon - Groupe logique
blog: {
  title: 'Blog',
  posts: {
    title: 'Articles',
    featured: 'Mis en avant'
  }
}

// ❌ Mauvais - Structure plate
blogTitle: 'Blog',
blogPostsTitle: 'Articles',
blogPostsFeatured: 'Mis en avant'
```

### 3. Utiliser des clés dynamiques avec prudence
```tsx
// ✅ Bon - Clé statique
t('blog.categories.' + category)

// ❌ Mauvais - Clé trop dynamique
t('blog.' + dynamicKey + '.title')
```

### 4. Gérer les traductions manquantes
```tsx
const { t } = useLanguage();

// La fonction t retourne la clé si la traduction n'est pas trouvée
const title = t('missing.key'); // Retourne: "missing.key"

// Vérifier si une traduction existe
const hasTranslation = t('existing.key') !== 'existing.key';
```

## 🧪 Test des Traductions

### Composant de Démonstration
```tsx
import TranslationDemo from '../components/TranslationDemo';

// Afficher dans votre page pour tester
<TranslationDemo />
```

### Vérification des Clés
```tsx
import { getLocale } from '../locales';

const localeData = getLocale('fr');
const hasKey = 'welcome.title' in localeData; // true
```

## 🚨 Dépannage

### Problème: Traduction non trouvée
```tsx
// Vérifier que la clé existe dans toutes les langues
console.log(t('missing.key')); // Affiche la clé si manquante

// Vérifier la structure
console.log(localeData);
```

### Problème: Langue non supportée
```tsx
import { isSupportedLocale } from '../locales';

if (isSupportedLocale(userLang)) {
  setLocale(userLang);
} else {
  setLocale('en'); // Fallback
}
```

### Problème: Direction RTL incorrecte
```tsx
const { isRTL } = useLanguage();

// Vérifier que l'attribut dir est correctement défini
useEffect(() => {
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
}, [isRTL]);
```

## 📖 Exemples Complets

### Composant avec Traductions
```tsx
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const BlogHeader: React.FC = () => {
  const { t, locale } = useLanguage();
  
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          {t('blog.title')}
        </h1>
        <p className="text-xl mb-6">
          {t('blog.subtitle')}
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100">
            {t('buttons.explore')}
          </button>
          <button className="px-6 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-blue-600">
            {t('buttons.learn')}
          </button>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
```

### Page avec Changement de Langue
```tsx
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const LanguagePage: React.FC = () => {
  const { locale, setLocale, supportedLocales, languageName } = useLanguage();
  
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Sélection de Langue
      </h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {supportedLocales.map((lang) => (
          <button
            key={lang}
            onClick={() => setLocale(lang)}
            className={`p-4 rounded-lg border-2 transition-all ${
              locale === lang
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="text-lg font-semibold">
              {languageNames[lang]}
            </div>
            <div className="text-sm text-gray-600">
              {nativeLanguageNames[lang]}
            </div>
          </button>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">
          Langue actuelle: {languageName}
        </h2>
        <p className="text-gray-600">
          Code: {locale}
        </p>
      </div>
    </div>
  );
};

export default LanguagePage;
```

## 🔗 Liens Utiles

- [Structure des locales](../app/locales/)
- [Hook useLanguage](../app/hooks/useLanguage.ts)
- [Composant de démonstration](../app/components/TranslationDemo.tsx)
- [Types TypeScript](../app/locales/index.ts)

---

**Note:** Ce système de traduction est conçu pour être extensible et maintenable. Toutes les nouvelles traductions doivent être ajoutées dans toutes les langues supportées pour maintenir la cohérence.
