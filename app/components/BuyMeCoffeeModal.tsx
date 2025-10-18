'use client'

import { useState, useEffect } from 'react'
import { X, Coffee, Heart, Star } from 'lucide-react'

interface BuyMeCoffeeModalProps {
  isOpen: boolean
  onClose: () => void
  currentLanguage?: string
}

export default function BuyMeCoffeeModal({ isOpen, onClose, currentLanguage = 'fr' }: BuyMeCoffeeModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  // Traductions
  const translations = {
    fr: {
      title: "Vous aimez RoastMe IA ?",
      subtitle: "Soutenez le développement avec un petit café ☕",
      description: "Votre soutien m'aide à améliorer l'IA et à ajouter de nouvelles fonctionnalités !",
      buyButton: "M'offrir un café ☕",
      laterButton: "Plus tard",
      thanksTitle: "Merci pour votre soutien ! 💖",
      features: [
        "🚀 Améliorations de l'IA",
        "🌍 Plus de langues",
        "⚡ Réponses plus rapides",
        "🎨 Nouvelles fonctionnalités"
      ]
    },
    en: {
      title: "Enjoying RoastMe AI?",
      subtitle: "Support development with a small coffee ☕",
      description: "Your support helps me improve the AI and add new features!",
      buyButton: "Buy me a coffee ☕",
      laterButton: "Later",
      thanksTitle: "Thanks for your support! 💖",
      features: [
        "🚀 AI improvements",
        "🌍 More languages",
        "⚡ Faster responses",
        "🎨 New features"
      ]
    },
    es: {
      title: "¿Te gusta RoastMe IA?",
      subtitle: "Apoya el desarrollo con un pequeño café ☕",
      description: "¡Tu apoyo me ayuda a mejorar la IA y agregar nuevas funciones!",
      buyButton: "Cómprame un café ☕",
      laterButton: "Más tarde",
      thanksTitle: "¡Gracias por tu apoyo! 💖",
      features: [
        "🚀 Mejoras de IA",
        "🌍 Más idiomas",
        "⚡ Respuestas más rápidas",
        "🎨 Nuevas funciones"
      ]
    }
  }

  const t = translations[currentLanguage as keyof typeof translations] || translations.fr

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      // Empêcher le scroll du body
      document.body.style.overflow = 'hidden'
    } else {
      // Restaurer le scroll
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      onClose()
    }, 200)
  }

  const handleBuyMeCoffee = () => {
    window.open('https://buymeacoffee.com/roastme', '_blank', 'noopener,noreferrer')
    handleClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className={`
        relative w-full max-w-md bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
        rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden
        transition-all duration-300 transform
        ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
      `}>
        
        {/* Header avec effet de brillance */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
          
          <div className="relative p-6 text-center">
            {/* Bouton fermer */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-700/50 hover:bg-gray-600/50 transition-colors duration-200"
              aria-label="Fermer"
            >
              <X className="w-4 h-4 text-gray-300" />
            </button>

            {/* Icône animée */}
            <div className="mb-4 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-xl opacity-50 animate-pulse" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-xl">
                  <Coffee className="w-8 h-8 text-white animate-bounce" style={{ animationDuration: '2s' }} />
                </div>
              </div>
            </div>

            {/* Titre */}
            <h2 className="text-xl font-bold text-white mb-2">
              {t.title}
            </h2>
            
            {/* Sous-titre */}
            <p className="text-orange-300 font-medium mb-3">
              {t.subtitle}
            </p>
            
            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">
              {t.description}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="px-6 py-4 bg-gray-800/50">
          <div className="grid grid-cols-2 gap-2">
            {t.features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 p-2 rounded-lg bg-gray-700/30 text-sm text-gray-200"
              >
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="p-6 space-y-3">
          {/* Bouton principal */}
          <button
            onClick={handleBuyMeCoffee}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
          >
            <Coffee className="w-5 h-5" />
            <span>{t.buyButton}</span>
            <Heart className="w-4 h-4 animate-pulse" />
          </button>
          
          {/* Bouton secondaire */}
          <button
            onClick={handleClose}
            className="w-full bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 font-medium py-2.5 px-6 rounded-xl transition-all duration-200"
          >
            {t.laterButton}
          </button>
        </div>

        {/* Footer avec étoiles */}
        <div className="px-6 pb-4 text-center">
          <div className="flex justify-center space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-xs text-gray-400">
            Merci de soutenir le projet ! 🙏
          </p>
        </div>
      </div>
    </div>
  )
}
