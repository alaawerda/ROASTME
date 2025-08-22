// Configuration de performance pour optimiser les Core Web Vitals
export const performanceConfig = {
  // Configuration des métadonnées de performance pour chaque langue
  metadata: {
    fr: {
      title: 'Chat Roast IA Gratuit - L\'IA qui te Roaste en Flammes ! 🔥',
      description: 'Chat roast IA gratuit et sans filtres ! L\'intelligence artificielle la plus cinglante qui va te roaster de manière hilarante. Teste maintenant ! 🔥',
      keywords: 'chat roast, roast IA, IA roast gratuit, chat humour, roast sans filtres, intelligence artificielle humour, chat comédie, roast créatif, blagues IA, divertissement chat',
      language: 'fr',
      locale: 'fr_FR',
      geoRegion: 'FR',
      geoPosition: '48.8566;2.3522'
    },
    en: {
      title: 'Free AI Roast Chat - The AI that Roasts You in Flames! 🔥',
      description: 'Free AI roast chat without filters! The most cutting AI that will roast you hilariously. Try now! 🔥',
      keywords: 'ai roast chat, roast ai, free ai roast, humor chat, roast without filters, artificial intelligence humor, comedy chat, creative roast, ai jokes, entertainment chat',
      language: 'en',
      locale: 'en_US',
      geoRegion: 'US',
      geoPosition: '38.9072;-77.0369'
    },
    es: {
      title: 'Chat de Roast IA Gratis - ¡La IA que te Roaste en Llamas! 🔥',
      description: '¡Chat de roast IA gratis sin filtros! La inteligencia artificial más mordaz que te va a roaster de manera hilarante. ¡Pruébalo ahora! 🔥',
      keywords: 'chat roast ia, roast ia, ia roast gratis, chat humor, roast sin filtros, inteligencia artificial humor, chat comedia, roast creativo, chistes ia, entretenimiento chat',
      language: 'es',
      locale: 'es_ES',
      geoRegion: 'ES',
      geoPosition: '40.4168;-3.7038'
    },
    ar: {
      title: 'دردشة AI روست مجانية - الذكاء الاصطناعي الذي يروستك بالنار! 🔥',
      description: 'دردشة AI روست مجانية بدون فلاتر! الذكاء الاصطناعي الأكثر حدة الذي سيروستك بطريقة مضحكة. جرب الآن! 🔥',
      keywords: 'دردشة روست ai, روست ai, ai روست مجاني, دردشة فكاهة, روست بدون فلاتر, ذكاء اصطناعي فكاهة, دردشة كوميديا, روست إبداعي, نكات ai, ترفيه دردشة',
      language: 'ar',
      locale: 'ar_SA',
      geoRegion: 'SA',
      geoPosition: '24.7136;46.6753'
    }
  },

  // Configuration des ressources à précharger
  preload: {
    fonts: [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    ],
    images: [
      '/og-image.jpg',
      '/logo.svg',
      '/favicon.ico'
    ],
    scripts: [],
    styles: []
  },

  // Configuration des ressources à préconnecter
  preconnect: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://roastme.chat'
  ],

  // Configuration DNS prefetch
  dnsPrefetch: [
    '//fonts.googleapis.com',
    '//fonts.gstatic.com',
    '//roastme.chat'
  ],

  // Configuration des métadonnées de performance
  performance: {
    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover',
    themeColor: '#dc2626',
    msTileColor: '#dc2626',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'default',
    appleMobileWebAppTitle: 'Chat Roast IA',
    mobileWebAppCapable: 'yes',
    applicationName: 'Chat Roast IA',
    formatDetection: 'telephone=no',
    viewportFit: 'cover'
  },

  // Configuration des métadonnées de sécurité
  security: {
    xFrameOptions: 'DENY',
    xContentTypeOptions: 'nosniff',
    referrerPolicy: 'strict-origin-when-cross-origin',
    permissionsPolicy: 'camera=(), microphone=(), geolocation=()'
  },

  // Configuration des métadonnées de contenu
  content: {
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    googlebot: 'index, follow',
    bingbot: 'index, follow',
    revisitAfter: '1 days',
    rating: 'General',
    distribution: 'Global',
    coverage: 'Worldwide',
    target: 'all',
    handheldFriendly: 'True',
    mobileOptimized: '320'
  },

  // Configuration des métadonnées sociales
  social: {
    twitter: {
      card: 'summary_large_image',
      site: '@roastmechat',
      creator: '@roastmechat',
      appCountry: 'FR',
      appNameIphone: 'Chat Roast IA',
      appNameIpad: 'Chat Roast IA',
      appNameGoogleplay: 'Chat Roast IA'
    },
    facebook: {
      appId: 'your-facebook-app-id',
      admins: 'your-facebook-admin-id'
    }
  },

  // Configuration des métadonnées de localisation
  localization: {
    defaultLanguage: 'fr',
    supportedLanguages: ['fr', 'en', 'es', 'ar', 'de', 'it', 'pt', 'ru', 'ja', 'ko', 'zh', 'nl'],
    hreflang: {
      'fr': 'https://roastme.chat',
      'en': 'https://roastme.chat/en',
      'es': 'https://roastme.chat/es',
      'ar': 'https://roastme.chat/ar',
      'de': 'https://roastme.chat/de',
      'it': 'https://roastme.chat/it',
      'pt': 'https://roastme.chat/pt',
      'ru': 'https://roastme.chat/ru',
      'ja': 'https://roastme.chat/ja',
      'ko': 'https://roastme.chat/ko',
      'zh': 'https://roastme.chat/zh',
      'nl': 'https://roastme.chat/nl'
    }
  }
}

