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

export const seoMetadata: Record<string, SEOMetadata> = {
  fr: {
    title: 'RoastMe Chat - L\'IA qui te Roaste ! 🔥',
    description: 'Découvre RoastMe Chat, l\'IA la plus cinglante qui va te roaster de manière hilarante ! Prêt à être descendu en flammes ? 🔥',
    keywords: ['roast', 'humour', 'IA', 'chat', 'divertissement', 'comédie', 'insultes créatives', 'roaster', 'blagues'],
    openGraph: {
      title: 'RoastMe Chat - L\'IA qui te Roaste ! 🔥',
      description: 'Découvre RoastMe Chat, l\'IA la plus cinglante qui va te roaster de manière hilarante ! Prêt à être descendu en flammes ? 🔥',
      locale: 'fr_FR'
    },
    twitter: {
      title: 'RoastMe Chat - L\'IA qui te Roaste ! 🔥',
      description: 'Découvre RoastMe Chat, l\'IA la plus cinglante qui va te roaster de manière hilarante !'
    }
  },
  en: {
    title: 'RoastMe Chat - The AI that Roasts You! 🔥',
    description: 'Discover RoastMe Chat, the most savage AI that will roast you hilariously! Ready to get burned to the ground? 🔥',
    keywords: ['roast', 'humor', 'AI', 'chat', 'entertainment', 'comedy', 'creative insults', 'roaster', 'jokes'],
    openGraph: {
      title: 'RoastMe Chat - The AI that Roasts You! 🔥',
      description: 'Discover RoastMe Chat, the most savage AI that will roast you hilariously! Ready to get burned to the ground? 🔥',
      locale: 'en_US'
    },
    twitter: {
      title: 'RoastMe Chat - The AI that Roasts You! 🔥',
      description: 'Discover RoastMe Chat, the most savage AI that will roast you hilariously!'
    }
  },
  es: {
    title: 'RoastMe Chat - ¡La IA que te Asa! 🔥',
    description: '¡Descubre RoastMe Chat, la IA más salvaje que te asará de manera hilarante! ¿Listo para ser quemado hasta los huesos? 🔥',
    keywords: ['roast', 'humor', 'IA', 'chat', 'entretenimiento', 'comedia', 'insultos creativos', 'roaster', 'chistes'],
    openGraph: {
      title: 'RoastMe Chat - ¡La IA que te Asa! 🔥',
      description: '¡Descubre RoastMe Chat, la IA más salvaje que te asará de manera hilarante! ¿Listo para ser quemado hasta los huesos? 🔥',
      locale: 'es_ES'
    },
    twitter: {
      title: 'RoastMe Chat - ¡La IA que te Asa! 🔥',
      description: '¡Descubre RoastMe Chat, la IA más salvaje que te asará de manera hilarante!'
    }
  },
  de: {
    title: 'RoastMe Chat - Die KI, die dich Roastet! 🔥',
    description: 'Entdecke RoastMe Chat, die brutalste KI, die dich auf humorvolle Weise roastet! Bereit, bis auf die Knochen verbrannt zu werden? 🔥',
    keywords: ['roast', 'humor', 'KI', 'chat', 'unterhaltung', 'komödie', 'kreative beleidigungen', 'roaster', 'witze'],
    openGraph: {
      title: 'RoastMe Chat - Die KI, die dich Roastet! 🔥',
      description: 'Entdecke RoastMe Chat, die brutalste KI, die dich auf humorvolle Weise roastet! Bereit, bis auf die Knochen verbrannt zu werden? 🔥',
      locale: 'de_DE'
    },
    twitter: {
      title: 'RoastMe Chat - Die KI, die dich Roastet! 🔥',
      description: 'Entdecke RoastMe Chat, die brutalste KI, die dich auf humorvolle Weise roastet!'
    }
  },
  it: {
    title: 'RoastMe Chat - L\'IA che ti Arrostisce! 🔥',
    description: 'Scopri RoastMe Chat, l\'IA più spietata che ti arrostirà in modo esilarante! Pronto a essere bruciato vivo? 🔥',
    keywords: ['roast', 'umorismo', 'IA', 'chat', 'intrattenimento', 'commedia', 'insulti creativi', 'roaster', 'battute'],
    openGraph: {
      title: 'RoastMe Chat - L\'IA che ti Arrostisce! 🔥',
      description: 'Scopri RoastMe Chat, l\'IA più spietata che ti arrostirà in modo esilarante! Pronto a essere bruciato vivo? 🔥',
      locale: 'it_IT'
    },
    twitter: {
      title: 'RoastMe Chat - L\'IA che ti Arrostisce! 🔥',
      description: 'Scopri RoastMe Chat, l\'IA più spietata che ti arrostirà in modo esilarante!'
    }
  },
  pt: {
    title: 'RoastMe Chat - A IA que te Assa! 🔥',
    description: 'Descobre RoastMe Chat, a IA mais selvagem que vai te assar de forma hilariante! Pronto para ser queimado até os ossos? 🔥',
    keywords: ['roast', 'humor', 'IA', 'chat', 'entretenimento', 'comédia', 'insultos criativos', 'roaster', 'piadas'],
    openGraph: {
      title: 'RoastMe Chat - A IA que te Assa! 🔥',
      description: 'Descobre RoastMe Chat, a IA mais selvagem que vai te assar de forma hilariante! Pronto para ser queimado até os ossos? 🔥',
      locale: 'pt_BR'
    },
    twitter: {
      title: 'RoastMe Chat - A IA que te Assa! 🔥',
      description: 'Descobre RoastMe Chat, a IA mais selvagem que vai te assar de forma hilariante!'
    }
  },
  ru: {
    title: 'RoastMe Chat - ИИ, который тебя Прожарит! 🔥',
    description: 'Открой RoastMe Chat, самого жестокого ИИ, который прожарит тебя до хруста! Готов быть сожжённым дотла? 🔥',
    keywords: ['roast', 'юмор', 'ИИ', 'чат', 'развлечения', 'комедия', 'творческие оскорбления', 'roaster', 'шутки'],
    openGraph: {
      title: 'RoastMe Chat - ИИ, который тебя Прожарит! 🔥',
      description: 'Открой RoastMe Chat, самого жестокого ИИ, который прожарит тебя до хруста! Готов быть сожжённым дотла? 🔥',
      locale: 'ru_RU'
    },
    twitter: {
      title: 'RoastMe Chat - ИИ, который тебя Прожарит! 🔥',
      description: 'Открой RoastMe Chat, самого жестокого ИИ, который прожарит тебя до хруста!'
    }
  },
  ja: {
    title: 'RoastMe Chat - あなたをローストするAI！🔥',
    description: 'RoastMe Chatを発見しよう、あなたを面白おかしくローストする最も残酷なAI！骨まで燃やされる準備はできてる？🔥',
    keywords: ['roast', 'ユーモア', 'AI', 'チャット', 'エンターテイメント', 'コメディ', '創造的な侮辱', 'roaster', 'ジョーク'],
    openGraph: {
      title: 'RoastMe Chat - あなたをローストするAI！🔥',
      description: 'RoastMe Chatを発見しよう、あなたを面白おかしくローストする最も残酷なAI！骨まで燃やされる準備はできてる？🔥',
      locale: 'ja_JP'
    },
    twitter: {
      title: 'RoastMe Chat - あなたをローストするAI！🔥',
      description: 'RoastMe Chatを発見しよう、あなたを面白おかしくローストする最も残酷なAI！'
    }
  },
  ko: {
    title: 'RoastMe Chat - 당신을 로스트하는 AI! 🔥',
    description: 'RoastMe Chat을 발견하세요, 당신을 재미있게 로스트할 가장 잔인한 AI! 뼈까지 타들어갈 준비가 되었나요? 🔥',
    keywords: ['roast', '유머', 'AI', '채팅', '엔터테인먼트', '코미디', '창의적인 모욕', 'roaster', '농담'],
    openGraph: {
      title: 'RoastMe Chat - 당신을 로스트하는 AI! 🔥',
      description: 'RoastMe Chat을 발견하세요, 당신을 재미있게 로스트할 가장 잔인한 AI! 뼈까지 타들어갈 준비가 되었나요? 🔥',
      locale: 'ko_KR'
    },
    twitter: {
      title: 'RoastMe Chat - 당신을 로스트하는 AI! 🔥',
      description: 'RoastMe Chat을 발견하세요, 당신을 재미있게 로스트할 가장 잔인한 AI!'
    }
  },
  zh: {
    title: 'RoastMe Chat - 烤你的AI！🔥',
    description: '发现RoastMe Chat，最残忍的AI，会以滑稽的方式烤你！准备好被烤到骨头了吗？🔥',
    keywords: ['roast', '幽默', 'AI', '聊天', '娱乐', '喜剧', '创意侮辱', 'roaster', '笑话'],
    openGraph: {
      title: 'RoastMe Chat - 烤你的AI！🔥',
      description: '发现RoastMe Chat，最残忍的AI，会以滑稽的方式烤你！准备好被烤到骨头了吗？🔥',
      locale: 'zh_CN'
    },
    twitter: {
      title: 'RoastMe Chat - 烤你的AI！🔥',
      description: '发现RoastMe Chat，最残忍的AI，会以滑稽的方式烤你！'
    }
  },
  ar: {
    title: 'RoastMe Chat - الذكاء الاصطناعي الذي يشوي لك! 🔥',
    description: 'اكتشف RoastMe Chat، أكثر ذكاء اصطناعي وحشية سيشوي لك بطريقة مضحكة! مستعد لأن تحترق حتى العظم؟ 🔥',
    keywords: ['roast', 'فكاهة', 'ذكاء اصطناعي', 'دردشة', 'ترفيه', 'كوميديا', 'إهانات إبداعية', 'roaster', 'نكات'],
    openGraph: {
      title: 'RoastMe Chat - الذكاء الاصطناعي الذي يشوي لك! 🔥',
      description: 'اكتشف RoastMe Chat، أكثر ذكاء اصطناعي وحشية سيشوي لك بطريقة مضحكة! مستعد لأن تحترق حتى العظم؟ 🔥',
      locale: 'ar_SA'
    },
    twitter: {
      title: 'RoastMe Chat - الذكاء الاصطناعي الذي يشوي لك! 🔥',
      description: 'اكتشف RoastMe Chat، أكثر ذكاء اصطناعي وحشية سيشوي لك بطريقة مضحكة!'
    }
  },
  nl: {
    title: 'RoastMe Chat - De AI die je Roast! 🔥',
    description: 'Ontdek RoastMe Chat, de meest wrede AI die je op hilarische wijze gaat roasten! Klaar om tot op het bot verbrand te worden? 🔥',
    keywords: ['roast', 'humor', 'AI', 'chat', 'entertainment', 'komedie', 'creatieve beledigingen', 'roaster', 'grappen'],
    openGraph: {
      title: 'RoastMe Chat - De AI die je Roast! 🔥',
      description: 'Ontdek RoastMe Chat, de meest wrede AI die je op hilarische wijze gaat roasten! Klaar om tot op het bot verbrand te worden? 🔥',
      locale: 'nl_NL'
    },
    twitter: {
      title: 'RoastMe Chat - De AI die je Roast! 🔥',
      description: 'Ontdek RoastMe Chat, de meest wrede AI die je op hilarische wijze gaat roasten!'
    }
  }
}

export function generateMetadata(lang: string = 'fr'): Metadata {
  const seo = seoMetadata[lang] || seoMetadata.fr
  
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
          url: `/og-image-${lang}.jpg`,
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
      images: [`/og-image-${lang}.jpg`],
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
