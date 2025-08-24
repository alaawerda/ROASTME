import { en } from './en';
import { fr } from './fr';
import { es } from './es';
import { de } from './de';
import { it } from './it';
import { pt } from './pt';
import { nl } from './nl';
import { ru } from './ru';
import { ja } from './ja';
import { ko } from './ko';
import { ar } from './ar';
import { zh } from './zh';

export const locales = {
  fr,
  en,
  es,
  de,
  it,
  pt,
  nl,
  ru,
  ja,
  ko,
  ar,
  zh
};

export type LocaleKey = keyof typeof locales;
export type Locale = typeof fr & {
  title?: string;
  welcomeMessage?: string;
  inputPlaceholder?: string;
  poweredBy?: string;
  timeFormat?: string;
  preparingRoast?: string;
  networkError?: string;
  examples?: {
    title: string;
    subtitle: string;
    student: {
      category: string;
      text: string;
    };
    work: {
      category: string;
      text: string;
    };
    lifestyle: {
      category: string;
      text: string;
    };
  };
  chatRoastIA?: {
    heroTitle: string;
    heroFlames?: string;
    heroSubtitle: string;
    liveChatTitle: string;

    status?: {
      aiConnected: string;
      aiReady?: string;
    };
    features: {
      roastWithoutFilters: string;
      roastWithoutFiltersDesc: string;
      realTimeChat: string;
      realTimeChatDesc: string;
      multilingualSupport: string;
      multilingualSupportDesc: string;
    };
    advantages: {
      freeTitle: string;
      freeDesc: string;
      personalizedTitle: string;
      personalizedDesc: string;
    };
    howToUse: {
      title: string;
      subtitle: string;
      step1: {
        title: string;
        description: string;
      };
      step2: {
        title: string;
        description: string;
      };
      step3: {
        title: string;
        description: string;
      };
    };
    stats: {
      languages: string;
      free: string;
      available: string;
    };
    cta: {
      title: string;
      subtitle: string;
      startNow: string;
      seeRankings: string;
    };
  };
};

// Fonction utilitaire pour obtenir les traductions
export function getLocale(locale: LocaleKey): Locale {
  const localeData = locales[locale];
  
  if (localeData && hasRequiredProperties(localeData)) {
    return localeData;
  }
  
  return locales.fr;
}

// Fonction pour vérifier si une locale a toutes les propriétés requises
function hasRequiredProperties(locale: any): locale is Locale {
  const requiredProps = ['title', 'welcomeMessage', 'inputPlaceholder', 'poweredBy', 'timeFormat', 'preparingRoast', 'networkError', 'examples', 'chatRoastIA'];
  return requiredProps.every(prop => prop in locale);
}

// Fonction utilitaire pour obtenir une traduction spécifique
export function getTranslation(locale: LocaleKey, path: string): string {
  const localeData = getLocale(locale);
  const keys = path.split('.');
  let value: any = localeData;
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return path; // Retourne le chemin si la traduction n'est pas trouvée
    }
  }
  
  return typeof value === 'string' ? value : path;
}

// Fonction utilitaire pour obtenir les noms des langues
export const languageNames: Record<LocaleKey, string> = {
  fr: 'Français',
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  it: 'Italiano',
  pt: 'Português',
  nl: 'Nederlands',
  ru: 'Русский',
  ja: '日本語',
  ko: '한국어',
  ar: 'العربية',
  zh: '中文'
};

// Fonction utilitaire pour obtenir les codes de langue natifs
export const nativeLanguageNames: Record<LocaleKey, string> = {
  fr: 'Français',
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  it: 'Italiano',
  pt: 'Português',
  nl: 'Nederlands',
  ru: 'Русский',
  ja: '日本語',
  ko: '한국어',
  ar: 'العربية',
  zh: '中文'
};

// Fonction utilitaire pour vérifier si une langue est supportée
export function isSupportedLocale(locale: string): locale is LocaleKey {
  return locale in locales;
}

// Fonction utilitaire pour obtenir la langue par défaut
export function getDefaultLocale(): LocaleKey {
  return 'fr';
}

// Fonction utilitaire pour obtenir la langue du navigateur
export function getBrowserLocale(): LocaleKey {
  if (typeof window === 'undefined') return getDefaultLocale();
  
  const browserLocale = navigator.language.split('-')[0];
  
  if (browserLocale && isSupportedLocale(browserLocale)) {
    return browserLocale;
  }
  
  return getDefaultLocale();
}

// Fonction utilitaire pour formater les dates selon la locale
export function formatDate(date: Date, locale: LocaleKey): string {
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  return new Intl.DateTimeFormat(locale, dateOptions).format(date);
}

// Fonction utilitaire pour formater les nombres selon la locale
export function formatNumber(number: number, locale: LocaleKey): string {
  return new Intl.NumberFormat(locale).format(number);
}

// Fonction utilitaire pour formater la monnaie selon la locale
export function formatCurrency(amount: number, locale: LocaleKey, currency: string = 'EUR'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(amount);
}

export { fr, en, es, de, it, pt, nl, ru, ja, ko, ar, zh };
