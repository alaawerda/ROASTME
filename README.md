# 🔥 RoastMe Chat

Une application web amusante qui permet aux utilisateurs de discuter avec un AI qui les "roaste" de manière créative et humoristique ! 

## ✨ Fonctionnalités

- 💬 Interface de chat moderne et responsive
- 🤖 AI roaster intelligent utilisant l'API OpenRouter
- 🎨 Design moderne avec Tailwind CSS
- 📱 Interface adaptée mobile et desktop
- 🚀 Prêt pour le déploiement sur Vercel
- 🇫🇷 Interface en français

## 🚀 Installation

### Prérequis

- Node.js 18+ 
- npm ou yarn
- Clé API OpenRouter

### 1. Cloner le projet

```bash
git clone <votre-repo>
cd roastme-chat
```

### 2. Installer les dépendances

```bash
npm install
# ou
yarn install
```

### 3. Configuration des variables d'environnement

Créez un fichier `.env.local` à la racine du projet :

```bash
cp env.example .env.local
```

Modifiez `.env.local` avec vos vraies valeurs :

```env
OPENROUTER_API_KEY=votre_vraie_cle_api_openrouter
VERCEL_URL=https://votre-app.vercel.app
```

### 4. Lancer en développement

```bash
npm run dev
# ou
yarn dev
```

L'application sera accessible sur `http://localhost:3000`

## 🌐 Déploiement sur Vercel

### 1. Préparer le projet

```bash
npm run build
# ou
yarn build
```

### 2. Déployer sur Vercel

1. Connectez-vous à [Vercel](https://vercel.com)
2. Cliquez sur "New Project"
3. Importez votre repository GitHub
4. Configurez les variables d'environnement :
   - `OPENROUTER_API_KEY`: Votre clé API OpenRouter
   - `VERCEL_URL`: Sera automatiquement configuré

### 3. Variables d'environnement Vercel

Dans les paramètres de votre projet Vercel, ajoutez :

```
OPENROUTER_API_KEY=votre_cle_api_openrouter
```

## 🔑 Obtenir une clé API OpenRouter

1. Rendez-vous sur [OpenRouter](https://openrouter.ai/)
2. Créez un compte
3. Générez une clé API
4. Ajoutez des crédits à votre compte

## 🛠️ Technologies utilisées

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **AI**: OpenRouter API (Claude 3.5 Sonnet)
- **Déploiement**: Vercel

## 📁 Structure du projet

```
roastme-chat/
├── app/
│   ├── api/chat/route.ts    # API route pour le chat
│   ├── components/           # Composants React
│   ├── globals.css          # Styles globaux
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Page d'accueil
│   └── types.ts             # Types TypeScript
├── public/                   # Assets statiques
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🎯 Personnalisation

### Modifier le style du roast

Éditez le `systemPrompt` dans `app/api/chat/route.ts` pour personnaliser le style de l'AI roaster.

### Changer le modèle AI

Modifiez la ligne suivante dans `app/api/chat/route.ts` :

```typescript
model: 'anthropic/claude-3.5-sonnet', // Changez le modèle ici
```

### Personnaliser l'interface

Modifiez les composants dans `app/components/` et les styles dans `app/globals.css`.

## 🚨 Avertissements

- Cette application est conçue pour être **amusante et créative**, pas méchante
- L'AI est programmée pour rester respectueuse et bienveillante
- Surveillez l'utilisation de votre clé API OpenRouter
- Respectez les conditions d'utilisation d'OpenRouter

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche feature
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🆘 Support

Si vous rencontrez des problèmes :

1. Vérifiez que votre clé API OpenRouter est valide
2. Assurez-vous que vous avez des crédits sur votre compte OpenRouter
3. Vérifiez les logs de votre application Vercel
4. Ouvrez une issue sur GitHub

---

**Amusez-vous bien avec votre AI roaster personnel ! 🔥😄**
