import { Coffee, Heart, X } from 'lucide-react'
import { getDonationUrl, getGratitudeMessage } from '../lib/donation-config'

interface DonationModalProps {
  isOpen: boolean
  onClose: () => void
  currentLanguage: string
  translations: {
    donateModalTitle?: string
    donateModalSubtitle?: string
    donateModalDescription?: string
    donateCta?: string
    donateClose?: string
  }
}

export default function DonationModal({ 
  isOpen, 
  onClose, 
  currentLanguage, 
  translations 
}: DonationModalProps) {
  if (!isOpen) return null

  const handleDonationClick = (url: string) => {
    // Ouvrir le lien dans un nouvel onglet
    window.open(url, '_blank', 'noopener,noreferrer')
    // Fermer le modal après un court délai
    setTimeout(() => onClose(), 300)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center animate-in">
      {/* Backdrop avec effet de flou */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal avec design moderne */}
      <div className="relative w-full max-w-md mx-4 bg-white/95 backdrop-blur-md rounded-t-3xl sm:rounded-3xl shadow-2xl border border-white/20 transform transition-all duration-300 ease-out animate-in">
        {/* Header moderne avec design amélioré */}
        <div className="relative overflow-hidden rounded-t-3xl sm:rounded-t-3xl">
          {/* Fond avec gradient et motif */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-orange-600"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20"></div>
          
          {/* Motif de café flottant */}
          <div className="absolute top-2 right-16 text-white/20 text-3xl animate-bounce">☕</div>
          <div className="absolute top-3 left-6 text-white/20 text-xl animate-pulse">🔥</div>
          
          {/* Contenu du header */}
          <div className="relative flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              {/* Icône animée avec effet de lueur */}
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/30">
                  <Coffee className="w-5 h-5 text-white" />
                </div>
                {/* Effet de lueur */}
                <div className="absolute inset-0 w-10 h-10 bg-white/30 rounded-full blur-lg animate-pulse"></div>
              </div>
              
              {/* Titre avec ombre portée */}
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white drop-shadow-lg">
                  {translations.donateModalTitle || 'Enjoying the roast? ☕'}
                </h3>
                <div className="w-12 h-0.5 bg-white/60 rounded-full"></div>
              </div>
            </div>
            
            {/* Bouton de fermeture stylisé */}
            <button
              onClick={onClose}
              className="relative p-2 text-white/80 hover:text-white transition-all duration-300 ease-out rounded-full hover:bg-white/20 hover:scale-110 hover:rotate-90 backdrop-blur-sm border border-white/30"
            >
              <X className="w-5 h-5" />
              {/* Effet de lueur au survol */}
              <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
        
        {/* Indicateur de glissement pour mobile */}
        <div className="sm:hidden flex justify-center py-2">
          <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
        </div>
        
        {/* Contenu du modal */}
        <div className="p-4">
          <div className="space-y-4">
                          {/* Icon et message principal */}
              <div className="text-center space-y-3">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-orange-400 via-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl animate-pulse relative">
                  <Coffee className="w-10 h-10 text-white" />
                  {/* Effet de lueur externe */}
                  <div className="absolute inset-0 w-20 h-20 bg-orange-400/30 rounded-full blur-xl animate-pulse"></div>
                </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">
                  {translations.donateModalSubtitle || 'Support the Roast! 🔥'}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {translations.donateModalDescription || 'If you like the service, buy me a coffee to support the project. No pressure – just love and caffeine.'}
                </p>
              </div>
            </div>

            {/* Options de donation avec design moderne */}
            <div className="space-y-2.5">
              {/* Bouton principal Buy Me a Coffee */}
              <button
                onClick={() => handleDonationClick(getDonationUrl(currentLanguage))}
                className="group relative w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out"
              >
                <Coffee className="w-4 h-4 mr-2" />
                <span className="text-base">{translations.donateCta || 'Buy me a coffee'}</span>
                <span className="ml-2 text-sm opacity-80 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>

              {/* Bouton Ko-fi unique */}
              <button
                onClick={() => handleDonationClick('https://ko-fi.com/roastme')}
                className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out group"
              >
                <Heart className="w-4 h-4 mr-2" />
                <span className="text-base">Support on Ko-fi</span>
                <span className="ml-2 text-sm opacity-80 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>

              {/* Bouton de fermeture */}
              <button
                onClick={onClose}
                className="w-full py-2.5 px-4 text-gray-500 hover:text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-all duration-200 ease-out"
              >
                {translations.donateClose || 'Close'}
              </button>
            </div>

            {/* Message de gratitude personnalisé selon la langue */}
            <div className="text-center">
              <p className="text-xs text-gray-400">
                {getGratitudeMessage(currentLanguage)}
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer avec bouton de fermeture alternatif */}
        <div className="border-t border-gray-200/50 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-b-3xl sm:rounded-b-3xl">
          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 font-medium rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all duration-200 ease-out hover:scale-[1.02] flex items-center justify-center space-x-2 group"
          >
            <span className="text-sm">{translations.donateClose || 'Close'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
