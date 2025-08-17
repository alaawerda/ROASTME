import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://roastme.chat'
  const languages = ['fr', 'en', 'es', 'de', 'it', 'pt', 'ru', 'ja', 'ko', 'zh', 'ar', 'nl']
  const currentDate = new Date()
  
  const sitemap: MetadataRoute.Sitemap = [
    // Page d'accueil française (racine) - Priorité maximale
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0
    }
  ]

  // Ajouter les pages pour chaque langue avec métadonnées enrichies
  languages.forEach(lang => {
    if (lang !== 'fr') { // Éviter la duplication de la racine
      sitemap.push({
        url: `${baseUrl}/${lang}`,
        lastModified: currentDate,
        changeFrequency: 'daily',
        priority: 0.9
      })
    }
  })

  // Ajouter des pages thématiques pour améliorer le SEO
  const thematicPages = [
    {
      path: '/about',
      priority: 0.8,
      changeFrequency: 'weekly' as const
    },
    {
      path: '/features',
      priority: 0.8,
      changeFrequency: 'weekly' as const
    },
    {
      path: '/languages',
      priority: 0.8,
      changeFrequency: 'weekly' as const
    },
    {
      path: '/privacy',
      priority: 0.6,
      changeFrequency: 'monthly' as const
    },
    {
      path: '/terms',
      priority: 0.6,
      changeFrequency: 'monthly' as const
    },
    {
      path: '/contact',
      priority: 0.7,
      changeFrequency: 'monthly' as const
    }
  ]

  // Ajouter les pages thématiques pour toutes les langues
  thematicPages.forEach(page => {
    // Page française (racine)
    sitemap.push({
      url: `${baseUrl}${page.path}`,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority
    })

    // Pages pour les autres langues
    languages.forEach(lang => {
      if (lang !== 'fr') {
        sitemap.push({
          url: `${baseUrl}/${lang}${page.path}`,
          lastModified: currentDate,
          changeFrequency: page.changeFrequency,
          priority: page.priority
        })
      }
    })
  })

  // Ajouter des pages de contenu spécifiques au roast
  const roastContentPages = [
    {
      path: '/roast-examples',
      priority: 0.8,
      changeFrequency: 'weekly' as const
    },
    {
      path: '/funny-insults',
      priority: 0.8,
      changeFrequency: 'weekly' as const
    },
    {
      path: '/ai-humor',
      priority: 0.8,
      changeFrequency: 'weekly' as const
    },
    {
      path: '/chatbot-fun',
      priority: 0.8,
      changeFrequency: 'weekly' as const
    }
  ]

  // Ajouter les pages de contenu pour toutes les langues
  roastContentPages.forEach(page => {
    // Page française (racine)
    sitemap.push({
      url: `${baseUrl}${page.path}`,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority
    })

    // Pages pour les autres langues
    languages.forEach(lang => {
      if (lang !== 'fr') {
        sitemap.push({
          url: `${baseUrl}/${lang}${page.path}`,
          lastModified: currentDate,
          changeFrequency: page.changeFrequency,
          priority: page.priority
        })
      }
    })
  })

  // Ajouter des pages de blog/articles pour le contenu SEO
  const blogPages = [
    {
      path: '/blog/ai-humor-trends',
      priority: 0.7,
      changeFrequency: 'monthly' as const
    },
    {
      path: '/blog/best-roast-jokes',
      priority: 0.7,
      changeFrequency: 'monthly' as const
    },
    {
      path: '/blog/chatbot-entertainment',
      priority: 0.7,
      changeFrequency: 'monthly' as const
    },
    {
      path: '/blog/free-ai-tools',
      priority: 0.7,
      changeFrequency: 'monthly' as const
    }
  ]

  // Ajouter les pages de blog pour toutes les langues
  blogPages.forEach(page => {
    // Page française (racine)
    sitemap.push({
      url: `${baseUrl}${page.path}`,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority
    })

    // Pages pour les autres langues
    languages.forEach(lang => {
      if (lang !== 'fr') {
        sitemap.push({
          url: `${baseUrl}/${lang}${page.path}`,
          lastModified: currentDate,
          changeFrequency: page.changeFrequency,
          priority: page.priority
        })
      }
    })
  })

  return sitemap
}
