export interface PerformanceConfig {
  preload: string[]
  prefetch: string[]
  dnsPrefetch: string[]
  preconnect: string[]
  criticalCSS: string[]
  lazyLoadImages: boolean
  compressionLevel: number
  cacheStrategy: 'aggressive' | 'moderate' | 'minimal'
}

export const performanceConfig: PerformanceConfig = {
  preload: [
    '/fonts/inter-var.woff2',
    '/favicon.ico',
    '/og-image-fr.jpg'
  ],
  prefetch: [
    '/api/chat',
    '/locales/en.ts',
    '/locales/es.ts',
    '/locales/de.ts'
  ],
  dnsPrefetch: [
    '//fonts.googleapis.com',
    '//fonts.gstatic.com',
    '//api.openai.com'
  ],
  preconnect: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ],
  criticalCSS: [
    'bg-gradient-to-br',
    'from-red-50',
    'to-orange-50',
    'text-white',
    'bg-gradient-to-r',
    'from-primary',
    'to-secondary'
  ],
  lazyLoadImages: true,
  compressionLevel: 9,
  cacheStrategy: 'aggressive'
}

export interface AccessibilityConfig {
  ariaLabels: Record<string, string>
  keyboardShortcuts: Record<string, string>
  focusManagement: boolean
  screenReaderSupport: boolean
  colorContrast: 'AA' | 'AAA'
  motionReduction: boolean
}

export const accessibilityConfig: AccessibilityConfig = {
  ariaLabels: {
    'chat-input': 'Zone de saisie pour votre message',
    'send-button': 'Envoyer le message',
    'language-selector': 'Sélecteur de langue',
    'chat-messages': 'Messages de la conversation',
    'loading-indicator': 'Indicateur de chargement'
  },
  keyboardShortcuts: {
    'Enter': 'Envoyer le message',
    'Escape': 'Effacer la saisie',
    'Tab': 'Navigation entre les éléments',
    'Arrow keys': 'Navigation dans l\'historique'
  },
  focusManagement: true,
  screenReaderSupport: true,
  colorContrast: 'AA',
  motionReduction: true
}

export interface SecurityConfig {
  headers: Record<string, string>
  csp: string
  hsts: boolean
  xssProtection: boolean
  contentTypeSniffing: boolean
}

export const securityConfig: SecurityConfig = {
  headers: {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
  },
  csp: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.openai.com;",
  hsts: true,
  xssProtection: true,
  contentTypeSniffing: false
}

export function generatePerformanceMetaTags(): string[] {
  const tags: string[] = []
  
  // Preload critical resources
  performanceConfig.preload.forEach(resource => {
    tags.push(`<link rel="preload" href="${resource}" as="font" crossorigin>`)
  })
  
  // DNS prefetch
  performanceConfig.dnsPrefetch.forEach(domain => {
    tags.push(`<link rel="dns-prefetch" href="${domain}">`)
  })
  
  // Preconnect
  performanceConfig.preconnect.forEach(url => {
    tags.push(`<link rel="preconnect" href="${url}" crossorigin>`)
  })
  
  return tags
}

export function generateSecurityHeaders(): Record<string, string> {
  return {
    ...securityConfig.headers,
    'Strict-Transport-Security': securityConfig.hsts ? 'max-age=31536000; includeSubDomains' : '',
    'Content-Security-Policy': securityConfig.csp
  }
}
