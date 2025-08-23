import React from 'react';

const EmergencyLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-50 via-orange-50/30 to-yellow-50/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-2xl border border-gray-200">
        {/* Cercle avec personnage et arc de progression */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center relative overflow-hidden">
            {/* Personnage stylisé */}
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center relative z-10">
              <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            </div>
            {/* Arc de progression orange */}
            <svg className="absolute inset-0 w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="orange"
                strokeWidth="8"
                strokeDasharray="251.2"
                strokeDashoffset="125.6"
                className="animate-pulse"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        
        {/* Titre principal */}
        <h1 className="text-2xl font-bold text-orange-600 mb-4">
          Chargement...
        </h1>
        
        {/* Description */}
        <p className="text-gray-600 mb-6">
          Préparation de votre roast personnalisé...
        </p>
        
        {/* Barre de progression */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-purple-600 h-3 rounded-full w-1/3 animate-pulse transition-all duration-1000"></div>
        </div>
        
        {/* Indicateurs de statut */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">IA active</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">Génération en cours</span>
          </div>
        </div>
        
        {/* Bouton de retry */}
        <button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 mx-auto"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Réessayer</span>
        </button>
        
        {/* Message d'aide */}
        <p className="text-xs text-gray-500 mt-4">
          Veuillez patienter pendant que nous chargeons le contenu
        </p>
      </div>
    </div>
  );
};

export default EmergencyLoader;
