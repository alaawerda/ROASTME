export const blogConfig = {
  // Configuration générale du blog
  title: 'Blog RoastMe',
  description: 'Ton guide ultime pour maîtriser l\'art du roast et devenir un pro de la répartie',
  url: '/blog',
  
  // Configuration SEO
  seo: {
    title: 'Blog RoastMe - Guide Ultime du Roast et Humour IA',
    description: 'Découvre nos articles sur l\'art du roast, les meilleures vannes, et comment maîtriser la répartie avec l\'aide de l\'IA. Guide complet pour devenir un pro du clash !',
    keywords: ['blog roast', 'guide roast', 'humour IA', 'vannes drôles', 'répartie', 'clash', 'apprendre roast'],
    ogImage: '/static/blog/blog-og-image.jpg',
  },
  
  // Configuration de la navigation
  navigation: {
    categories: [
      {
        name: 'Guide Pratique',
        slug: 'guide-pratique',
        description: 'Tutoriels et conseils pour améliorer tes compétences en roast',
        color: 'from-yellow-400 to-red-500'
      },
      {
        name: 'Techniques Avancées',
        slug: 'techniques-avancees',
        description: 'Méthodes et stratégies pour roaster comme un pro',
        color: 'from-purple-400 to-pink-500'
      },
      {
        name: 'Culture du Roast',
        slug: 'culture-roast',
        description: 'Histoire, anecdotes et culture autour du roast',
        color: 'from-blue-400 to-cyan-500'
      },
      {
        name: 'Exemples et Inspirations',
        slug: 'exemples-inspirations',
        description: 'Collections de roasts drôles et créatifs',
        color: 'from-green-400 to-teal-500'
      }
    ],
    
    tags: [
      'roast', 'humour', 'guide', 'répartie', 'vanne', 'clash', 'comédie',
      'technique', 'timing', 'audience', 'créativité', 'personnalisation',
      'histoire', 'culture', 'exemples', 'inspiration', 'pratique'
    ]
  },
  
  // Configuration de l'affichage
  display: {
    postsPerPage: 9,
    featuredPostsCount: 1,
    relatedPostsCount: 3,
    excerptLength: 150,
    readingTimeWordsPerMinute: 200
  },
  
  // Configuration des métadonnées
  metadata: {
    author: 'Équipe RoastMe',
    defaultLanguage: 'fr',
    supportedLanguages: ['fr', 'en'],
    publishDateFormat: 'dd MMMM yyyy',
    readingTimeFormat: 'min'
  },
  
  // Configuration des fonctionnalités
  features: {
    newsletter: true,
    comments: false, // À implémenter plus tard
    socialSharing: true,
    relatedPosts: true,
    search: true, // À implémenter plus tard
    categories: true,
    tags: true,
    readingTime: true,
    authorInfo: true
  },
  
  // Configuration des réseaux sociaux
  social: {
    twitter: '@roastme_chat',
    facebook: 'roastme.chat',
    instagram: 'roastme.chat',
    linkedin: 'company/roastme-chat'
  }
};
