import Head from 'next/head'

interface RoastSEOProps {
  pageType: 'roast' | 'roast-me' | 'home'
  title?: string
  description?: string
  url?: string
}

export default function RoastSEO({ 
  pageType, 
  title = "Roast Me - Chat IA de Roast Gratuit #1",
  description = "🔥 ROAST ME - L'IA qui te roast le mieux ! Chat roast gratuit #1 qui va te roaster sans pitié. ✅ Roast personnalisé ✅ Sans filtres ✅ Instantané.",
  url = "https://roastme.chat"
}: RoastSEOProps) {
  
  const getPageSpecificData = () => {
    switch (pageType) {
      case 'roast':
        return {
          title: url.includes('/en/') 
            ? "Roast - Free AI Roast Chat #1 🔥 | Best Online AI Roaster"
            : "Roast - Chat Roast Gratuit IA #1 🔥 | Se Faire Roaster en Ligne",
          description: url.includes('/en/') 
            ? "🔥 ROAST - The best free AI roast chat! Our AI will roast you mercilessly with savage humor. ✅ Instant roast ✅ Personalized roast ✅ Free"
            : "🔥 ROAST - Le meilleur chat roast gratuit ! Notre IA va te roaster sans pitié avec un humour cinglant. ✅ Roast instantané ✅ Roast personnalisé ✅ Gratuit",
          keywords: url.includes('/en/') 
            ? "roast, ai roast chat, free roast ai, roast bot, roast machine, roast online, get roasted, roast generator, roast app, best roast ai"
            : "roast, chat roast, roast gratuit, roast ia, roast bot, roast machine, roast online, se faire roaster, roast generator, roast app",
          url: url.includes('/en/') ? "https://roastme.chat/en/roast" : "https://roastme.chat/roast"
        }
      case 'roast-me':
        return {
          title: url.includes('/en/') 
            ? "Roast Me - AI That Roasts You Mercilessly 🔥 | Free Roast Me Chat"
            : "Roast Me - IA qui te Roast Sans Pitié 🔥 | Chat Roast Me Gratuit",
          description: url.includes('/en/') 
            ? "🔥 ROAST ME - The AI that understands 'roast me'! Free roast me chat with savage AI. ✅ Roast me ai ✅ Roast me chat ✅ Instant roasting"
            : "🔥 ROAST ME - L'IA qui comprend 'roast me' ! Chat roast me gratuit avec IA cinglante. ✅ Roast me ai ✅ Roast me ia ✅ Roast me chat instantané",
          keywords: url.includes('/en/') 
            ? "roast me, roast me chat, roast me ai, free roast me, roast me online, roast me bot, get roasted, roast me now, savage roast me"
            : "roast me, roast me chat, roast me ai, roast me ia, roast me gratuit, chat roast me, se faire roaster, roast me online, roast me bot",
          url: url.includes('/en/') ? "https://roastme.chat/en/roast-me" : "https://roastme.chat/roast-me"
        }
      default:
        return {
          title,
          description,
          keywords: "roast me, roast, chat roast, roast gratuit, roast ia, roast bot, se faire roaster, roast machine, roast me ai, roast online",
          url
        }
    }
  }

  const pageData = getPageSpecificData()

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageData.title,
    "description": pageData.description,
    "url": pageData.url,
    "mainEntity": {
      "@type": "Service",
      "name": pageType === 'roast-me' ? "Service Roast Me" : "Service de Roast",
      "description": pageData.description,
      "provider": {
        "@type": "Organization",
        "name": "RoastMe Team",
        "url": "https://roastme.chat"
      },
      "serviceType": pageType === 'roast-me' ? "Chat Roast Me IA" : "Chat Roast IA",
      "areaServed": "Worldwide",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://roastme.chat"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": pageType === 'roast-me' ? "Roast Me" : "Roast",
          "item": pageData.url
        }
      ]
    },
    "potentialAction": {
      "@type": "UseAction",
      "name": pageType === 'roast-me' ? "Se faire roaster avec Roast Me" : "Utiliser le chat roast",
      "target": pageData.url
    }
  }

  return (
    <Head>
      {/* Métadonnées principales */}
      <title>{pageData.title}</title>
      <meta name="description" content={pageData.description} />
      <meta name="keywords" content={pageData.keywords} />
      
      {/* URL canonique */}
      <link rel="canonical" href={pageData.url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={pageData.title} />
      <meta property="og:description" content={pageData.description} />
      <meta property="og:url" content={pageData.url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://roastme.chat/og-image.jpg" />
      <meta property="og:site_name" content="Roast Me" />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageData.title} />
      <meta name="twitter:description" content={pageData.description} />
      <meta name="twitter:image" content="https://roastme.chat/og-image.jpg" />
      <meta name="twitter:site" content="@roastmechat" />
      
      {/* Métadonnées de page spécifiques */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Données structurées */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hreflang pour les langues alternatives */}
      <link rel="alternate" href="https://roastme.chat" hrefLang="fr" />
      <link rel="alternate" href="https://roastme.chat/en" hrefLang="en" />
      <link rel="alternate" href="https://roastme.chat/es" hrefLang="es" />
      <link rel="alternate" href="https://roastme.chat/de" hrefLang="de" />
      
      {/* Préconnexion pour les ressources externes */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  )
}
