import React from 'react';

const EmergencyLoader: React.FC = () => {
  const [countdown, setCountdown] = React.useState(10);
  const [autoReload, setAutoReload] = React.useState(true);

  React.useEffect(() => {
    console.log('🚨 [DEBUG] EmergencyLoader activé')
    
    if (autoReload && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (autoReload && countdown === 0) {
      console.log('🔄 [DEBUG] Rechargement automatique')
      localStorage.clear();
      window.location.reload();
    }
    
    // Always return a cleanup function (even if it's empty)
    return () => {};
  }, [countdown, autoReload]);

  const handleManualReload = () => {
    console.log('🔄 [DEBUG] Rechargement manuel')
    localStorage.clear();
    window.location.reload();
  };

  const handleForceLoad = () => {
    console.log('🚀 [DEBUG] Forçage du chargement')
    // Essayer de forcer le montage en manipulant l'URL
    const url = new URL(window.location.href);
    url.searchParams.set('force', Date.now().toString());
    window.location.href = url.toString();
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-50 via-orange-50/30 to-yellow-50/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-2xl border border-gray-200">
        {/* Cercle avec alerte */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center relative overflow-hidden">
            <span className="text-4xl">⚠️</span>
          </div>
        </div>
        
        {/* Titre principal */}
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Chargement Bloqué
        </h1>
        
        {/* Description */}
        <p className="text-gray-600 mb-6">
          L'application semble bloquée. Rechargement automatique dans {countdown} secondes...
        </p>
        
        {/* Barre de progression du countdown */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-6 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full transition-all duration-1000"
            style={{ width: `${((10 - countdown) / 10) * 100}%` }}
          ></div>
        </div>
        
        {/* Boutons d'action */}
        <div className="space-y-3 mb-6">
          <button
            onClick={handleManualReload}
            className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>🔄 Recharger Maintenant</span>
          </button>
          
          <button
            onClick={handleForceLoad}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            🚀 Forcer le Chargement
          </button>
          
          <button
            onClick={() => setAutoReload(false)}
            className="w-full bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            ⏹️ Arrêter le Countdown
          </button>
        </div>
        
        {/* Message d'aide */}
        <p className="text-xs text-gray-500">
          Si le problème persiste, essayez de vider le cache de votre navigateur
        </p>
      </div>
    </div>
  );
};

export default EmergencyLoader;
