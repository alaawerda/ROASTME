export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "RoastMe - Chat Roast IA | Alternative ChatGPT Amusante",
    "alternateName": ["Chat Roast IA", "RoastMe Chat", "ChatGPT Alternative Fun", "Chat IA Amusant", "Chatbot Drôle Gratuit"],
    "description": "La meilleure alternative gratuite à ChatGPT pour le fun ! Chat IA amusant spécialisé dans le roast humoristique. Comme ChatGPT mais optimisé pour l'humour et le divertissement. 100% gratuit !",
    "url": "https://roastme.chat/chat-roast-ia",
    "applicationCategory": "EntertainmentApplication",
    "applicationSubCategory": "ChatGPT Alternative, AI Chat, Humor Bot",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "description": "Alternative gratuite à ChatGPT pour le fun et l'humour"
    },
    "featureList": [
      "Alternative gratuite à ChatGPT",
      "Chat IA amusant et drôle",
      "Roast sans filtres",
      "Chat en temps réel",
      "Support multilingue (12 langues)",
      "Roast personnalisé",
      "100% gratuit - pas d'abonnement",
      "Comme ChatGPT mais fun",
      "Disponible 24/7",
      "Chatbot humour instantané"
    ],
    "screenshot": "https://roastme.chat/og-image.jpg",
    "softwareVersion": "3.0",
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
      "ratingValue": "4.9",
      "ratingCount": "8540",
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
          "name": "Fan de ChatGPT"
        },
        "reviewBody": "Meilleure alternative à ChatGPT pour rire ! C'est comme ChatGPT mais en 100x plus drôle. Je l'utilise quand je veux m'amuser au lieu de travailler."
      },
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
        "reviewBody": "L'IA la plus cinglante que j'ai jamais testée ! Les roasts sont hilarants et personnalisés. Bien mieux que les blagues de ChatGPT."
      }
    ],
    "isRelatedTo": {
      "@type": "SoftwareApplication",
      "name": "ChatGPT",
      "description": "RoastMe est une alternative amusante à ChatGPT"
    },
    "foundingDate": "2024",
    "sameAs": [
      "https://roastme.chat",
      "https://twitter.com/roastmechat"
    ],
    "keywords": "chatgpt alternative, chat ia amusant, chat ia drole, chatbot gratuit, roast ia, humour ia, chatgpt fun, alternative chatgpt gratuite"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
