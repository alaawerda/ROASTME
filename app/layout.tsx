import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })

// Métadonnées par défaut en français
export const metadata: Metadata = {
  metadataBase: new URL('https://roastme.chat'),
  title: {
    default: 'RoastMe Chat - L\'IA qui te Roaste ! 🔥',
    template: '%s | RoastMe Chat'
  },
  description: 'Découvre RoastMe Chat, l\'IA la plus cinglante qui va te roaster de manière hilarante ! Prêt à être descendu en flammes ? 🔥',
  keywords: ['roast', 'humour', 'IA', 'chat', 'divertissement', 'comédie', 'insultes créatives', 'roaster', 'blagues'],
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
    siteName: 'RoastMe Chat',
    title: 'RoastMe Chat - L\'IA qui te Roaste ! 🔥',
    description: 'Découvre RoastMe Chat, l\'IA la plus cinglante qui va te roaster de manière hilarante ! Prêt à être descendu en flammes ? 🔥',
    images: [
      {
        url: '/og-image-fr.jpg',
        width: 1200,
        height: 630,
        alt: 'RoastMe Chat - L\'IA qui te Roaste !',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RoastMe Chat - L\'IA qui te Roaste ! 🔥',
    description: 'Découvre RoastMe Chat, l\'IA la plus cinglante qui va te roaster de manière hilarante !',
    images: ['/og-image-fr.jpg'],
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
    'msapplication-config': '/browserconfig.xml',
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Métadonnées de performance */}
        <meta name="theme-color" content="#dc2626" />
        <meta name="msapplication-TileColor" content="#dc2626" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="RoastMe Chat" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="RoastMe Chat" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="viewport-fit" content="cover" />
        
        {/* Preconnect pour améliorer les performances */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preload des ressources critiques */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/og-image-fr.jpg" as="image" />
        
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
        <meta name="description" content="Découvre RoastMe Chat, l'IA la plus cinglante qui va te roaster de manière hilarante ! Prêt à être descendu en flammes ? 🔥" />
        <meta name="keywords" content="roast, humour, IA, chat, divertissement, comédie, insultes créatives, roaster, blagues" />
        <meta name="author" content="RoastMe Team" />
        <meta name="copyright" content="RoastMe Team" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="1 days" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
          {children}
        </div>
        
        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "RoastMe Chat",
              "description": "L'IA la plus cinglante qui va te roaster de manière hilarante !",
              "url": "https://roastme.chat",
              "applicationCategory": "EntertainmentApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR"
              },
              "author": {
                "@type": "Organization",
                "name": "RoastMe Team"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250"
              },
              "inLanguage": ["fr", "en", "es", "de", "it", "pt", "ru", "ja", "ko", "zh", "ar", "nl"],
              "audience": {
                "@type": "Audience",
                "audienceType": "Adults interested in humor and entertainment"
              },
              "keywords": ["roast", "humour", "IA", "chat", "divertissement", "comédie", "insultes créatives", "roaster", "blagues"],
              "datePublished": "2024-01-01",
              "dateModified": new Date().toISOString().split('T')[0]
            })
          }}
        />
        
        {/* Analytics */}
        <Analytics />
      </body>
    </html>
  )
}
