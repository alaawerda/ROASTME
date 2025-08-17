'use client'

import { useEffect } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { seoMetadata } from '../lib/seo'
import { getOGConfig } from '../lib/og-config'
import { generateStructuredDataScript } from '../lib/structured-data'

export default function SEOManager() {
  const { currentLanguage } = useLanguage()

  useEffect(() => {
    try {
      // Vérifier que toutes les dépendances sont valides
      if (!currentLanguage || !seoMetadata || !getOGConfig || !generateStructuredDataScript) {
        console.warn('SEOManager: dépendances manquantes, arrêt de la mise à jour SEO')
        return
      }

      if (seoMetadata[currentLanguage]) {
        const seo = seoMetadata[currentLanguage]
        const og = getOGConfig(currentLanguage)
        
        // Vérifier que seo est valide
        if (!seo || !seo.title) {
          console.warn('SEO metadata invalide pour la langue:', currentLanguage)
          return
        }
        
        // Mettre à jour le titre de la page
        if (document && document.title !== undefined) {
          document.title = seo.title
        }
        
        // Mettre à jour la meta description
        let metaDescription = document.querySelector('meta[name="description"]')
        if (!metaDescription) {
          metaDescription = document.createElement('meta')
          metaDescription.setAttribute('name', 'description')
          document.head.appendChild(metaDescription)
        }
        if (seo.description) {
          metaDescription.setAttribute('content', seo.description)
        }
        
        // Mettre à jour les meta keywords
        if (seo.keywords && Array.isArray(seo.keywords)) {
          let metaKeywords = document.querySelector('meta[name="keywords"]')
          if (!metaKeywords) {
            metaKeywords = document.createElement('meta')
            metaKeywords.setAttribute('name', 'keywords')
            document.head.appendChild(metaKeywords)
          }
          metaKeywords.setAttribute('content', seo.keywords.join(', '))
        }
        
        // Mettre à jour l'attribut lang du HTML
        if (document && document.documentElement) {
          document.documentElement.lang = currentLanguage
        }
        
        // Mettre à jour Open Graph si disponible
        if (og) {
          const ogTitle = document.querySelector('meta[property="og:title"]')
          if (ogTitle && og.title) {
            ogTitle.setAttribute('content', og.title)
          }
          
          const ogDescription = document.querySelector('meta[property="og:description"]')
          if (ogDescription && og.description) {
            ogDescription.setAttribute('content', og.description)
          }
          
          const ogLocale = document.querySelector('meta[property="og:locale"]')
          if (ogLocale && og.locale) {
            ogLocale.setAttribute('content', og.locale)
          }
          
          const ogUrl = document.querySelector('meta[property="og:url"]')
          if (ogUrl && og.url) {
            ogUrl.setAttribute('content', og.url)
          }
          
          const ogImage = document.querySelector('meta[property="og:image"]')
          if (ogImage && og.image) {
            ogImage.setAttribute('content', og.image)
          }
        }
        
        // Mettre à jour Twitter Card si disponible
        if (seo.twitter) {
          const twitterTitle = document.querySelector('meta[name="twitter:title"]')
          if (twitterTitle && seo.twitter.title) {
            twitterTitle.setAttribute('content', seo.twitter.title)
          }
          
          const twitterDescription = document.querySelector('meta[name="twitter:description"]')
          if (twitterDescription && seo.twitter.description) {
            twitterDescription.setAttribute('content', seo.twitter.description)
          }
          
          const twitterImage = document.querySelector('meta[name="twitter:image"]')
          if (twitterImage && og && og.image) {
            twitterImage.setAttribute('content', og.image)
          }
        }
        
        // Mettre à jour l'URL canonique si disponible
        if (og && og.url) {
          const canonical = document.querySelector('link[rel="canonical"]')
          if (canonical) {
            canonical.setAttribute('href', og.url)
          }
        }
        
        // Mettre à jour les liens alternatifs si seoMetadata est disponible
        if (seoMetadata && typeof seoMetadata === 'object') {
          Object.entries(seoMetadata).forEach(([lang]) => {
            const alternate = document.querySelector(`link[hreflang="${lang}"]`)
            if (alternate) {
              const url = lang === 'fr' 
                ? 'https://roastme.chat' 
                : `https://roastme.chat/${lang}`
              alternate.setAttribute('href', url)
            }
          })
        }
        
        // Mettre à jour les données structurées JSON-LD si la fonction est disponible
        if (generateStructuredDataScript && typeof generateStructuredDataScript === 'function') {
          try {
            const existingScript = document.querySelector('script[type="application/ld+json"]')
            if (existingScript) {
              existingScript.innerHTML = generateStructuredDataScript(currentLanguage)
            } else {
              const script = document.createElement('script')
              script.type = 'application/ld+json'
              script.innerHTML = generateStructuredDataScript(currentLanguage)
              document.head.appendChild(script)
            }
          } catch (error) {
            console.warn('Erreur lors de la génération des données structurées:', error)
          }
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
    } catch (error) {
      console.error('Erreur dans SEOManager:', error)
    }
  }, [currentLanguage])

  // Ce composant ne rend rien visuellement
  return null
}
