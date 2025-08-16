import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://roastme.chat'
  const languages = ['fr', 'en', 'es', 'de', 'it', 'pt', 'ru', 'ja', 'ko', 'zh', 'ar', 'nl']
  
  const sitemap: MetadataRoute.Sitemap = [
    // Page d'accueil française (racine)
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
      alternates: {
        languages: {
          'fr': baseUrl,
          'en': `${baseUrl}/en`,
          'es': `${baseUrl}/es`,
          'de': `${baseUrl}/de`,
          'it': `${baseUrl}/it`,
          'pt': `${baseUrl}/pt`,
          'ru': `${baseUrl}/ru`,
          'ja': `${baseUrl}/ja`,
          'ko': `${baseUrl}/ko`,
          'zh': `${baseUrl}/zh`,
          'ar': `${baseUrl}/ar`,
          'nl': `${baseUrl}/nl`,
        }
      }
    }
  ]

  // Ajouter les pages pour chaque langue
  languages.forEach(lang => {
    if (lang !== 'fr') { // Éviter la duplication de la racine
      sitemap.push({
        url: `${baseUrl}/${lang}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.9,
        alternates: {
          languages: {
            'fr': baseUrl,
            'en': `${baseUrl}/en`,
            'es': `${baseUrl}/es`,
            'de': `${baseUrl}/de`,
            'it': `${baseUrl}/it`,
            'pt': `${baseUrl}/pt`,
            'ru': `${baseUrl}/ru`,
            'ja': `${baseUrl}/ja`,
            'ko': `${baseUrl}/ko`,
            'zh': `${baseUrl}/zh`,
            'ar': `${baseUrl}/ar`,
            'nl': `${baseUrl}/nl`,
          }
        }
      })
    }
  })

  return sitemap
}
