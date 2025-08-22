export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Chat Roast IA",
    "description": "L'expérience de roast la plus avancée et hilarante jamais créée. Roast sans filtres, chat en temps réel, support multilingue. 100% gratuit !",
    "url": "https://roastme.chat/chat-roast-ia",
    "applicationCategory": "EntertainmentApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "description": "Accès gratuit et illimité à toutes les fonctionnalités"
    },
    "featureList": [
      "Roast sans filtres",
      "Chat en temps réel",
      "Support multilingue (12 langues)",
      "Roast personnalisé",
      "100% gratuit",
      "Disponible 24/7"
    ],
    "screenshot": "https://roastme.chat/og-image.jpg",
    "softwareVersion": "1.0",
    "author": {
      "@type": "Organization",
      "name": "RoastMe Team",
      "url": "https://roastme.chat"
    },
    "publisher": {
      "@type": "Organization",
      "name": "RoastMe",
      "url": "https://roastme.chat"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Utilisateur satisfait"
        },
        "reviewBody": "L'IA la plus cinglante que j'ai jamais testée ! Les roasts sont hilarants et personnalisés."
      }
    ],
    "foundingDate": "2024",
    "sameAs": [
      "https://roastme.chat",
      "https://twitter.com/roastmechat"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
