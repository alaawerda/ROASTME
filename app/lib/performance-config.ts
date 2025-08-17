// Configuration de performance pour optimiser les Core Web Vitals
export const performanceConfig = {
  // Configuration des images
  images: {
    formats: ['image/webp', 'image/avif'],
    sizes: {
      thumbnail: '150x150',
      small: '300x300',
      medium: '600x600',
      large: '1200x1200',
      og: '1200x630'
    },
    quality: 85,
    loading: 'lazy' as const,
    placeholder: 'blur' as const
  },

  // Configuration des polices
  fonts: {
    preload: [
      {
        family: 'Inter',
        weight: [400, 500, 600, 700],
        display: 'swap' as const
      }
    ],
    fallback: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['monospace']
    }
  },

  // Configuration du cache
  cache: {
    static: {
      maxAge: 31536000, // 1 an
      immutable: true
    },
    dynamic: {
      maxAge: 86400, // 1 jour
      staleWhileRevalidate: 604800 // 1 semaine
    }
  },

  // Configuration de la compression
  compression: {
    gzip: true,
    brotli: true,
    threshold: 1024 // Compresser à partir de 1KB
  },

  // Configuration des ressources critiques
  critical: {
    css: [
      '/globals.css',
      '/components.css'
    ],
    js: [
      '/app.js'
    ]
  },

  // Configuration du preload
  preload: {
    links: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous'
      },
      {
        rel: 'dns-prefetch',
        href: '//fonts.googleapis.com'
      },
      {
        rel: 'dns-prefetch',
        href: '//fonts.gstatic.com'
      }
    ],
    resources: [
      {
        as: 'font',
        href: '/fonts/inter-var.woff2',
        type: 'font/woff2',
        crossOrigin: 'anonymous'
      },
      {
        as: 'image',
        href: '/og-image-fr.jpg'
      }
    ]
  },

  // Configuration des métadonnées de performance
  meta: {
    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover',
    themeColor: '#dc2626',
    msapplicationTileColor: '#dc2626',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'default',
    appleMobileWebAppTitle: 'RoastMe Chat',
    mobileWebAppCapable: 'yes',
    applicationName: 'RoastMe Chat',
    formatDetection: 'telephone=no',
    viewportFit: 'cover'
  },

  // Configuration des headers de performance
  headers: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'Cache-Control': 'public, max-age=31536000, immutable',
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://vercel.live; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://generativelanguage.googleapis.com https://www.google-analytics.com; frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self';"
  },

  // Configuration des Core Web Vitals
  webVitals: {
    // LCP (Largest Contentful Paint) - Objectif: < 2.5s
    lcp: {
      target: 2500,
      warning: 4000
    },
    // FID (First Input Delay) - Objectif: < 100ms
    fid: {
      target: 100,
      warning: 300
    },
    // CLS (Cumulative Layout Shift) - Objectif: < 0.1
    cls: {
      target: 0.1,
      warning: 0.25
    },
    // TTFB (Time to First Byte) - Objectif: < 800ms
    ttfb: {
      target: 800,
      warning: 1800
    }
  },

  // Configuration de l'optimisation des images
  imageOptimization: {
    formats: ['webp', 'avif'],
    quality: 85,
    sizes: [
      { width: 640, height: 480 },
      { width: 750, height: 563 },
      { width: 828, height: 621 },
      { width: 1080, height: 810 },
      { width: 1200, height: 900 },
      { width: 1920, height: 1440 },
      { width: 2048, height: 1536 }
    ],
    placeholder: 'blur',
    loading: 'lazy'
  },

  // Configuration de la compression des ressources
  resourceOptimization: {
    minify: {
      css: true,
      js: true,
      html: true
    },
    compress: {
      gzip: true,
      brotli: true
    },
    bundle: {
      splitChunks: true,
      treeShaking: true
    }
  },

  // Configuration du service worker
  serviceWorker: {
    enabled: true,
    scope: '/',
    updateViaCache: 'none',
    skipWaiting: true,
    clientsClaim: true
  },

  // Configuration de l'analyse des performances
  analytics: {
    webVitals: true,
    performance: true,
    errors: true,
    userTiming: true
  }
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
