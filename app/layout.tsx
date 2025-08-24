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
    default: 'Chat Roast IA Gratuit 🔥 | Meilleure IA de Roast Sans Filtres 2025',
    template: '%s | Chat Roast IA Gratuit - #1 en France'
  },
  description: '🚀 Chat Roast IA #1 en France ! Intelligence artificielle ultra-cinglante qui te roaste sans filtres. ✅ Gratuit ✅ 12 langues ✅ Réponses instantanées. Teste maintenant !',
  keywords: ['chat roast ia gratuit', 'meilleur roast ia 2025', 'intelligence artificielle roast', 'chat humour sans filtres', 'roast bot gratuit', 'ia comedy chat', 'roast generator ai', 'chatbot humour français', 'artificial intelligence roast', 'free ai roast chat'],
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
    title: 'Chat Roast IA Gratuit 🔥 | Meilleure IA de Roast Sans Filtres 2025',
    description: '🚀 Chat Roast IA #1 en France ! Intelligence artificielle ultra-cinglante qui te roaste sans filtres. ✅ Gratuit ✅ 12 langues ✅ Réponses instantanées.',
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
    title: 'Chat Roast IA Gratuit 🔥 | #1 IA de Roast Sans Filtres 2025',
    description: '🚀 Chat Roast IA #1 ! Intelligence artificielle ultra-cinglante. ✅ Gratuit ✅ 12 langues ✅ Instantané. Teste maintenant !',
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
        <meta name="description" content="Chat roast IA gratuit et sans filtres ! L'intelligence artificielle la plus cinglante qui va te roaster de manière hilarante. Teste maintenant ! 🔥" />
        <meta name="keywords" content="chat roast, roast IA, IA roast gratuit, chat humour, roast sans filtres, intelligence artificielle humour, chat comédie, roast créatif, blagues IA, divertissement chat" />
        <meta name="author" content="RoastMe Team" />
        <meta name="copyright" content="RoastMe Team" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="1 days" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Mots-clés ciblés pour le chat roast */}
        <meta name="keywords" content="chat roast gratuit, IA roast, roast sans filtres, humour IA, chat comédie, roast créatif, blagues intelligence artificielle, divertissement chat, roast en ligne, chat humour gratuit" />
        
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
              "name": "Chat Roast IA Gratuit - #1 en France",
              "alternateName": ["RoastMe Chat", "Meilleure IA Roast 2025", "Chat Humour IA", "Roast Bot Gratuit"],
              "description": "🚀 Application web #1 de chat roast avec intelligence artificielle ultra-performante. L'IA la plus cinglante qui te roaste sans filtres avec des réponses instantanées en 12 langues.",
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
              "softwareRequirements": "Navigateur web moderne avec JavaScript activé",
              "permissions": "Aucune permission requise",
              "mainEntity": {
                "@type": "Service",
                "name": "Service de Chat Roast IA",
                "description": "Service de chat en ligne utilisant l'intelligence artificielle pour créer des roasts humoristiques personnalisés",
                "provider": {
                  "@type": "Organization",
                  "name": "RoastMe Team"
                },
                "areaServed": "Worldwide",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Services de Chat Roast",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Chat Roast Gratuit",
                        "description": "Accès illimité au chat roast IA"
                      }
                    }
                  ]
                }
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
