import React from 'react';
import Head from 'next/head';

interface HomePageSEOProps {
  title?: string;
  description?: string;
  currentLanguage?: string;
}

const HomePageSEO: React.FC<HomePageSEOProps> = ({ 
  title = "Chat Roast IA Gratuit",
  description = "Découvre l'intelligence artificielle la plus cinglante qui va te roaster de manière hilarante sans filtres. Teste maintenant gratuitement notre IA de roast en 12 langues !",
  currentLanguage = "fr"
}) => {
  const canonicalUrl = "https://roastme.chat";
  const ogImage = "https://roastme.chat/og-image.jpg";
  
  return (
    <Head>
      {/* Métadonnées de base */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="chat roast IA, intelligence artificielle, humour, roast, IA gratuite, chat en ligne, humour cinglant, traduction automatique" />
      <meta name="author" content="RoastMe Chat" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={currentLanguage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="RoastMe Chat" />
      <meta property="og:locale" content={currentLanguage === 'fr' ? 'fr_FR' : 'en_US'} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Métadonnées supplémentaires pour le SEO */}
      <meta name="application-name" content="RoastMe Chat" />
      <meta name="apple-mobile-web-app-title" content="RoastMe Chat" />
      <meta name="theme-color" content="#ff6b35" />
      <meta name="msapplication-TileColor" content="#ff6b35" />
      
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "RoastMe Chat",
            "description": description,
            "url": canonicalUrl,
            "applicationCategory": "EntertainmentApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR"
            },
            "author": {
              "@type": "Organization",
              "name": "RoastMe Chat"
            },
            "featureList": [
              "Chat IA en temps réel",
              "Roast personnalisé",
              "Support multilingue (12 langues)",
              "100% gratuit",
              "Disponible 24/7"
            ]
          })
        }}
      />
      
      {/* Métadonnées pour les réseaux sociaux */}
      <meta name="twitter:creator" content="@roastmechat" />
      <meta name="twitter:site" content="@roastmechat" />
      
      {/* Métadonnées pour la localisation */}
      <meta name="geo.region" content="FR" />
      <meta name="geo.placename" content="France" />
      
      {/* Métadonnées pour la performance */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Préconnexions pour améliorer les performances */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//roastme.chat" />
    </Head>
  );
};

export default HomePageSEO;
