type Sitemap = Array<{
  url: string
  lastModified?: string | Date
  changeFrequency?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never'
  priority?: number
}>

export default function sitemap(): Sitemap {
  const baseUrl = 'https://roastme.chat'
  const now = new Date()
  
  // Common pages
  const pages = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/roast`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/roast-me`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/llm-knowledge`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/chat-roast-ia`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]

  // Supported languages
  const languages = ['en', 'es', 'de', 'it', 'pt', 'ru', 'zh', 'ja', 'ar']
  
  // Generate language variants with special focus on English roast pages
  const languageVariants = languages.flatMap(lang => {
    const basePages = [
      {
        url: `${baseUrl}/${lang}`,
        lastModified: now,
        changeFrequency: 'daily' as const,
        priority: lang === 'en' ? 0.9 : 0.8, // Higher priority for English
      },
      {
        url: `${baseUrl}/${lang}/about`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      },
      {
        url: `${baseUrl}/${lang}/faq`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      },
    ]

    // Add special roast pages for English
    if (lang === 'en') {
      basePages.push(
        {
          url: `${baseUrl}/${lang}/roast`,
          lastModified: now,
          changeFrequency: 'daily' as const,
          priority: 0.95, // Very high priority for English roast pages
        },
        {
          url: `${baseUrl}/${lang}/roast-me`,
          lastModified: now,
          changeFrequency: 'daily' as const,
          priority: 0.95, // Very high priority for English roast-me pages
        }
      )
    }

    return basePages
  })

  // Blog posts (example - replace with dynamic data if you have a blog)
  const blogPosts = [
    'comment-fonctionne-notre-chat-ia',
    'astuces-pour-des-roasts-hilares',
    'l-avenir-de-l-humour-ia',
  ].map(post => ({
    url: `${baseUrl}/blog/${post}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...pages, ...languageVariants, ...blogPosts]
}
