import { useState, useRef, useEffect } from 'react'
import { Globe, ChevronDown } from 'lucide-react'
import { supportedLanguages } from '../hooks/useLanguage'

interface LanguageSelectorProps {
  currentLanguage: string
  onLanguageChange: (languageCode: string) => void
}

export default function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Vérifier que les props sont valides
  if (!currentLanguage || !onLanguageChange) {
    return (
      <div className="px-2.5 py-1.5 text-sm text-white/70">
        <Globe className="w-4 h-4" />
      </div>
    )
  }

  const currentLang = supportedLanguages.find(lang => lang.code === currentLanguage) || supportedLanguages[0]

  // Vérifier que la langue actuelle est valide
  if (!currentLang) {
    return (
      <div className="px-2.5 py-1.5 text-sm text-white/70">
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
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1.5 px-2.5 py-1.5 text-sm text-white hover:text-yellow-300 transition-colors rounded-lg hover:bg-white/10"
        aria-label="Changer de langue"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLang.flag}</span>
        <span className="hidden md:inline">{currentLang.name}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-60 overflow-y-auto">
          {supportedLanguages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageSelect(language.code)}
              className={`w-full flex items-center space-x-3 px-3 py-2.5 text-left hover:bg-gray-50 transition-colors ${
                language.code === currentLanguage ? 'bg-primary/10 text-primary' : 'text-gray-700'
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="flex-1 text-sm">{language.name}</span>
              {language.code === currentLanguage && (
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
