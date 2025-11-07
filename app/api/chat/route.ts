import { NextRequest, NextResponse } from 'next/server'

// Configuration Gemini API
const GEMINI_API_KEY = process.env.GEMINI_API_KEY 
const SITE_URL = process.env.VERCEL_URL || 'http://localhost:3000'

export async function POST(request: NextRequest) {
  try {
    // Vérifier que la clé API est disponible
    if (!GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY manquante')
      return NextResponse.json(
        { error: 'Configuration API manquante' },
        { status: 500 }
      )
    }

    // Ne pas logger la clé API pour des raisons de sécurité
    console.log('API configurée. URL du site:', SITE_URL)

    const { message, history } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message requis' },
        { status: 400 }
      )
    }

    console.log('Message reçu:', message)
    console.log('Historique:', history)

    // Construire le contexte pour le roast
    const systemPrompt = `Tu es un personnage brutal et sans détour, sans patience pour les concessions. Tu dis les choses exactement comme elles sont — comme lancer une bombe de vérité que les gens ne veulent pas entendre mais dont ils ont besoin.

Direct. Pas de petites blagues inutiles, pas de politesses.

Lâche des vérités dures comme des coups de poing, enrobées dans des blagues qui frappent tout aussi fort.

Exploite l'absurdité ou le ridicule du comportement humain comme ta principale arme.

Pas de "désolé", pas de "peut-être" — juste du langage clair.
Tu mélanges l'humour sec, le sarcasme et la brutalité verbale pour choquer les gens et les faire rire en même temps.

RÈGLE CRITIQUE DE LANGAGE : Tu DOIS TOUJOURS répondre dans la même langue que celle utilisée par l'utilisateur dans son message. Si tu reçois un message en français, réponds en français. Si c'est en anglais, réponds en anglais. Si c'est en espagnol, réponds en espagnol. C'est non-négociable et doit être suivi pour chaque réponse.

FORMAT DE ROAST EN FRANÇAIS :
- Commence par une phrase d'ouverture brutale qui crée l'ambiance
- Utilise les détails spécifiques que l'utilisateur a fournis (âge, taille, poids, traits de caractère, etc.) de manière créative et brutale
- Fais 2-3 observations spécifiques sur leur situation, chacune dans un paragraphe séparé
- Termine par une déclaration finale brutale mais créative
- Garde-le concis mais impactant - pas trop long

INSTRUCTIONS IMPORTANTES :
- TOUJOURS répondre dans la même langue que celle utilisée par l'utilisateur.
- Si c'est le premier message de l'utilisateur, demande-lui directement ce qu'il veut se faire roaster. Sois direct et exige des détails concrets.
- Si l'utilisateur fournit des informations sur lui-même, roaste-le brutalement en utilisant les détails fournis (âge, taille, poids, traits de caractère).
- Si l'utilisateur ne te donne pas assez d'informations pour le roaster correctement, demande-lui dans sa langue de te donner quelque chose à exploiter. Sois insistant et amusant.
- Reste toujours dans le personnage - brutal, sarcastique, et honnête sans détour.`

    // Construire l'historique des messages
    const isFirstMessage = !history || history.length === 0
    
    // Construire le prompt complet avec l'historique
    let fullPrompt = systemPrompt + "\n\n"
    
    if (history && history.length > 0) {
      history.forEach((msg: any) => {
        if (msg.role === 'user') {
          fullPrompt += `User: ${msg.content}\n`
        } else if (msg.role === 'assistant') {
          fullPrompt += `Assistant: ${msg.content}\n`
        }
      })
    }
    
    fullPrompt += `User: ${message}\n\nAssistant:`

    // Ajouter un contexte supplémentaire pour le premier message
    // Le système prompt prendra soin de demander les informations nécessaires

    console.log('Envoi à Gemini avec prompt:', fullPrompt)
    
    // Appel à l'API Gemini avec timeout et gestion d'erreur robuste
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 15000) // Timeout de 15 secondes

    try {
      const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": GEMINI_API_KEY
        },
        body: JSON.stringify({
          "contents": [
            {
              "parts": [
                {
                  "text": fullPrompt
                }
              ]
            }
          ],
          "generationConfig": {
            "maxOutputTokens": 300,
            "temperature": 0.8
          }
        }),
        signal: controller.signal
      })

      clearTimeout(timeoutId)
      console.log('Réponse Gemini status:', response.status)

      if (!response.ok) {
        console.error(`Erreur API Gemini: ${response.status} - ${response.statusText}`)
        throw new Error(`Erreur API Gemini: ${response.status}`)
      }

      const completion = await response.json()
      console.log('Réponse Gemini complète:', completion)
      
      const aiResponse = completion.candidates?.[0]?.content?.parts?.[0]?.text || 
                        "Désolé, je n'ai pas pu préparer ton roast ! 😅 Réessaie dans quelques secondes."

      return NextResponse.json({ message: aiResponse })

    } catch (fetchError) {
      clearTimeout(timeoutId)
      
      if (fetchError instanceof Error && fetchError.name === 'AbortError') {
        console.error('Timeout de la requête à l\'API Gemini')
        return NextResponse.json({ 
          message: "Oups ! L'IA prend plus de temps que prévu... 🤔 Réessaie, elle va se réveiller ! 😴" 
        })
      }
      
      console.error('Erreur lors de l\'appel à l\'API Gemini:', fetchError)
      throw fetchError
    }

  } catch (error) {
    console.error('Erreur API:', error)
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}
