import React from 'react';

const EmergencyLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center p-8">
        <div className="mb-6">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Chargement en cours...
        </h1>
        
        <p className="text-gray-600 mb-6">
          Le site se charge, veuillez patienter...
        </p>
        
        <div className="space-y-3">
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            🔄 Recharger
          </button>
          
          <button
            onClick={() => {
              localStorage.clear()
              window.location.reload()
            }}
            className="block w-full bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            🗑️ Vider le cache et recharger
          </button>
        </div>
        
        <p className="text-xs text-gray-500 mt-4">
          Si le problème persiste, essayez de vider le cache de votre navigateur
        </p>
      </div>
    </div>
  );
};

export default EmergencyLoader;
