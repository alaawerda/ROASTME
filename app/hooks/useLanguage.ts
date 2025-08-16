import { useState, useEffect } from 'react'
import { fr, en, es, de, it, pt, nl, ru, ja, ko, zh, ar } from '../locales'

// Type pour toutes les traductions
type Translations = typeof fr

// Mapping des codes de langue vers les traductions
const allTranslations: Record<string, Translations> = {
  'fr': fr,
  'en': en,
  'es': es,
  'de': de,
  'it': it,
  'pt': pt,
  'nl': nl,
  'ru': ru,
  'ja': ja,
  'ko': ko,
  'zh': zh,
  'ar': ar
}

// Langues supportées
export const supportedLanguages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' }
]

export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState<string>('en')
  const [translations, setTranslations] = useState<Translations>(en)

  useEffect(() => {
    // Détecter la langue du navigateur
    const detectLanguage = () => {
      console.log('🔍 Détection de langue...')
      
      // Détecter la langue du navigateur en premier
      const browserLanguage = navigator.language || navigator.languages?.[0] || 'en'
      const languageCode = browserLanguage.split('-')[0].toLowerCase()
      
      console.log('🌐 Langue du navigateur:', browserLanguage)
      console.log('🔤 Code de langue:', languageCode)
      
      // Vérifier si la langue du navigateur est supportée
      if (allTranslations[languageCode]) {
        console.log('✅ Langue supportée:', languageCode)
        setCurrentLanguage(languageCode)
        setTranslations(allTranslations[languageCode])
        localStorage.setItem('roastme-language', languageCode)
        return
      }
      
      // Essayer de récupérer la langue depuis localStorage
      const savedLanguage = localStorage.getItem('roastme-language')
      console.log('💾 Langue sauvegardée:', savedLanguage)
      
      if (savedLanguage && allTranslations[savedLanguage]) {
        console.log('✅ Utilisation de la langue sauvegardée:', savedLanguage)
        setCurrentLanguage(savedLanguage)
        setTranslations(allTranslations[savedLanguage])
        return
      }

      // Fallback vers le français (au lieu de l'anglais)
      console.log('🔄 Fallback vers le français')
      setCurrentLanguage('fr')
      setTranslations(allTranslations['fr'])
      localStorage.setItem('roastme-language', 'fr')
    }

    detectLanguage()
  }, [])

  const changeLanguage = (languageCode: string) => {
    if (allTranslations[languageCode]) {
      setCurrentLanguage(languageCode)
      setTranslations(allTranslations[languageCode])
      localStorage.setItem('roastme-language', languageCode)
    }
  }

  const resetToBrowserLanguage = () => {
    console.log('🔄 Reset vers la langue du navigateur')
    localStorage.removeItem('roastme-language')
    detectLanguage()
  }

  return {
    currentLanguage,
    translations,
    changeLanguage,
    supportedLanguages,
    resetToBrowserLanguage
  }
}
