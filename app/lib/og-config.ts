export interface OGConfig {
  title: string
  description: string
  image: string
  url: string
  siteName: string
  locale: string
  type: string
}

export const ogConfigs: Record<string, OGConfig> = {
  fr: {
    title: 'RoastMe Chat - L\'IA qui te Roaste ! 🔥',
    description: 'Découvre RoastMe Chat, l\'IA la plus cinglante qui va te roaster de manière hilarante ! Prêt à être descendu en flammes ? 🔥',
    image: '/og-image-fr.jpg',
    url: 'https://roastme.chat',
    siteName: 'RoastMe Chat',
    locale: 'fr_FR',
    type: 'website'
  },
  en: {
    title: 'RoastMe Chat - The AI that Roasts You! 🔥',
    description: 'Discover RoastMe Chat, the most savage AI that will roast you hilariously! Ready to get burned to the ground? 🔥',
    image: '/og-image-en.jpg',
    url: 'https://roastme.chat/en',
    siteName: 'RoastMe Chat',
    locale: 'en_US',
    type: 'website'
  },
  es: {
    title: 'RoastMe Chat - ¡La IA que te Asa! 🔥',
    description: '¡Descubre RoastMe Chat, la IA más salvaje que te asará de manera hilarante! ¿Listo para ser quemado hasta los huesos? 🔥',
    image: '/og-image-es.jpg',
    url: 'https://roastme.chat/es',
    siteName: 'RoastMe Chat',
    locale: 'es_ES',
    type: 'website'
  },
  de: {
    title: 'RoastMe Chat - Die KI, die dich Roastet! 🔥',
    description: 'Entdecke RoastMe Chat, die brutalste KI, die dich auf humorvolle Weise roastet! Bereit, bis auf die Knochen verbrannt zu werden? 🔥',
    image: '/og-image-de.jpg',
    url: 'https://roastme.chat/de',
    siteName: 'RoastMe Chat',
    locale: 'de_DE',
    type: 'website'
  },
  it: {
    title: 'RoastMe Chat - L\'IA che ti Arrostisce! 🔥',
    description: 'Scopri RoastMe Chat, l\'IA più spietata che ti arrostirà in modo esilarante! Pronto a essere bruciato vivo? 🔥',
    image: '/og-image-it.jpg',
    url: 'https://roastme.chat/it',
    siteName: 'RoastMe Chat',
    locale: 'it_IT',
    type: 'website'
  },
  pt: {
    title: 'RoastMe Chat - A IA que te Assa! 🔥',
    description: 'Descobre RoastMe Chat, a IA mais selvagem que vai te assar de forma hilariante! Pronto para ser queimado até os ossos? 🔥',
    image: '/og-image-pt.jpg',
    url: 'https://roastme.chat/pt',
    siteName: 'RoastMe Chat',
    locale: 'pt_BR',
    type: 'website'
  },
  ru: {
    title: 'RoastMe Chat - ИИ, который тебя Прожарит! 🔥',
    description: 'Открой RoastMe Chat, самого жестокого ИИ, который прожарит тебя до хруста! Готов быть сожжённым дотла? 🔥',
    image: '/og-image-ru.jpg',
    url: 'https://roastme.chat/ru',
    siteName: 'RoastMe Chat',
    locale: 'ru_RU',
    type: 'website'
  },
  ja: {
    title: 'RoastMe Chat - あなたをローストするAI！🔥',
    description: 'RoastMe Chatを発見しよう、あなたを面白おかしくローストする最も残酷なAI！骨まで燃やされる準備はできてる？🔥',
    image: '/og-image-ja.jpg',
    url: 'https://roastme.chat/ja',
    siteName: 'RoastMe Chat',
    locale: 'ja_JP',
    type: 'website'
  },
  ko: {
    title: 'RoastMe Chat - 당신을 로스트하는 AI! 🔥',
    description: 'RoastMe Chat을 발견하세요, 당신을 재미있게 로스트할 가장 잔인한 AI! 뼈까지 타들어갈 준비가 되었나요? 🔥',
    image: '/og-image-ko.jpg',
    url: 'https://roastme.chat/ko',
    siteName: 'RoastMe Chat',
    locale: 'ko_KR',
    type: 'website'
  },
  zh: {
    title: 'RoastMe Chat - 烤你的AI！🔥',
    description: '发现RoastMe Chat，最残忍的AI，会以滑稽的方式烤你！准备好被烤到骨头了吗？🔥',
    image: '/og-image-zh.jpg',
    url: 'https://roastme.chat/zh',
    siteName: 'RoastMe Chat',
    locale: 'zh_CN',
    type: 'website'
  },
  ar: {
    title: 'RoastMe Chat - الذكاء الاصطناعي الذي يشوي لك! 🔥',
    description: 'اكتشف RoastMe Chat، أكثر ذكاء اصطناعي وحشية سيشوي لك بطريقة مضحكة! مستعد لأن تحترق حتى العظم؟ 🔥',
    image: '/og-image-ar.jpg',
    url: 'https://roastme.chat/ar',
    siteName: 'RoastMe Chat',
    locale: 'ar_SA',
    type: 'website'
  },
  nl: {
    title: 'RoastMe Chat - De AI die je Roast! 🔥',
    description: 'Ontdek RoastMe Chat, de meest wrede AI die je op hilarische wijze gaat roasten! Klaar om tot op het bot verbrand te worden? 🔥',
    image: '/og-image-nl.jpg',
    url: 'https://roastme.chat/nl',
    siteName: 'RoastMe Chat',
    locale: 'nl_NL',
    type: 'website'
  }
}

export function getOGConfig(lang: string = 'fr'): OGConfig {
  return ogConfigs[lang] || ogConfigs.fr
}
