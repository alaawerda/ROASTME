import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Règles générales pour tous les robots
      {
        userAgent: '*',
        allow: [
          '/',
          '/roast',
          '/roast-me',
          '/chatgpt-alternative',
          '/chat-ia-amusant',
          '/chat-bot-gratuit',
          '/ia-humour',
          '/chat-roast-ia',
          '/en',
          '/en/roast',
          '/en/roast-me',
          '/es',
          '/de',
          '/it',
          '/pt',
          '/ru',
          '/ja',
          '/ko',
          '/zh',
          '/ar',
          '/nl',
          '/about',
          '/features',
          '/languages',
          '/privacy',
          '/terms',
          '/contact',
          '/roast-examples',
          '/funny-insults',
          '/ai-humor',
          '/chatbot-fun',
          '/blog/*',
          '/sitemap.xml',
          '/robots.txt'
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '/temp/',
          '/cache/',
          '/logs/',
          '/.env',
          '/.git',
          '/node_modules/',
          '/vendor/',
          '/config/',
          '/database/',
          '/storage/',
          '/uploads/',
          '/backup/',
          '/test/',
          '/debug/',
          '/error/',
          '/404',
          '/500'
        ],
        crawlDelay: 1
      },
      
      // Règles spécifiques pour Googlebot
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/en',
          '/es',
          '/de',
          '/it',
          '/pt',
          '/ru',
          '/ja',
          '/ko',
          '/zh',
          '/ar',
          '/nl',
          '/about',
          '/features',
          '/languages',
          '/privacy',
          '/terms',
          '/contact',
          '/roast-examples',
          '/funny-insults',
          '/ai-humor',
          '/chatbot-fun',
          '/blog/*',
          '/sitemap.xml'
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/'
        ],
        crawlDelay: 1
      },
      
      // Règles spécifiques pour Bingbot
      {
        userAgent: 'Bingbot',
        allow: [
          '/',
          '/en',
          '/es',
          '/de',
          '/it',
          '/pt',
          '/ru',
          '/ja',
          '/ko',
          '/zh',
          '/ar',
          '/nl',
          '/about',
          '/features',
          '/languages',
          '/privacy',
          '/terms',
          '/contact',
          '/roast-examples',
          '/funny-insults',
          '/ai-humor',
          '/chatbot-fun',
          '/blog/*',
          '/sitemap.xml'
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/'
        ],
        crawlDelay: 1
      },
      
      // Règles pour les autres moteurs de recherche populaires
      {
        userAgent: 'YandexBot',
        allow: [
          '/',
          '/en',
          '/es',
          '/de',
          '/it',
          '/pt',
          '/ru',
          '/ja',
          '/ko',
          '/zh',
          '/ar',
          '/nl',
          '/about',
          '/features',
          '/languages',
          '/privacy',
          '/terms',
          '/contact',
          '/roast-examples',
          '/funny-insults',
          '/ai-humor',
          '/chatbot-fun',
          '/blog/*',
          '/sitemap.xml'
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/'
        ],
        crawlDelay: 2
      },
      
      {
        userAgent: 'DuckDuckBot',
        allow: [
          '/',
          '/en',
          '/es',
          '/de',
          '/it',
          '/pt',
          '/ru',
          '/ja',
          '/ko',
          '/zh',
          '/ar',
          '/nl',
          '/about',
          '/features',
          '/languages',
          '/privacy',
          '/terms',
          '/contact',
          '/roast-examples',
          '/funny-insults',
          '/ai-humor',
          '/chatbot-fun',
          '/blog/*',
          '/sitemap.xml'
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/'
        ],
        crawlDelay: 1
      },
      
      // Règles pour les robots de médias sociaux
      {
        userAgent: 'facebookexternalhit',
        allow: [
          '/',
          '/en',
          '/es',
          '/de',
          '/it',
          '/pt',
          '/ru',
          '/ja',
          '/ko',
          '/zh',
          '/ar',
          '/nl'
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/'
        ]
      },
      
      {
        userAgent: 'Twitterbot',
        allow: [
          '/',
          '/en',
          '/es',
          '/de',
          '/it',
          '/pt',
          '/ru',
          '/ja',
          '/ko',
          '/zh',
          '/ar',
          '/nl'
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/'
        ]
      },
      
      {
        userAgent: 'LinkedInBot',
        allow: [
          '/',
          '/en',
          '/es',
          '/de',
          '/it',
          '/pt',
          '/ru',
          '/ja',
          '/ko',
          '/zh',
          '/ar',
          '/nl'
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/'
        ]
      },
      
      // Règles pour les robots d'analyse et de performance
      {
        userAgent: 'Lighthouse',
        allow: [
          '/',
          '/en',
          '/es',
          '/de',
          '/it',
          '/pt',
          '/ru',
          '/ja',
          '/ko',
          '/zh',
          '/ar',
          '/nl'
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/'
        ]
      },
      
      {
        userAgent: 'PageSpeed',
        allow: [
          '/',
          '/en',
          '/es',
          '/de',
          '/it',
          '/pt',
          '/ru',
          '/ja',
          '/ko',
          '/zh',
          '/ar',
          '/nl'
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/'
        ]
      }
    ],
    
    // Sitemap principal
    sitemap: 'https://roastme.chat/sitemap.xml',
    
    // Host principal
    host: 'https://roastme.chat'
  }
}
