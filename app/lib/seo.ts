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
    title: 'RoastMe Chat - L\'IA qui te Roaste ! 🔥 Chat IA Humoristique Gratuit',
    description: 'Découvre RoastMe Chat, l\'IA la plus cinglante qui va te roaster de manière hilarante ! Chatbot IA gratuit pour rire, humour noir, insultes créatives et blagues. Prêt à être descendu en flammes ? 🔥 Divertissement en ligne gratuit.',
    keywords: [
      'roast', 'humour', 'IA', 'chat', 'divertissement', 'comédie', 'insultes créatives', 'roaster', 'blagues',
      'chatbot', 'intelligence artificielle', 'humour noir', 'satire', 'moquerie', 'troll', 'meme', 'funny',
      'gratuit', 'en ligne', 'web', 'application', 'site', 'plateforme', 'divertissement', 'amusement',
      'roast me', 'roast moi', 'descendre en flammes', 'brûler', 'critique humoristique', 'parodie',
      'chat IA français', 'bot conversationnel', 'humour français', 'comédie française', 'blagues françaises'
    ],
    openGraph: {
      title: 'RoastMe Chat - L\'IA qui te Roaste ! 🔥 Chat IA Humoristique Gratuit',
      description: 'Découvre RoastMe Chat, l\'IA la plus cinglante qui va te roaster de manière hilarante ! Chatbot IA gratuit pour rire, humour noir, insultes créatives et blagues. Prêt à être descendu en flammes ? 🔥',
      locale: 'fr_FR'
    },
    twitter: {
      title: 'RoastMe Chat - L\'IA qui te Roaste ! 🔥 Chat IA Humoristique Gratuit',
      description: 'Découvre RoastMe Chat, l\'IA la plus cinglante qui va te roaster de manière hilarante ! Chatbot IA gratuit pour rire et s\'amuser.'
    }
  },
  en: {
    title: 'RoastMe Chat - The AI that Roasts You! 🔥 Free AI Humor Chat',
    description: 'Discover RoastMe Chat, the most savage AI that will roast you hilariously! Free AI chatbot for laughs, dark humor, creative insults and jokes. Ready to get burned to the ground? 🔥 Free online entertainment.',
    keywords: [
      'roast', 'humor', 'AI', 'chat', 'entertainment', 'comedy', 'creative insults', 'roaster', 'jokes',
      'chatbot', 'artificial intelligence', 'dark humor', 'satire', 'mockery', 'troll', 'meme', 'funny',
      'free', 'online', 'web', 'application', 'site', 'platform', 'amusement', 'fun',
      'roast me', 'burn me', 'get roasted', 'criticism', 'humorous critique', 'parody',
      'AI chat english', 'conversational bot', 'english humor', 'english comedy', 'english jokes'
    ],
    openGraph: {
      title: 'RoastMe Chat - The AI that Roasts You! 🔥 Free AI Humor Chat',
      description: 'Discover RoastMe Chat, the most savage AI that will roast you hilariously! Free AI chatbot for laughs, dark humor, creative insults and jokes. Ready to get burned to the ground? 🔥',
      locale: 'en_US'
    },
    twitter: {
      title: 'RoastMe Chat - The AI that Roasts You! 🔥 Free AI Humor Chat',
      description: 'Discover RoastMe Chat, the most savage AI that will roast you hilariously! Free AI chatbot for laughs and fun.'
    }
  },
  es: {
    title: 'RoastMe Chat - ¡La IA que te Asa! 🔥 Chat de IA Humorístico Gratis',
    description: '¡Descubre RoastMe Chat, la IA más salvaje que te asará de manera hilarante! Chatbot de IA gratis para reír, humor negro, insultos creativos y chistes. ¿Listo para ser quemado hasta los huesos? 🔥 Entretenimiento en línea gratis.',
    keywords: [
      'roast', 'humor', 'IA', 'chat', 'entretenimiento', 'comedia', 'insultos creativos', 'roaster', 'chistes',
      'chatbot', 'inteligencia artificial', 'humor negro', 'sátira', 'burla', 'troll', 'meme', 'divertido',
      'gratis', 'en línea', 'web', 'aplicación', 'sitio', 'plataforma', 'diversión', 'entretenimiento',
      'roast me', 'ásame', 'quemar', 'crítica humorística', 'parodia',
      'chat IA español', 'bot conversacional', 'humor español', 'comedia española', 'chistes españoles'
    ],
    openGraph: {
      title: 'RoastMe Chat - ¡La IA que te Asa! 🔥 Chat de IA Humorístico Gratis',
      description: '¡Descubre RoastMe Chat, la IA más salvaje que te asará de manera hilarante! Chatbot de IA gratis para reír, humor negro, insultos creativos y chistes. ¿Listo para ser quemado hasta los huesos? 🔥',
      locale: 'es_ES'
    },
    twitter: {
      title: 'RoastMe Chat - ¡La IA que te Asa! 🔥 Chat de IA Humorístico Gratis',
      description: '¡Descubre RoastMe Chat, la IA más salvaje que te asará de manera hilarante! Chatbot de IA gratis para reír y divertirse.'
    }
  },
  de: {
    title: 'RoastMe Chat - Die KI, die dich Roastet! 🔥 Kostenloser KI-Humor-Chat',
    description: 'Entdecke RoastMe Chat, die brutalste KI, die dich auf humorvolle Weise roastet! Kostenloser KI-Chatbot für Lacher, schwarzen Humor, kreative Beleidigungen und Witze. Bereit, bis auf die Knochen verbrannt zu werden? 🔥 Kostenlose Online-Unterhaltung.',
    keywords: [
      'roast', 'humor', 'KI', 'chat', 'unterhaltung', 'komödie', 'kreative beleidigungen', 'roaster', 'witze',
      'chatbot', 'künstliche intelligenz', 'schwarzer humor', 'satire', 'spott', 'troll', 'meme', 'lustig',
      'kostenlos', 'online', 'web', 'anwendung', 'seite', 'plattform', 'unterhaltung', 'spaß',
      'roast me', 'roaste mich', 'verbrennen', 'humorvolle kritik', 'parodie',
      'KI chat deutsch', 'konversationsbot', 'deutscher humor', 'deutsche komödie', 'deutsche witze'
    ],
    openGraph: {
      title: 'RoastMe Chat - Die KI, die dich Roastet! 🔥 Kostenloser KI-Humor-Chat',
      description: 'Entdecke RoastMe Chat, die brutalste KI, die dich auf humorvolle Weise roastet! Kostenloser KI-Chatbot für Lacher, schwarzen Humor, kreative Beleidigungen und Witze. Bereit, bis auf die Knochen verbrannt zu werden? 🔥',
      locale: 'de_DE'
    },
    twitter: {
      title: 'RoastMe Chat - Die KI, die dich Roastet! 🔥 Kostenloser KI-Humor-Chat',
      description: 'Entdecke RoastMe Chat, die brutalste KI, die dich auf humorvolle Weise roastet! Kostenloser KI-Chatbot für Lacher und Spaß.'
    }
  },
  it: {
    title: 'RoastMe Chat - L\'IA che ti Arrostisce! 🔥 Chat IA Umoristico Gratuito',
    description: 'Scopri RoastMe Chat, l\'IA più spietata che ti arrostirà in modo esilarante! Chatbot IA gratuito per risate, umorismo nero, insulti creativi e battute. Pronto a essere bruciato vivo? 🔥 Intrattenimento online gratuito.',
    keywords: [
      'roast', 'umorismo', 'IA', 'chat', 'intrattenimento', 'commedia', 'insulti creativi', 'roaster', 'battute',
      'chatbot', 'intelligenza artificiale', 'umorismo nero', 'satira', 'derisione', 'troll', 'meme', 'divertente',
      'gratuito', 'online', 'web', 'applicazione', 'sito', 'piattaforma', 'divertimento', 'intrattenimento',
      'roast me', 'arrostiscimi', 'brucia', 'critica umoristica', 'parodia',
      'chat IA italiano', 'bot conversazionale', 'umorismo italiano', 'commedia italiana', 'battute italiane'
    ],
    openGraph: {
      title: 'RoastMe Chat - L\'IA che ti Arrostisce! 🔥 Chat IA Umoristico Gratuito',
      description: 'Scopri RoastMe Chat, l\'IA più spietata che ti arrostirà in modo esilarante! Chatbot IA gratuito per risate, umorismo nero, insulti creativi e battute. Pronto a essere bruciato vivo? 🔥',
      locale: 'it_IT'
    },
    twitter: {
      title: 'RoastMe Chat - L\'IA che ti Arrostisce! 🔥 Chat IA Umoristico Gratuito',
      description: 'Scopri RoastMe Chat, l\'IA più spietata che ti arrostirà in modo esilarante! Chatbot IA gratuito per risate e divertimento.'
    }
  },
  pt: {
    title: 'RoastMe Chat - A IA que te Assa! 🔥 Chat de IA Humorístico Grátis',
    description: 'Descobre RoastMe Chat, a IA mais selvagem que vai te assar de forma hilariante! Chatbot de IA grátis para rir, humor negro, insultos criativos e piadas. Pronto para ser queimado até os ossos? 🔥 Entretenimento online grátis.',
    keywords: [
      'roast', 'humor', 'IA', 'chat', 'entretenimento', 'comédia', 'insultos criativos', 'roaster', 'piadas',
      'chatbot', 'inteligência artificial', 'humor negro', 'sátira', 'zombaria', 'troll', 'meme', 'engraçado',
      'grátis', 'online', 'web', 'aplicação', 'site', 'plataforma', 'diversão', 'entretenimento',
      'roast me', 'asse-me', 'queimar', 'crítica humorística', 'paródia',
      'chat IA português', 'bot conversacional', 'humor português', 'comédia portuguesa', 'piadas portuguesas'
    ],
    openGraph: {
      title: 'RoastMe Chat - A IA que te Assa! 🔥 Chat de IA Humorístico Grátis',
      description: 'Descobre RoastMe Chat, a IA mais selvagem que vai te assar de forma hilariante! Chatbot de IA grátis para rir, humor negro, insultos criativos e piadas. Pronto para ser queimado até os ossos? 🔥',
      locale: 'pt_BR'
    },
    twitter: {
      title: 'RoastMe Chat - A IA que te Assa! 🔥 Chat de IA Humorístico Grátis',
      description: 'Descobre RoastMe Chat, a IA mais selvagem que vai te assar de forma hilariante! Chatbot de IA grátis para rir e se divertir.'
    }
  },
  ru: {
    title: 'RoastMe Chat - ИИ, который тебя Прожарит! 🔥 Бесплатный ИИ-юмор чат',
    description: 'Открой RoastMe Chat, самого жестокого ИИ, который прожарит тебя до хруста! Бесплатный ИИ-чатбот для смеха, черного юмора, творческих оскорблений и шуток. Готов быть сожжённым дотла? 🔥 Бесплатное онлайн-развлечение.',
    keywords: [
      'roast', 'юмор', 'ИИ', 'чат', 'развлечения', 'комедия', 'творческие оскорбления', 'roaster', 'шутки',
      'чатбот', 'искусственный интеллект', 'черный юмор', 'сатира', 'насмешка', 'тролль', 'мем', 'смешно',
      'бесплатно', 'онлайн', 'веб', 'приложение', 'сайт', 'платформа', 'развлечение', 'веселье',
      'roast me', 'прожарь меня', 'сжечь', 'юмористическая критика', 'пародия',
      'ИИ чат русский', 'разговорный бот', 'русский юмор', 'русская комедия', 'русские шутки'
    ],
    openGraph: {
      title: 'RoastMe Chat - ИИ, который тебя Прожарит! 🔥 Бесплатный ИИ-юмор чат',
      description: 'Открой RoastMe Chat, самого жестокого ИИ, который прожарит тебя до хруста! Бесплатный ИИ-чатбот для смеха, черного юмора, творческих оскорблений и шуток. Готов быть сожжённым дотла? 🔥',
      locale: 'ru_RU'
    },
    twitter: {
      title: 'RoastMe Chat - ИИ, который тебя Прожарит! 🔥 Бесплатный ИИ-юмор чат',
      description: 'Открой RoastMe Chat, самого жестокого ИИ, который прожарит тебя до хруста! Бесплатный ИИ-чатбот для смеха и веселья.'
    }
  },
  ja: {
    title: 'RoastMe Chat - あなたをローストするAI！🔥 無料AIユーモアチャット',
    description: 'RoastMe Chatを発見しよう、あなたを面白おかしくローストする最も残酷なAI！笑い、ブラックユーモア、創造的な侮辱、ジョークのための無料AIチャットボット。骨まで燃やされる準備はできてる？🔥 無料オンラインエンターテイメント。',
    keywords: [
      'roast', 'ユーモア', 'AI', 'チャット', 'エンターテイメント', 'コメディ', '創造的な侮辱', 'roaster', 'ジョーク',
      'チャットボット', '人工知能', 'ブラックユーモア', '風刺', '嘲笑', 'トロール', 'ミーム', '面白い',
      '無料', 'オンライン', 'ウェブ', 'アプリケーション', 'サイト', 'プラットフォーム', '楽しみ', 'エンターテイメント',
      'roast me', '私をロースト', '燃やす', 'ユーモラスな批評', 'パロディ',
      'AIチャット日本語', '会話ボット', '日本語ユーモア', '日本語コメディ', '日本語ジョーク'
    ],
    openGraph: {
      title: 'RoastMe Chat - あなたをローストするAI！🔥 無料AIユーモアチャット',
      description: 'RoastMe Chatを発見しよう、あなたを面白おかしくローストする最も残酷なAI！笑い、ブラックユーモア、創造的な侮辱、ジョークのための無料AIチャットボット。骨まで燃やされる準備はできてる？🔥',
      locale: 'ja_JP'
    },
    twitter: {
      title: 'RoastMe Chat - あなたをローストするAI！🔥 無料AIユーモアチャット',
      description: 'RoastMe Chatを発見しよう、あなたを面白おかしくローストする最も残酷なAI！無料AIチャットボットで笑いと楽しみを。'
    }
  },
  ko: {
    title: 'RoastMe Chat - 당신을 로스트하는 AI! 🔥 무료AI 유머 채팅',
    description: 'RoastMe Chat을 발견하세요, 당신을 재미있게 로스트할 가장 잔인한 AI! 웃음, 블랙 유머, 창의적인 모욕, 농담을 위한 무료AI 챗봇. 뼈까지 타들어갈 준비가 되었나요? 🔥 무료 온라인 엔터테인먼트.',
    keywords: [
      'roast', '유머', 'AI', '채팅', '엔터테인먼트', '코미디', '창의적인 모욕', 'roaster', '농담',
      '챗봇', '인공지능', '블랙 유머', '풍자', '조롱', '트롤', '밈', '재미있는',
      '무료', '온라인', '웹', '애플리케이션', '사이트', '플랫폼', '재미', '엔터테인먼트',
      'roast me', '나를 로스트', '태우다', '유머러스한 비평', '패러디',
      'AI 채팅 한국어', '대화 봇', '한국어 유머', '한국어 코미디', '한국어 농담'
    ],
    openGraph: {
      title: 'RoastMe Chat - 당신을 로스트하는 AI! 🔥 무료AI 유머 채팅',
      description: 'RoastMe Chat을 발견하세요, 당신을 재미있게 로스트할 가장 잔인한 AI! 웃음, 블랙 유머, 창의적인 모욕, 농담을 위한 무료AI 챗봇. 뼈까지 타들어갈 준비가 되었나요? 🔥',
      locale: 'ko_KR'
    },
    twitter: {
      title: 'RoastMe Chat - 당신을 로스트하는 AI! 🔥 무료AI 유머 채팅',
      description: 'RoastMe Chat을 발견하세요, 당신을 재미있게 로스트할 가장 잔인한 AI! 무료AI 챗봇으로 웃음과 재미를.'
    }
  },
  zh: {
    title: 'RoastMe Chat - 烤你的AI！🔥 免费AI幽默聊天',
    description: '发现RoastMe Chat，最残忍的AI，会以滑稽的方式烤你！免费AI聊天机器人，用于笑声、黑色幽默、创意侮辱和笑话。准备好被烤到骨头了吗？🔥 免费在线娱乐。',
    keywords: [
      'roast', '幽默', 'AI', '聊天', '娱乐', '喜剧', '创意侮辱', 'roaster', '笑话',
      '聊天机器人', '人工智能', '黑色幽默', '讽刺', '嘲笑', '巨魔', '梗', '有趣的',
      '免费', '在线', '网络', '应用程序', '网站', '平台', '娱乐', '乐趣',
      'roast me', '烤我', '燃烧', '幽默批评', '模仿',
      'AI聊天中文', '对话机器人', '中文幽默', '中文喜剧', '中文笑话'
    ],
    openGraph: {
      title: 'RoastMe Chat - 烤你的AI！🔥 免费AI幽默聊天',
      description: '发现RoastMe Chat，最残忍的AI，会以滑稽的方式烤你！免费AI聊天机器人，用于笑声、黑色幽默、创意侮辱和笑话。准备好被烤到骨头了吗？🔥',
      locale: 'zh_CN'
    },
    twitter: {
      title: 'RoastMe Chat - 烤你的AI！🔥 免费AI幽默聊天',
      description: '发现RoastMe Chat，最残忍的AI，会以滑稽的方式烤你！免费AI聊天机器人，带来笑声和乐趣。'
    }
  },
  ar: {
    title: 'RoastMe Chat - الذكاء الاصطناعي الذي يشوي لك! 🔥 دردشة ذكاء اصطناعي فكاهية مجانية',
    description: 'اكتشف RoastMe Chat، أكثر ذكاء اصطناعي وحشية سيشوي لك بطريقة مضحكة! روبوت دردشة ذكاء اصطناعي مجاني للضحك والفكاهة السوداء والإهانات الإبداعية والنكات. مستعد لأن تحترق حتى العظم؟ 🔥 ترفيه مجاني عبر الإنترنت.',
    keywords: [
      'roast', 'فكاهة', 'ذكاء اصطناعي', 'دردشة', 'ترفيه', 'كوميديا', 'إهانات إبداعية', 'roaster', 'نكات',
      'روبوت دردشة', 'ذكاء اصطناعي', 'فكاهة سوداء', 'سخرية', 'سخرية', 'ترول', 'ميم', 'مضحك',
      'مجاني', 'عبر الإنترنت', 'ويب', 'تطبيق', 'موقع', 'منصة', 'ترفيه', 'مرح',
      'roast me', 'اشويني', 'حرق', 'نقد فكاهي', 'محاكاة ساخرة',
      'دردشة ذكاء اصطناعي عربية', 'روبوت محادثة', 'فكاهة عربية', 'كوميديا عربية', 'نكات عربية'
    ],
    openGraph: {
      title: 'RoastMe Chat - الذكاء الاصطناعي الذي يشوي لك! 🔥 دردشة ذكاء اصطناعي فكاهية مجانية',
      description: 'اكتشف RoastMe Chat، أكثر ذكاء اصطناعي وحشية سيشوي لك بطريقة مضحكة! روبوت دردشة ذكاء اصطناعي مجاني للضحك والفكاهة السوداء والإهانات الإبداعية والنكات. مستعد لأن تحترق حتى العظم؟ 🔥',
      locale: 'ar_SA'
    },
    twitter: {
      title: 'RoastMe Chat - الذكاء الاصطناعي الذي يشوي لك! 🔥 دردشة ذكاء اصطناعي فكاهية مجانية',
      description: 'اكتشف RoastMe Chat، أكثر ذكاء اصطناعي وحشية سيشوي لك بطريقة مضحكة! روبوت دردشة ذكاء اصطناعي مجاني للضحك والمرح.'
    }
  },
  nl: {
    title: 'RoastMe Chat - De AI die je Roast! 🔥 Gratis AI Humor Chat',
    description: 'Ontdek RoastMe Chat, de meest wrede AI die je op hilarische wijze gaat roasten! Gratis AI chatbot voor lach, zwarte humor, creatieve beledigingen en grappen. Klaar om tot op het bot verbrand te worden? 🔥 Gratis online entertainment.',
    keywords: [
      'roast', 'humor', 'AI', 'chat', 'entertainment', 'komedie', 'creatieve beledigingen', 'roaster', 'grappen',
      'chatbot', 'kunstmatige intelligentie', 'zwarte humor', 'satire', 'spot', 'troll', 'meme', 'grappig',
      'gratis', 'online', 'web', 'applicatie', 'site', 'platform', 'vermaak', 'plezier',
      'roast me', 'roast mij', 'verbranden', 'humoristische kritiek', 'parodie',
      'AI chat nederlands', 'conversatiebot', 'nederlandse humor', 'nederlandse komedie', 'nederlandse grappen'
    ],
    openGraph: {
      title: 'RoastMe Chat - De AI die je Roast! 🔥 Gratis AI Humor Chat',
      description: 'Ontdek RoastMe Chat, de meest wrede AI die je op hilarische wijze gaat roasten! Gratis AI chatbot voor lach, zwarte humor, creatieve beledigingen en grappen. Klaar om tot op het bot verbrand te worden? 🔥',
      locale: 'nl_NL'
    },
    twitter: {
      title: 'RoastMe Chat - De AI die je Roast! 🔥 Gratis AI Humor Chat',
      description: 'Ontdek RoastMe Chat, de meest wrede AI die je op hilarische wijze gaat roasten! Gratis AI chatbot voor lach en plezier.'
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
