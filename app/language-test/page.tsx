'use client'

import { useLanguageApp } from '../hooks/useLanguage'
import { useState } from 'react'
import type { LocaleKey } from '../locales'

export default function LanguageTestPage() {
  const { currentLanguage, translations, changeLanguage, isInitialized } = useLanguageApp()
  const [showAllTranslations, setShowAllTranslations] = useState(false)

  if (!isInitialized || !translations) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Chargement des traductions...</h1>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto"></div>
        </div>
      </div>
    )
  }

  const supportedLanguages: LocaleKey[] = [
    'fr', 'en', 'es', 'de', 'it', 'pt', 'nl', 'ru', 'ja', 'ko', 'ar', 'zh'
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Test des Traductions - RoastMe
        </h1>
        
        {/* Sélecteur de langue */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Sélecteur de Langue</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {supportedLanguages.map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                className={`p-3 rounded-lg border-2 transition-all ${
                  currentLanguage === lang
                    ? 'border-orange-500 bg-orange-50 text-orange-700'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="text-lg mb-1">
                  {lang === 'fr' && '🇫🇷'}
                  {lang === 'en' && '🇺🇸'}
                  {lang === 'es' && '🇪🇸'}
                  {lang === 'de' && '🇩🇪'}
                  {lang === 'it' && '🇮🇹'}
                  {lang === 'pt' && '🇵🇹'}
                  {lang === 'nl' && '🇳🇱'}
                  {lang === 'ru' && '🇷🇺'}
                  {lang === 'ja' && '🇯🇵'}
                  {lang === 'ko' && '🇰🇷'}
                  {lang === 'ar' && '🇸🇦'}
                  {lang === 'zh' && '🇨🇳'}
                </div>
                <div className="text-sm font-medium">{lang.toUpperCase()}</div>
                <div className="text-xs text-gray-500">
                  {translations.languageName}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Informations de la langue actuelle */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Langue Actuelle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>Code de langue:</strong> {currentLanguage}</p>
              <p><strong>Nom de la langue:</strong> {translations.languageName}</p>
              <p><strong>Direction du texte:</strong> {currentLanguage === 'ar' ? 'RTL' : 'LTR'}</p>
            </div>
            <div>
              <p><strong>Format de temps:</strong> {translations.timeFormat}</p>
              <p><strong>Propulsé par:</strong> {translations.poweredBy}</p>
            </div>
          </div>
        </div>

        {/* Test des traductions principales */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Traductions Principales</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-lg">Titre principal</h3>
              <p className="text-gray-700">{translations.title}</p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg">Message de bienvenue</h3>
              <p className="text-gray-700 whitespace-pre-line">{translations.welcomeMessage}</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg">Placeholder de l'input</h3>
              <p className="text-gray-700">{translations.inputPlaceholder}</p>
            </div>
          </div>
        </div>

        {/* Test des traductions du chat */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Traductions du Chat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Fonctionnalités</h3>
              <div className="space-y-2">
                <p><strong>Titre de la section:</strong> {translations.chatRoastIA?.features?.title}</p>
                <p><strong>Sous-titre de la section:</strong> {translations.chatRoastIA?.features?.subtitle}</p>
                <p><strong>Roast sans filtres:</strong> {translations.chatRoastIA?.features?.roastWithoutFilters}</p>
                <p><strong>Chat temps réel:</strong> {translations.chatRoastIA?.features?.realTimeChat}</p>
                <p><strong>Support multilingue:</strong> {translations.chatRoastIA?.features?.multilingualSupport}</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Avantages</h3>
              <div className="space-y-2">
                <p><strong>Titre de la section:</strong> {translations.chatRoastIA?.advantages?.title}</p>
                <p><strong>Sous-titre de la section:</strong> {translations.chatRoastIA?.advantages?.subtitle}</p>
                <p><strong>100% Gratuit:</strong> {translations.chatRoastIA?.advantages?.freeTitle}</p>
                <p><strong>Roast personnalisé:</strong> {translations.chatRoastIA?.advantages?.personalizedTitle}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bouton pour afficher toutes les traductions */}
        <div className="text-center">
          <button
            onClick={() => setShowAllTranslations(!showAllTranslations)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            {showAllTranslations ? 'Masquer' : 'Afficher'} Toutes les Traductions
          </button>
        </div>

        {/* Affichage de toutes les traductions */}
        {showAllTranslations && (
          <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">Toutes les Traductions</h2>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm">
              {JSON.stringify(translations, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}
