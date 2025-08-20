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
  const [locale, setLocaleState] = useState<LocaleKey>(getDefaultLocale());

  // Initialiser la langue depuis le localStorage ou le navigateur
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale');
      if (savedLocale && isSupportedLocale(savedLocale)) {
        setLocaleState(savedLocale);
      } else {
        const browserLocale = getBrowserLocale();
        setLocaleState(browserLocale);
        localStorage.setItem('locale', browserLocale);
      }
    }
  }, []);

  // Mettre à jour la langue
  const setLocale = useCallback((newLocale: LocaleKey) => {
    if (isSupportedLocale(newLocale)) {
      setLocaleState(newLocale);
      if (typeof window !== 'undefined') {
        localStorage.setItem('locale', newLocale);
        // Mettre à jour l'attribut lang du document
        document.documentElement.lang = newLocale;
        // Mettre à jour la direction du texte pour les langues RTL
        document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
      }
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

  // Mettre à jour l'attribut lang et dir du document quand la locale change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = locale;
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    }
  }, [locale, isRTL]);

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

// Hook principal pour l'application - retourne les propriétés attendues par page.tsx
export function useLanguageApp() {
  const { locale, setLocale, localeData, t } = useLanguage();
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialiser l'état une fois que la langue est chargée
  useEffect(() => {
    if (locale && localeData) {
      setIsInitialized(true);
    }
  }, [locale, localeData]);

  // Retourner les propriétés attendues par le composant
  return {
    currentLanguage: locale,
    translations: localeData,
    changeLanguage: setLocale,
    t,
    isInitialized
  };
}
