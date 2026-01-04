import React from 'react';
import Head from 'next/head';

interface HomePageSEOProps {
  title?: string;
  description?: string;
  currentLanguage?: string;
}

const HomePageSEO: React.FC<HomePageSEOProps> = ({ 
  title = "RoastMe - Alternative ChatGPT Amusante | Chat IA Drôle Gratuit",
  description = "La meilleure alternative gratuite à ChatGPT pour le fun ! Chat IA amusant qui te roaste sans pitié. Comme ChatGPT mais en 100x plus drôle. Teste maintenant gratuitement notre IA de roast en 12 langues !",
  currentLanguage = "fr"
}) => {
  const canonicalUrl = "https://roastme.chat";
  const ogImage = "https://roastme.chat/og-image.jpg";
  
  return (
    <Head>
      {/* Métadonnées de base - Optimisées ChatGPT, Chat IA, Roast */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="chatgpt, chatgpt alternative, alternative chatgpt, chat gpt, chatgpt gratuit, chatgpt français, chat ia, chat ia amusant, chat ia drole, chat ia gratuit, chatbot gratuit, chatbot amusant, ia amusante, ia drole, roast me, roast, chat roast IA, intelligence artificielle, humour, IA gratuite, chat en ligne, humour cinglant, traduction automatique, funny ai chat, ai humor, chatgpt fun" />
      <meta name="author" content="RoastMe Chat" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
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
      
      {/* Schema.org structured data - ChatGPT Alternative & Chat IA Amusant */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "RoastMe - Alternative ChatGPT Fun | Chat IA Amusant",
            "alternateName": ["RoastMe Chat", "ChatGPT Alternative", "Chat IA Drôle", "Chatbot Amusant Gratuit"],
            "description": description,
            "url": canonicalUrl,
            "applicationCategory": "EntertainmentApplication",
            "applicationSubCategory": "ChatGPT Alternative, AI Chat, Humor Bot",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR",
              "description": "Alternative gratuite à ChatGPT pour le fun"
            },
            "author": {
              "@type": "Organization",
              "name": "RoastMe Chat"
            },
            "featureList": [
              "Alternative gratuite à ChatGPT",
              "Chat IA amusant en temps réel",
              "Chatbot drôle et sans filtres",
              "Roast personnalisé par IA",
              "Support multilingue (12 langues)",
              "100% gratuit - pas d'abonnement",
              "Comme ChatGPT mais fun",
              "Disponible 24/7"
            ],
            "keywords": "chatgpt, chatgpt alternative, chat ia amusant, chat ia drole, chatbot gratuit"
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
