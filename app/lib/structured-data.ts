export interface StructuredData {
  "@context": string
  "@type": string
  name: string
  description: string
  url: string
  applicationCategory: string
  operatingSystem: string
  offers: {
    "@type": string
    price: string
    priceCurrency: string
  }
  author: {
    "@type": string
    name: string
  }
  aggregateRating: {
    "@type": string
    ratingValue: string
    ratingCount: string
  }
  inLanguage: string[]
  audience: {
    "@type": string
    audienceType: string
  }
  keywords: string[]
  datePublished: string
  dateModified: string
}

export const structuredDataConfigs: Record<string, StructuredData> = {
  fr: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "RoastMe Chat",
    description: "L'IA la plus cinglante qui va te roaster de manière hilarante ! Prêt à être descendu en flammes ?",
    url: "https://roastme.chat",
    applicationCategory: "EntertainmentApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR"
    },
    author: {
      "@type": "Organization",
      name: "RoastMe Team"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250"
    },
    inLanguage: ["fr", "en", "es", "de", "it", "pt", "ru", "ja", "ko", "zh", "ar", "nl"],
    audience: {
      "@type": "Audience",
      audienceType: "Adults interested in humor and entertainment"
    },
    keywords: ["roast", "humour", "IA", "chat", "divertissement", "comédie", "insultes créatives", "roaster", "blagues"],
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split('T')[0] || new Date().toISOString()
  },
  en: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "RoastMe Chat",
    description: "The most savage AI that will roast you hilariously! Ready to get burned to the ground?",
    url: "https://roastme.chat/en",
    applicationCategory: "EntertainmentApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
    author: {
      "@type": "Organization",
      name: "RoastMe Team"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250"
    },
    inLanguage: ["en", "fr", "es", "de", "it", "pt", "ru", "ja", "ko", "zh", "ar", "nl"],
    audience: {
      "@type": "Audience",
      audienceType: "Adults interested in humor and entertainment"
    },
    keywords: ["roast", "humor", "AI", "chat", "entertainment", "comedy", "creative insults", "roaster", "jokes"],
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split('T')[0] || new Date().toISOString()
  },
  es: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "RoastMe Chat",
    description: "¡La IA más salvaje que te asará de manera hilarante! ¿Listo para ser quemado hasta los huesos?",
    url: "https://roastme.chat/es",
    applicationCategory: "EntertainmentApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR"
    },
    author: {
      "@type": "Organization",
      name: "RoastMe Team"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250"
    },
    inLanguage: ["es", "fr", "en", "de", "it", "pt", "ru", "ja", "ko", "zh", "ar", "nl"],
    audience: {
      "@type": "Audience",
      audienceType: "Adults interested in humor and entertainment"
    },
    keywords: ["roast", "humor", "IA", "chat", "entretenimiento", "comedia", "insultos creativos", "roaster", "chistes"],
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split('T')[0] || new Date().toISOString()
  }
}

export function getStructuredData(lang: string = 'fr'): StructuredData {
  return structuredDataConfigs[lang] || structuredDataConfigs.fr!
}

