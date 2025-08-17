# Guide de Dépannage - RoastMe Chat

## Problèmes Résolus

### 1. L'application ne charge plus
**Cause** : Boucles infinies dans la gestion des messages et des traductions
**Solution** : Ajout d'un état `isInitialized` pour éviter les re-rendus infinis

### 2. Le message de bienvenue ne s'affiche plus
**Cause** : Logique complexe de mise à jour des messages
**Solution** : Séparation de l'initialisation et de la mise à jour des messages

### 3. Les messages ne s'envoient plus
**Cause** : Problèmes avec l'API OpenRouter
**Solution** : Amélioration de la gestion des erreurs et suppression de la clé API codée en dur

## Configuration Requise

### 1. Créer le fichier `.env.local`
```bash
# Dans le dossier racine de votre projet
OPENROUTER_API_KEY=your_openrouter_api_key_here
VERCEL_URL=http://localhost:3000
```

### 2. Obtenir une clé API OpenRouter
1. Allez sur [https://openrouter.ai/](https://openrouter.ai/)
2. Créez un compte
3. Générez une clé API
4. Copiez la clé dans votre fichier `.env.local`

## Démarrage de l'Application

```bash
# Installer les dépendances
npm install

# Démarrer en mode développement
npm run dev
```

## Vérification du Fonctionnement

1. **Message de bienvenue** : Doit s'afficher automatiquement au chargement
2. **Sélecteur de langue** : Doit permettre de changer de langue
3. **Envoi de messages** : Doit fonctionner et recevoir des réponses de l'AI
4. **Responsive** : Doit s'afficher correctement sur mobile et desktop

## Problèmes Courants

### Erreur "Configuration API manquante"
- Vérifiez que le fichier `.env.local` existe
- Vérifiez que `OPENROUTER_API_KEY` est défini
- Redémarrez le serveur après modification du fichier `.env.local`

### L'application ne répond plus
- Vérifiez la console du navigateur pour les erreurs
- Vérifiez que l'API OpenRouter est accessible
- Vérifiez votre quota d'API OpenRouter

### Messages qui ne s'affichent pas
- Vérifiez que le composant `ChatMessage` est correctement importé
- Vérifiez que les types TypeScript sont corrects
- Vérifiez la console pour les erreurs JavaScript

## Support

Si vous rencontrez encore des problèmes :
1. Vérifiez la console du navigateur (F12)
2. Vérifiez les logs du serveur Next.js
3. Vérifiez que toutes les dépendances sont installées
4. Essayez de supprimer le dossier `node_modules` et de réinstaller avec `npm install`
