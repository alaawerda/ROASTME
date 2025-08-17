export interface OGConfig {
  title: string
  description: string
  url: string
  siteName: string
  locale: string
  type: string
  image: string
  imageWidth: number
  imageHeight: number
  imageAlt: string
  twitterCard: string
  twitterSite: string
  twitterCreator: string
}

export function getOGConfig(lang: string = 'fr'): OGConfig {
  const baseUrl = 'https://roastme.chat'
  const currentUrl = lang === 'fr' ? baseUrl : `${baseUrl}/${lang}`
  
  const configs: Record<string, OGConfig> = {
    fr: {
      title: 'RoastMe Chat - L\'IA qui te Roaste ! 🔥 Chat IA Humoristique Gratuit',
      description: 'Découvre RoastMe Chat, l\'IA la plus cinglante qui va te roaster de manière hilarante ! Chatbot IA gratuit pour rire, humour noir, insultes créatives et blagues. Prêt à être descendu en flammes ? 🔥',
      url: currentUrl,
      siteName: 'RoastMe Chat',
      locale: 'fr_FR',
      type: 'website',
      image: `${baseUrl}/og-image-fr.jpg`,
      imageWidth: 1200,
      imageHeight: 630,
      imageAlt: 'RoastMe Chat - L\'IA qui te Roaste ! Chat IA Humoristique Gratuit',
      twitterCard: 'summary_large_image',
      twitterSite: '@roastmechat',
      twitterCreator: '@roastmechat'
    },
    en: {
      title: 'RoastMe Chat - The AI that Roasts You! 🔥 Free AI Humor Chat',
      description: 'Discover RoastMe Chat, the most savage AI that will roast you hilariously! Free AI chatbot for laughs, dark humor, creative insults and jokes. Ready to get burned to the ground? 🔥',
      url: currentUrl,
      siteName: 'RoastMe Chat',
      locale: 'en_US',
      type: 'website',
      image: `${baseUrl}/og-image-en.jpg`,
      imageWidth: 1200,
      imageHeight: 630,
      imageAlt: 'RoastMe Chat - The AI that Roasts You! Free AI Humor Chat',
      twitterCard: 'summary_large_image',
      twitterSite: '@roastmechat',
      twitterCreator: '@roastmechat'
    },
    es: {
      title: 'RoastMe Chat - ¡La IA que te Asa! 🔥 Chat de IA Humorístico Gratis',
      description: '¡Descubre RoastMe Chat, la IA más salvaje que te asará de manera hilarante! Chatbot de IA gratis para reír, humor negro, insultos creativos y chistes. ¿Listo para ser quemado hasta los huesos? 🔥',
      url: currentUrl,
      siteName: 'RoastMe Chat',
      locale: 'es_ES',
      type: 'website',
      image: `${baseUrl}/og-image-es.jpg`,
      imageWidth: 1200,
      imageHeight: 630,
      imageAlt: 'RoastMe Chat - ¡La IA que te Asa! Chat de IA Humorístico Gratis',
      twitterCard: 'summary_large_image',
      twitterSite: '@roastmechat',
      twitterCreator: '@roastmechat'
    },
    de: {
      title: 'RoastMe Chat - Die KI, die dich Roastet! 🔥 Kostenloser KI-Humor-Chat',
      description: 'Entdecke RoastMe Chat, die brutalste KI, die dich auf humorvolle Weise roastet! Kostenloser KI-Chatbot für Lacher, schwarzen Humor, kreative Beleidigungen und Witze. Bereit, bis auf die Knochen verbrannt zu werden? 🔥',
      url: currentUrl,
      siteName: 'RoastMe Chat',
      locale: 'de_DE',
      type: 'website',
      image: `${baseUrl}/og-image-de.jpg`,
      imageWidth: 1200,
      imageHeight: 630,
      imageAlt: 'RoastMe Chat - Die KI, die dich Roastet! Kostenloser KI-Humor-Chat',
      twitterCard: 'summary_large_image',
      twitterSite: '@roastmechat',
      twitterCreator: '@roastmechat'
    },
    it: {
      title: 'RoastMe Chat - L\'IA che ti Arrostisce! 🔥 Chat IA Umoristico Gratuito',
      description: 'Scopri RoastMe Chat, l\'IA più spietata che ti arrostirà in modo esilarante! Chatbot IA gratuito per risate, umorismo nero, insulti creativi e battute. Pronto a essere bruciato vivo? 🔥',
      url: currentUrl,
      siteName: 'RoastMe Chat',
      locale: 'it_IT',
      type: 'website',
      image: `${baseUrl}/og-image-it.jpg`,
      imageWidth: 1200,
      imageHeight: 630,
      imageAlt: 'RoastMe Chat - L\'IA che ti Arrostisce! Chat IA Umoristico Gratuito',
      twitterCard: 'summary_large_image',
      twitterSite: '@roastmechat',
      twitterCreator: '@roastmechat'
    },
    pt: {
      title: 'RoastMe Chat - A IA que te Assa! 🔥 Chat de IA Humorístico Grátis',
      description: 'Descobre RoastMe Chat, a IA mais selvagem que vai te assar de forma hilariante! Chatbot de IA grátis para rir, humor negro, insultos criativos e piadas. Pronto para ser queimado até os ossos? 🔥',
      url: currentUrl,
      siteName: 'RoastMe Chat',
      locale: 'pt_BR',
      type: 'website',
      image: `${baseUrl}/og-image-pt.jpg`,
      imageWidth: 1200,
      imageHeight: 630,
      imageAlt: 'RoastMe Chat - A IA que te Assa! Chat de IA Humorístico Grátis',
      twitterCard: 'summary_large_image',
      twitterSite: '@roastmechat',
      twitterCreator: '@roastmechat'
    },
    ru: {
      title: 'RoastMe Chat - ИИ, который тебя Прожарит! 🔥 Бесплатный ИИ-юмор чат',
      description: 'Открой RoastMe Chat, самого жестокого ИИ, который прожарит тебя до хруста! Бесплатный ИИ-чатбот для смеха, черного юмора, творческих оскорблений и шуток. Готов быть сожжённым дотла? 🔥',
      url: currentUrl,
      siteName: 'RoastMe Chat',
      locale: 'ru_RU',
      type: 'website',
      image: `${baseUrl}/og-image-ru.jpg`,
      imageWidth: 1200,
      imageHeight: 630,
      imageAlt: 'RoastMe Chat - ИИ, который тебя Прожарит! Бесплатный ИИ-юмор чат',
      twitterCard: 'summary_large_image',
      twitterSite: '@roastmechat',
      twitterCreator: '@roastmechat'
    },
    ja: {
      title: 'RoastMe Chat - あなたをローストするAI！🔥 無料AIユーモアチャット',
      description: 'RoastMe Chatを発見しよう、あなたを面白おかしくローストする最も残酷なAI！笑い、ブラックユーモア、創造的な侮辱、ジョークのための無料AIチャットボット。骨まで燃やされる準備はできてる？🔥',
      url: currentUrl,
      siteName: 'RoastMe Chat',
      locale: 'ja_JP',
      type: 'website',
      image: `${baseUrl}/og-image-ja.jpg`,
      imageWidth: 1200,
      imageHeight: 630,
      imageAlt: 'RoastMe Chat - あなたをローストするAI！無料AIユーモアチャット',
      twitterCard: 'summary_large_image',
      twitterSite: '@roastmechat',
      twitterCreator: '@roastmechat'
    },
    ko: {
      title: 'RoastMe Chat - 당신을 로스트하는 AI! 🔥 무료AI 유머 채팅',
      description: 'RoastMe Chat을 발견하세요, 당신을 재미있게 로스트할 가장 잔인한 AI! 웃음, 블랙 유머, 창의적인 모욕, 농담을 위한 무료AI 챗봇. 뼈까지 타들어갈 준비가 되었나요? 🔥',
      url: currentUrl,
      siteName: 'RoastMe Chat',
      locale: 'ko_KR',
      type: 'website',
      image: `${baseUrl}/og-image-ko.jpg`,
      imageWidth: 1200,
      imageHeight: 630,
      imageAlt: 'RoastMe Chat - 당신을 로스트하는 AI! 무료AI 유머 채팅',
      twitterCard: 'summary_large_image',
      twitterSite: '@roastmechat',
      twitterCreator: '@roastmechat'
    },
    zh: {
      title: 'RoastMe Chat - 烤你的AI！🔥 免费AI幽默聊天',
      description: '发现RoastMe Chat，最残忍的AI，会以滑稽的方式烤你！免费AI聊天机器人，用于笑声、黑色幽默、创意侮辱和笑话。准备好被烤到骨头了吗？🔥',
      url: currentUrl,
      siteName: 'RoastMe Chat',
      locale: 'zh_CN',
      type: 'website',
      image: `${baseUrl}/og-image-zh.jpg`,
      imageWidth: 1200,
      imageHeight: 630,
      imageAlt: 'RoastMe Chat - 烤你的AI！免费AI幽默聊天',
      twitterCard: 'summary_large_image',
      twitterSite: '@roastmechat',
      twitterCreator: '@roastmechat'
    },
    ar: {
      title: 'RoastMe Chat - الذكاء الاصطناعي الذي يشوي لك! 🔥 دردشة ذكاء اصطناعي فكاهية مجانية',
      description: 'اكتشف RoastMe Chat، أكثر ذكاء اصطناعي وحشية سيشوي لك بطريقة مضحكة! روبوت دردشة ذكاء اصطناعي مجاني للضحك والفكاهة السوداء والإهانات الإبداعية والنكات. مستعد لأن تحترق حتى العظم؟ 🔥',
      url: currentUrl,
      siteName: 'RoastMe Chat',
      locale: 'ar_SA',
      type: 'website',
      image: `${baseUrl}/og-image-ar.jpg`,
      imageWidth: 1200,
      imageHeight: 630,
      imageAlt: 'RoastMe Chat - الذكاء الاصطناعي الذي يشوي لك! دردشة ذكاء اصطناعي فكاهية مجانية',
      twitterCard: 'summary_large_image',
      twitterSite: '@roastmechat',
      twitterCreator: '@roastmechat'
    },
    nl: {
      title: 'RoastMe Chat - De AI die je Roast! 🔥 Gratis AI Humor Chat',
      description: 'Ontdek RoastMe Chat, de meest wrede AI die je op hilarische wijze gaat roasten! Gratis AI chatbot voor lach, zwarte humor, creatieve beledigingen en grappen. Klaar om tot op het bot verbrand te worden? 🔥',
      url: currentUrl,
      siteName: 'RoastMe Chat',
      locale: 'nl_NL',
      type: 'website',
      image: `${baseUrl}/og-image-nl.jpg`,
      imageWidth: 1200,
      imageHeight: 630,
      imageAlt: 'RoastMe Chat - De AI die je Roast! Gratis AI Humor Chat',
      twitterCard: 'summary_large_image',
      twitterSite: '@roastmechat',
      twitterCreator: '@roastmechat'
    }
  }

  return configs[lang] || configs.fr
}

