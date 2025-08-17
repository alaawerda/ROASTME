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

// Détecter la langue du navigateur
const detectLanguage = (): { languageCode: string; translations: Translations } => {
  console.log('🔍 Détection de langue...')
  
  // Vérifier si on est côté client
  if (typeof window === 'undefined') {
    console.log('🖥️ Côté serveur, utilisation de la langue par défaut')
    return { languageCode: 'en', translations: allTranslations['en'] }
  }
  
  try {
    // Détecter la langue du navigateur en premier
    const browserLanguage = navigator.language || navigator.languages?.[0] || 'en'
    const languageCode = browserLanguage.split('-')[0].toLowerCase()
    
    console.log('🌐 Langue du navigateur:', browserLanguage)
    console.log('🔤 Code de langue:', languageCode)
    
    // Vérifier si la langue du navigateur est supportée
    if (allTranslations[languageCode]) {
      console.log('✅ Langue supportée:', languageCode)
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('roastme-language', languageCode)
        } catch (error) {
          console.warn('Impossible de sauvegarder la langue dans localStorage:', error)
        }
      }
      return { languageCode, translations: allTranslations[languageCode] }
    }
    
    // Essayer de récupérer la langue depuis localStorage
    let savedLanguage = null
    try {
      savedLanguage = localStorage.getItem('roastme-language')
    } catch (error) {
      console.warn('Impossible de récupérer la langue depuis localStorage:', error)
    }
    
    console.log('💾 Langue sauvegardée:', savedLanguage)
    
    if (savedLanguage && allTranslations[savedLanguage]) {
      console.log('✅ Utilisation de la langue sauvegardée:', savedLanguage)
      return { languageCode: savedLanguage, translations: allTranslations[savedLanguage] }
    }

    // Fallback vers le français (au lieu de l'anglais)
    console.log('🔄 Fallback vers le français')
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('roastme-language', 'fr')
      } catch (error) {
        console.warn('Impossible de sauvegarder la langue par défaut:', error)
      }
    }
    return { languageCode: 'fr', translations: allTranslations['fr'] }
  } catch (error) {
    console.error('Erreur lors de la détection de langue:', error)
    // Fallback sécurisé
    return { languageCode: 'en', translations: allTranslations['en'] }
  }
}

export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState<string>('en')
  const [translations, setTranslations] = useState<Translations>(en)
  const [isInitialized, setIsInitialized] = useState(false)

  const changeLanguage = (languageCode: string): void => {
    if (allTranslations[languageCode]) {
      setCurrentLanguage(languageCode)
      setTranslations(allTranslations[languageCode])
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('roastme-language', languageCode)
        } catch (error) {
          console.error('Erreur lors de la sauvegarde de la langue:', error)
        }
      }
    }
  }

  const resetToBrowserLanguage = (): void => {
    console.log('🔄 Reset vers la langue du navigateur')
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('roastme-language')
      } catch (error) {
        console.error('Erreur lors de la suppression de la langue:', error)
      }
    }
    const { languageCode, translations: newTranslations } = detectLanguage()
    setCurrentLanguage(languageCode)
    setTranslations(newTranslations)
  }

  useEffect(() => {
    try {
      const { languageCode, translations: newTranslations } = detectLanguage()
      setCurrentLanguage(languageCode)
      setTranslations(newTranslations)
      setIsInitialized(true)
    } catch (error) {
      console.error('Erreur lors de l\'initialisation de la langue:', error)
      // Fallback sécurisé
      setCurrentLanguage('en')
      setTranslations(allTranslations['en'])
      setIsInitialized(true)
    }
  }, [])

  // Vérifier que les valeurs retournées sont valides
  const safeTranslations = translations || allTranslations['en']
  const safeCurrentLanguage = currentLanguage || 'en'

  return {
    currentLanguage: safeCurrentLanguage,
    translations: safeTranslations,
    changeLanguage,
    supportedLanguages,
    resetToBrowserLanguage,
    isInitialized
  }
}