// Fonction pour obtenir la configuration d'une langue spécifique
export const getPerformanceConfig = (language: string) => {
  return performanceConfig.metadata[language as keyof typeof performanceConfig.metadata] || performanceConfig.metadata.fr
}

// Fonction pour obtenir toutes les configurations de performance
export const getAllPerformanceConfigs = () => {
  return performanceConfig
}

// Fonction pour générer les headers de performance
export function generatePerformanceHeaders(): Record<string, string> {
  return performanceConfig.headers
}

// Fonction pour vérifier les Core Web Vitals
export function checkWebVitals(metric: any): { status: 'good' | 'needs-improvement' | 'poor', score: number } {
  const { name, value } = metric
  
  switch (name) {
    case 'LCP':
      if (value <= performanceConfig.webVitals.lcp.target) return { status: 'good', score: 100 }
      if (value <= performanceConfig.webVitals.lcp.warning) return { status: 'needs-improvement', score: 50 }
      return { status: 'poor', score: 0 }
    
    case 'FID':
      if (value <= performanceConfig.webVitals.fid.target) return { status: 'good', score: 100 }
      if (value <= performanceConfig.webVitals.fid.warning) return { status: 'needs-improvement', score: 50 }
      return { status: 'poor', score: 0 }
    
    case 'CLS':
      if (value <= performanceConfig.webVitals.cls.target) return { status: 'good', score: 100 }
      if (value <= performanceConfig.webVitals.cls.warning) return { status: 'needs-improvement', score: 50 }
      return { status: 'poor', score: 0 }
    
    case 'TTFB':
      if (value <= performanceConfig.webVitals.ttfb.target) return { status: 'good', score: 100 }
      if (value <= performanceConfig.webVitals.ttfb.warning) return { status: 'needs-improvement', score: 50 }
      return { status: 'poor', score: 0 }
    
    default:
      return { status: 'good', score: 100 }
  }
}

// Fonction pour calculer le score de performance global
export function calculatePerformanceScore(metrics: any[]): number {
  if (metrics.length === 0) return 0
  
  const scores = metrics.map(metric => checkWebVitals(metric).score)
  const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length
  
  return Math.round(averageScore)
}

// Configuration des métadonnées de performance pour le SEO
export const performanceMeta = {
  // Métadonnées pour les Core Web Vitals
  webVitals: {
    'data-lcp-target': performanceConfig.webVitals.lcp.target,
    'data-fid-target': performanceConfig.webVitals.fid.target,
    'data-cls-target': performanceConfig.webVitals.cls.target,
    'data-ttfb-target': performanceConfig.webVitals.ttfb.target
  },
  
  // Métadonnées pour l'optimisation mobile
  mobile: {
    'data-mobile-optimized': 'true',
    'data-responsive-design': 'true',
    'data-fast-loading': 'true'
  },
  
  // Métadonnées pour l'accessibilité
  accessibility: {
    'data-accessible': 'true',
    'data-keyboard-navigation': 'true',
    'data-screen-reader-friendly': 'true'
  }
}

