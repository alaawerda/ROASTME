'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, MessageSquare } from 'lucide-react'
import ChatMessage from './components/ChatMessage'
import { Message } from './types'
import { useLanguage } from './hooks/useLanguage'
import SEOManager from './components/SEOManager'
import ErrorBoundary from './components/ErrorBoundary'
import Header from './components/Header'
import LoadingSpinner from './components/LoadingSpinner'
import EmergencyLoader from './components/EmergencyLoader'
import Footer from './components/Footer'
import WelcomeCard from './components/WelcomeCard'
import MobileModal from './components/MobileModal'

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showEmergencyReload, setShowEmergencyReload] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  // @ts-ignore
  const [isAtBottom, setIsAtBottom] = useState(true);
  const [inputFocused, setInputFocused] = useState(false);
  const { currentLanguage, translations, changeLanguage, isInitialized } = useLanguage();
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // S'assurer que la zone des messages reste visible au chargement initial
  useEffect(() => {
    scrollToBottom()
  }, [])

  // Afficher le bouton d'urgence après 8 secondes si les traductions ne sont pas chargées
  useEffect(() => {
    if (!isInitialized) {
      const emergencyTimer = setTimeout(() => {
        setShowEmergencyReload(true)
      }, 8000)
      
      return () => clearTimeout(emergencyTimer)
    }
    return undefined
  }, [isInitialized])

  // Garder la concentration sur les messages lors des changements d'état de chargement
  useEffect(() => {
    if (isLoading) {
      scrollToBottom()
    }
  }, [isLoading])

  // Re-ancrer la vue sur les messages lors d'un redimensionnement de la fenêtre (ex: rotation mobile, clavier virtuel)
  useEffect(() => {
    const handleResize = () => scrollToBottom()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Mettre à jour l'état "à bas de page" selon le scroll du conteneur de chat
  const updateIsAtBottom = () => {
    const el = chatContainerRef.current
    if (!el) return
    const threshold = 8 // px de tolérance
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - threshold
    setIsAtBottom(atBottom)
  }

  // Écouter le scroll du conteneur et re-calculer sur resize
  useEffect(() => {
    updateIsAtBottom()
    const onResize = () => updateIsAtBottom()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Initialiser le message de bienvenue une seule fois
  useEffect(() => {
    try {
      if (translations?.welcomeMessage && !isInitialized) {
        setMessages([
          {
            id: '1',
            role: 'assistant',
            content: translations.welcomeMessage,
            timestamp: new Date()
          }
        ])
        // setIsInitialized(true) // This line was removed from the new_code, so it's removed here.
      }
    } catch (error) {
      console.error('Erreur lors de l\'initialisation du message de bienvenue:', error)
      setHasError(true)
      setErrorMessage('Erreur lors de l\'initialisation')
    }
  }, [translations, isInitialized])

  // Mettre à jour le message de bienvenue quand la langue change
  useEffect(() => {
    try {
      if (translations?.welcomeMessage && isInitialized && messages.length > 0) {
        setMessages(prev => {
          if (prev[0]?.role === 'assistant') {
            return [
              {
                ...prev[0],
                content: translations.welcomeMessage
              },
              ...prev.slice(1)
            ]
          }
          return prev
        })
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du message de bienvenue:', error)
    }
  }, [translations, isInitialized, messages.length])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading || !translations) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    // Vérifier l'ouverture du modal après le 3e message utilisateur
    try {
      if (typeof window !== 'undefined') {
        const userCount = messages.filter(m => m.role === 'user').length + 1
        const alreadyShown = localStorage.getItem('donatePromptShown') === '1'
        if (userCount >= 3 && !alreadyShown) {
          setIsDonateOpen(true)
          localStorage.setItem('donatePromptShown', '1')
        }
      }
    } catch {}
    setInput('')
    // Blur input to avoid keeping focus on the bottom bar after sending
    if (inputRef.current) inputRef.current.blur()
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          history: messages.slice(-10) // Garder seulement les 10 derniers messages
        }),
      })

      if (!response.ok) {
        throw new Error('Erreur réseau')
      }

      const data = await response.json()
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Erreur:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: translations?.networkError || 'Une erreur est survenue',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  // Gérer les erreurs avec un design moderne
  if (hasError) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/30 to-yellow-50/30">
        <div className="card max-w-md mx-auto text-center animate-in">
          <div className="text-6xl mb-6">😅</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Oups ! Une erreur s&apos;est produite
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Une erreur inattendue s&apos;est produite lors du chargement de l&apos;application.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="btn-primary w-full"
          >
            Recharger la page
          </button>
          {errorMessage && (
            <details className="mt-6 text-left">
              <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700 transition-colors">
                Détails de l&apos;erreur (pour les développeurs)
              </summary>
              <pre className="mt-3 p-4 bg-gray-100 rounded-xl text-xs text-gray-700 overflow-auto border">
                {errorMessage}
              </pre>
            </details>
          )}
        </div>
      </div>
    )
  }

  // Afficher un loader si les traductions ne sont pas encore chargées
  if (!translations || !isInitialized) {
    // Si le chargement d'urgence est activé, utiliser le composant d'urgence
    if (showEmergencyReload) {
      return <EmergencyLoader />
    }
    
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/30 to-yellow-50/30">
        <div className="card text-center animate-in">
          <LoadingSpinner message="Chargement des traductions..." size="lg" />
          
          {/* Bouton de rechargement de sécurité */}
          <div className="mt-6 space-y-3">
            <button
              onClick={() => window.location.reload()}
              className="btn-secondary text-sm"
            >
              🔄 Recharger la page
            </button>
            
            {/* Message d'aide */}
            <p className="text-xs text-gray-500">
              Si le chargement prend trop de temps, cliquez sur le bouton ci-dessus
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Vérifier que toutes les propriétés nécessaires sont disponibles
  if (!translations.title || !translations.welcomeMessage || !translations.inputPlaceholder) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/30 to-yellow-50/30">
        <div className="card text-center animate-in">
          <LoadingSpinner message="Vérification des traductions..." size="lg" />
        </div>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <>
        {/* Gestionnaire SEO dynamique */}
        <SEOManager />
        
        <div className="chat-layout bg-pattern">
          {/* Header avec logo animé */}
          <Header 
            title={translations.title || 'RoastMe Chat'} 
            poweredBy={translations.poweredBy || 'Powered by AI'} 
            currentLanguage={currentLanguage}
            onLanguageChange={changeLanguage}
          />
          
          {/* Container principal avec flexbox pour centrer le contenu */}
          <main className="chat-main">
            {/* Chat Container avec design moderne et centrage - Version compacte */}
            <div
              className="chat-container mobile-scroll-optimized p-2 sm:p-3 md:p-4 max-w-5xl mx-auto w-full mt-8 sm:mt-10 md:mt-12"
              ref={chatContainerRef}
              onScroll={updateIsAtBottom}
            >
              {/* Bienvenue: afficher uniquement avant le premier message */}
              {messages.length === 0 && <WelcomeCard />}
              
              {/* Zone de chat avec meilleur espacement - Version ultra-compacte pour mobile */}
              <div className="space-y-2 sm:space-y-3 md:space-y-4 max-w-3xl mx-auto">
                {messages.map((message) => (
                  <ChatMessage 
                    key={message.id} 
                    message={message} 
                    timeFormat={translations.timeFormat || 'en-US'} 
                  />
                ))}
                {isLoading && (
                  <div className="flex items-center justify-center py-4 sm:py-6 md:py-8">
                    <div className="card glass-effect max-w-md w-full animate-in">
                      <LoadingSpinner message={translations.preparingRoast || 'Préparation de votre roast...'} size="md" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
            
            {/* Input Form avec design moderne et positionnement fixe - Version ultra-compacte pour mobile */}
            <div className="input-container p-2 sm:p-3 md:p-4">
              <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                <div className="input-group">
                  {/* Adornment gauche de l'input */}
                  <span className={`input-adornment ${inputFocused || input.length > 0 ? 'input-adornment-active' : ''}`}>
                    <MessageSquare className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onFocus={() => { setInputFocused(true); scrollToBottom() }}
                    onBlur={() => setInputFocused(false)}
                    placeholder={translations.inputPlaceholder}
                    className={`input-styled mobile-text group-hover:border-flame-orange/50 transition-all duration-200 ${messages.length > 0 ? 'input-compact' : ''}`}
                    aria-label={translations.inputPlaceholder}
                    autoComplete="off"
                                          maxLength={500}
                    name="message"
                    disabled={isLoading}
                    ref={inputRef}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="send-button-enhanced disabled:opacity-50 disabled:cursor-not-allowed group"
                    aria-label="Envoyer"
                  >
                    {/* Icône principale */}
                    <Send className="w-5 h-5 transition-all duration-300 ease-out" />
                    
                    {/* Indicateur de chargement */}
                    {isLoading && (
                      <div className="send-loading">
                        <div className="loading-dot"></div>
                        <div className="loading-dot"></div>
                        <div className="loading-dot"></div>
                      </div>
                    )}
                    
                    {/* Tooltip informatif */}
                    <div className="send-tooltip">
                      {isLoading ? 'Envoi en cours...' : input.trim() ? 'Envoyer le message' : 'Tapez un message pour envoyer'}
                    </div>
                  </button>
                </div>
                
                {/* Helper row avec informations utiles - Version ultra-compacte pour mobile */}
                <div className="helper-row mt-1.5 sm:mt-2">
                  <div className="flex items-center justify-end w-full">
                    <span className="text-xs text-gray-400">
                      {input.length}/500
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </main>
          
          {/* Footer compact */}
          <Footer isInputFocused={inputFocused} />
          {/* Donation Modal */}
          <MobileModal
            isOpen={isDonateOpen}
            onClose={() => setIsDonateOpen(false)}
            title={translations.donateModalTitle || 'Enjoying the roast? ☕'}
            closeLabel={translations.donateClose || 'Close'}
          >
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                {translations.donateModalDescription || 'If you like the service, buy me a coffee to support the project. No pressure – just love and caffeine.'}
              </p>
              <a
                href={(process.env.NEXT_PUBLIC_BMC_URL as string) || 'https://www.buymeacoffee.com/'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
              >
                {translations.donateCta || 'Buy me a coffee'}
              </a>
            </div>
          </MobileModal>
        </div>
      </>
    </ErrorBoundary>
  );
}
