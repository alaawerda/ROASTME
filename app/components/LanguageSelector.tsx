"use client"

import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Globe, ChevronDown, Check } from 'lucide-react'
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

  const handleLanguageSelect = (languageCode: LocaleKey) => {
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
          className="flex items-center space-x-2 px-3 py-2 md:px-4 md:py-2.5 text-sm text-white hover:text-yellow-300 transition-all duration-200 ease-out rounded-lg md:rounded-xl hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 group focus-visible:outline-none focus-visible:ring-2 md:focus-visible:ring-4 focus-visible:ring-white/20 shadow-lg hover:shadow-xl"
          aria-label="Changer de langue"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls="language-menu"
        >
          <Globe className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform duration-200" />
          <span className="hidden sm:inline text-lg">{currentLang.flag}</span>
          <span className="hidden md:inline font-medium">{currentLang.name}</span>
          <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-200 ease-out ${isOpen ? 'rotate-180' : ''}`} />
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
          }}
        >
          <div className="p-2">
            {supportedLanguages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language.code)}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 hover:bg-white/20 group ${
                  language.code === currentLanguage 
                    ? 'bg-yellow-400/20 text-yellow-700 border border-yellow-400/30' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                role="option"
                aria-selected={language.code === currentLanguage}
              >
                <span className="text-lg">{language.flag}</span>
                <div className="flex-1 min-w-0">
                  <div className={`font-medium ${language.code === currentLanguage ? 'text-yellow-700' : 'text-gray-700'}`}>
                    {language.name}
                  </div>
                  <div className={`text-xs ${language.code === currentLanguage ? 'text-yellow-600' : 'text-gray-500'}`}>
                    {language.native}
                  </div>
                </div>
                {language.code === currentLanguage && (
                  <Check className="w-4 h-4 text-yellow-600" />
                )}
              </button>
            ))}
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
