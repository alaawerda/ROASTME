'use client'

import { useEffect } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { seoMetadata } from '../lib/seo'
import { getOGConfig } from '../lib/og-config'
import { generateStructuredDataScript } from '../lib/structured-data'

export default function SEOManager() {
  const { currentLanguage } = useLanguage()

  useEffect(() => {
    if (currentLanguage && seoMetadata[currentLanguage]) {
      const seo = seoMetadata[currentLanguage]
      const og = getOGConfig(currentLanguage)
      
      // Mettre à jour le titre de la page
      document.title = seo.title
      
      // Mettre à jour la meta description
      let metaDescription = document.querySelector('meta[name="description"]')
      if (!metaDescription) {
        metaDescription = document.createElement('meta')
        metaDescription.setAttribute('name', 'description')
        document.head.appendChild(metaDescription)
      }
      metaDescription.setAttribute('content', seo.description)
      
      // Mettre à jour les meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]')
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta')
        metaKeywords.setAttribute('name', 'keywords')
        document.head.appendChild(metaKeywords)
      }
      metaKeywords.setAttribute('content', seo.keywords.join(', '))
      
      // Mettre à jour l'attribut lang du HTML
      document.documentElement.lang = currentLanguage
      
      // Mettre à jour Open Graph
      const ogTitle = document.querySelector('meta[property="og:title"]')
      if (ogTitle) {
        ogTitle.setAttribute('content', og.title)
      }
      
      const ogDescription = document.querySelector('meta[property="og:description"]')
      if (ogDescription) {
        ogDescription.setAttribute('content', og.description)
      }
      
      const ogLocale = document.querySelector('meta[property="og:locale"]')
      if (ogLocale) {
        ogLocale.setAttribute('content', og.locale)
      }
      
      const ogUrl = document.querySelector('meta[property="og:url"]')
      if (ogUrl) {
        ogUrl.setAttribute('content', og.url)
      }
      
      const ogImage = document.querySelector('meta[property="og:image"]')
      if (ogImage) {
        ogImage.setAttribute('content', og.image)
      }
      
      // Mettre à jour Twitter Card
      const twitterTitle = document.querySelector('meta[name="twitter:title"]')
      if (twitterTitle) {
        twitterTitle.setAttribute('content', seo.twitter.title)
      }
      
      const twitterDescription = document.querySelector('meta[name="twitter:description"]')
      if (twitterDescription) {
        twitterDescription.setAttribute('content', seo.twitter.description)
      }
      
      const twitterImage = document.querySelector('meta[name="twitter:image"]')
      if (twitterImage) {
        twitterImage.setAttribute('content', og.image)
      }
      
      // Mettre à jour l'URL canonique
      const canonical = document.querySelector('link[rel="canonical"]')
      if (canonical) {
        canonical.setAttribute('href', og.url)
      }
      
      // Mettre à jour les liens alternatifs
      Object.entries(seoMetadata).forEach(([lang, langSeo]) => {
        const alternate = document.querySelector(`link[hreflang="${lang}"]`)
        if (alternate) {
          const url = lang === 'fr' 
            ? 'https://roastme.chat' 
            : `https://roastme.chat/${lang}`
          alternate.setAttribute('href', url)
        }
      })
      
      // Mettre à jour les données structurées JSON-LD
      const existingScript = document.querySelector('script[type="application/ld+json"]')
      if (existingScript) {
        existingScript.innerHTML = generateStructuredDataScript(currentLanguage)
      } else {
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.innerHTML = generateStructuredDataScript(currentLanguage)
        document.head.appendChild(script)
      }
      
      // Ajouter les meta tags pour la langue
      let metaLang = document.querySelector('meta[http-equiv="content-language"]')
      if (!metaLang) {
        metaLang = document.createElement('meta')
        metaLang.setAttribute('http-equiv', 'content-language')
        document.head.appendChild(metaLang)
      }
      metaLang.setAttribute('content', currentLanguage)
      
      // Ajouter les meta tags pour la géolocalisation
      let metaGeo = document.querySelector('meta[name="geo.region"]')
      if (!metaGeo) {
        metaGeo = document.createElement('meta')
        metaGeo.setAttribute('name', 'geo.region')
        document.head.appendChild(metaGeo)
      }
      
      // Définir la région en fonction de la langue
      const geoRegions: Record<string, string> = {
        'fr': 'FR',
        'en': 'US',
        'es': 'ES',
        'de': 'DE',
        'it': 'IT',
        'pt': 'PT',
        'ru': 'RU',
        'ja': 'JP',
        'ko': 'KR',
        'zh': 'CN',
        'ar': 'SA',
        'nl': 'NL'
      }
      metaGeo.setAttribute('content', geoRegions[currentLanguage] || 'FR')
    }
  }, [currentLanguage])

  // Ce composant ne rend rien visuellement
  return null
}
