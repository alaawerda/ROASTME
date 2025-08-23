'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, MessageSquare } from 'lucide-react'
import ChatMessage from './components/ChatMessage'
import { Message } from './types'
import { useLanguageApp } from './hooks/useLanguage'
import SEOManager from './components/SEOManager'
import ErrorBoundary from './components/ErrorBoundary'
import Header from './components/Header'
import LoadingSpinner from './components/LoadingSpinner'
import EmergencyLoader from './components/EmergencyLoader'
import Footer from './components/Footer'
import WelcomeCard from './components/WelcomeCard'
import ParticlesBackground from './components/ParticlesBackground'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import HomePageSEO from './components/HomePageSEO'
import './components/HomePage.css'
import DonationModal from './components/DonationModal'


export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showEmergencyReload, setShowEmergencyReload] = useState(false);
  const [showChat, setShowChat] = useState(true);
  const messagesTopRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  // @ts-ignore
  const [isAtBottom, setIsAtBottom] = useState(true);
  const [inputFocused, setInputFocused] = useState(false);
  const { currentLanguage, translations, changeLanguage, isInitialized } = useLanguageApp();
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      chatContainerRef.current.scrollTop = scrollHeight - clientHeight;
    }
  }

  useEffect(() => {
    // Force le scroll vers le bas à chaque nouveau message pour garder la conversation visible
    scrollToBottom();
  }, [messages]);

  // Pas de scroll forcé au chargement initial pour garder le message de bienvenue visible

  // Marquer le montage client pour éviter les problèmes d'hydratation
  useEffect(() => {
    setMounted(true)
    try {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual'
      }
    } catch {}
  }, [])

  // Le chat est visible par défaut pour une meilleure UX (pas de délai)
  useEffect(() => {
    if (mounted) {
      // Toujours montrer le chat après un court délai, même si l'initialisation échoue
      const timer = setTimeout(() => {
        setShowChat(true);
      }, isInitialized ? 0 : 1000); // Délai plus court si déjà initialisé
      
      return () => clearTimeout(timer);
    }
    return undefined; // Return undefined when mounted is false
  }, [mounted, isInitialized])

  // Mettre le focus sur l'input au chargement initial, sans causer de scroll
  useEffect(() => {
    const focusTimeout = setTimeout(() => {
      // Utiliser preventScroll pour éviter de faire défiler la page
      inputRef.current?.focus({ preventScroll: true });
    }, 100);

    return () => clearTimeout(focusTimeout);
  }, []); // Le tableau vide assure que cet effet ne s'exécute qu'une seule fois

  // Afficher le bouton d'urgence après 5 secondes si les traductions ne sont pas chargées
  useEffect(() => {
    if (!isInitialized) {
      const emergencyTimer = setTimeout(() => {
        setShowEmergencyReload(true)
      }, 5000) // Réduit de 8 à 5 secondes
      
      return () => clearTimeout(emergencyTimer)
    } else {
      // Réinitialiser l'état d'urgence si l'initialisation réussit
      setShowEmergencyReload(false)
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

  // Initialiser le message de bienvenue quand le chat s'ouvre
  useEffect(() => {
    try {
      if (translations?.welcomeMessage && showChat && messages.length === 0) {
        setMessages([
          {
            id: '1',
            role: 'assistant',
            content: translations.welcomeMessage,
            timestamp: new Date()
          }
        ])
      }
    } catch (error) {
      console.error('Erreur lors de l\'initialisation du message de bienvenue:', error)
      setHasError(true)
      setErrorMessage('Erreur lors de l\'initialisation')
    }
  }, [translations, showChat, messages.length])

  // Mettre à jour le message de bienvenue quand la langue change
  useEffect(() => {
    try {
      if (translations?.welcomeMessage && showChat && messages.length > 0) {
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
  }, [translations, showChat, messages.length])

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
        if (userCount >= 2 && !alreadyShown) {
          setIsDonateOpen(true)
          localStorage.setItem('donatePromptShown', '1')
        }
      }
    } catch {}
    setInput('')
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
      // Re-focus l'input après l'envoi avec un petit délai pour assurer que le DOM est prêt
      setTimeout(() => {
        inputRef.current?.focus()
      }, 0)
    }
  }

  // Gérer les erreurs avec un design moderne
  if (hasError) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/30 to-yellow-50/30">
        <div className="card max-w-md mx-auto text-center animate-in">
          <div className="text-6xl mb-6">😅</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {translations?.error?.title || 'Oups ! Une erreur s\'est produite'}
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {translations?.error?.description || 'Une erreur inattendue s\'est produite lors du chargement de l\'application.'}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="btn-primary w-full"
          >
            {translations?.error?.retry || 'Recharger la page'}
          </button>
          {errorMessage && (
            <details className="mt-6 text-left">
              <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700 transition-colors">
                {translations?.error?.reportIssue || 'Détails de l\'erreur (pour les développeurs)'}
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
  if (!mounted || !translations || !isInitialized) {
    // Si le chargement d'urgence est activé, utiliser le composant d'urgence
    if (showEmergencyReload) {
      return <EmergencyLoader />
    }
    
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/30 to-yellow-50/30">
        <div className="card text-center animate-in">
          <LoadingSpinner message={translations?.loading?.title || "Chargement des traductions..."} size="lg" />
          
          {/* Bouton de rechargement de sécurité */}
          <div className="mt-6 space-y-3">
            <button
              onClick={() => window.location.reload()}
              className="btn-secondary text-sm"
            >
              🔄 {translations?.error?.retry || 'Recharger la page'}
            </button>
            
            {/* Message d'aide */}
            <p className="text-xs text-gray-500">
              {translations?.loading?.description || 'Si le chargement prend trop de temps, cliquez sur le bouton ci-dessus'}
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Vérifier que toutes les propriétés nécessaires sont disponibles
  if (!translations.title || !translations.welcomeMessage || !translations.inputPlaceholder) {
    // Si les traductions ne sont pas complètes, afficher un loader avec fallback
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/30 to-yellow-50/30">
        <div className="card text-center animate-in">
          <LoadingSpinner message="Vérification des traductions..." size="lg" />
          
          {/* Bouton de rechargement de sécurité */}
          <div className="mt-6 space-y-3">
            <button
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
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

  return (
    <ErrorBoundary>
      <>
        {/* Gestionnaire SEO dynamique */}
        <SEOManager />
        
        {/* SEO spécialisé pour la page d'accueil */}
        <HomePageSEO 
          title={translations.chatRoastIA?.heroTitle || 'Chat Roast IA Gratuit'}
          description={translations.chatRoastIA?.heroSubtitle || "Découvre l'intelligence artificielle la plus cinglante qui va te roaster de manière hilarante sans filtres. Teste maintenant gratuitement notre IA de roast en 12 langues !"}
          currentLanguage={currentLanguage}
        />
        
        <div className="chat-layout bg-gradient-to-br from-gray-50 via-orange-50/30 to-yellow-50/30">
          {/* Barre de progression de scroll */}
          <ScrollProgress />
          
          {/* Particules en arrière-plan */}
          <ParticlesBackground />
          
          {/* Header avec logo animé */}
          <Header 
            title={translations.title || 'RoastMe Chat'} 
            poweredBy={translations.poweredBy || 'Powered by AI'} 
            currentLanguage={currentLanguage}
            onLanguageChange={changeLanguage}
          />
          
          {/* Container principal avec flexbox pour centrer le contenu */}
          <main className="chat-main">
            {/* Chat Container avec design moderne et centrage - affiché en premier */}
            <section className="py-16 md:py-20">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
                      {translations.chatRoastIA?.liveChatTitle || '💬 Chat Roast IA en Direct 🔥'}
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    {translations.chatRoastIA?.liveChatSubtitle || 'Teste maintenant notre IA cinglante ! Chaque message est automatiquement traduit dans ta langue.'}
                  </p>
                </div>
              
              <div
                className={`chat-container mobile-scroll-optimized max-w-5xl mx-auto w-full transition-all duration-1000 ease-in-out opacity-100 transform translate-y-0 scroll-mt-28 md:scroll-mt-40`}
                onScroll={updateIsAtBottom}
              >
                {/* Fond avec effet de dégradé pour le chat */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-red-50/30 to-orange-50/50 rounded-3xl"></div>
                  
                  {/* Contenu du chat */}
                  <div className="relative bg-white/95 backdrop-blur-md border border-orange-200/30 rounded-3xl shadow-2xl overflow-hidden">
                      {/* En-tête du chat - Version compacte */}
                      <div className="text-center p-3 md:p-4 border-b border-orange-200/30 bg-gradient-to-r from-orange-50/40 to-red-50/30">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs font-medium text-green-700">{translations.chatRoastIA?.status?.aiConnected || 'IA Connectée'}</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-xs text-gray-600 flex-wrap">
                          <span className="flex items-center gap-1">
                            🌍 <span className="font-medium">{translations.languageName || currentLanguage}</span>
                          </span>
                          <span className="text-gray-400">•</span>
                          <span className="flex items-center gap-1">
                            🔥 <span className="font-medium">{translations.chatRoastIA?.advantages?.personalizedTitle || 'Roast personnalisé'}</span>
                          </span>
                        </div>
                      </div>
                      
                      {/* Zone de chat avec scroll - Ajustement des marges */}
                      <div ref={chatContainerRef} className="chat-messages-container p-4 md:p-6 min-h-[180px] max-h-[500px] md:max-h-[600px] overflow-y-auto">
                        {/* Bienvenue: afficher uniquement temporairement avant l'ouverture du chat */}
                        {!showChat && messages.length === 0 && (
                          <WelcomeCard onChatOpen={() => setShowChat(true)} />
                        )}
                        
                        {/* Zone de chat avec espacement réduit */}
                        <div className="space-y-3 sm:space-y-4 max-w-4xl mx-auto">
                          <div ref={messagesTopRef} />
                          {messages.map((message) => (
                            <ChatMessage 
                              key={message.id} 
                              message={message} 
                              timeFormat={translations.timeFormat || 'en-US'} 
                            />
                          ))}
                          {isLoading && (
                            <div className="flex items-center justify-center py-8 md:py-12">
                              <div className="card glass-effect max-w-md w-full animate-in">
                                <LoadingSpinner message={translations.preparingRoast || 'Préparation de votre roast...'} size="md" />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Input intégré dans le même conteneur */}
                      <div className="chat-input-section p-8 md:p-10 pt-6 bg-gradient-to-r from-gray-50/60 to-orange-50/40 border-t border-orange-200/30">
                          
                        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
                          <div className="input-group relative">
                            {/* Adornment gauche de l'input */}
                            <span className={`input-adornment ${inputFocused || input.length > 0 ? 'input-adornment-active' : ''}`}>
                              <MessageSquare className="w-5 h-5" />
                            </span>
                            
                            <input
                              type="text"
                              value={input}
                              onChange={(e) => setInput(e.target.value)}
                              onFocus={() => { setInputFocused(true); }}
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
                              aria-label={translations.chat?.send || 'Envoyer'}
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
                                {isLoading ? (translations.loading?.title || 'Envoi en cours...') : input.trim() ? (translations.chat?.send || 'Envoyer le message') : (translations.chat?.placeholder || 'Tapez un message pour envoyer')}
                              </div>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Section des fonctionnalités principales avec H2 optimisés - DESIGN AMÉLIORÉ */}
            <section className="py-20 md:py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
                      {translations.chatRoastIA?.features?.title || 'Pourquoi Choisir Notre Chat Roast IA ? 🤖'}
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    {translations.chatRoastIA?.features?.subtitle || 'Découvre l\'expérience de roast la plus avancée et hilarante jamais créée'}
                  </p>
                </div>
              
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                  {/* Carte 1 - Roast Sans Filtres */}
                  <div className="group relative feature-card h-full flex flex-col animate-fade-in-up">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                    <div className="relative bg-white/90 backdrop-blur-md border border-orange-200/50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex-1 flex flex-col">
                      <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="text-4xl">🔥</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 text-center">{translations.chatRoastIA?.features?.roastWithoutFilters || 'Roast Sans Filtres'}</h3>
                      <p className="text-gray-600 text-center leading-relaxed text-lg flex-grow">
                        {translations.chatRoastIA?.features?.roastWithoutFiltersDesc || 'L\'IA la plus cinglante qui va te roaster de manière hilarante sans aucune censure. Chaque réponse est un chef-d\'œuvre d\'humour cinglant !'}
                      </p>
                    </div>
                  </div>
                  
                  {/* Carte 2 - Chat en Temps Réel */}
                  <div className="group relative feature-card h-full flex flex-col animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                    <div className="relative bg-white/90 backdrop-blur-md border border-blue-200/50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex-1 flex flex-col">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="text-4xl">💬</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 text-center">{translations.chatRoastIA?.features?.realTimeChat || 'Chat en Temps Réel'}</h3>
                      <p className="text-gray-600 text-center leading-relaxed text-lg flex-grow">
                        {translations.chatRoastIA?.features?.realTimeChatDesc || 'Conversations fluides et réponses instantanées grâce à notre intelligence artificielle avancée. Laisse-toi surprendre par la rapidité et la qualité !'}
                      </p>
                    </div>
                  </div>
                  
                  {/* Carte 3 - Support Multilingue */}
                  <div className="group relative feature-card h-full flex flex-col animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                    <div className="relative bg-white/90 backdrop-blur-md border border-green-200/50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex-1 flex flex-col">
                      <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="text-4xl">🌍</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 text-center">{translations.chatRoastIA?.features?.multilingualSupport || 'Support Multilingue'}</h3>
                      <p className="text-gray-600 text-center leading-relaxed text-lg flex-grow">
                        {translations.chatRoastIA?.features?.multilingualSupportDesc || 'Disponible en 12 langues pour un roast personnalisé dans ta langue maternelle. L\'humour n\'a pas de frontières !'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Section des avantages avec H2 optimisé - DESIGN AMÉLIORÉ */}
            <section className="py-20 md:py-24 bg-gradient-to-br from-gray-50/50 to-orange-50/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                      {translations.chatRoastIA?.advantages?.title || 'Avantages du Chat Roast IA Gratuit ✨'}
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    {translations.chatRoastIA?.advantages?.subtitle || 'Tout ce dont tu as besoin pour des roasts hilarants, sans aucun coût'}
                  </p>
                </div>
              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  {/* Carte 1 - 100% Gratuit */}
                  <div className="group relative feature-card h-full flex flex-col animate-fade-in-up">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-yellow-50 to-orange-100 border border-yellow-200/50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex-1 flex flex-col">
                      <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="text-4xl">🚀</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 text-center">{translations.chatRoastIA?.advantages?.freeTitle || '100% Gratuit'}</h3>
                      <p className="text-gray-600 text-center leading-relaxed text-lg flex-grow">
                        {translations.chatRoastIA?.advantages?.freeDesc || 'Accès illimité à toutes les fonctionnalités sans aucun coût caché. Profite de l\'expérience complète dès maintenant !'}
                      </p>
                    </div>
                  </div>
                  
                  {/* Carte 2 - Roast Personnalisé */}
                  <div className="group relative feature-card h-full flex flex-col animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-red-50 to-pink-100 border border-red-200/50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex-1 flex flex-col">
                      <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="text-4xl">🎯</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 text-center">{translations.chatRoastIA?.advantages?.personalizedTitle || 'Roast Personnalisé'}</h3>
                      <p className="text-gray-600 text-center leading-relaxed text-lg flex-grow">
                        {translations.chatRoastIA?.advantages?.personalizedDesc || 'Chaque roast est unique et adapté à tes messages pour un maximum d\'humour. L\'IA analyse ton style et s\'adapte à ta personnalité !'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Section comment ça marche avec H2 optimisé - DESIGN AMÉLIORÉ */}
            <section className="py-20 md:py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                      {translations.chatRoastIA?.howToUse?.title || 'Comment Utiliser le Chat Roast IA ? 📱'}
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    {translations.chatRoastIA?.howToUse?.subtitle || 'En 3 étapes simples, découvre le pouvoir de notre IA cinglante'}
                  </p>
                </div>
              
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                  {/* Étape 1 */}
                  <div className="group relative feature-card h-full flex flex-col animate-fade-in-up">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                    <div className="relative bg-white/90 backdrop-blur-md border border-purple-200/50 rounded-3xl p-8 lg:p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex-1 flex flex-col">
                      <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        1
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6">{translations.chatRoastIA?.howToUse?.step1?.title || 'Écris ton message'}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg flex-grow">
                        {translations.chatRoastIA?.howToUse?.step1?.description || 'Tape ce que tu veux dans la zone de chat. Plus tu donnes de contexte, plus le roast sera cinglant et personnalisé !'}
                      </p>
                    </div>
                  </div>
                  
                  {/* Étape 2 */}
                  <div className="group relative feature-card h-full flex flex-col animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                    <div className="relative bg-white/90 backdrop-blur-md border border-blue-200/50 rounded-3xl p-8 lg:p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex-1 flex flex-col">
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        2
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6">{translations.chatRoastIA?.howToUse?.step2?.title || 'Clique sur Envoyer'}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg flex-grow">
                        {translations.chatRoastIA?.howToUse?.step2?.description || 'Notre IA va analyser et préparer ton roast. En quelques secondes, tu recevras une réponse qui va te faire rire aux larmes !'}
                      </p>
                    </div>
                  </div>
                  
                  {/* Étape 3 */}
                  <div className="group relative feature-card h-full flex flex-col animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-green-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                    <div className="relative bg-white/90 backdrop-blur-md border border-teal-200/50 rounded-3xl p-8 lg:p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex-1 flex flex-col">
                      <div className="w-24 h-24 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        3
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6">{translations.chatRoastIA?.howToUse?.step3?.title || 'Reçois ton roast'}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg flex-grow">
                        {translations.chatRoastIA?.howToUse?.step3?.description || 'Profite de l\'humour cinglant de notre IA ! Chaque roast est traduit dans ta langue pour une expérience parfaitement personnalisée.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Section de mise en avant du chat - NOUVELLE SECTION */}
            <section className="py-20 md:py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                  {/* Fond avec effet de dégradé */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 rounded-3xl"></div>
                  
                  {/* Contenu principal */}
                  <div className="relative bg-white/95 backdrop-blur-md border border-orange-200/30 rounded-3xl p-10 md:p-16 shadow-2xl">
                    <div className="text-center mb-12">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
                          {translations.chatRoastIA?.cta?.title || '🚀 Prêt à Être Roasté ? 🚀'}
                        </span>
                      </h2>
                      <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        {translations.chatRoastIA?.cta?.subtitle || 'Rejoins des milliers d\'utilisateurs qui ont déjà découvert le pouvoir de notre IA cinglante !'}
                      </p>
                    </div>
                  
                    {/* Statistiques */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                      <div className="text-center group">
                        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-600 mb-3 group-hover:scale-110 transition-transform duration-300">12</div>
                        <div className="text-gray-600 text-lg font-medium">{translations.chatRoastIA?.stats?.languages || 'Langues Supportées'}</div>
                      </div>
                      <div className="text-center group">
                        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 mb-3 group-hover:scale-110 transition-transform duration-300">100%</div>
                        <div className="text-gray-600 text-lg font-medium">{translations.chatRoastIA?.stats?.free || 'Gratuit'}</div>
                      </div>
                      <div className="text-center group">
                        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-600 mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
                        <div className="text-gray-600 text-lg font-medium">{translations.chatRoastIA?.stats?.available || 'Disponible'}</div>
                      </div>
                    </div>
                    
                    {/* Call-to-action */}
                    <div className="text-center">
                      <button
                        onClick={() => {
                          const chatElement = document.querySelector('.chat-container');
                          if (chatElement) {
                            chatElement.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="inline-flex items-center gap-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-5 rounded-3xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:from-orange-400 hover:to-red-400 cta-button neon-glow"
                      >
                        <span>{translations.chatRoastIA?.cta?.startNow || '🔥 Commencer Maintenant'}</span>
                        <span className="animate-bounce">⬇️</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            

          </main>
          

          
          {/* Footer compact */}
          <Footer isInputFocused={inputFocused} />
          
          {/* Bouton de retour en haut */}
          <ScrollToTop />
          
          {/* Donation Modal */}
          <DonationModal 
            isOpen={isDonateOpen} 
            onClose={() => setIsDonateOpen(false)} 
            currentLanguage={currentLanguage}
          />

        </div>
      </>
    </ErrorBoundary>
  );
}
