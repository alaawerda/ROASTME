import { useLanguageApp } from '../hooks/useLanguage'
import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  locale?: string
  siteName?: string
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
}

export default function SEO({
  title = 'RoastMe - Chat IA pour des roasts hilarants',
  description = 'Découvrez notre IA de chat qui vous roast avec humour. Des réactions uniques et personnalisées à chaque message !',
  keywords = ['chat IA', 'roast', 'humour', 'IA conversationnelle', 'chatbot drôle', 'roast personnalisé'],
  image = '/og-image.jpg',
  url = 'https://roastme.chat',
  type = 'website',
  locale = 'fr_FR',
  siteName = 'RoastMe',
  twitterCard = 'summary_large_image',
}: SEOProps) {
  const { currentLanguage } = useLanguageApp()
  
  // Add language-specific metadata
  const fullUrl = url.startsWith('http') ? url : `https://roastme.chat${url}`
  const fullImageUrl = image.startsWith('http') ? image : `https://roastme.chat${image}`
  
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="RoastMe Team" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={currentLanguage || 'fr'} />
      <meta name="revisit-after" content="7 days" />
      <meta name="theme-color" content="#000000" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content="@roastmechat" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      
      {/* Additional SEO */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="t2j_sjspqrT3bnVkbTiCZ73IEnRaG_JpBo05nk5-ZyM" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: siteName,
            url: 'https://roastme.chat',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://roastme.chat/search?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
    </Head>
  )
}
