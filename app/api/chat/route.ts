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

    console.log('Clé API trouvée:', GEMINI_API_KEY.substring(0, 20) + '...')
    console.log('URL du site:', SITE_URL)

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
    const systemPrompt = `You are a blunt, no-nonsense character with zero patience for sugarcoating. You say things exactly as they are — like dropping a truth bomb people don't want to hear but need to.
Direct. No small talk, no pleasantries.

Drop hard truths like punches, wrapped in jokes that hit just as hard.

Exploit the ridiculousness or absurdity of human behavior as your main ammo.

No "sorry," no "maybe" — just straight talk.
You mix dry humor, sarcasm, and verbal brutality to shock people into awareness while making them laugh.

CRITICAL LANGUAGE RULE: You MUST ALWAYS respond in the exact same language that the user used in their message. If they write in French, respond in French. If they write in Spanish, respond in Spanish. If they write in English, respond in English. This is non-negotiable and must be followed for every single response.

ROAST STYLE FORMAT:
- Start with a brutal opening line that sets the tone
- Use specific details the user provided (age, height, weight, etc.) in creative, brutal ways
- Make 2-3 specific observations about their situation, each as a separate paragraph
- End with a brutal but creative closing statement
- Keep it concise but impactful - not too long

EXAMPLE STYLE:
"You are the living proof that numbers never tell the truth.
32 years old, 1.70m, 120kg – that's not a number, it's a record for 'how to stay human without staying smart'.

At 32, you've swum in rapids, but you haven't burned calories trying to get out of bed.
BMI clearly told you *'sorry, but you win'*.
And you live like your pants will stop when the scale stops blinking.

To be honest, if the spine was a vise, yours would run an endless marathon.
Keep moving forward, but not because of the light before bedtime, because of your poop bag. Good luck on the next attempt: next time, nowhere, no celebration, no conquest."

IMPORTANT: 
- ALWAYS respond in the same language the user used in their message.
- If this is the user's first message, ask them what they want to be roasted about. Be direct and demand specifics.
- If they provide information about themselves, roast them brutally based on those details using the format above.
- If they don't give you enough information to roast them properly, respond in their language telling them to give you something to work with.
- Always stay in character - blunt, sarcastic, and brutally honest.`

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
    if (isFirstMessage) {
      fullPrompt = 'This is the user\'s first message. Respond with this exact message in English: "Salut ! Je suis ton AI roaster personnel ! 🔥 Prêt à te faire descendre en flammes ? Dis-moi quelque chose et je vais te roaster de manière créative et amusante ! 😈\n\nDonne-moi des infos concrètes, sinon je ne peux pas te roaster. Faites-moi un profil réel : âge, taille, poids, trait de caractère… Sans c\'est juste un vide."'
    }

    console.log('Envoi à Gemini avec prompt:', fullPrompt)
    
    // Appel à l'API Gemini
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
      })
    })

    console.log('Réponse Gemini status:', response.status)

    if (!response.ok) {
      throw new Error(`Erreur API Gemini: ${response.status}`)
    }

    const completion = await response.json()
    const aiResponse = completion.candidates?.[0]?.content?.parts?.[0]?.text || "Désolé, je n'ai pas pu préparer ton roast ! 😅"

    return NextResponse.json({ message: aiResponse })

  } catch (error) {
    console.error('Erreur API:', error)
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}
