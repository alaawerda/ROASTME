# 🚀 Déploiement Rapide sur Vercel

## 1. Préparer le projet

```bash
# Vérifier que tout fonctionne
npm run build
```

## 2. Déployer sur Vercel

### Option A: Via l'interface web Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec GitHub
3. Cliquez "New Project"
4. Importez votre repository
5. Dans les variables d'environnement, ajoutez :
   - `OPENROUTER_API_KEY` = `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`

### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --env OPENROUTER_API_KEY=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
```

## 3. Vérifier le déploiement

- Votre app sera accessible sur `https://votre-projet.vercel.app`
- Testez le chat avec votre AI roaster ! 🔥

## 4. Variables d'environnement Vercel

Dans les paramètres de votre projet Vercel :
- `OPENROUTER_API_KEY` = votre clé OpenRouter
- `VERCEL_URL` = sera automatiquement configuré

## 🎯 Modèles OpenRouter disponibles

Vous pouvez changer le modèle dans `app/api/chat/route.ts` :

- **Gratuit**: `openai/gpt-oss-20b:free`
- **Payant**: `anthropic/claude-3.5-sonnet` (plus cher mais meilleur)
- **Autres**: Voir [openrouter.ai/models](https://openrouter.ai/models)

---

**Votre RoastMe Chat est maintenant prêt à roaster le monde ! 🔥😄**