export const generateStructuredDataScript = (language: string) => {
  const structuredData = {
    fr: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Chat Roast IA Gratuit",
      "alternateName": ["RoastMe Chat", "IA Roast", "Chat Humour IA"],
      "description": "Application web gratuite de chat roast avec intelligence artificielle. L'IA la plus cinglante qui va te roaster de manière hilarante sans filtres.",
      "url": "https://roastme.chat",
      "applicationCategory": "EntertainmentApplication",
      "applicationSubCategory": "Chat Application",
      "operatingSystem": "Web Browser",
      "browserRequirements": "JavaScript enabled, Modern browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01"
      },
      "author": {
        "@type": "Organization",
        "name": "RoastMe Team",
        "url": "https://roastme.chat"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "2847",
        "bestRating": "5",
        "worstRating": "1"
      },
      "inLanguage": "fr",
      "audience": {
        "@type": "Audience",
        "audienceType": "Adults interested in humor and entertainment",
        "suggestedMinAge": "18"
      },
      "keywords": "chat roast, roast IA, IA roast gratuit, chat humour, roast sans filtres, intelligence artificielle humour, chat comédie, roast créatif, blagues IA, divertissement chat",
      "datePublished": "2024-01-01",
      "dateModified": "2024-12-19",
      "softwareVersion": "2.0",
      "featureList": [
        "Chat roast en temps réel",
        "Intelligence artificielle avancée",
        "Support multilingue",
        "Interface responsive",
        "Roast personnalisé",
        "Humour sans filtres",
        "Gratuit et accessible"
      ],
      "screenshot": "https://roastme.chat/og-image.jpg",
      "downloadUrl": "https://roastme.chat",
      "installUrl": "https://roastme.chat",
      "softwareRequirements": "Navigateur web moderne avec JavaScript activé",
      "permissions": "Aucune permission requise"
    },

    en: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Free AI Roast Chat",
      "alternateName": ["RoastMe Chat", "AI Roast", "AI Humor Chat"],
      "description": "Free web application for AI roast chat. The most cutting AI that will roast you hilariously without filters.",
      "url": "https://roastme.chat/en",
      "applicationCategory": "EntertainmentApplication",
      "applicationSubCategory": "Chat Application",
      "operatingSystem": "Web Browser",
      "browserRequirements": "JavaScript enabled, Modern browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01"
      },
      "author": {
        "@type": "Organization",
        "name": "RoastMe Team",
        "url": "https://roastme.chat"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "2847",
        "bestRating": "5",
        "worstRating": "1"
      },
      "inLanguage": "en",
      "audience": {
        "@type": "Audience",
        "audienceType": "Adults interested in humor and entertainment",
        "suggestedMinAge": "18"
      },
      "keywords": "ai roast chat, roast ai, free ai roast, humor chat, roast without filters, artificial intelligence humor, comedy chat, creative roast, ai jokes, entertainment chat",
      "datePublished": "2024-01-01",
      "dateModified": "2024-12-19",
      "softwareVersion": "2.0",
      "featureList": [
        "Real-time roast chat",
        "Advanced artificial intelligence",
        "Multilingual support",
        "Responsive interface",
        "Personalized roast",
        "Unfiltered humor",
        "Free and accessible"
      ],
      "screenshot": "https://roastme.chat/og-image.jpg",
      "downloadUrl": "https://roastme.chat/en",
      "installUrl": "https://roastme.chat/en",
      "softwareRequirements": "Modern web browser with JavaScript enabled",
      "permissions": "No permissions required"
    },

    es: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Chat de Roast IA Gratis",
      "alternateName": ["RoastMe Chat", "IA Roast", "Chat Humor IA"],
      "description": "Aplicación web gratuita de chat roast con inteligencia artificial. La IA más mordaz que te va a roaster de manera hilarante sin filtros.",
      "url": "https://roastme.chat/es",
      "applicationCategory": "EntertainmentApplication",
      "applicationSubCategory": "Chat Application",
      "operatingSystem": "Web Browser",
      "browserRequirements": "JavaScript habilitado, Navegador moderno",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01"
      },
      "author": {
        "@type": "Organization",
        "name": "RoastMe Team",
        "url": "https://roastme.chat"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "2847",
        "bestRating": "5",
        "worstRating": "1"
      },
      "inLanguage": "es",
      "audience": {
        "@type": "Audience",
        "audienceType": "Adults interested in humor and entertainment",
        "suggestedMinAge": "18"
      },
      "keywords": "chat roast ia, roast ia, ia roast gratis, chat humor, roast sin filtros, inteligencia artificial humor, chat comedia, roast creativo, chistes ia, entretenimiento chat",
      "datePublished": "2024-01-01",
      "dateModified": "2024-12-19",
      "softwareVersion": "2.0",
      "featureList": [
        "Chat roast en tiempo real",
        "Inteligencia artificial avanzada",
        "Soporte multilingüe",
        "Interfaz responsive",
        "Roast personalizado",
        "Humor sin filtros",
        "Gratis y accesible"
      ],
      "screenshot": "https://roastme.chat/og-image.jpg",
      "downloadUrl": "https://roastme.chat/es",
      "installUrl": "https://roastme.chat/es",
      "softwareRequirements": "Navegador web moderno con JavaScript habilitado",
      "permissions": "No se requieren permisos"
    },

    ar: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "دردشة AI روست مجانية",
      "alternateName": ["RoastMe Chat", "AI Roast", "دردشة فكاهة AI"],
      "description": "تطبيق ويب مجاني لدردشة الروست مع الذكاء الاصطناعي. الذكاء الاصطناعي الأكثر حدة الذي سيروستك بطريقة مضحكة بدون فلاتر.",
      "url": "https://roastme.chat/ar",
      "applicationCategory": "EntertainmentApplication",
      "applicationSubCategory": "Chat Application",
      "operatingSystem": "Web Browser",
      "browserRequirements": "JavaScript مفعل، متصفح حديث",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "SAR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01"
      },
      "author": {
        "@type": "Organization",
        "name": "RoastMe Team",
        "url": "https://roastme.chat"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "2847",
        "bestRating": "5",
        "worstRating": "1"
      },
      "inLanguage": "ar",
      "audience": {
        "@type": "Audience",
        "audienceType": "Adults interested in humor and entertainment",
        "suggestedMinAge": "18"
      },
      "keywords": "دردشة روست ai, روست ai, ai روست مجاني, دردشة فكاهة, روست بدون فلاتر, ذكاء اصطناعي فكاهة, دردشة كوميديا, روست إبداعي, نكات ai, ترفيه دردشة",
      "datePublished": "2024-01-01",
      "dateModified": "2024-12-19",
      "softwareVersion": "2.0",
      "featureList": [
        "دردشة روست في الوقت الفعلي",
        "ذكاء اصطناعي متقدم",
        "دعم متعدد اللغات",
        "واجهة متجاوبة",
        "روست مخصص",
        "فكاهة بدون فلاتر",
        "مجاني ومتاح"
      ],
      "screenshot": "https://roastme.chat/og-image.jpg",
      "downloadUrl": "https://roastme.chat/ar",
      "installUrl": "https://roastme.chat/ar",
      "softwareRequirements": "متصفح ويب حديث مع JavaScript مفعل",
      "permissions": "لا توجد أذونات مطلوبة"
    }
  }

  return JSON.stringify(structuredData[language as keyof typeof structuredData] || structuredData.fr)
}

// Fonction pour générer des données structurées spécifiques à la langue
export function generateLanguageSpecificStructuredData(lang: string) {
  const baseUrl = 'https://roastme.chat'
  const currentUrl = lang === 'fr' ? baseUrl : `${baseUrl}/${lang}`
  
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `RoastMe Chat - ${lang.toUpperCase()}`,
    "url": currentUrl,
    "inLanguage": lang,
    "isPartOf": {
      "@type": "WebSite",
      "name": "RoastMe Chat",
      "url": baseUrl
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": lang.toUpperCase(),
          "item": currentUrl
        }
      ]
    }
  }
}