// Configuration des optimisations de performance pour le design compact
export const PERFORMANCE_CONFIG = {
  // Optimisations des animations
  animations: {
    duration: {
      fast: '150ms',
      normal: '200ms',
      slow: '300ms'
    },
    easing: 'ease-out',
    reducedMotion: '0.1s ease-out'
  },

  // Optimisations des espacements
  spacing: {
    compact: {
      xs: '0.25rem',    // 4px
      sm: '0.5rem',     // 8px
      md: '0.75rem',    // 12px
      lg: '1rem',       // 16px
      xl: '1.25rem'     // 20px
    },
    standard: {
      xs: '0.5rem',     // 8px
      sm: '1rem',       // 16px
      md: '1.5rem',     // 24px
      lg: '2rem',       // 32px
      xl: '2.5rem'      // 40px
    }
  },

  // Optimisations des ombres
  shadows: {
    compact: {
      sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
      md: '0 2px 8px rgba(0, 0, 0, 0.04)',
      lg: '0 4px 16px rgba(0, 0, 0, 0.06)'
    },
    standard: {
      sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
      md: '0 4px 14px rgba(0, 0, 0, 0.06)',
      lg: '0 6px 24px rgba(0, 0, 0, 0.08)'
    }
  },

  // Optimisations des bordures
  borders: {
    compact: {
      radius: {
        sm: '0.375rem',  // 6px
        md: '0.5rem',    // 8px
        lg: '0.75rem'    // 12px
      },
      width: '1px'
    },
    standard: {
      radius: {
        sm: '0.5rem',    // 8px
        md: '0.75rem',   // 12px
        lg: '1rem'       // 16px
      },
      width: '2px'
    }
  },

  // Optimisations des tailles de police
  typography: {
    compact: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem'     // 20px
    },
    standard: {
      xs: '0.875rem',   // 14px
      sm: '1rem',       // 16px
      base: '1.125rem', // 18px
      lg: '1.25rem',    // 20px
      xl: '1.5rem'      // 24px
    }
  },

  // Optimisations des breakpoints
  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px'
  },

  // Optimisations des z-index
  zIndex: {
    base: 1,
    dropdown: 50,
    sticky: 100,
    modal: 200,
    tooltip: 300
  }
};

// Classes CSS utilitaires pour le design compact
export const COMPACT_CLASSES = {
  // Espacements
  spacing: {
    xs: 'space-y-1',
    sm: 'space-y-2',
    md: 'space-y-3',
    lg: 'space-y-4'
  },

  // Padding
  padding: {
    xs: 'p-1',
    sm: 'p-2',
    md: 'p-3',
    lg: 'p-4'
  },

  // Marges
  margin: {
    xs: 'm-1',
    sm: 'm-2',
    md: 'm-3',
    lg: 'm-4'
  },

  // Bordures arrondies
  rounded: {
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-xl'
  },

  // Ombres
  shadow: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg'
  },

  // Transitions
  transition: {
    fast: 'transition-all duration-150 ease-out',
    normal: 'transition-all duration-200 ease-out',
    slow: 'transition-all duration-300 ease-out'
  }
};

// Configuration des composants compacts
export const COMPONENT_CONFIG = {
  header: {
    height: 'h-16',
    padding: 'py-2 px-4',
    logoSize: 'w-8 h-8',
    titleSize: 'text-lg md:text-xl'
  },

  chat: {
    messageSpacing: 'mb-4',
    bubblePadding: 'p-3',
    avatarSize: 'w-10 h-10',
    maxWidth: 'max-w-xl'
  },

  input: {
    height: 'h-12',
    padding: 'px-3 py-2',
    buttonSize: 'w-10 h-10',
    iconSize: 'w-4 h-4'
  },

  footer: {
    height: 'h-20',
    padding: 'py-2 px-4',
    logoSize: 'w-6 h-6',
    textSize: 'text-xs'
  }
};

// Fonction utilitaire pour appliquer les classes compactes
export function getCompactClasses(type: keyof typeof COMPACT_CLASSES, size: string) {
  const config = COMPACT_CLASSES[type];
  if (config && typeof config === 'object' && size in config) {
    return (config as any)[size];
  }
  return '';
}

// Fonction utilitaire pour obtenir la configuration d'un composant
export function getComponentConfig(component: keyof typeof COMPONENT_CONFIG) {
  return COMPONENT_CONFIG[component];
}
