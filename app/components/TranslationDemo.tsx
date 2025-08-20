import React from 'react';
import { useLanguageApp } from '../hooks/useLanguage';

const TranslationDemo: React.FC = () => {
  const { currentLanguage, changeLanguage } = useLanguageApp();

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Démonstration des Traductions</h2>
      
      {/* Sélecteur de langue */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sélectionner la langue:
        </label>
        <select
          value={currentLanguage}
          onChange={(e) => changeLanguage(e.target.value as any)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="fr">Français</option>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="de">Deutsch</option>
          <option value="it">Italiano</option>
          <option value="pt">Português</option>
          <option value="nl">Nederlands</option>
          <option value="ru">Русский</option>
          <option value="ja">日本語</option>
          <option value="ko">한국어</option>
          <option value="ar">العربية</option>
          <option value="zh">中文</option>
        </select>
      </div>

      {/* Informations sur la langue actuelle */}
      <div className="mb-6 p-4 bg-gray-50 rounded-md">
        <h3 className="font-semibold mb-2">Langue actuelle:</h3>
        <p><strong>Code:</strong> {currentLanguage}</p>
        <p><strong>Nom:</strong> {currentLanguage === 'fr' ? 'Français' : currentLanguage === 'en' ? 'English' : currentLanguage}</p>
        <p><strong>Nom natif:</strong> {currentLanguage === 'fr' ? 'Français' : currentLanguage === 'en' ? 'English' : currentLanguage}</p>
        <p><strong>Direction:</strong> {currentLanguage === 'ar' ? 'RTL (Droite à gauche)' : 'LTR (Gauche à droite)'}</p>
      </div>

      {/* Exemples de traductions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Navigation */}
        <div className="p-4 border border-gray-200 rounded-md">
          <h4 className="font-semibold mb-3 text-blue-600">Navigation</h4>
          <div className="space-y-2">
            <p><strong>Accueil:</strong> Accueil</p>
            <p><strong>Blog:</strong> Blog</p>
            <p><strong>Chat IA:</strong> Chat IA</p>
            <p><strong>À propos:</strong> À propos</p>
            <p><strong>Contact:</strong> Contact</p>
          </div>
        </div>

        {/* Boutons */}
        <div className="p-4 border border-gray-200 rounded-md">
          <h4 className="font-semibold mb-3 text-green-600">Boutons</h4>
          <div className="space-y-2">
            <p><strong>Explorer:</strong> Explorer</p>
            <p><strong>Essayer:</strong> Essayer</p>
            <p><strong>Découvrir:</strong> Découvrir</p>
            <p><strong>Apprendre:</strong> Apprendre</p>
            <p><strong>Partager:</strong> Partager</p>
          </div>
        </div>



        {/* Blog */}
        <div className="p-4 border border-gray-200 rounded-md">
          <h4 className="font-semibold mb-3 text-orange-600">Blog</h4>
          <div className="space-y-2">
            <p><strong>Titre:</strong> Blog RoastMe</p>
            <p><strong>Sous-titre:</strong> Guide du Roast</p>
            <p><strong>Lire plus:</strong> Lire plus</p>
            <p><strong>Temps de lecture:</strong> Temps de lecture</p>
            <p><strong>Publié le:</strong> Publié le</p>
          </div>
        </div>

        {/* Accueil */}
        <div className="p-4 border border-gray-200 rounded-md">
          <h4 className="font-semibold mb-3 text-red-600">Accueil</h4>
          <div className="space-y-2">
            <p><strong>Titre:</strong> Bienvenue sur RoastMe</p>
            <p><strong>Sous-titre:</strong> L&apos;IA qui te fait rire</p>
            <p><strong>Description:</strong> Découvre l&apos;humour IA</p>
            <p><strong>Commencer:</strong> Commencer</p>
            <p><strong>En savoir plus:</strong> En savoir plus</p>
          </div>
        </div>

        {/* Chat */}
        <div className="p-4 border border-gray-200 rounded-md">
          <h4 className="font-semibold mb-3 text-indigo-600">Chat</h4>
          <div className="space-y-2">
            <p><strong>Titre:</strong> Chat RoastMe</p>
            <p><strong>Sous-titre:</strong> Parle avec l&apos;IA</p>
            <p><strong>Placeholder:</strong> Écris ton message...</p>
            <p><strong>Envoyer:</strong> Envoyer</p>
            <p><strong>Pensée:</strong> L&apos;IA réfléchit...</p>
          </div>
        </div>
      </div>

      {/* Exemples de boutons traduits */}
      <div className="mt-6 p-4 bg-gray-50 rounded-md">
        <h4 className="font-semibold mb-3">Boutons traduits:</h4>
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Explorer
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Essayer
          </button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600">
            Découvrir
          </button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
            Apprendre
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            Partager
          </button>
        </div>
      </div>

      {/* Informations sur la locale */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md">
        <h4 className="font-semibold mb-3 text-blue-800">Données de la locale:</h4>
        <pre className="text-xs bg-white p-2 rounded border overflow-auto">
          {JSON.stringify({ currentLanguage, supportedLanguages: ['fr', 'en', 'es', 'de', 'it', 'pt', 'nl', 'ru', 'ja', 'ko', 'ar', 'zh'] }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default TranslationDemo;
