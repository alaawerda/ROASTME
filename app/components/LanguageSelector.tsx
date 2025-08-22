"use client"

import { useState, useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { Globe, ChevronDown, Check, X } from 'lucide-react'
import type { LocaleKey } from '../locales'

// Définition des langues supportées avec leurs informations
const supportedLanguages: Array<{ code: LocaleKey; name: string; flag: string; native: string }> = [
  { code: 'fr', name: 'Français', flag: '🇫🇷', native: 'Français' },
  { code: 'en', name: 'English', flag: '🇺🇸', native: 'English' },
  { code: 'es', name: 'Español', flag: '🇪🇸', native: 'Español' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', native: 'Deutsch' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹', native: 'Italiano' },
  { code: 'pt', name: 'Português', flag: '🇵🇹', native: 'Português' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱', native: 'Nederlands' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺', native: 'Русский' },
  { code: 'ja', name: '日本語', flag: '🇯🇵', native: '日本語' },
  { code: 'ko', name: '한국어', flag: '🇰🇷', native: '한국어' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', native: 'العربية' },
  { code: 'zh', name: '中文', flag: '🇨🇳', native: '中文' }
]

interface LanguageSelectorProps {
  currentLanguage: string
  onLanguageChange: (languageCode: LocaleKey) => void
}

export default function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Utiliser des valeurs par défaut si les props ne sont pas fournies
  const safeCurrentLanguage = currentLanguage || 'fr'
  const safeOnLanguageChange = onLanguageChange || ((lang: LocaleKey) => {
    console.log('LanguageSelector - Changement de langue par défaut vers:', lang)
  })

  // Détecter si on est sur mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Calculer la position du dropdown de manière optimisée
  const calculateDropdownPosition = useCallback(() => {
    if (!buttonRef.current) return

    const buttonRect = buttonRef.current.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    
    // Largeur adaptative pour s'aligner mieux avec le header et éviter les débordements
    const idealWidth = Math.max(240, Math.min(320, Math.ceil(buttonRect.width) + 120))
    const dropdownWidth = Math.min(idealWidth, viewportWidth - 32)
    const dropdownHeight = Math.min(400, viewportHeight - 32)

    // Calculer la position optimale
    let left = buttonRect.right - dropdownWidth
    let top = buttonRect.bottom + 8

    // Ajuster si le dropdown dépasse à droite
    if (left < 16) {
      left = 16
    }

    // Ajuster si le dropdown dépasse à gauche
    if (left + dropdownWidth > viewportWidth - 16) {
      left = viewportWidth - dropdownWidth - 16
    }

    // Ajuster si le dropdown dépasse en bas
    if (top + dropdownHeight > viewportHeight - 16) {
      top = buttonRect.top - dropdownHeight - 8
    }

    // Ajuster si le dropdown dépasse en haut
    if (top < 16) {
      top = 16
    }

    setDropdownPosition({
      top: top,
      left: left,
      width: dropdownWidth
    })
  }, [])

  // Gérer le redimensionnement de la fenêtre
  const handleResize = useCallback(() => {
    if (isOpen && !isMobile) {
      calculateDropdownPosition()
    }
  }, [isOpen, isMobile, calculateDropdownPosition])

  // Gérer le clic en dehors du dropdown
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent | PointerEvent | TouchEvent) => {
      if (!isOpen) return
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && 
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        closeDropdown()
      }
    }

    // Gérer la touche Escape
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDropdown()
      }
    }

    // Gérer le scroll de la page
    const handleScroll = () => {
      if (isOpen && !isMobile) {
        calculateDropdownPosition()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('pointerdown', handleClickOutside as EventListener)
    document.addEventListener('touchstart', handleClickOutside as EventListener, { passive: true })
    document.addEventListener('keydown', handleEscape)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('pointerdown', handleClickOutside as EventListener)
      document.removeEventListener('touchstart', handleClickOutside as EventListener)
      document.removeEventListener('keydown', handleEscape)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [isOpen, calculateDropdownPosition, handleResize])

  // Verrouiller le scroll de la page quand le sélecteur est ouvert
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
    return () => {}
  }, [isOpen])

  // Calculer la position quand le dropdown s'ouvre
  useEffect(() => {
    if (isOpen && !isMobile) {
      // Délai pour s'assurer que le DOM est mis à jour
      setTimeout(() => {
        calculateDropdownPosition()
      }, 0)
    }
  }, [isOpen, isMobile, calculateDropdownPosition])

  const openDropdown = () => {
    setIsOpen(true)
  }

  const closeDropdown = () => {
    setIsOpen(false)
  }

  const toggleDropdown = () => {
    if (isOpen) {
      closeDropdown()
    } else {
      openDropdown()
    }
  }

  // Toujours afficher le sélecteur, même avec des props par défaut
  const currentLang = supportedLanguages.find(lang => lang.code === safeCurrentLanguage) ?? supportedLanguages[0]
  
  // Vérification de sécurité
  if (!currentLang) {
    console.error('Aucune langue trouvée, utilisation de la langue par défaut')
    return null
  }

  const handleLanguageSelect = (languageCode: LocaleKey) => {
    if (safeOnLanguageChange && typeof safeOnLanguageChange === 'function') {
      safeOnLanguageChange(languageCode)
    }
    closeDropdown()
  }

  // Composant pour la liste des langues (réutilisable)
  const LanguageList = ({ className = "" }: { className?: string }) => (
    <div className={className}>
      {supportedLanguages.map((language, index) => (
        <button
          key={language.code}
          onClick={() => handleLanguageSelect(language.code)}
          className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-left transition-all duration-200 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 group ${
            language.code === safeCurrentLanguage 
              ? 'bg-gradient-to-r from-yellow-400/20 to-orange-400/20 text-yellow-800 border border-yellow-400/40 shadow' 
              : 'text-gray-700 hover:text-gray-900 border border-transparent hover:border-yellow-200/50'
          }`}
          role="option"
          aria-selected={language.code === safeCurrentLanguage}
          style={{ 
            animationDelay: `${index * 50}ms`,
            animation: 'fadeInUp 0.3s ease-out forwards'
          }}
        >
          <span className="text-xl md:text-2xl filter drop-shadow-sm">{language.flag}</span>
          <div className="flex-1 min-w-0">
            <div className={`font-semibold text-sm md:text-base ${language.code === safeCurrentLanguage ? 'text-yellow-800' : 'text-gray-800'}`}>
              {language.name}
            </div>
            <div className={`text-xs md:text-sm ${language.code === safeCurrentLanguage ? 'text-yellow-700' : 'text-gray-500'}`}>
              {language.native}
            </div>
          </div>
          {language.code === safeCurrentLanguage && (
            <div className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 bg-yellow-400 rounded-full">
              <Check className="w-4 h-4 text-white" />
            </div>
          )}
        </button>
      ))}
    </div>
  )

  return (
    <>
      <div className="relative language-selector-container">
        <button
          ref={buttonRef}
          onClick={toggleDropdown}
          onKeyDown={(e) => { 
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              toggleDropdown()
            }
          }}
          className="flex items-center space-x-2 px-2.5 py-2 md:px-3.5 md:py-2.5 text-sm text-white hover:text-yellow-300 transition-all duration-200 ease-out rounded-lg md:rounded-xl hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 group focus-visible:outline-none focus-visible:ring-2 md:focus-visible:ring-4 focus-visible:ring-white/20 shadow-lg hover:shadow-xl"
          aria-label="Changer de langue"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls="language-menu"
          type="button"
        >
          <Globe className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform duration-300" />
          <span className="hidden sm:inline text-lg">{currentLang.flag}</span>
          <span className="hidden md:inline font-medium truncate max-w-[8ch]">{currentLang.name}</span>
          <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-300 ease-out ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Version desktop - Dropdown classique */}
      {isOpen && !isMobile && createPortal(
        <div 
          ref={dropdownRef}
          id="language-menu" 
          role="listbox" 
          className="fixed bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-[999999] animate-in focus:outline-none pointer-events-auto"
          style={{
            top: dropdownPosition.top,
            left: dropdownPosition.left,
            width: `${dropdownPosition.width}px`,
            maxHeight: 'min(400px, 80vh)',
            overflowY: 'auto'
          }}
        >
          {/* Header du dropdown */}
          <div className="sticky top-0 bg-gradient-to-r from-yellow-400/15 via-orange-500/15 to-red-500/15 border-b border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-800">Choisir une langue</h3>
              <button
                onClick={closeDropdown}
                className="p-2 rounded-lg hover:bg-white/60 transition-all duration-200"
                aria-label="Fermer le sélecteur de langue"
                type="button"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Liste des langues */}
          <div className="p-2">
            <LanguageList />
          </div>

          {/* Footer du dropdown */}
          <div className="sticky bottom-0 bg-gradient-to-r from-gray-50/80 to-white/80 border-t border-gray-200/50 p-3">
            <div className="text-center text-xs text-gray-500">
              {supportedLanguages.length} langues disponibles
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Version mobile - Modal plein écran */}
      {isOpen && isMobile && createPortal(
        <div 
          ref={dropdownRef}
          className="fixed inset-0 z-[999999] bg-black/50 backdrop-blur-sm pointer-events-auto"
          onClick={closeDropdown}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="absolute inset-0 flex items-end sm:items-center justify-center p-0 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl w-full sm:max-w-sm max-h-[85vh] overflow-hidden animate-in pointer-events-auto">
              {/* Header du modal mobile */}
              <div className="bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-red-500/20 border-b border-white/20 p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Choisir une langue</h3>
                  </div>
                  <button
                    onClick={closeDropdown}
                    className="p-3 rounded-2xl hover:bg-white/60 transition-all duration-200"
                    aria-label="Fermer le sélecteur de langue"
                    type="button"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Liste des langues mobile */}
              <div className="p-4 max-h-[70vh] overflow-y-auto">
                <LanguageList className="space-y-2.5" />
              </div>

              {/* Footer du modal mobile */}
              <div className="bg-gray-50 border-t border-gray-200 p-3">
                <div className="text-center text-sm text-gray-500">
                  {supportedLanguages.length} langues disponibles
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Styles CSS personnalisés pour les animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-in {
          animation: fadeInUp 0.2s ease-out;
        }
      `}</style>
    </>
  )
}