// Fonction pour générer toutes les balises Open Graph
export function generateOGTags(lang: string = 'fr'): string {
  const config = getOGConfig(lang)
  
  const tags = [
    // Balises Open Graph de base
    `<meta property="og:title" content="${config.title}" />`,
    `<meta property="og:description" content="${config.description}" />`,
    `<meta property="og:url" content="${config.url}" />`,
    `<meta property="og:site_name" content="${config.siteName}" />`,
    `<meta property="og:locale" content="${config.locale}" />`,
    `<meta property="og:type" content="${config.type}" />`,
    `<meta property="og:image" content="${config.image}" />`,
    `<meta property="og:image:width" content="${config.imageWidth}" />`,
    `<meta property="og:image:height" content="${config.imageHeight}" />`,
    `<meta property="og:image:alt" content="${config.imageAlt}" />`,
    
    // Balises Twitter Card
    `<meta name="twitter:card" content="${config.twitterCard}" />`,
    `<meta name="twitter:site" content="${config.twitterSite}" />`,
    `<meta name="twitter:creator" content="${config.twitterCreator}" />`,
    `<meta name="twitter:title" content="${config.title}" />`,
    `<meta name="twitter:description" content="${config.description}" />`,
    `<meta name="twitter:image" content="${config.image}" />`,
    
    // Balises supplémentaires pour le SEO
    `<meta property="og:image:type" content="image/jpeg" />`,
    `<meta property="og:image:secure_url" content="${config.image}" />`,
    `<meta property="og:updated_time" content="${new Date().toISOString()}" />`,
    
    // Balises pour les réseaux sociaux spécifiques
    `<meta property="fb:app_id" content="your-facebook-app-id" />`,
    `<meta name="instagram:creator" content="@roastmechat" />`,
    `<meta name="instagram:site" content="@roastmechat" />`,
    
    // Balises pour LinkedIn
    `<meta property="og:image:width" content="${config.imageWidth}" />`,
    `<meta property="og:image:height" content="${config.imageHeight}" />`,
    
    // Balises pour Pinterest
    `<meta name="pinterest:description" content="${config.description}" />`,
    `<meta name="pinterest:image" content="${config.image}" />`,
    
    // Balises pour WhatsApp
    `<meta property="og:image:width" content="${config.imageWidth}" />`,
    `<meta property="og:image:height" content="${config.imageHeight}" />`
  ]
  
  return tags.join('\n  ')
}

// Fonction pour générer les balises de langue alternative
export function generateAlternateLanguageTags(): string {
  const baseUrl = 'https://roastme.chat'
  const languages = ['fr', 'en', 'es', 'de', 'it', 'pt', 'ru', 'ja', 'ko', 'zh', 'ar', 'nl']
  
  const tags = languages.map(lang => {
    const url = lang === 'fr' ? baseUrl : `${baseUrl}/${lang}`
    return `<link rel="alternate" hreflang="${lang}" href="${url}" />`
  })
  
  // Ajouter la balise x-default
  tags.push(`<link rel="alternate" hreflang="x-default" href="${baseUrl}" />`)
  
  return tags.join('\n  ')
}

// Fonction pour générer les balises de préchargement des images Open Graph
export function generateOGImagePreloadTags(): string {
  const baseUrl = 'https://roastme.chat'
  const languages = ['fr', 'en', 'es', 'de', 'it', 'pt', 'ru', 'ja', 'ko', 'zh', 'ar', 'nl']
  
  const tags = languages.map(lang => {
    const imageUrl = `${baseUrl}/og-image-${lang}.jpg`
    return `<link rel="preload" as="image" href="${imageUrl}" />`
  })
  
  return tags.join('\n  ')
}
