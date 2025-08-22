import { Metadata } from 'next'

export interface SEOMetadata {
  title: string
  description: string
  keywords: string[]
  openGraph: {
    title: string
    description: string
    locale: string
  }
  twitter: {
    title: string
    description: string
  }
}

export const seoMetadata = {
  // FRANÇAIS - Langue principale
  fr: {
    title: 'Chat Roast IA Gratuit - L\'IA qui te Roaste en Flammes ! 🔥',
    description: 'Chat roast IA gratuit et sans filtres ! L\'intelligence artificielle la plus cinglante qui va te roaster de manière hilarante. Teste maintenant ! 🔥',
    keywords: [
      'chat roast',
      'roast IA',
      'IA roast gratuit',
      'chat humour',
      'roast sans filtres',
      'intelligence artificielle humour',
      'chat comédie',
      'roast créatif',
      'blagues IA',
      'divertissement chat',
      'chat roast gratuit',
      'IA roast sans censure',
      'humour intelligence artificielle',
      'roast personnalisé',
      'chat humour gratuit',
      'roast moi',
      'descendre en flammes',
      'humour cinglant',
      'blagues sans filtres',
      'IA humoriste'
    ],
    twitter: {
      title: 'Chat Roast IA Gratuit - L\'IA qui te Roaste en Flammes ! 🔥',
      description: 'Chat roast IA gratuit et sans filtres ! L\'intelligence artificielle la plus cinglante qui va te roaster de manière hilarante.'
    },
    openGraph: {
      title: 'Chat Roast IA Gratuit - L\'IA qui te Roaste en Flammes ! 🔥',
      description: 'Chat roast IA gratuit et sans filtres ! L\'intelligence artificielle la plus cinglante qui va te roaster de manière hilarante. Teste maintenant ! 🔥',
      locale: 'fr_FR'
    }
  },

  // ANGLAIS
  en: {
    title: 'Free AI Roast Chat - The AI that Roasts You in Flames! 🔥',
    description: 'Free AI roast chat without filters! The most cutting AI that will roast you hilariously. Try now! 🔥',
    keywords: [
      'ai roast chat',
      'roast ai',
      'free ai roast',
      'humor chat',
      'roast without filters',
      'artificial intelligence humor',
      'comedy chat',
      'creative roast',
      'ai jokes',
      'entertainment chat',
      'free roast chat',
      'ai roast no censorship',
      'ai humor',
      'personalized roast',
      'free humor chat',
      'roast me',
      'get roasted',
      'savage ai',
      'unfiltered humor',
      'ai comedian'
    ],
    twitter: {
      title: 'Free AI Roast Chat - The AI that Roasts You in Flames! 🔥',
      description: 'Free AI roast chat without filters! The most cutting AI that will roast you hilariously.'
    },
    openGraph: {
      title: 'Free AI Roast Chat - The AI that Roasts You in Flames! 🔥',
      description: 'Free AI roast chat without filters! The most cutting AI that will roast you hilariously. Try now! 🔥',
      locale: 'en_US'
    }
  },

  // ESPAGNOL
  es: {
    title: 'Chat de Roast IA Gratis - ¡La IA que te Roaste en Llamas! 🔥',
    description: '¡Chat de roast IA gratis sin filtros! La inteligencia artificial más mordaz que te va a roaster de manera hilarante. ¡Pruébalo ahora! 🔥',
    keywords: [
      'chat roast ia',
      'roast ia',
      'ia roast gratis',
      'chat humor',
      'roast sin filtros',
      'inteligencia artificial humor',
      'chat comedia',
      'roast creativo',
      'chistes ia',
      'entretenimiento chat',
      'chat roast gratis',
      'ia roast sin censura',
      'humor ia',
      'roast personalizado',
      'chat humor gratis',
      'roast me',
      'quemar en llamas',
      'humor mordaz',
      'chistes sin filtros',
      'ia cómica'
    ],
    twitter: {
      title: 'Chat de Roast IA Gratis - ¡La IA que te Roaste en Llamas! 🔥',
      description: '¡Chat de roast IA gratis sin filtros! La inteligencia artificial más mordaz que te va a roaster de manera hilarante.'
    },
    openGraph: {
      title: 'Chat de Roast IA Gratis - ¡La IA que te Roaste en Llamas! 🔥',
      description: '¡Chat de roast IA gratis sin filtros! La inteligencia artificial más mordaz que te va a roaster de manera hilarante. ¡Pruébalo ahora! 🔥',
      locale: 'es_ES'
    }
  },

  // ARABE
  ar: {
    title: 'دردشة AI روست مجانية - الذكاء الاصطناعي الذي يروستك بالنار! 🔥',
    description: 'دردشة AI روست مجانية بدون فلاتر! الذكاء الاصطناعي الأكثر حدة الذي سيروستك بطريقة مضحكة. جرب الآن! 🔥',
    keywords: [
      'دردشة روست ai',
      'روست ai',
      'ai روست مجاني',
      'دردشة فكاهة',
      'روست بدون فلاتر',
      'ذكاء اصطناعي فكاهة',
      'دردشة كوميديا',
      'روست إبداعي',
      'نكات ai',
      'ترفيه دردشة',
      'دردشة روست مجانية',
      'ai روست بدون رقابة',
      'فكاهة ai',
      'روست مخصص',
      'دردشة فكاهة مجانية',
      'روست مي',
      'حرق بالنار',
      'فكاهة حادة',
      'نكات بدون فلاتر',
      'ai كوميدي'
    ],
    twitter: {
      title: 'دردشة AI روست مجانية - الذكاء الاصطناعي الذي يروستك بالنار! 🔥',
      description: 'دردشة AI روست مجانية بدون فلاتر! الذكاء الاصطناعي الأكثر حدة الذي سيروستك بطريقة مضحكة.'
    },
    openGraph: {
      title: 'دردشة AI روست مجانية - الذكاء الاصطناعي الذي يروستك بالنار! 🔥',
      description: 'دردشة AI روست مجانية بدون فلاتر! الذكاء الاصطناعي الأكثر حدة الذي سيروستك بطريقة مضحكة. جرب الآن! 🔥',
      locale: 'ar_SA'
    }
  },

  // ALLEMAND
  de: {
    title: 'Kostenloser AI Roast Chat - Die KI, die dich in Flammen röstet! 🔥',
    description: 'Kostenloser AI Roast Chat ohne Filter! Die schärfste KI, die dich auf humorvolle Weise rösten wird. Jetzt testen! 🔥',
    keywords: [
      'ai roast chat',
      'roast ai',
      'kostenloser ai roast',
      'humor chat',
      'roast ohne filter',
      'künstliche intelligenz humor',
      'komödie chat',
      'kreativer roast',
      'ai witze',
      'unterhaltung chat',
      'kostenloser roast chat',
      'ai roast ohne zensur',
      'ai humor',
      'personalisierter roast',
      'kostenloser humor chat',
      'roast mich',
      'in flammen rösten',
      'scharfer humor',
      'witze ohne filter',
      'ai komiker'
    ],
    twitter: {
      title: 'Kostenloser AI Roast Chat - Die KI, die dich in Flammen röstet! 🔥',
      description: 'Kostenloser AI Roast Chat ohne Filter! Die schärfste KI, die dich auf humorvolle Weise rösten wird.'
    },
    openGraph: {
      title: 'Kostenloser AI Roast Chat - Die KI, die dich in Flammen röstet! 🔥',
      description: 'Kostenloser AI Roast Chat ohne Filter! Die schärfste KI, die dich auf humorvolle Weise rösten wird. Jetzt testen! 🔥',
      locale: 'de_DE'
    }
  },

  // ITALIEN
  it: {
    title: 'Chat Roast IA Gratuito - L\'IA che ti Roasta in Fiamme! 🔥',
    description: 'Chat roast IA gratuito senza filtri! L\'intelligenza artificiale più tagliente che ti roasterà in modo esilarante. Provalo ora! 🔥',
    keywords: [
      'chat roast ia',
      'roast ia',
      'ia roast gratuito',
      'chat umorismo',
      'roast senza filtri',
      'intelligenza artificiale umorismo',
      'chat commedia',
      'roast creativo',
      'battute ia',
      'intrattenimento chat',
      'chat roast gratuito',
      'ia roast senza censura',
      'umorismo ia',
      'roast personalizzato',
      'chat umorismo gratuito',
      'roast mi',
      'bruciare in fiamme',
      'umorismo tagliente',
      'battute senza filtri',
      'ia comica'
    ],
    twitter: {
      title: 'Chat Roast IA Gratuito - L\'IA che ti Roasta in Fiamme! 🔥',
      description: 'Chat roast IA gratuito senza filtri! L\'intelligenza artificiale più tagliente che ti roasterà in modo esilarante.'
    },
    openGraph: {
      title: 'Chat Roast IA Gratuito - L\'IA che ti Roasta in Fiamme! 🔥',
      description: 'Chat roast IA gratuito senza filtri! L\'intelligenza artificiale più tagliente che ti roasterà in modo esilarante. Provalo ora! 🔥',
      locale: 'it_IT'
    }
  },

  // PORTUGAIS
  pt: {
    title: 'Chat de Roast IA Gratuito - A IA que te Roasta em Chamas! 🔥',
    description: 'Chat de roast IA gratuito sem filtros! A inteligência artificial mais cortante que vai te roaster de forma hilariante. Experimente agora! 🔥',
    keywords: [
      'chat roast ia',
      'roast ia',
      'ia roast gratuito',
      'chat humor',
      'roast sem filtros',
      'inteligência artificial humor',
      'chat comédia',
      'roast criativo',
      'piadas ia',
      'entretenimento chat',
      'chat roast gratuito',
      'ia roast sem censura',
      'humor ia',
      'roast personalizado',
      'chat humor gratuito',
      'roast me',
      'queimar em chamas',
      'humor cortante',
      'piadas sem filtros',
      'ia cômica'
    ],
    twitter: {
      title: 'Chat de Roast IA Gratuito - A IA que te Roasta em Chamas! 🔥',
      description: 'Chat de roast IA gratuito sem filtros! A inteligência artificial mais cortante que vai te roaster de forma hilariante.'
    },
    openGraph: {
      title: 'Chat de Roast IA Gratuito - A IA que te Roasta em Chamas! 🔥',
      description: 'Chat de roast IA gratuito sem filtros! A inteligência artificial mais cortante que vai te roaster de forma hilariante. Experimente agora! 🔥',
      locale: 'pt_BR'
    }
  },

  // RUSSE
  ru: {
    title: 'Бесплатный Чат Роаст ИИ - ИИ, который Роастит тебя в Пламени! 🔥',
    description: 'Бесплатный чат роаст ИИ без фильтров! Самый острый ИИ, который будет роастить тебя забавно. Попробуй сейчас! 🔥',
    keywords: [
      'чат роаст ии',
      'роаст ии',
      'ии роаст бесплатно',
      'чат юмор',
      'роаст без фильтров',
      'искусственный интеллект юмор',
      'чат комедия',
      'креативный роаст',
      'шутки ии',
      'развлечения чат',
      'чат роаст бесплатно',
      'ии роаст без цензуры',
      'юмор ии',
      'персонализированный роаст',
      'чат юмор бесплатно',
      'роаст ми',
      'сжечь в пламени',
      'острый юмор',
      'шутки без фильтров',
      'ии комик'
    ],
    twitter: {
      title: 'Бесплатный Чат Роаст ИИ - ИИ, который Роастит тебя в Пламени! 🔥',
      description: 'Бесплатный чат роаст ИИ без фильтров! Самый острый ИИ, который будет роастить тебя забавно.'
    },
    openGraph: {
      title: 'Бесплатный Чат Роаст ИИ - ИИ, который Роастит тебя в Пламени! 🔥',
      description: 'Бесплатный чат роаст ИИ без фильтров! Самый острый ИИ, который будет роастить тебя забавно. Попробуй сейчас! 🔥',
      locale: 'ru_RU'
    }
  },

  // JAPONAIS
  ja: {
    title: '無料AIローストチャット - 炎でローストするAI！🔥',
    description: 'フィルターなしの無料AIローストチャット！あなたを面白おかしくローストする最も辛辣なAI。今すぐ試してみて！🔥',
    keywords: [
      'aiローストチャット',
      'ローストai',
      '無料aiロースト',
      'ユーモアチャット',
      'フィルターなしロースト',
      '人工知能ユーモア',
      'コメディチャット',
      'クリエイティブロースト',
      'aiジョーク',
      'エンターテイメントチャット',
      '無料ローストチャット',
      '検閲なしaiロースト',
      'aiユーモア',
      'パーソナライズドロースト',
      '無料ユーモアチャット',
      'ローストミー',
      '炎で燃やす',
      '辛辣なユーモア',
      'フィルターなしジョーク',
      'aiコメディアン'
    ],
    twitter: {
      title: '無料AIローストチャット - 炎でローストするAI！🔥',
      description: 'フィルターなしの無料AIローストチャット！あなたを面白おかしくローストする最も辛辣なAI。'
    },
    openGraph: {
      title: '無料AIローストチャット - 炎でローストするAI！🔥',
      description: 'フィルターなしの無料AIローストチャット！あなたを面白おかしくローストする最も辛辣なAI。今すぐ試してみて！🔥',
      locale: 'ja_JP'
    }
  },

  // CORÉEN
  ko: {
    title: '무료 AI 로스트 채팅 - 불꽃으로 로스트하는 AI! 🔥',
    description: '필터 없는 무료 AI 로스트 채팅! 당신을 재미있게 로스트할 가장 예리한 AI. 지금 시도해보세요! 🔥',
    keywords: [
      'ai로스트채팅',
      '로스트ai',
      '무료ai로스트',
      '유머채팅',
      '필터없는로스트',
      '인공지능유머',
      '코미디채팅',
      '창의적로스트',
      'ai농담',
      '엔터테인먼트채팅',
      '무료로스트채팅',
      '검열없는ai로스트',
      'ai유머',
      '개인화된로스트',
      '무료유머채팅',
      '로스트미',
      '불꽃으로태우다',
      '예리한유머',
      '필터없는농담',
      'ai코미디언'
    ],
    twitter: {
      title: '무료 AI 로스트 채팅 - 불꽃으로 로스트하는 AI! 🔥',
      description: '필터 없는 무료 AI 로스트 채팅! 당신을 재미있게 로스트할 가장 예리한 AI.'
    },
    openGraph: {
      title: '무료 AI 로스트 채팅 - 불꽃으로 로스트하는 AI! 🔥',
      description: '필터 없는 무료 AI 로스트 채팅! 당신을 재미있게 로스트할 가장 예리한 AI. 지금 시도해보세요! 🔥',
      locale: 'ko_KR'
    }
  },

  // CHINOIS
  zh: {
    title: '免费AI烤制聊天 - 用火焰烤制你的AI！🔥',
    description: '无过滤器的免费AI烤制聊天！最犀利的AI将以滑稽的方式烤制你。立即尝试！🔥',
    keywords: [
      'ai烤制聊天',
      '烤制ai',
      '免费ai烤制',
      '幽默聊天',
      '无过滤器烤制',
      '人工智能幽默',
      '喜剧聊天',
      '创意烤制',
      'ai笑话',
      '娱乐聊天',
      '免费烤制聊天',
      '无审查ai烤制',
      'ai幽默',
      '个性化烤制',
      '免费幽默聊天',
      '烤制我',
      '用火焰烤制',
      '犀利幽默',
      '无过滤器笑话',
      'ai喜剧演员'
    ],
    twitter: {
      title: '免费AI烤制聊天 - 用火焰烤制你的AI！🔥',
      description: '无过滤器的免费AI烤制聊天！最犀利的AI将以滑稽的方式烤制你。'
    },
    openGraph: {
      title: '免费AI烤制聊天 - 用火焰烤制你的AI！🔥',
      description: '无过滤器的免费AI烤制聊天！最犀利的AI将以滑稽的方式烤制你。立即尝试！🔥',
      locale: 'zh_CN'
    }
  },

  // NÉERLANDAIS
  nl: {
    title: 'Gratis AI Roast Chat - De AI die je in Vlammen Roast! 🔥',
    description: 'Gratis AI roast chat zonder filters! De meest bijtende AI die je op hilarante wijze gaat roasten. Probeer het nu! 🔥',
    keywords: [
      'ai roast chat',
      'roast ai',
      'gratis ai roast',
      'humor chat',
      'roast zonder filters',
      'kunstmatige intelligentie humor',
      'komedie chat',
      'creatieve roast',
      'ai grappen',
      'entertainment chat',
      'gratis roast chat',
      'ai roast zonder censuur',
      'ai humor',
      'gepersonaliseerde roast',
      'gratis humor chat',
      'roast mij',
      'in vlammen roasten',
      'bijtende humor',
      'grappen zonder filters',
      'ai komiek'
    ],
    twitter: {
      title: 'Gratis AI Roast Chat - De AI die je in Vlammen Roast! 🔥',
      description: 'Gratis AI roast chat zonder filters! De meest bijtende AI die je op hilarante wijze gaat roasten.'
    },
    openGraph: {
      title: 'Gratis AI Roast Chat - De AI die je in Vlammen Roast! 🔥',
      description: 'Gratis AI roast chat zonder filters! De meest bijtende AI die je op hilarante wijze gaat roasten. Probeer het nu! 🔥',
      locale: 'nl_NL'
    }
  }
}

export function generateMetadata(lang: string = 'fr'): Metadata {
  const seo = seoMetadata[lang] || seoMetadata.fr!
  
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      locale: seo.openGraph.locale,
      type: 'website',
      url: `https://roastme.chat/${lang === 'fr' ? '' : lang}`,
      siteName: 'RoastMe Chat',
      images: [
        {
          url: `/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.twitter.title,
      description: seo.twitter.description,
      images: [`/og-image.jpg`],
      creator: '@roastmechat',
      site: '@roastmechat',
    },
    alternates: {
      canonical: `https://roastme.chat/${lang === 'fr' ? '' : lang}`,
      languages: {
        'fr': 'https://roastme.chat',
        'en': 'https://roastme.chat/en',
        'es': 'https://roastme.chat/es',
        'de': 'https://roastme.chat/de',
        'it': 'https://roastme.chat/it',
        'pt': 'https://roastme.chat/pt',
        'ru': 'https://roastme.chat/ru',
        'ja': 'https://roastme.chat/ja',
        'ko': 'https://roastme.chat/ko',
        'zh': 'https://roastme.chat/zh',
        'ar': 'https://roastme.chat/ar',
        'nl': 'https://roastme.chat/nl',
      },
    },
  }
}
