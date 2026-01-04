import { NextRequest, NextResponse } from 'next/server'

// Configuration OpenRouter API
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY 
const SITE_URL = process.env.VERCEL_URL || 'http://localhost:3000'
const SITE_NAME = 'RoastMe'

// Language detection function
function detectLanguage(text: string): 'en' | 'fr' | 'es' {
  const frenchWords = ['je', 'tu', 'être', 'avoir', 'que', 'de', 'et', 'à', 'est', 'un', 'me', 'mon', 'ma', 'mes', 'moi', 'suis', 'veux', 'fait', 'vais', 'dans', 'pour', 'avec', 'ça']
  const englishWords = ['i', 'you', 'the', 'is', 'a', 'and', 'to', 'of', 'in', 'be', 'have', 'that', 'my', 'am', 'love', 'suck', 'are', 'want', 'but', 'do']
  const spanishWords = ['yo', 'tu', 'el', 'la', 'y', 'de', 'que', 'a', 'es', 'un', 'en', 'ser', 'estar', 'tengo', 'quiero', 'soy', 'mi', 'pero']
  
  const textLower = text.toLowerCase()
  let frenchScore = 0, englishScore = 0, spanishScore = 0
  
  frenchWords.forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'g')
    frenchScore += (textLower.match(regex) || []).length
  })
  
  englishWords.forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'g')
    englishScore += (textLower.match(regex) || []).length
  })
  
  spanishWords.forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'g')
    spanishScore += (textLower.match(regex) || []).length
  })
  
  if (englishScore > frenchScore && englishScore > spanishScore) return 'en'
  if (frenchScore > spanishScore) return 'fr'
  if (spanishScore > englishScore) return 'es'
  return 'en' // Default to English
}

const systemPrompts: { [key: string]: string } = {
  'en': `You are a blunt, no-nonsense character with zero patience for sugarcoating. You say things exactly as they are — like dropping a truth bomb people don't want to hear but need to. Direct. No small talk, no pleasantries.

Drop hard truths like punches, wrapped in jokes that hit just as hard.

Exploit the ridiculousness or absurdity of human behavior as your main weapon.

No "sorry," no "maybe" — just straight talk. You mix dry humor, sarcasm, and verbal brutality to shock people into awareness while making them laugh.

**CRITICAL LANGUAGE RULE: YOU MUST ALWAYS RESPOND IN THE EXACT SAME LANGUAGE THE USER USED IN THEIR MESSAGE. If they write in English, respond in English. If they write in French, respond in French. If they write in Spanish, respond in Spanish. This is non-negotiable and must be followed for every single response.**

ROAST FORMAT:
- Start with a brutal opening line that sets the tone
- Use specific details the user provided (age, height, weight, character traits, etc.) in creative, brutal ways
- Make 2-3 specific observations about their situation, each in a separate paragraph
- End with a brutal but creative closing statement
- Keep it concise but impactful - not too long

IMPORTANT INSTRUCTIONS:
- ALWAYS respond in the same language the user used in their message.
- If this is the user's first message, ask them directly what they want to be roasted about. Be direct and demand concrete details.
- If the user provides information about themselves, roast them brutally using the details provided (age, height, weight, character traits).
- If the user doesn't give you enough information to roast them properly, ask them in their language to give you something to work with. Be insistent and amusing.
- Always stay in character - blunt, sarcastic, and brutally honest.`,

  'fr': `Tu es un personnage brutal et sans détour, sans patience pour les concessions. Tu dis les choses exactement comme elles sont — comme lancer une bombe de vérité que les gens ne veulent pas entendre mais dont ils ont besoin.

Direct. Pas de petites blagues inutiles, pas de politesses.

Lâche des vérités dures comme des coups de poing, enrobées dans des blagues qui frappent tout aussi fort.

Exploite l'absurdité ou le ridicule du comportement humain comme ta principale arme.

Pas de "désolé", pas de "peut-être" — juste du langage clair. Tu mélanges l'humour sec, le sarcasme et la brutalité verbale pour choquer les gens et les faire rire en même temps.

**RÈGLE CRITIQUE DE LANGAGE : Tu DOIS TOUJOURS répondre dans la même langue que celle utilisée par l'utilisateur dans son message. Si tu reçois un message en français, réponds en français. Si c'est en anglais, réponds en anglais. Si c'est en espagnol, réponds en espagnol. C'est non-négociable et doit être suivi pour chaque réponse.**

FORMAT DE ROAST :
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
- Reste toujours dans le personnage - brutal, sarcastique, et honnête sans détour.`,

  'es': `Eres un personaje brutal y sin rodeos, sin paciencia para suavizar las cosas. Dices las cosas exactamente como son — como lanzar una bomba de verdad que la gente no quiere escuchar pero necesita.

Directo. Sin charlas pequeñas, sin educación.

Lanza verdades duras como puñetazos, envueltas en bromas que golpean tan duro.

Explota lo ridículo o absurdo del comportamiento humano como tu arma principal.

No "lo siento", no "quizás" — solo un lenguaje directo. Mezclas humor seco, sarcasmo y brutalidad verbal para conmocionar a las personas y hacerlas reír al mismo tiempo.

**REGLA CRÍTICA DEL IDIOMA: SIEMPRE DEBES RESPONDER EN EL MISMO IDIOMA QUE USÓ EL USUARIO EN SU MENSAJE. Si escribe en español, responde en español. Si es en inglés, responde en inglés. Si es en francés, responde en francés. Esto es innegociable y debe seguirse para cada respuesta.**

FORMATO DE ROAST:
- Comienza con una línea de apertura brutal que establece el tono
- Usa detalles específicos que proporcionó el usuario (edad, altura, peso, rasgos de carácter, etc.) de formas creativas y brutales
- Haz 2-3 observaciones específicas sobre su situación, cada una en un párrafo separado
- Termina con una declaración final brutal pero creativa
- Mantenlo conciso pero impactante - no demasiado largo

INSTRUCCIONES IMPORTANTES:
- SIEMPRE responde en el mismo idioma que el usuario usó en su mensaje.
- Si es el primer mensaje del usuario, pídele directamente qué quiere que roaste. Sé directo y exige detalles concretos.
- Si el usuario proporciona información sobre sí mismo, roástalo brutalmente usando los detalles proporcionados (edad, altura, peso, rasgos de carácter).
- Si el usuario no te proporciona suficiente información, pídele en su idioma que te dé algo con qué trabajar. Sé insistente y divertido.
- Siempre mantente en el personaje - brutal, sarcástico y brutalmente honesto.`
}

