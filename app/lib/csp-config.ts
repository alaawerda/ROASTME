// Configuration CSP pour différents environnements
export const getCSPConfig = (isDev: boolean = false) => {
  if (isDev) {
    // Configuration permissive pour le développement
    return [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "script-src-elem 'self' 'unsafe-inline'",
      "img-src 'self' data: https: blob:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-src 'self'",
      "media-src 'self' data:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'"
    ].join('; ');
  }

  // Configuration stricte pour la production
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  return [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' https://www.googletagmanager.com https://www.google-analytics.com`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    `script-src-elem 'self' 'nonce-${nonce}' https://www.googletagmanager.com`,
    "img-src 'self' data: https: blob:",
    "font-src 'self' https://fonts.gstatic.com data:",
    "connect-src 'self' https://vitals.vercel-insights.com https://www.google-analytics.com",
    "frame-src 'self' https://www.youtube.com",
    "media-src 'self' data:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'self'"
  ].join('; ');
};
