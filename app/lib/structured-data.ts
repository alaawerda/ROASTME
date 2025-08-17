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

export function generateStructuredDataScript(lang: string = 'fr'): string {
  const baseUrl = 'https://roastme.chat'
  const currentUrl = lang === 'fr' ? baseUrl : `${baseUrl}/${lang}`
  
  // Données structurées principales pour l'application web
  const webAppData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "RoastMe Chat",
    "description": lang === 'fr' 
      ? "L'IA la plus cinglante qui va te roaster de manière hilarante ! Chatbot IA gratuit pour rire et s'amuser."
      : "The most savage AI that will roast you hilariously! Free AI chatbot for laughs and fun.",
    "url": currentUrl,
    "applicationCategory": "EntertainmentApplication",
    "operatingSystem": "Web Browser",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    },
    "author": {
      "@type": "Organization",
      "name": "RoastMe Team",
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "RoastMe",
      "url": baseUrl
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "inLanguage": lang,
    "audience": {
      "@type": "Audience",
      "audienceType": "Adults interested in humor and entertainment",
      "suggestedMinAge": "16"
    },
    "keywords": lang === 'fr' 
      ? "roast, humour, IA, chat, divertissement, comédie, insultes créatives, roaster, blagues, chatbot, intelligence artificielle, humour noir, satire, moquerie, troll, meme, funny, gratuit, en ligne, web, application, site, plateforme, divertissement, amusement"
      : "roast, humor, AI, chat, entertainment, comedy, creative insults, roaster, jokes, chatbot, artificial intelligence, dark humor, satire, mockery, troll, meme, funny, free, online, web, application, site, platform, amusement, fun",
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "softwareVersion": "2.0.0",
    "featureList": [
      "AI-powered roasting",
      "Multi-language support",
      "Real-time chat",
      "Creative insults",
      "Humor generation",
      "Free to use"
    ]
  }

  // Données structurées pour l'organisation
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RoastMe",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/logo.png`,
      "width": "512",
      "height": "512"
    },
    "sameAs": [
      "https://twitter.com/roastmechat",
      "https://facebook.com/roastmechat",
      "https://instagram.com/roastmechat"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@roastme.chat"
    }
  }

  // Données structurées pour le service
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "RoastMe Chat Service",
    "description": lang === 'fr'
      ? "Service de chat IA humoristique gratuit pour roaster et s'amuser"
      : "Free AI humor chat service for roasting and fun",
    "provider": {
      "@type": "Organization",
      "name": "RoastMe"
    },
    "areaServed": "Worldwide",
    "serviceType": "AI Chat Service",
    "category": "Entertainment"
  }

  // Données structurées pour le site web
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RoastMe Chat",
    "url": baseUrl,
    "description": lang === 'fr'
      ? "Site web de chat IA humoristique gratuit"
      : "Free AI humor chat website",
    "publisher": {
      "@type": "Organization",
      "name": "RoastMe"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }

  // Données structurées pour le breadcrumb
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": lang === 'fr' ? "Accueil" : "Home",
        "item": baseUrl
      },
      ...(lang !== 'fr' ? [{
        "@type": "ListItem",
        "position": 2,
        "name": lang.toUpperCase(),
        "item": currentUrl
      }] : [])
    ]
  }

  // Données structurées pour la FAQ
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": lang === 'fr' ? "Qu'est-ce que RoastMe Chat ?" : "What is RoastMe Chat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": lang === 'fr' 
            ? "RoastMe Chat est un chatbot IA gratuit qui vous roaste de manière humoristique et créative."
            : "RoastMe Chat is a free AI chatbot that roasts you in a humorous and creative way."
        }
      },
      {
        "@type": "Question",
        "name": lang === 'fr' ? "RoastMe Chat est-il gratuit ?" : "Is RoastMe Chat free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": lang === 'fr' 
            ? "Oui, RoastMe Chat est entièrement gratuit à utiliser."
            : "Yes, RoastMe Chat is completely free to use."
        }
      },
      {
        "@type": "Question",
        "name": lang === 'fr' ? "Dans quelles langues est disponible RoastMe Chat ?" : "In which languages is RoastMe Chat available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": lang === 'fr' 
            ? "RoastMe Chat est disponible en 12 langues : français, anglais, espagnol, allemand, italien, portugais, russe, japonais, coréen, chinois, arabe et néerlandais."
            : "RoastMe Chat is available in 12 languages: French, English, Spanish, German, Italian, Portuguese, Russian, Japanese, Korean, Chinese, Arabic and Dutch."
        }
      }
    ]
  }

  // Combiner toutes les données structurées
  const allStructuredData = [
    webAppData,
    organizationData,
    serviceData,
    websiteData,
    breadcrumbData,
    faqData
  ]

  return JSON.stringify(allStructuredData)
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
