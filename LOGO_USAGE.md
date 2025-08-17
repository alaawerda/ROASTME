# 🎨 Guide d'Utilisation du Logo RoastMe

## 📁 Fichiers Disponibles

### Icônes et Logos
- **`/public/favicon.svg`** - Favicon SVG pour l'onglet du navigateur (32x32)
- **`/public/logo.svg`** - Logo principal SVG haute résolution (200x200)
- **`/public/favicon.ico`** - Favicon ICO traditionnel (à convertir depuis SVG)

### Composants React
- **`/app/components/Logo.tsx`** - Composant Logo réutilisable
- **`/app/components/Header.tsx`** - En-tête avec logo intégré
- **`/app/components/LoadingSpinner.tsx`** - Spinner de chargement avec logo

## 🚀 Utilisation du Composant Logo

### Import
```tsx
import Logo from './components/Logo'
```

### Props Disponibles
```tsx
interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';        // Taille du logo
  className?: string;                        // Classes CSS personnalisées
  showText?: boolean;                        // Afficher le texte "RoastMe"
  animated?: boolean;                        // Animation de pulsation
}
```

### Exemples d'Utilisation

#### Logo simple sans texte
```tsx
<Logo size="md" showText={false} />
```

#### Logo avec texte et animation
```tsx
<Logo size="lg" showText={true} animated={true} />
```

#### Logo personnalisé avec classes CSS
```tsx
<Logo size="xl" className="my-custom-class" />
```

## 🎯 Tailles Disponibles

| Taille | Dimensions | Usage Recommandé |
|--------|------------|------------------|
| `sm`   | 32x32px    | Favicon, icônes |
| `md`   | 48x48px    | Navigation, boutons |
| `lg`   | 64x64px    | En-têtes, sections |
| `xl`   | 80x80px    | Pages d'accueil, modales |

## 🎨 Design System

### Couleurs
- **Orange/Feu** : `#ff6b35`, `#ff8c42`, `#ffa726`, `#ffcc02`
- **Violet** : `#6a1b9a`, `#8e24aa`, `#ab47bc`
- **Blanc** : `#ffffff`
- **Ombre** : `#6a1b9a` avec opacité 0.3

### Gradients
- **Flamme** : Dégradé linéaire orange → jaune
- **Violet** : Dégradé linéaire violet foncé → violet clair
- **Lueur** : Dégradé radial orange avec transparence

## 🔧 Intégration dans le Site

### 1. Favicon de l'Onglet
Le favicon SVG est automatiquement utilisé dans `app/layout.tsx` :
```tsx
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
```

### 2. En-tête du Site
Utilisez le composant `Header` qui intègre déjà le logo :
```tsx
<Header 
  title="Titre de la page"
  poweredBy="Powered by AI"
  currentLanguage="fr"
  onLanguageChange={handleLanguageChange}
/>
```

### 3. Spinner de Chargement
Pour les états de chargement :
```tsx
<LoadingSpinner message="Chargement..." size="lg" />
```

## 📱 Responsive Design

Le logo s'adapte automatiquement aux différentes tailles d'écran :
- **Mobile** : Taille `sm` recommandée
- **Tablet** : Taille `md` recommandée  
- **Desktop** : Taille `lg` ou `xl` recommandée

## 🎭 Animations

### Animation de Pulsation
```tsx
<Logo animated={true} />
```
Utilise la classe Tailwind `animate-pulse` pour un effet de pulsation doux.

### Animation de Chargement
Le composant `LoadingSpinner` combine :
- Pulsation du logo
- Bounce des points de chargement
- Délais d'animation échelonnés

## 🚨 Bonnes Pratiques

1. **Accessibilité** : Le logo inclut `aria-label` pour les lecteurs d'écran
2. **Performance** : Utilisez SVG pour une qualité optimale à toutes les tailles
3. **Cohérence** : Maintenez les mêmes proportions et couleurs partout
4. **Responsive** : Adaptez la taille selon le contexte d'utilisation

## 🔄 Mise à Jour

Pour modifier le logo :
1. Éditez les fichiers SVG dans `/public/`
2. Ajustez les composants React si nécessaire
3. Testez sur différentes tailles d'écran
4. Vérifiez l'accessibilité

## 📋 Checklist d'Intégration

- [ ] Favicon SVG configuré dans `layout.tsx`
- [ ] Composant Logo importé et utilisé
- [ ] Header mis à jour avec le nouveau logo
- [ ] Spinner de chargement configuré
- [ ] Manifeste web mis à jour
- [ ] Test sur différents navigateurs
- [ ] Vérification responsive
- [ ] Test d'accessibilité
