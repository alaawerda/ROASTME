'use client'

import { useState } from 'react'
import { useLanguageApp } from '../hooks/useLanguage'
import { LocaleKey } from '../locales'

export default function TranslationDemo() {
  const { currentLanguage, setLanguage, t } = useLanguageApp()
  const [selectedLocale, setSelectedLocale] = useState<LocaleKey>(currentLanguage)



  const locales: { key: LocaleKey; name: string; flag: string }[] = [
    { key: 'fr', name: 'Français', flag: '🇫🇷' },
    { key: 'en', name: 'English', flag: '🇺🇸' },
    { key: 'es', name: 'Español', flag: '🇪🇸' },
    { key: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { key: 'it', name: 'Italiano', flag: '🇮🇹' },
    { key: 'pt', name: 'Português', flag: '🇵🇹' },
    { key: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { key: 'ru', name: 'Русский', flag: '🇷🇺' },
    { key: 'ja', name: '日本語', flag: '🇯🇵' },
    { key: 'ko', name: '한국어', flag: '🇰🇷' },
    { key: 'ar', name: 'العربية', flag: '🇸🇦' },
    { key: 'zh', name: '中文', flag: '🇨🇳' }
  ]

  const handleLanguageChange = (locale: LocaleKey) => {
    setSelectedLocale(locale)
    setLanguage(locale)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🌍 Démonstration des Traductions Multilingues
          </h2>
          <p className="text-xl text-gray-600">
            Testez nos nouvelles traductions SEO optimisées dans 12 langues
          </p>
        </div>

        {/* Sélecteur de langue */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {locales.map((locale) => (
              <button
                key={locale.key}
                onClick={() => handleLanguageChange(locale.key)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedLocale === locale.key
                    ? 'bg-flame-orange text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span className="mr-2">{locale.flag}</span>
                {locale.name}
              </button>
            ))}
          </div>
        </div>

        {/* Affichage des traductions */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Section Hero */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
              🎯 Section Hero
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-700">Titre Principal:</h4>
                <p className="text-gray-900">{t('chatRoastIA.heroTitle')}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Sous-titre:</h4>
                <p className="text-gray-900">{t('chatRoastIA.heroSubtitle')}</p>
              </div>
            </div>
          </div>

          {/* Section Chat en Direct */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
              💬 Chat en Direct
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-700">Titre:</h4>
                <p className="text-gray-900">{t('chatRoastIA.liveChatTitle')}</p>
              </div>

            </div>
          </div>

          {/* Fonctionnalités */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
              ⚡ Fonctionnalités
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-700">Roast Sans Filtres:</h4>
                <p className="text-gray-900">{t('chatRoastIA.features.roastWithoutFilters')}</p>
                <p className="text-sm text-gray-600 mt-1">{t('chatRoastIA.features.roastWithoutFiltersDesc')}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Chat en Temps Réel:</h4>
                <p className="text-gray-900">{t('chatRoastIA.features.realTimeChat')}</p>
                <p className="text-sm text-gray-600 mt-1">{t('chatRoastIA.features.realTimeChatDesc')}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Support Multilingue:</h4>
                <p className="text-gray-900">{t('chatRoastIA.features.multilingualSupport')}</p>
                <p className="text-sm text-gray-600 mt-1">{t('chatRoastIA.features.multilingualSupportDesc')}</p>
              </div>
            </div>
          </div>

          {/* Avantages */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
              ✨ Avantages
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-700">100% Gratuit:</h4>
                <p className="text-gray-900">{t('chatRoastIA.advantages.freeTitle')}</p>
                <p className="text-sm text-gray-600 mt-1">{t('chatRoastIA.advantages.freeDesc')}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Roast Personnalisé:</h4>
                <p className="text-gray-900">{t('chatRoastIA.advantages.personalizedTitle')}</p>
                <p className="text-sm text-gray-600 mt-1">{t('chatRoastIA.advantages.personalizedDesc')}</p>
              </div>
            </div>
          </div>

          {/* Comment Utiliser */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
              📱 Comment Utiliser
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-700">Titre:</h4>
                <p className="text-gray-900">{t('chatRoastIA.howToUse.title')}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Sous-titre:</h4>
                <p className="text-gray-900">{t('chatRoastIA.howToUse.subtitle')}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Étape 1:</h4>
                <p className="text-gray-900">{t('chatRoastIA.howToUse.step1.title')}</p>
                <p className="text-sm text-gray-600 mt-1">{t('chatRoastIA.howToUse.step1.description')}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
              🚀 Appel à l'Action
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-700">Titre:</h4>
                <p className="text-gray-900">{t('chatRoastIA.cta.title')}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Sous-titre:</h4>
                <p className="text-gray-900">{t('chatRoastIA.cta.subtitle')}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Boutons:</h4>
                <p className="text-gray-900">{t('chatRoastIA.cta.startNow')}</p>
                <p className="text-gray-900">{t('chatRoastIA.cta.seeRankings')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Informations sur le SEO */}
        <div className="mt-12 bg-gradient-to-r from-flame-orange to-purple-dark rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            🎯 Optimisation SEO Multilingue
          </h3>
          <p className="text-lg mb-4">
            Tous nos textes sont maintenant traduits dans 12 langues pour maximiser la visibilité
            dans les moteurs de recherche internationaux.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="font-bold">🌍 Couverture Globale</div>
              <div>12 langues principales</div>
            </div>
            <div>
              <div className="font-bold">🔍 Mots-clés Locaux</div>
              <div>Traductions SEO optimisées</div>
            </div>
            <div>
              <div className="font-bold">📱 Expérience Utilisateur</div>
              <div>Interface dans la langue maternelle</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