export async function POST(request: NextRequest) {
  try {
    // Vérifier que la clé API est disponible
    if (!OPENROUTER_API_KEY) {
      console.error('OPENROUTER_API_KEY manquante')
      return NextResponse.json(
        { error: 'Configuration API manquante' },
        { status: 500 }
      )
    }

    // Ne pas logger la clé API pour des raisons de sécurité
    console.log('API configurée. URL du site:', SITE_URL)

    let body
    try {
      body = await request.json()
    } catch (parseError) {
      console.error('Erreur de parsing JSON:', parseError)
      return NextResponse.json(
        { error: 'Format de requête invalide' },
        { status: 400 }
      )
    }

    const { message, history } = body

    if (!message) {
      return NextResponse.json(
        { error: 'Message requis' },
        { status: 400 }
      )
    }

    console.log('Message reçu:', message)
    console.log('Historique:', history)

    // Detect user language from the current message
    const userLanguage = detectLanguage(message)
    console.log('Detected language:', userLanguage)

    // Get the appropriate system prompt for the user's language
    const systemPrompt = systemPrompts[userLanguage]

    // Construire les messages pour OpenRouter (format chat)
    const messages: Array<{role: 'system' | 'user' | 'assistant', content: string}> = [
      { role: 'system', content: systemPrompt }
    ]
    
    if (history && history.length > 0) {
      history.forEach((msg: any) => {
        if (msg.role === 'user') {
          messages.push({ role: 'user', content: msg.content })
        } else if (msg.role === 'assistant') {
          messages.push({ role: 'assistant', content: msg.content })
        }
      })
    }
    
    messages.push({ role: 'user', content: message })

    console.log('Envoi à OpenRouter avec', messages.length, 'messages...')

    // Fonction pour appeler OpenRouter avec retry (API REST directe)
    const callOpenRouterWithRetry = async (maxRetries = 3): Promise<string> => {
      const models = [
        'xiaomi/mimo-v2-flash:free',
        'meta-llama/llama-3.3-8b-instruct:free',
        'mistralai/mistral-7b-instruct:free'
      ]

      for (let attempt = 1; attempt <= maxRetries; attempt++) {
        const currentModel = models[Math.min(attempt - 1, models.length - 1)]

        try {
          console.log(`Tentative ${attempt}/${maxRetries} avec modèle ${currentModel}...`)

          const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
              'HTTP-Referer': SITE_URL,
              'X-Title': SITE_NAME,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              model: currentModel,
              messages: messages,
              max_tokens: 500,
              temperature: 0.8,
            }),
          })

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}))
            throw { status: response.status, message: JSON.stringify(errorData) }
          }

          const data = await response.json()
          const responseText = data.choices?.[0]?.message?.content
          
          if (!responseText) {
             throw new Error('Réponse vide de l\'IA')
          }
          
          return responseText

        } catch (error: any) {
          console.error(`Erreur tentative ${attempt}/${maxRetries}:`, error.message || error)

          // Vérifier si c'est une erreur 429 (Too Many Requests) ou 503 (Service Unavailable)
          const isRateLimit = error.status === 429 || error.message?.includes('429')
          const isServerError = error.status === 503 || error.message?.includes('503')
          
          if ((isRateLimit || isServerError) && attempt < maxRetries) {
            const waitTime = Math.pow(2, attempt) * 1000 // Backoff exponentiel
            console.log(`Erreur ${isRateLimit ? '429' : '503'} - Attente ${waitTime}ms...`)
            await new Promise(resolve => setTimeout(resolve, waitTime))
            continue
          }
          
          // Si c'est une erreur réseau ou autre et qu'on peut réessayer
          if (attempt < maxRetries) {
             console.log(`Erreur autre - Attente 1000ms...`)
             await new Promise(resolve => setTimeout(resolve, 1000))
             continue
          }

          throw error
        }
      }
      throw new Error('Max retries exceeded')
    }

    try {
      const aiResponseText = await callOpenRouterWithRetry(3)
      console.log('Réponse OpenRouter OK')
      
      const aiResponse = aiResponseText || 
                        (userLanguage === 'en' 
                          ? "Sorry, I couldn't prepare your roast! 😅 Try again in a few seconds."
                          : userLanguage === 'es'
                            ? "¡Lo siento, no pude preparar tu roast! 😅 ¡Intenta de nuevo en unos segundos!"
                            : "Désolé, je n'ai pas pu préparer ton roast ! 😅 Réessaie dans quelques secondes.")

      return NextResponse.json({ message: aiResponse })

    } catch (fetchError: any) {
      console.error('Erreur finale après retries:', fetchError)
      
      // Gestion spécifique de l'erreur 429 (rate limit)
      if (fetchError.status === 429 || fetchError.message?.includes('429')) {
          return NextResponse.json({ 
            message: userLanguage === 'en'
              ? "Whoa, slow down! 🔥 Too many roast requests! Wait a few seconds and try again..."
              : userLanguage === 'es'
                ? "¡Wow, más despacio! 🔥 ¡Demasiadas solicitudes de roast! Espera unos segundos e intenta de nuevo..."
                : "Wow, doucement ! 🔥 Trop de demandes de roast ! Attends quelques secondes et réessaie..."
          })
      }

      return NextResponse.json({ 
        message: userLanguage === 'en'
          ? "Oops! The AI is taking longer than expected... 🤔 Try again, it'll wake up! 😴"
          : userLanguage === 'es'
            ? "¡Oops! La IA está tardando más de lo esperado... 🤔 ¡Intenta de nuevo, se despertará! 😴"
            : "Oups ! L'IA prend plus de temps que prévu... 🤔 Réessaie, elle va se réveiller ! 😴"
      })
    }

  } catch (error) {
    console.error('Erreur API:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Détails de l\'erreur:', errorMessage)
    return NextResponse.json(
      { error: 'Erreur interne du serveur', details: errorMessage },
      { status: 500 }
    )
  }
}
