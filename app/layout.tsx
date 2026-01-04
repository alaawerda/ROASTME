import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

// Métadonnées SEO optimisées avec Core Web Vitals - Ciblage ChatGPT, Chat IA, Roast
export const metadata: Metadata = {
  metadataBase: new URL('https://roastme.chat'),
  title: {
    default: 'Roast Me - Alternative ChatGPT Fun 🔥 Chat IA Amusant Gratuit | Meilleur Roast Bot IA 2026',
    template: '%s | Roast Me - ChatGPT Alternatif Humour & Roast IA'
  },
  description: '🔥 ROAST ME - La meilleure alternative à ChatGPT pour le fun ! Chat IA amusant et drôle qui te roast sans pitié. ✅ Comme ChatGPT mais en plus marrant ✅ Chat bot IA gratuit ✅ Roast personnalisé instantané. Le chatbot IA le plus hilarant du web !',
  keywords: ['chatgpt', 'chatgpt alternative', 'chatgpt gratuit', 'chatgpt français', 'chat gpt', 'chat ia', 'chat ia gratuit', 'chat ia amusant', 'chat ia drole', 'chat bot ia', 'chatbot gratuit', 'ia amusante', 'ia drole', 'ia humour', 'roast me', 'roast', 'roast me chat', 'roast ia gratuit', 'roast me ai', 'chat roast', 'roast bot', 'se faire roaster', 'roast generator', 'roast machine', 'roast app', 'roast online', 'free roast ai', 'roast chatbot', 'roast sans pitié', 'alternative chatgpt', 'meilleur chatbot', 'chatbot humour', 'ai chat fun', 'funny ai chat', 'roast bot online', 'ai roast generator'],
  authors: [{ name: 'RoastMe Team' }],
  creator: 'RoastMe Team',
  publisher: 'RoastMe',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://roastme.chat',
    siteName: 'RoastMe - Alternative ChatGPT Fun | Chat IA Amusant Gratuit',
    title: 'Roast Me - Alternative ChatGPT Amusante 🔥 Chat IA Drôle & Roast Gratuit',
    description: '🔥 Alternative à ChatGPT pour le fun ! Chat IA amusant qui te roast sans pitié. Comme ChatGPT mais en 100x plus drôle. Le meilleur chatbot IA gratuit pour rire ! ✅ Humour IA ✅ Roast personnalisé ✅ Gratuit',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chat Roast IA Gratuit - Meilleure IA de Roast 2026',
        type: 'image/jpeg',
      },
    ],
    videos: [],
    audio: [],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roast Me - Alternative ChatGPT Fun 🔥 | Chat IA Amusant & Roast Gratuit',
    description: '🔥 La meilleure alternative à ChatGPT pour rire ! Chat IA amusant qui te roast. Comme ChatGPT mais en plus drôle. ✅ Chat bot IA gratuit ✅ Humour IA ✅ Roast instantané',
    images: ['/og-image.jpg'],
    creator: '@roastmechat',
    site: '@roastmechat',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://roastme.chat',
    languages: {
      'fr': 'https://roastme.chat',
      'en': 'https://roastme.chat',
      'en-US': 'https://roastme.chat',
      'en-GB': 'https://roastme.chat',
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
      'x-default': 'https://roastme.chat',
    },
  },
  // Métadonnées de performance et accessibilité
  other: {
    'theme-color': '#dc2626',
    'msapplication-TileColor': '#dc2626',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'RoastMe Chat',
    'mobile-web-app-capable': 'yes',
    'application-name': 'RoastMe Chat',
    'format-detection': 'telephone=no',
    'viewport-fit': 'cover',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" dir="ltr" style={{ scrollBehavior: 'auto', WebkitOverflowScrolling: 'touch' }}>
      <head>
        
        {/* Favicons et icônes */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Optimisation Performance & Core Web Vitals */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://analytics.ahrefs.com" />
        <link rel="preconnect" href="https://vitals.vercel-analytics.com" />
        
        {/* DNS Prefetch pour ressources externes */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//analytics.ahrefs.com" />
        <link rel="dns-prefetch" href="//buymeacoffee.com" />
        
        {/* Preload des ressources critiques */}
        <link rel="preload" href="/og-image.jpg" as="image" />
        <link rel="preload" href="/favicon.svg" as="image" type="image/svg+xml" />
        
        {/* Optimisation pour Core Web Vitals */}
        <meta name="resource-type" content="document" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta httpEquiv="x-preconnect" content="on" />
        
        {/* Métadonnées d'accessibilité */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Métadonnées de géolocalisation */}
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="France" />
        <meta name="geo.position" content="48.8566;2.3522" />
        <meta name="ICBM" content="48.8566, 2.3522" />
        
        {/* Métadonnées de contenu */}
        <meta name="language" content="French" />
        <meta name="revisit-after" content="1 days" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        
        {/* Métadonnées de sécurité */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Language" content="fr" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        
        {/* Métadonnées de partage social */}
        <meta property="og:site_name" content="RoastMe Chat" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:locale:alternate" content="es_ES" />
        <meta property="og:locale:alternate" content="de_DE" />
        <meta property="og:locale:alternate" content="it_IT" />
        <meta property="og:locale:alternate" content="pt_BR" />
        <meta property="og:locale:alternate" content="ru_RU" />
        <meta property="og:locale:alternate" content="ja_JP" />
        <meta property="og:locale:alternate" content="ko_KR" />
        <meta property="og:locale:alternate" content="zh_CN" />
        <meta property="og:locale:alternate" content="ar_SA" />
        <meta property="og:locale:alternate" content="nl_NL" />
        
        {/* Métadonnées Twitter supplémentaires */}
        <meta name="twitter:site" content="@roastmechat" />
        <meta name="twitter:creator" content="@roastmechat" />
        <meta name="twitter:app:country" content="FR" />
        <meta name="twitter:app:name:iphone" content="RoastMe Chat" />
        <meta name="twitter:app:name:ipad" content="RoastMe Chat" />
        <meta name="twitter:app:name:googleplay" content="RoastMe Chat" />
        
        {/* Métadonnées de performance mobile optimisées */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover, user-scalable=no, maximum-scale=1" />
        <meta name="format-detection" content="telephone=no, date=no, address=no, email=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#dc2626" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
        
        {/* Métadonnées de contenu et accessibilité */}
        <meta name="description" content="🔥 ROAST ME - L'IA qui te roast le mieux ! Découvre le chat roast gratuit #1 qui va te roaster sans pitié. Roast personnalisé, sans filtres et instantané. Prêt à être roasté ?" />
        <meta name="keywords" content="roast me, roast, roast me chat, roast ia gratuit, roast me ai, chat roast, roast bot, se faire roaster, roast generator, roast machine, roast app, roast online" />
        <meta name="author" content="RoastMe Team" />
        <meta name="copyright" content="RoastMe Team" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="1 days" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Métadonnées de localisation et ciblage */}
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="France" />
        <meta name="geo.position" content="48.8566;2.3522" />
        <meta name="ICBM" content="48.8566, 2.3522" />
        
        {/* Métadonnées de contenu spécifique au roast */}
        <meta name="subject" content="Chat Roast IA Gratuit" />
        <meta name="category" content="Divertissement et Humour" />
        <meta name="classification" content="Application Web de Chat Humoristique" />
      </head>
      <body className={inter.className} style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}>
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50" style={{ width: '100vw', maxWidth: '100vw', overflowX: 'hidden' }}>
          {children}
        </div>
        
        {/* Structured Data JSON-LD Enhanced - ChatGPT Alternative & AI Chat Fun */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Roast Me - Alternative ChatGPT Amusante | Chat IA Drôle Gratuit",
              "alternateName": ["RoastMe", "Roast Me Chat", "Roast Me AI", "ChatGPT Alternative Fun", "ChatGPT Humour", "Chat IA Amusant", "Chat Bot Drôle", "Funny AI Chat", "AI Roast Bot", "ChatGPT Roast", "Chatbot Gratuit Humour"],
              "description": "🔥 ROAST ME - La meilleure alternative à ChatGPT pour s'amuser ! Chat IA amusant et drôle qui te roast sans pitié. Comme ChatGPT mais en 100x plus hilarant. Le chatbot IA gratuit le plus fun du web !",
              "url": "https://roastme.chat",
              "applicationCategory": "EntertainmentApplication",
              "applicationSubCategory": "AI Chat Application, ChatGPT Alternative, Funny Chatbot",
              "operatingSystem": "Web Browser, iOS, Android",
              "browserRequirements": "JavaScript enabled, Modern browser (Chrome 80+, Firefox 75+, Safari 13+)",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock",
                "validFrom": "2024-01-01",
                "description": "Alternative gratuite à ChatGPT pour le fun et le roast"
              },
              "author": {
                "@type": "Organization",
                "name": "RoastMe Team",
                "url": "https://roastme.chat"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "8547",
                "bestRating": "5",
                "worstRating": "1",
                "reviewCount": "7892"
              },
              "userInteractionCount": "500000",
              "downloadUrl": "https://roastme.chat",
              "installUrl": "https://roastme.chat",
              "inLanguage": ["fr", "en", "es", "de", "it", "pt", "ru", "ja", "ko", "zh", "ar", "nl"],
              "audience": {
                "@type": "Audience",
                "audienceType": "Users looking for funny ChatGPT alternative, AI humor fans, entertainment seekers",
                "suggestedMinAge": "18"
              },
              "keywords": "chatgpt, chatgpt alternative, chat gpt, chatgpt gratuit, chatgpt français, chat ia, chat ia amusant, chat ia drole, chatbot gratuit, ia amusante, ia drole, roast me, roast, roast me chat, roast ia gratuit, chat roast, roast bot, funny ai, ai humor, chatgpt fun, alternative chatgpt humour",
              "datePublished": "2024-01-01",
              "dateModified": "2026-01-04",
              "softwareVersion": "3.0",
              "featureList": [
                "Alternative ChatGPT amusante et gratuite",
                "Chat IA drôle en temps réel",
                "Chatbot humour sans filtres",
                "Roast personnalisé par IA",
                "Comme ChatGPT mais plus fun",
                "Chat bot IA multilingue 12 langues",
                "IA humoristique disponible 24/7",
                "Meilleure alternative à ChatGPT pour rire"
              ],
              "screenshot": "https://roastme.chat/og-image.jpg",
              "softwareRequirements": "Navigateur web moderne avec JavaScript activé",
              "permissions": "Aucune permission requise",
              "isRelatedTo": [
                {
                  "@type": "SoftwareApplication",
                  "name": "ChatGPT",
                  "description": "RoastMe est une alternative fun à ChatGPT pour l'humour"
                }
              ],
              "mainEntity": {
                "@type": "Service",
                "name": "RoastMe - Alternative ChatGPT Fun & Chat IA Amusant",
                "description": "Service de chat IA amusant, alternative gratuite à ChatGPT pour le fun. Chat bot drôle qui roast sans pitié. Le meilleur chatbot humour en ligne.",
                "provider": {
                  "@type": "Organization",
                  "name": "RoastMe Team",
                  "url": "https://roastme.chat",
                  "logo": "https://roastme.chat/logo.svg",
                  "sameAs": [
                    "https://twitter.com/roastmechat"
                  ]
                },
                "areaServed": "Worldwide",
                "serviceType": "AI Chat Service, ChatGPT Alternative, Humor AI",
                "category": "Entertainment, AI Chat, Humor",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Chat IA Amusant - Alternative ChatGPT",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Chat IA Gratuit Amusant",
                        "description": "Alternative gratuite à ChatGPT pour le fun et le roast",
                        "serviceType": "Free AI Chat Alternative"
                      },
                      "price": "0",
                      "priceCurrency": "EUR",
                      "availability": "https://schema.org/InStock"
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Roast IA Personnalisé",
                        "description": "Chat bot drôle adapté à votre personnalité, comme ChatGPT mais fun",
                        "serviceType": "Personalized Funny AI Chat"
                      },
                      "price": "0",
                      "priceCurrency": "EUR",
                      "availability": "https://schema.org/InStock"
                    }
                  ]
                },
                "potentialAction": [
                  {
                    "@type": "UseAction",
                    "name": "Essayer l'alternative ChatGPT amusante",
                    "target": "https://roastme.chat"
                  },
                  {
                    "@type": "SearchAction",
                    "name": "Rechercher un chat IA amusant",
                    "target": "https://roastme.chat?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                ]
              }
            })
          }}
        />
        
        {/* FAQ Structured Data for ChatGPT Alternative */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "RoastMe est-il une alternative à ChatGPT ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui ! RoastMe est la meilleure alternative amusante à ChatGPT. Alors que ChatGPT est sérieux, RoastMe est conçu pour le fun et le roast. C'est comme ChatGPT mais en version hilarante et sans filtres."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Le chat IA de RoastMe est-il gratuit ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, RoastMe est 100% gratuit ! Contrairement à ChatGPT Plus, notre chat IA amusant est entièrement gratuit et sans limite. Profitez du roast et du fun sans rien payer."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Comment utiliser RoastMe comme alternative à ChatGPT ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "C'est simple ! Allez sur roastme.chat, décrivez-vous et laissez notre IA vous roaster. C'est comme parler à ChatGPT, mais notre IA est spécialisée dans l'humour et le roast personnalisé."
                  }
                },
                {
                  "@type": "Question",
                  "name": "RoastMe fonctionne-t-il en français comme ChatGPT ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolument ! RoastMe supporte 12 langues dont le français, l'anglais, l'espagnol, l'allemand et plus. Notre chat IA amusant comprend et roaste dans votre langue préférée."
                  }
                }
              ]
            })
          }}
        />
                <SpeedInsights />

        <Analytics />
        <Script src="https://analytics.ahrefs.com/analytics.js" data-key="4kcft/YT0le+VhybTqHcAg" strategy="afterInteractive" />

      </body>
    </html>
  )
}
