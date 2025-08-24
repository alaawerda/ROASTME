import { Coffee, Heart, X } from 'lucide-react'
import { getDonationUrl, getGratitudeMessage } from '../lib/donation-config'

interface DonationModalProps {
  isOpen: boolean
  onClose: () => void
  currentLanguage: string
}

export default function DonationModal({ 
  isOpen, 
  onClose, 
  currentLanguage 
}: DonationModalProps) {
  if (!isOpen) return null

  const handleDonationClick = (url: string) => {
    // Ouvrir le lien dans un nouvel onglet
    window.open(url, '_blank', 'noopener,noreferrer')
    // Fermer le modal après un court délai
    setTimeout(() => onClose(), 300)
  }

  return (
    <div className="w-full max-w-md mx-auto mb-4 animate-in">
      {/* Modal avec design moderne intégré dans le chat */}
      <div className="relative w-full bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-300/50 transform transition-all duration-300 ease-out animate-in">
        {/* Header moderne avec design amélioré */}
        <div className="relative overflow-hidden rounded-t-2xl">
          {/* Fond avec gradient et motif */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-orange-600"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20"></div>
          
          {/* Motif de café flottant */}
          <div className="absolute top-2 right-16 text-white/20 text-3xl animate-bounce">☕</div>
          <div className="absolute top-3 left-6 text-white/20 text-xl animate-pulse">🔥</div>
          
          {/* Contenu du header */}
          <div className="relative flex items-center justify-between p-3">
            <div className="flex items-center space-x-2">
              {/* Icône animée avec effet de lueur */}
              <div className="relative">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/30">
                  <Coffee className="w-4 h-4 text-white" />
                </div>
                {/* Effet de lueur */}
                <div className="absolute inset-0 w-8 h-8 bg-white/30 rounded-full blur-lg animate-pulse"></div>
              </div>
              
              {/* Titre avec ombre portée */}
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white drop-shadow-lg">
                  Enjoying the roast? ☕
                </h3>
                <div className="w-12 h-0.5 bg-white/60 rounded-full"></div>
              </div>
            </div>
            
            {/* Bouton de fermeture stylisé */}
            <button
              onClick={onClose}
              className="button-interactive relative p-1.5 text-white/80 hover:text-white rounded-full backdrop-blur-sm border border-white/30 hover-glow-modern"
            >
              <X className="w-4 h-4" />
              {/* Effet de lueur au survol */}
              <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
        
        {/* Séparateur léger */}
        <div className="flex justify-center py-1">
          <div className="w-12 h-0.5 bg-gray-300 rounded-full"></div>
        </div>
        
        {/* Contenu du modal */}
        <div className="p-3">
          <div className="space-y-3">
                          {/* Icon et message principal */}
              <div className="text-center space-y-3">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-orange-400 via-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl animate-pulse relative">
                  <Coffee className="w-10 h-10 text-white" />
                  {/* Effet de lueur externe */}
                  <div className="absolute inset-0 w-20 h-20 bg-orange-400/30 rounded-full blur-xl animate-pulse"></div>
                </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">
                  Support the Roast! 🔥
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                                      If you like the service, buy me a coffee to support the project. No pressure – just love and caffeine.
                </p>
              </div>
            </div>

            {/* Options de donation avec design moderne */}
            <div className="space-y-2.5">
              {/* Bouton principal Buy Me a Coffee */}
              <button
                onClick={() => handleDonationClick(getDonationUrl(5, currentLanguage))}
                className="button-interactive group relative w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl shadow-lg hover-glow-modern"
              >
                <Coffee className="w-4 h-4 mr-2" />
                                  <span className="text-base">Buy me a coffee</span>
                <span className="ml-2 text-sm opacity-80 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>

              {/* Bouton Ko-fi unique */}
              <button
                onClick={() => handleDonationClick('https://ko-fi.com/roastme')}
                className="button-interactive w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover-glow-modern group"
              >
                <Heart className="w-4 h-4 mr-2" />
                <span className="text-base">Support on Ko-fi</span>
                <span className="ml-2 text-sm opacity-80 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>

              {/* Bouton de fermeture */}
              <button
                onClick={onClose}
                className="button-interactive w-full py-2.5 px-4 text-gray-400 hover:text-gray-200 font-medium rounded-lg"
              >
                Close
              </button>
            </div>

            {/* Message de gratitude personnalisé selon la langue */}
            <div className="text-center">
              <p className="text-xs text-gray-400">
                {getGratitudeMessage(currentLanguage).message}
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer avec bouton de fermeture alternatif */}
        <div className="border-t border-gray-600/30 p-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-b-3xl sm:rounded-b-3xl">
          <button
            onClick={onClose}
            className="button-interactive w-full py-2.5 px-4 bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 font-medium rounded-xl hover-glow-modern flex items-center justify-center space-x-2 group"
          >
                              <span className="text-sm">Close</span>
          </button>
        </div>
      </div>
    </div>
  )
}
