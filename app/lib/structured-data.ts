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
    dateModified: new Date().toISOString().split('T')[0]
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
    dateModified: new Date().toISOString().split('T')[0]
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
    dateModified: new Date().toISOString().split('T')[0]
  }
}

export function getStructuredData(lang: string = 'fr'): StructuredData {
  return structuredDataConfigs[lang] || structuredDataConfigs.fr
}

export function generateStructuredDataScript(lang: string = 'fr'): string {
  const data = getStructuredData(lang)
  return JSON.stringify(data, null, 2)
}
