"use client"
import React, { useState } from 'react';
import Header from './Header';
import type { LocaleKey } from '../locales';

const MobileHeaderDemo: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<LocaleKey>('fr');

  const handleLanguageChange = (lang: LocaleKey) => {
    setCurrentLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/20 to-yellow-50/20">
      {/* Header amélioré */}
      <Header
        title="RoastMe AI"
        poweredBy="IA Avancée"
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
      />
      
      {/* Contenu de démonstration */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Démonstration du Header Mobile
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Testez le header responsive sur différentes tailles d&apos;écran. 
            Redimensionnez votre navigateur ou utilisez les outils de développement pour voir les améliorations.
          </p>
        </div>

        {/* Instructions de test */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            🧪 Instructions de Test
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <h3 className="font-medium text-gray-800 mb-2">📱 Test Mobile</h3>
              <ul className="space-y-1">
                <li>• Redimensionnez la fenêtre à 375px de largeur</li>
                <li>• Vérifiez que le menu mobile s&apos;ouvre correctement</li>
                <li>• Testez la navigation tactile</li>
                <li>• Vérifiez l&apos;espacement et la lisibilité</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-2">💻 Test Desktop</h3>
              <ul className="space-y-1">
                <li>• Redimensionnez à 1024px+ de largeur</li>
                <li>• Vérifiez que la navigation desktop s&apos;affiche</li>
                <li>• Testez les tooltips et effets de survol</li>
                <li>• Vérifiez l&apos;alignement des éléments</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fonctionnalités testées */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-red-500 rounded-xl flex items-center justify-center text-2xl mb-4">
              🎯
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Navigation Mobile
            </h3>
            <p className="text-gray-600 text-sm">
              Menu hamburger intuitif avec overlay élégant et navigation tactile optimisée.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center text-2xl mb-4">
              📱
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Design Responsive
            </h3>
            <p className="text-gray-600 text-sm">
              Adaptation automatique à toutes les tailles d&apos;écran avec espacement optimisé.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center text-2xl mb-4">
              ⚡
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Performance
            </h3>
            <p className="text-gray-600 text-sm">
              Animations fluides et transitions optimisées pour une expérience mobile parfaite.
            </p>
          </div>
        </div>

        {/* Bouton de test du menu mobile */}
        <div className="text-center mt-8">
          <button 
            onClick={() => {
              // Simuler l'ouverture du menu mobile
              const event = new Event('resize');
              window.dispatchEvent(event);
            }}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition-transform duration-200 shadow-lg"
          >
            🔄 Tester le Responsive
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileHeaderDemo;
