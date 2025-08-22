"use client"

import React from 'react'
import LanguageSelector from './LanguageSelector'
import type { LocaleKey } from '../locales'

export default function LanguageSelectorTest() {
  const [currentLanguage, setCurrentLanguage] = React.useState<LocaleKey>('fr')

  const handleLanguageChange = (newLanguage: LocaleKey) => {
    console.log('Test - Changement de langue vers:', newLanguage)
    setCurrentLanguage(newLanguage)
  }

  console.log('Test - currentLanguage:', currentLanguage)
  console.log('Test - handleLanguageChange:', handleLanguageChange)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/20 to-yellow-50/20 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Test du Sélecteur de Langue</h1>
          <p className="text-lg text-gray-600">Testez le composant LanguageSelector amélioré avec un excellent UX/UI</p>
        </div>

        {/* Section de test principale */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Sélecteur de Langue</h2>
          
          <div className="flex items-center justify-center mb-6">
            <LanguageSelector 
              currentLanguage={currentLanguage}
              onLanguageChange={handleLanguageChange}
            />
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-2">Langue actuellement sélectionnée:</p>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full border border-yellow-200">
              <span className="text-2xl">
                {currentLanguage === 'fr' && '🇫🇷'}
                {currentLanguage === 'en' && '🇺🇸'}
                {currentLanguage === 'es' && '🇪🇸'}
                {currentLanguage === 'de' && '🇩🇪'}
                {currentLanguage === 'it' && '🇮🇹'}
                {currentLanguage === 'pt' && '🇵🇹'}
                {currentLanguage === 'nl' && '🇳🇱'}
                {currentLanguage === 'ru' && '🇷🇺'}
                {currentLanguage === 'ja' && '🇯🇵'}
                {currentLanguage === 'ko' && '🇰🇷'}
                {currentLanguage === 'ar' && '🇸🇦'}
                {currentLanguage === 'zh' && '🇨🇳'}
              </span>
              <span className="font-semibold text-gray-800">{currentLanguage.toUpperCase()}</span>
            </div>
          </div>
        </div>

        {/* Informations sur les fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Fonctionnalités Desktop</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Dropdown positionné intelligemment</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Animations fluides et élégantes</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Gestion des événements clavier</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Fermeture automatique au scroll</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Fonctionnalités Mobile</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Modal plein écran adaptatif</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Interface tactile optimisée</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Gestion du responsive design</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Navigation au clavier</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Instructions de test */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">Instructions de Test</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-700">
            <div>
              <h4 className="font-semibold mb-2">Test Desktop:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Cliquez sur le bouton du sélecteur</li>
                <li>• Testez la navigation au clavier (Tab, Enter, Escape)</li>
                <li>• Redimensionnez la fenêtre pour tester le repositionnement</li>
                <li>• Faites défiler la page pour tester la fermeture automatique</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Test Mobile:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Redimensionnez la fenêtre à moins de 768px</li>
                <li>• Testez l'ouverture du modal plein écran</li>
                <li>• Vérifiez la fermeture au clic en dehors</li>
                <li>• Testez la navigation tactile</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
