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
  const modalRef = useRef<HTMLDivElement>(null)

  // Utiliser des valeurs par défaut si les props ne sont pas fournies
  const safeCurrentLanguage = currentLanguage || 'fr'
  const safeOnLanguageChange = onLanguageChange || ((lang: LocaleKey) => {
    console.log('LanguageSelector - Changement de langue par défaut vers:', lang)
  })

  // Détecter si on est sur mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      console.log('LanguageSelector - Mobile detection:', mobile, 'Width:', window.innerWidth)
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
    const scrollY = window.scrollY || document.documentElement.scrollTop
    
    // Largeur adaptative pour s'aligner mieux avec le header et éviter les débordements
    const idealWidth = Math.max(240, Math.min(320, Math.ceil(buttonRect.width) + 120))
    const dropdownWidth = Math.min(idealWidth, viewportWidth - 32)
    const dropdownHeight = Math.min(400, viewportHeight - 32)

    // Calculer la position optimale en tenant compte du scroll
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

    // Ajuster si le dropdown dépasse en bas (tenir compte du scroll)
    if (top + dropdownHeight > viewportHeight - 16) {
      top = buttonRect.top - dropdownHeight - 8
    }

    // Ajuster si le dropdown dépasse en haut
    if (top < 16) {
      top = 16
    }

    // S'assurer que le dropdown reste visible même lors du scroll
    if (top < scrollY + 16) {
      top = scrollY + 16
    }

    setDropdownPosition({
      top: Math.max(16, top),
      left: Math.max(16, left),
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
  }, [isOpen, calculateDropdownPosition, handleResize, isMobile])

  // Gestion du modal mobile - scroll et focus
  useEffect(() => {
    if (isOpen && isMobile) {
      // Ajouter classe pour verrouiller le scroll
      document.body.classList.add('modal-open')
      
      // Scroll vers le haut pour centrer le modal
      window.scrollTo(0, 0)
      
      // Focus sur le modal après un court délai pour l'animation
      setTimeout(() => {
        if (modalRef.current) {
          modalRef.current.focus()
        }
      }, 150)
    }
    
    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [isOpen, isMobile])

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
    console.log('LanguageSelector - Opening dropdown. isMobile:', isMobile, 'windowWidth:', window.innerWidth)
    console.log('LanguageSelector - supportedLanguages:', supportedLanguages.map(lang => ({
      code: lang.code,
      name: lang.name,
      flag: lang.flag,
      native: lang.native
    })))
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
          <span className="text-lg">{currentLang.flag}</span>
          <span className="hidden sm:inline font-medium truncate max-w-[8ch]">{currentLang.name}</span>
          <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-300 ease-out ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>



      {/* Version desktop - Dropdown classique */}
      {isOpen && !isMobile && typeof window !== 'undefined' && window.innerWidth >= 768 && createPortal(
        <div 
          ref={dropdownRef}
          id="language-menu" 
          role="listbox" 
          className="language-dropdown-portal glass-morphism rounded-2xl shadow-2xl border border-gray-600/30 overflow-hidden animate-in focus:outline-none pointer-events-auto"
          style={{
            top: dropdownPosition.top,
            left: dropdownPosition.left,
            width: `${dropdownPosition.width}px`,
            maxHeight: 'min(400px, 80vh)',
            overflowY: 'auto'
          }}
        >
          {/* Header épuré et élégant - SANS bouton croix au milieu */}
          <div className="relative overflow-hidden">
            {/* Arrière-plan avec gradient subtil */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/15 to-indigo-600/20" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/3 to-transparent" />
            
            <div className="relative px-6 py-5 border-b border-white/10">
              {/* Header centré et épuré */}
              <div className="text-center">
                <div className="inline-flex items-center gap-3 mb-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    Sélectionner la langue
                  </h3>
                </div>
                
                <p className="text-sm text-gray-300/80 font-medium">
                  {supportedLanguages.length} langues disponibles
                </p>
              </div>
              
              {/* Bouton fermer discret en haut à droite */}
              <button
                onClick={closeDropdown}
                className="absolute top-3 right-3 w-8 h-8 rounded-full hover:bg-white/10 transition-all duration-200 flex items-center justify-center group"
                aria-label="Fermer"
                type="button"
              >
                <X className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-200" />
              </button>
            </div>
          </div>

          {/* Liste des langues - UX/UI EXCELLENTE pour desktop */}
          <div className="px-6 py-4">
            <div className="space-y-3">
              {supportedLanguages.map((language, index) => (
                <div
                  key={language.code}
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                    language.code === safeCurrentLanguage 
                      ? 'bg-gradient-to-r from-blue-600/20 via-purple-600/15 to-indigo-600/20 ring-2 ring-blue-400/50 shadow-xl shadow-blue-500/25' 
                      : 'bg-gray-800/20 hover:bg-gradient-to-r hover:from-white/5 hover:to-white/10 hover:shadow-lg'
                  }`}
                >
                  <button
                    onClick={() => handleLanguageSelect(language.code)}
                    className="w-full p-4 text-left transition-all duration-200 hover:scale-[1.02] active:scale-[0.99]"
                    role="option"
                    aria-selected={language.code === safeCurrentLanguage}
                  >
                    <div className="flex items-center gap-4 language-item-clean">
                      
                      {/* DRAPEAU SEUL - AUCUN CODE */}
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                        <span className={`text-4xl transition-transform duration-300 filter ${
                          language.code === safeCurrentLanguage 
                            ? 'scale-110 drop-shadow-xl brightness-110' 
                            : 'scale-100 group-hover:scale-105 drop-shadow-lg'
                        }`}>
                          {language.flag}
                        </span>
                      </div>

                      {/* TEXTE SEULEMENT - NOM ET NOM NATIF */}
                      <div className="flex-1 min-w-0">
                        <div className={`font-bold leading-tight transition-all duration-200 ${
                          language.code === safeCurrentLanguage 
                            ? 'text-white text-lg tracking-wide' 
                            : 'text-gray-100 text-base group-hover:text-white'
                        }`}>
                          {language.name}
                        </div>
                        <div className={`text-sm font-medium mt-1 transition-all duration-200 ${
                          language.code === safeCurrentLanguage 
                            ? 'text-blue-200' 
                            : 'text-gray-300 group-hover:text-blue-200'
                        }`}>
                          {language.native}
                        </div>
                      </div>

                      {/* INDICATEUR DE SÉLECTION ÉLÉGANT */}
                      {language.code === safeCurrentLanguage && (
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                            <Check className="w-4 h-4 text-white font-bold" />
                          </div>
                        </div>
                      )}
                    </div>
                  </button>
                  
                  {/* Ligne de séparation subtile */}
                  {index < supportedLanguages.length - 1 && (
                    <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-gray-600/30 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer moderne */}
          <div className="relative overflow-hidden border-t border-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 via-gray-700/30 to-gray-800/50" />
            <div className="relative p-4">
              <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
                <span>Cliquez en dehors pour fermer</span>
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Version mobile - Modal plein écran optimisé et centré */}
      {isOpen && isMobile && typeof window !== 'undefined' && window.innerWidth < 768 && createPortal(
        <div 
          className="language-dropdown-portal fixed inset-0 flex items-center justify-center"
          style={{ 
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)'
          }}
          onClick={closeDropdown}
        >
          <div 
            ref={modalRef}
            className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white rounded-3xl shadow-2xl border border-white/30 animate-scale-in"
            style={{
              width: 'min(90vw, 400px)',
              maxHeight: '85vh',
              margin: '0 20px',
              transform: 'translateZ(0)', // Force hardware acceleration
              willChange: 'transform'
            }}
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="language-modal-title"
          >
            {/* Header avec padding optimisé */}
            <div className="p-6 pb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 id="language-modal-title" className="text-xl font-bold text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  Choisir une langue
                </h3>
                <button
                  onClick={closeDropdown}
                  className="p-3 rounded-2xl hover:bg-white/20 transition-all duration-200 hover:scale-110 active:scale-95"
                  aria-label="Fermer le sélecteur de langue"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              <p className="text-sm text-gray-300 opacity-80">
                Sélectionnez votre langue préférée
              </p>
            </div>
            
            {/* Liste des langues avec scroll optimisé */}
            <div className="px-6 pb-6">
              <div 
                className="space-y-3 overflow-y-auto mobile-scroll"
                style={{ maxHeight: 'min(60vh, 400px)' }}
              >
                {supportedLanguages.map((language, index) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageSelect(language.code)}
                    className={`w-full flex items-center space-x-4 p-4 rounded-2xl text-left transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${
                      language.code === safeCurrentLanguage 
                        ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 border-2 border-blue-400/60 shadow-xl shadow-blue-500/20' 
                        : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20'
                    }`}
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    <div className="text-3xl drop-shadow-lg flex-shrink-0 w-12 text-center">{language.flag}</div>
                    <div className="flex-1 min-w-0 ml-1">
                      <div className="font-bold text-white text-lg leading-tight">{language.name}</div>
                      <div className="text-sm text-gray-300 opacity-90 mt-1">{language.native}</div>
                    </div>
                    {language.code === safeCurrentLanguage && (
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                        <Check className="w-5 h-5 text-white font-bold" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
              
              {/* Footer avec info */}
              <div className="px-6 pb-6 pt-4 border-t border-white/10">
                <div className="text-center">
                  <p className="text-sm text-gray-400 mb-2">
                    {supportedLanguages.length} langues disponibles
                  </p>
                  <p className="text-xs text-gray-500">
                    Touchez en dehors pour fermer
                  </p>
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

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-in {
          animation: fadeInUp 0.2s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Prévenir les problèmes de chevauchement de texte */
        .language-selector-container {
          isolation: isolate;
        }

        /* Assurer un espacement correct entre les éléments */
        .language-selector-container button {
          line-height: 1.2;
        }

        /* Prévenir le débordement du texte */
        .language-selector-container .min-w-0 {
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Améliorer le scroll sur mobile */
        .mobile-scroll {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }

        /* Animation d'entrée pour le modal mobile */
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-scale-in {
          animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Animation d'entrée échelonnée pour les éléments de liste */
        @keyframes fadeInStagger {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Force le centrage sur tous les navigateurs mobiles */
        .language-dropdown-portal {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          min-height: 100vh !important;
          min-height: 100dvh !important; /* Support pour les nouveaux navigateurs */
        }
      `}</style>
    </>
  )
}
