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

export const getOGConfig = (language: string) => {
  const configs = {
    fr: {
      title: 'Chat Roast IA Gratuit - L\'IA qui te Roaste en Flammes ! 🔥',
      description: 'Chat roast IA gratuit et sans filtres ! L\'intelligence artificielle la plus cinglante qui va te roaster de manière hilarante. Teste maintenant ! 🔥',
      locale: 'fr_FR',
      url: 'https://roastme.chat',
      image: 'https://roastme.chat/og-image.jpg',
      siteName: 'Chat Roast IA Gratuit'
    },
    en: {
      title: 'Free AI Roast Chat - The AI that Roasts You in Flames! 🔥',
      description: 'Free AI roast chat without filters! The most cutting AI that will roast you hilariously. Try now! 🔥',
      locale: 'en_US',
      url: 'https://roastme.chat/en',
      image: 'https://roastme.chat/og-image.jpg',
      siteName: 'Free AI Roast Chat'
    },
    es: {
      title: 'Chat de Roast IA Gratis - ¡La IA que te Roaste en Llamas! 🔥',
      description: '¡Chat de roast IA gratis sin filtros! La inteligencia artificial más mordaz que te va a roaster de manera hilarante. ¡Pruébalo ahora! 🔥',
      locale: 'es_ES',
      url: 'https://roastme.chat/es',
      image: 'https://roastme.chat/og-image.jpg',
      siteName: 'Chat de Roast IA Gratis'
    },
    ar: {
      title: 'دردشة AI روست مجانية - الذكاء الاصطناعي الذي يروستك بالنار! 🔥',
      description: 'دردشة AI روست مجانية بدون فلاتر! الذكاء الاصطناعي الأكثر حدة الذي سيروستك بطريقة مضحكة. جرب الآن! 🔥',
      locale: 'ar_SA',
      url: 'https://roastme.chat/ar',
      image: 'https://roastme.chat/og-image.jpg',
      siteName: 'دردشة AI روست مجانية'
    },
    de: {
      title: 'Kostenloser AI Roast Chat - Die KI, die dich in Flammen röstet! 🔥',
      description: 'Kostenloser AI Roast Chat ohne Filter! Die schärfste KI, die dich auf humorvolle Weise rösten wird. Jetzt testen! 🔥',
      locale: 'de_DE',
      url: 'https://roastme.chat/de',
      image: 'https://roastme.chat/og-image.jpg',
      siteName: 'Kostenloser AI Roast Chat'
    },
    it: {
      title: 'Chat Roast IA Gratuito - L\'IA che ti Roasta in Fiamme! 🔥',
      description: 'Chat roast IA gratuito senza filtri! L\'intelligenza artificiale più tagliente che ti roasterà in modo esilarante. Provalo ora! 🔥',
      locale: 'it_IT',
      url: 'https://roastme.chat/it',
      image: 'https://roastme.chat/og-image.jpg',
      siteName: 'Chat Roast IA Gratuito'
    },
    pt: {
      title: 'Chat de Roast IA Gratuito - A IA que te Roasta em Chamas! 🔥',
      description: 'Chat de roast IA gratuito sem filtros! A inteligência artificial mais cortante que vai te roaster de forma hilariante. Experimente agora! 🔥',
      locale: 'pt_BR',
      url: 'https://roastme.chat/pt',
      image: 'https://roastme.chat/og-image.jpg',
      siteName: 'Chat de Roast IA Gratuito'
    },
    ru: {
      title: 'Бесплатный Чат Роаст ИИ - ИИ, который Роастит тебя в Пламени! 🔥',
      description: 'Бесплатный чат роаст ИИ без фильтров! Самый острый ИИ, который будет роастить тебя забавно. Попробуй сейчас! 🔥',
      locale: 'ru_RU',
      url: 'https://roastme.chat/ru',
      image: 'https://roastme.chat/og-image.jpg',
      siteName: 'Бесплатный Чат Роаст ИИ'
    },
    ja: {
      title: '無料AIローストチャット - 炎でローストするAI！🔥',
      description: 'フィルターなしの無料AIローストチャット！あなたを面白おかしくローストする最も辛辣なAI。今すぐ試してみて！🔥',
      locale: 'ja_JP',
      url: 'https://roastme.chat/ja',
      image: 'https://roastme.chat/og-image.jpg',
      siteName: '無料AIローストチャット'
    },
    ko: {
      title: '무료 AI 로스트 채팅 - 불꽃으로 로스트하는 AI! 🔥',
      description: '필터 없는 무료 AI 로스트 채팅! 당신을 재미있게 로스트할 가장 예리한 AI. 지금 시도해보세요! 🔥',
      locale: 'ko_KR',
      url: 'https://roastme.chat/ko',
      image: 'https://roastme.chat/og-image.jpg',
      siteName: '무료 AI 로스트 채팅'
    },
    zh: {
      title: '免费AI烤制聊天 - 用火焰烤制你的AI！🔥',
      description: '无过滤器的免费AI烤制聊天！最犀利的AI将以滑稽的方式烤制你。立即尝试！🔥',
      locale: 'zh_CN',
      url: 'https://roastme.chat/zh',
      image: 'https://roastme.chat/og-image.jpg',
      siteName: '免费AI烤制聊天'
    },
    nl: {
      title: 'Gratis AI Roast Chat - De AI die je in Vlammen Roast! 🔥',
      description: 'Gratis AI roast chat zonder filters! De meest bijtende AI die je op hilarante wijze gaat roasten. Probeer het nu! 🔥',
      locale: 'nl_NL',
      url: 'https://roastme.chat/nl',
      image: 'https://roastme.chat/og-image.jpg',
      siteName: 'Gratis AI Roast Chat'
    }
  }

  return configs[language as keyof typeof configs] || configs.fr
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
    `<meta property="og:type" content="website" />`, // Assuming type is always website for chat
    `<meta property="og:image" content="${config.image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${config.title}" />`,
    
    // Balises Twitter Card
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:site" content="@roastmechat" />`,
    `<meta name="twitter:creator" content="@roastmechat" />`,
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
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    
    // Balises pour Pinterest
    `<meta name="pinterest:description" content="${config.description}" />`,
    `<meta name="pinterest:image" content="${config.image}" />`,
    
    // Balises pour WhatsApp
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`
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
  const imageUrl = `${baseUrl}/og-image.jpg`
  return `<link rel="preload" as="image" href="${imageUrl}" />`
}
