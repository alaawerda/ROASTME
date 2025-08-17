import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Globe, ChevronDown, Check } from 'lucide-react'
import { supportedLanguages } from '../hooks/useLanguage'

interface LanguageSelectorProps {
  currentLanguage: string
  onLanguageChange: (languageCode: string) => void
}

export default function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && 
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Calculer la position du dropdown quand il s'ouvre
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect()
      setDropdownPosition({
        top: buttonRect.bottom + window.scrollY + 8, // 8px de marge
        left: buttonRect.right - 224, // 224px = w-56 (largeur du dropdown)
        width: buttonRect.width
      })
    }
  }, [isOpen])

  // Vérifier que les props sont valides
  if (!currentLanguage || !onLanguageChange) {
    return (
      <div className="px-3 py-2 text-sm text-white/70 bg-white/10 rounded-xl backdrop-blur-sm">
        <Globe className="w-4 h-4" />
      </div>
    )
  }

  const currentLang = supportedLanguages.find(lang => lang.code === currentLanguage) || supportedLanguages[0]

  // Vérifier que la langue actuelle est valide
  if (!currentLang) {
    return (
      <div className="px-3 py-2 text-sm text-white/70 bg-white/10 rounded-xl backdrop-blur-sm">
        <Globe className="w-4 h-4" />
      </div>
    )
  }

  const handleLanguageSelect = (languageCode: string) => {
    if (onLanguageChange && typeof onLanguageChange === 'function') {
      onLanguageChange(languageCode)
    }
    setIsOpen(false)
  }

  return (
    <>
      <div className="relative language-selector-container">
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={(e) => { if (e.key === 'Escape') setIsOpen(false) }}
          className="flex items-center space-x-1.5 md:space-x-2 px-2.5 py-1.5 md:px-4 md:py-2.5 text-sm text-white hover:text-yellow-300 transition-all duration-200 ease-out rounded-lg md:rounded-xl hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 group focus-visible:outline-none focus-visible:ring-2 md:focus-visible:ring-4 focus-visible:ring-white/20"
          aria-label="Changer de langue"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls="language-menu"
        >
          <Globe className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:rotate-12 transition-transform duration-200" />
          <span className="hidden sm:inline text-lg">{currentLang.flag}</span>
          <span className="hidden md:inline font-medium">{currentLang.name}</span>
          <ChevronDown className={`w-3.5 h-3.5 md:w-4 md:h-4 transition-all duration-200 ease-out ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Dropdown rendu via portail pour éviter les problèmes de z-index */}
      {isOpen && createPortal(
        <div 
          ref={dropdownRef}
          id="language-menu" 
          role="listbox" 
          className="fixed bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 overflow-hidden z-[999999] animate-in"
          style={{
            top: dropdownPosition.top,
            left: dropdownPosition.left,
            width: '224px', // w-56
            maxHeight: '256px' // max-h-64
          }}
        >
          {/* Zone de scroll pour les langues */}
          <div className="overflow-y-auto max-h-48 p-1.5 md:p-2">
            {supportedLanguages.map((language) => (
              <button
                key={language.code}
                role="option"
                aria-selected={language.code === currentLanguage}
                onClick={() => handleLanguageSelect(language.code)}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 text-left hover:bg-gray-50/80 transition-all duration-200 ease-out rounded-lg md:rounded-xl ${
                  language.code === currentLanguage 
                    ? 'bg-gradient-to-r from-flame-orange/10 to-purple-dark/10 text-flame-orange border border-flame-orange/20' 
                    : 'text-gray-700 hover:bg-gray-50/80'
                }`}
              >
                {/* Drapeau de la langue - bien visible */}
                <span className="text-xl md:text-2xl flex-shrink-0" role="img" aria-label={`Drapeau ${language.name}`}>
                  {language.flag}
                </span>
                
                {/* Nom de la langue */}
                <span className="flex-1 text-sm font-medium text-left">
                  {language.name}
                </span>
                
                {/* Indicateur de sélection */}
                {language.code === currentLanguage && (
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-gradient-to-r from-flame-orange to-purple-dark rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Footer du dropdown - toujours visible */}
          <div className="border-t border-gray-200/50 p-2 md:p-3 bg-gray-50/50">
            <div className="flex items-center justify-center space-x-1.5 md:space-x-2 text-xs text-gray-500">
              <Globe className="w-2.5 h-2.5 md:w-3 md:h-3" />
              <span className="text-xs">Langue sélectionnée</span>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
