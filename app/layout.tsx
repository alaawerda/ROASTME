import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

// Métadonnées SEO optimisées avec Core Web Vitals
export const metadata: Metadata = {
  metadataBase: new URL('https://roastme.chat'),
  title: {
    default: 'Roast Me - Chat IA de Roast Gratuit 🔥 | #1 pour Roaster Sans Filtres',
    template: '%s | Roast Me - IA de Roast Gratuit'
  },
  description: '🔥 ROAST ME - L\'IA qui te roast le mieux ! Découvre le chat roast gratuit #1 qui va te roaster sans pitié. ✅ Roast personnalisé ✅ Sans filtres ✅ Instantané. Prêt à être roasté ?',
  keywords: ['roast me', 'roast', 'roast me chat', 'roast ia gratuit', 'roast me ai', 'chat roast', 'roast bot', 'se faire roaster', 'roast generator', 'roast machine', 'roast app', 'roast online', 'free roast ai', 'roast chatbot', 'roast sans pitié'],
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
    siteName: 'Chat Roast IA Gratuit - #1 en France',
    title: 'Roast Me - Chat IA de Roast Gratuit 🔥 | #1 pour Roaster Sans Filtres',
    description: '🔥 ROAST ME - L\'IA qui te roast le mieux ! Découvre le chat roast gratuit #1 qui va te roaster sans pitié. ✅ Roast personnalisé ✅ Sans filtres ✅ Instantané.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chat Roast IA Gratuit - Meilleure IA de Roast 2025',
        type: 'image/jpeg',
      },
    ],
    videos: [],
    audio: [],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roast Me - Chat IA de Roast Gratuit 🔥 | #1 pour Roaster Sans Filtres',
    description: '🔥 ROAST ME - L\'IA qui te roast le mieux ! Chat roast gratuit #1. ✅ Roast personnalisé ✅ Sans filtres ✅ Instantané. Prêt à être roasté ?',
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
      'en': 'https://roastme.chat/en',
      'en-US': 'https://roastme.chat/en',
      'en-GB': 'https://roastme.chat/en',
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
      'x-default': 'https://roastme.chat/en',
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
    <html lang="fr" dir="ltr">
      <head>
        
        {/* Favicons et icônes */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Métadonnées de performance */}
        <meta name="theme-color" content="#dc2626" />
        <meta name="msapplication-TileColor" content="#dc2626" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="RoastMe Chat" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="RoastMe Chat" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="viewport-fit" content="cover" />
        
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
        
        {/* Optimisation mobile et PWA */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="RoastMe IA" />
        <meta name="application-name" content="RoastMe IA" />
        
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
        
        {/* Métadonnées de performance mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
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
        
        {/* Mots-clés ciblés pour roast et roast me */}
        <meta name="keywords" content="roast me, roast, roast me chat, roast gratuit, roast me ai, chat roast, roast bot, se faire roaster, roast sans pitié, roast personnalisé, roast machine, roast app" />
        
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
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
          {children}
        </div>
        
        {/* Structured Data JSON-LD Enhanced */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Roast Me - Chat IA de Roast Gratuit #1",
              "alternateName": ["RoastMe", "Roast Me Chat", "Roast Me AI", "Chat Roast Gratuit", "Roast Bot"],
              "description": "🔥 ROAST ME - L'application web #1 pour se faire roaster ! IA ultra-performante qui te roast sans pitié avec des réponses instantanées. Le meilleur roast generator gratuit en ligne.",
              "url": "https://roastme.chat",
              "applicationCategory": "EntertainmentApplication",
              "applicationSubCategory": "AI Chat Application",
              "operatingSystem": "Web Browser, iOS, Android",
              "browserRequirements": "JavaScript enabled, Modern browser (Chrome 80+, Firefox 75+, Safari 13+)",
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
                "ratingCount": "5247",
                "bestRating": "5",
                "worstRating": "1",
                "reviewCount": "4892"
              },
              "userInteractionCount": "250000",
              "downloadUrl": "https://roastme.chat",
              "installUrl": "https://roastme.chat",
              "inLanguage": ["fr", "en", "es", "de", "it", "pt", "ru", "ja", "ko", "zh", "ar", "nl"],
              "audience": {
                "@type": "Audience",
                "audienceType": "Adults interested in humor and entertainment",
                "suggestedMinAge": "18"
              },
              "keywords": "roast me, roast, roast me chat, roast gratuit, roast me ai, chat roast, roast bot, se faire roaster, roast sans pitié, roast personnalisé, roast machine, roast generator",
              "datePublished": "2024-01-01",
              "dateModified": "2024-12-19",
              "softwareVersion": "2.0",
              "featureList": [
                "Roast me en temps réel",
                "Chat roast sans pitié",
                "Roast personnalisé gratuit",
                "Roast generator IA avancée",
                "Se faire roaster instantanément",
                "Roast machine multilingue",
                "Roast bot accessible 24/7"
              ],
              "screenshot": "https://roastme.chat/og-image.jpg",
              "softwareRequirements": "Navigateur web moderne avec JavaScript activé",
              "permissions": "Aucune permission requise",
              "mainEntity": {
                "@type": "Service",
                "name": "Service Roast Me - Chat Roast IA",
                "description": "Service de roast en ligne utilisant l'IA pour roaster sans pitié. Le meilleur chat roast gratuit pour se faire roaster instantanément",
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
                "serviceType": "AI Chat Service",
                "category": "Entertainment",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Services de Chat Roast",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Roast Me Gratuit",
                        "description": "Accès illimité pour se faire roaster par l'IA",
                        "serviceType": "Free AI Roast Chat"
                      },
                      "price": "0",
                      "priceCurrency": "EUR",
                      "availability": "https://schema.org/InStock"
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Roast Personnalisé",
                        "description": "Chat roast adapté à votre personnalité",
                        "serviceType": "Personalized AI Roast"
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
                    "name": "Se faire roaster",
                    "target": "https://roastme.chat"
                  },
                  {
                    "@type": "SearchAction",
                    "name": "Rechercher un type de roast",
                    "target": "https://roastme.chat?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                ]
              }
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
