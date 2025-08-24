'use client';

import { useState, useEffect, useCallback } from 'react';
import { 
  LocaleKey, 
  Locale, 
  getLocale, 
  getTranslation, 
  getBrowserLocale, 
  getDefaultLocale,
  isSupportedLocale,
  languageNames,
  nativeLanguageNames
} from '../locales';

interface UseLanguageReturn {
  locale: LocaleKey;
  setLocale: (locale: LocaleKey) => void;
  t: (key: string) => string;
  localeData: Locale;
  languageName: string;
  nativeLanguageName: string;
  supportedLocales: LocaleKey[];
  isRTL: boolean;
}

export function useLanguage(): UseLanguageReturn {
  const [locale, setLocaleState] = useState<LocaleKey>(() => {
    // Initialisation synchrone pour éviter les re-renders
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale');
      if (savedLocale && isSupportedLocale(savedLocale)) {
        return savedLocale;
      }
      const browserLocale = getBrowserLocale();
      localStorage.setItem('locale', browserLocale);
      return browserLocale;
    }
    return getDefaultLocale();
  });

  // Effet simplifié pour la synchronisation
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', locale);
      document.documentElement.lang = locale;
      document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    }
  }, [locale]);

  // Mettre à jour la langue - simplifié
  const setLocale = useCallback((newLocale: LocaleKey) => {
    if (isSupportedLocale(newLocale)) {
      setLocaleState(newLocale);
    }
  }, []);

  // Fonction de traduction
  const t = useCallback((key: string): string => {
    return getTranslation(locale, key);
  }, [locale]);

  // Obtenir les données de la locale
  const localeData = getLocale(locale);

  // Obtenir le nom de la langue
  const languageName = languageNames[locale];
  const nativeLanguageName = nativeLanguageNames[locale];

  // Langues supportées
  const supportedLocales: LocaleKey[] = [
    'fr', 'en', 'es', 'de', 'it', 'pt', 'nl', 'ru', 'ja', 'ko', 'ar', 'zh'
  ];

  // Vérifier si la langue est RTL
  const isRTL = locale === 'ar';

  return {
    locale,
    setLocale,
    t,
    localeData,
    languageName,
    nativeLanguageName,
    supportedLocales,
    isRTL
  };
}

// Hook utilitaire pour obtenir une traduction spécifique
export function useTranslation(key: string): string {
  const { t } = useLanguage();
  return t(key);
}

// Hook utilitaire pour obtenir les données d'une locale spécifique
export function useLocaleData(): Locale {
  const { localeData } = useLanguage();
  return localeData;
}

// Hook utilitaire pour vérifier si la langue actuelle est RTL
export function useRTL(): boolean {
  const { isRTL } = useLanguage();
  return isRTL;
}

// Hook principal pour l'application - Version ultra-simplifiée pour éviter les blocages
export function useLanguageApp() {
  const { locale, setLocale, localeData, t } = useLanguage();
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialisation ultra-agressive pour éviter tout blocage
  useEffect(() => {
    console.log('🔧 [DEBUG] Début de l\'initialisation des langues')
    console.log('🔧 [DEBUG] Locale actuelle:', locale)
    console.log('🔧 [DEBUG] LocaleData disponible:', !!localeData)
    
    // Timer très court pour l'initialisation immédiate
    const immediateTimer = setTimeout(() => {
      console.log('⚡ [DEBUG] Initialisation forcée (timer immédiat)')
      setIsInitialized(true);
    }, 100); // 100ms max

    // Timer de sécurité absolu
    const safetyTimer = setTimeout(() => {
      console.log('🛡️ [DEBUG] Initialisation forcée (timer de sécurité)')
      setIsInitialized(true);
    }, 500); // 500ms max absolu

    // Nettoyage
    return () => {
      clearTimeout(immediateTimer);
      clearTimeout(safetyTimer);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps -- Intentionally empty to run only once on mount

  // Retourner les propriétés attendues par le composant
  return {
    currentLanguage: locale,
    setLanguage: setLocale,
    translations: localeData,
    changeLanguage: setLocale,
    t,
    isInitialized
  };
}
