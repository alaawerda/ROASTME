'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
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
import QuickSuggestions from './components/QuickSuggestions'


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
  const { currentLanguage, translations, changeLanguage } = useLanguageApp();
  const [isInitialized] = useState(true); // Simplified for now
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [userScrolledUp, setUserScrolledUp] = useState(false);

  // Utiliser des fallbacks pour les traductions manquantes
  const safeTranslations = {
    ...translations,
    title: translations?.title || 'RoastMe Chat',
    welcomeMessage: translations?.welcomeMessage || 'Bienvenue ! Écrivez votre message pour commencer.',
    inputPlaceholder: translations?.inputPlaceholder || 'Tapez votre message...',
    poweredBy: translations?.poweredBy || 'Propulsé par IA',
    timeFormat: translations?.timeFormat || 'fr-FR',
    preparingRoast: translations?.preparingRoast || 'Préparation en cours...',
    networkError: translations?.networkError || 'Erreur de réseau'
  };

  const scrollToMessages = useCallback(() => {
    if (chatContainerRef.current && !userScrolledUp) {
      // Utiliser requestAnimationFrame pour éviter les conflits de layout
      requestAnimationFrame(() => {
        if (chatContainerRef.current) {
          // Scroll intelligemment vers les messages sans cacher l'input
          const container = chatContainerRef.current;
          const scrollTop = container.scrollHeight - container.clientHeight;
          
          // Ne scroller que si nécessaire et garder un peu d'espace pour l'input
          container.scrollTo({
            top: Math.max(0, scrollTop - 50), // Laisser 50px d'espace
            behavior: 'smooth'
          });
        }
      });
    }
  }, [userScrolledUp])

  useEffect(() => {
    // Scroll intelligent vers les nouveaux messages sans cacher l'input
    if (messages.length > 1) { // Ne pas scroller pour le message de bienvenue seul
      scrollToMessages();
    }
  }, [messages, scrollToMessages]);

  // Pas de scroll forcé au chargement initial pour garder le message de bienvenue visible

  // Marquer le montage client pour éviter les problèmes d'hydratation
  useEffect(() => {
    console.log('🚀 [DEBUG] Début du montage du composant')
    setMounted(true)
    console.log('✅ [DEBUG] Composant monté avec succès')
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
      }, 0); // Always show chat immediately
      
      return () => clearTimeout(timer);
    }
    return undefined; // Return undefined when mounted is false
  }, [mounted])

  // Mettre le focus sur l'input au chargement initial, sans causer de scroll
  useEffect(() => {
    const focusTimeout = setTimeout(() => {
      // Utiliser preventScroll pour éviter de faire défiler la page
      inputRef.current?.focus({ preventScroll: true });
    }, 100);

    return () => clearTimeout(focusTimeout);
  }, []); // Le tableau vide assure que cet effet ne s'exécute qu'une seule fois

  // Debug des états
  useEffect(() => {
    console.log('📊 [DEBUG] États actuels:', {
      mounted,
      isInitialized,
      showEmergencyReload,
      currentLanguage,
      hasTranslations: !!translations
    })
  }, [mounted, isInitialized, showEmergencyReload, currentLanguage, translations])

  // Afficher le bouton d'urgence après 2 secondes si les traductions ne sont pas chargées
  useEffect(() => {
    if (!isInitialized) {
      console.log('⏰ [DEBUG] Démarrage du timer d\'urgence (2 secondes)')
      const emergencyTimer = setTimeout(() => {
        console.log('🚨 [DEBUG] Timer d\'urgence déclenché')
        setShowEmergencyReload(true)
      }, 2000) // Réduit à 2 secondes pour réaction plus rapide
      
      return () => {
        console.log('🚫 [DEBUG] Timer d\'urgence annulé')
        clearTimeout(emergencyTimer)
      }
    } else {
      // Réinitialiser l'état d'urgence si l'initialisation réussit
      console.log('✅ [DEBUG] Initialisation réussie, annulation de l\'urgence')
      setShowEmergencyReload(false)
    }
    return undefined
  }, [isInitialized])

  // Garder la concentration sur les messages lors des changements d'état de chargement
  useEffect(() => {
    if (isLoading) {
      // Délai plus court pour éviter le conflit avec l'input
      setTimeout(() => scrollToMessages(), 100)
    }
  }, [isLoading, scrollToMessages])

  // Re-ancrer la vue sur les messages lors d'un redimensionnement de la fenêtre (ex: rotation mobile, clavier virtuel)
  useEffect(() => {
    const handleResize = () => {
      // Délai pour éviter les conflits avec le clavier virtuel sur mobile
      setTimeout(() => scrollToMessages(), 300)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [scrollToMessages])

  // Mettre à jour l'état "à bas de page" selon le scroll du conteneur de chat
  const updateIsAtBottom = () => {
    const el = chatContainerRef.current
    if (!el) return
    const threshold = 8 // px de tolérance
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - threshold
    setIsAtBottom(atBottom)
    
    // Détecter si l'utilisateur a scrollé vers le haut
    const userScrolled = el.scrollTop < (el.scrollHeight - el.clientHeight - 100)
    setUserScrolledUp(userScrolled)
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
      if (safeTranslations.welcomeMessage && showChat && messages.length === 0) {
        setMessages([
          {
            id: '1',
            role: 'assistant',
            content: safeTranslations.welcomeMessage,
            timestamp: new Date()
          }
        ])
      }
    } catch (error) {
      console.error('Erreur lors de l\'initialisation du message de bienvenue:', error)
      setHasError(true)
      setErrorMessage('Erreur lors de l\'initialisation')
    }
  }, [safeTranslations.welcomeMessage, showChat, messages.length])

  // Mettre à jour le message de bienvenue quand la langue change
  useEffect(() => {
    try {
      if (safeTranslations.welcomeMessage && showChat && messages.length > 0) {
        setMessages(prev => {
          if (prev[0]?.role === 'assistant') {
            return [
              {
                ...prev[0],
                content: safeTranslations.welcomeMessage
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
  }, [safeTranslations.welcomeMessage, showChat, messages.length])

  // Gérer l'annulation des requêtes
  const abortControllerRef = useRef<AbortController | null>(null)

  const cancelRequest = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
      abortControllerRef.current = null
    }
    setIsLoading(false)
    
    // Ajouter un message informatif
    const cancelMessage: Message = {
      id: Date.now().toString(),
      role: 'assistant',
      content: "Requête annulée ! 🛑 Tu peux réessayer quand tu veux ! 😊",
      timestamp: new Date()
    }
    setMessages(prev => [...prev, cancelMessage])
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion)
    // Mettre le focus sur l'input après avoir sélectionné une suggestion
    setTimeout(() => {
      inputRef.current?.focus({ preventScroll: true })
    }, 100)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

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

    // Créer un nouveau AbortController pour cette requête
    abortControllerRef.current = new AbortController()

    // Timeout côté client pour éviter les blocages
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('timeout')), 20000) // 20 secondes côté client
    })

    try {
      const fetchPromise = fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          history: messages.slice(-10) // Garder seulement les 10 derniers messages
        }),
        signal: abortControllerRef.current?.signal // Intégrer l'AbortController
      })

      // Course entre la requête et le timeout
      const response = await Promise.race([fetchPromise, timeoutPromise]) as Response

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Erreur API:', response.status, errorText)
        throw new Error(`Erreur ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      
      // Gérer les cas où l'API retourne une erreur sous forme de message
      if (data.error) {
        throw new Error(data.error)
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message || "Désolé, je n'ai pas pu préparer ton roast ! 😅",
        timestamp: new Date()
      }

      setMessages(prev => [...prev, aiMessage])
      
      // Nettoyer l'AbortController après succès
      abortControllerRef.current = null
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      
      let errorContent = safeTranslations.networkError || 'Erreur de réseau'
      
      // Messages d'erreur personnalisés selon le type d'erreur
      if (error instanceof Error && error.name === 'AbortError') {
        // Requête annulée par l'utilisateur - on ne fait rien car le message est déjà ajouté
        return
      } else if (error instanceof Error && error.message === 'timeout') {
        errorContent = "Oups ! L'IA prend plus de temps que prévu... 🕐 Réessaie, elle va se réveiller ! 😴"
      } else if (error instanceof Error && error.message.includes('500')) {
        errorContent = "L'IA fait une pause café ☕ Réessaie dans quelques secondes ! 😅"
      } else if (error instanceof Error && error.message.includes('429')) {
        errorContent = "Trop de roasts à la fois ! 🔥 Attends quelques secondes et réessaie ! 😎"
      } else if (!navigator.onLine) {
        errorContent = "Tu es hors ligne ! 📶 Vérifie ta connexion et réessaie ! 🌐"
      }

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: errorContent,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
      
    } finally {
      // S'assurer que l'état de chargement est toujours réinitialisé
      setIsLoading(false)
      setHasError(false) // Réinitialiser l'état d'erreur globale
      
      // Re-focus l'input après l'envoi avec un petit délai pour assurer que le DOM est prêt
      setTimeout(() => {
        try {
          inputRef.current?.focus({ preventScroll: true }) // Empêcher le scroll automatique
          // Scroll intelligent vers les messages sans cacher l'input
          scrollToMessages()
        } catch (focusError) {
          console.warn('Impossible de remettre le focus:', focusError)
        }
      }, 100)
    }
  }

  // Gérer les erreurs avec un design moderne
  if (hasError) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="card max-w-md mx-auto text-center animate-in">
          <div className="text-6xl mb-6">😅</div>
          <h1 className="text-2xl font-bold text-gray-100 mb-4">
            {safeTranslations.error?.title || 'Oups ! Une erreur s\'est produite'}
          </h1>
          <p className="text-gray-300 mb-6 leading-relaxed">
            {safeTranslations.error?.description || 'Une erreur inattendue s\'est produite lors du chargement de l\'application.'}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="btn-primary w-full"
          >
            {safeTranslations.error?.retry || 'Recharger la page'}
          </button>
          {errorMessage && (
            <details className="mt-6 text-left">
              <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700 transition-colors">
                {safeTranslations.error?.reportIssue || 'Détails de l\'erreur (pour les développeurs)'}
              </summary>
              <pre className="mt-3 p-4 bg-gray-800 rounded-xl text-xs text-gray-300 overflow-auto border border-gray-700">
                {errorMessage}
              </pre>
            </details>
          )}
        </div>
      </div>
    )
  }

  // Afficher un loader très simple qui évite les blocages
  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-600 border-t-orange-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg font-bold text-orange-500 mb-4">Chargement...</p>
          <p className="text-sm text-gray-400 mb-6">Initialisation de l'application...</p>
          
          {/* Bouton de secours qui apparaît immédiatement */}
          <button
            onClick={() => {
              // Forcer l'initialisation
              setMounted(true);
              // Si ça ne fonctionne pas, recharger
              setTimeout(() => {
                if (!isInitialized) {
                  window.location.reload();
                }
              }, 1000);
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
          >
            🚀 Forcer le chargement
          </button>
        </div>
      </div>
    )
  }

  // Si l'initialisation prend plus de 2 secondes, forcer le chargement
  if (!isInitialized && showEmergencyReload) {
    return <EmergencyLoader />
  }

  return (
    <ErrorBoundary>
      <>
        {/* Gestionnaire SEO dynamique */}
        <SEOManager />
        
        {/* SEO spécialisé pour la page d'accueil */}
        <HomePageSEO 
          title={safeTranslations.chatRoastIA?.heroTitle || 'Chat Roast IA Gratuit'}
          description={safeTranslations.chatRoastIA?.heroSubtitle || "Découvre l'intelligence artificielle la plus cinglante qui va te roaster de manière hilarante sans filtres. Teste maintenant gratuitement notre IA de roast en 12 langues !"}
          currentLanguage={currentLanguage}
        />
        
        <div className="chat-layout bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          {/* Barre de progression de scroll */}
          <ScrollProgress />
          
          {/* Particules en arrière-plan */}
          <ParticlesBackground />
          
          {/* Header avec logo animé */}
          <Header 
            title={safeTranslations.title} 
            poweredBy={safeTranslations.poweredBy} 
            currentLanguage={currentLanguage}
            onLanguageChange={changeLanguage}
          />
          
          {/* Container principal avec flexbox pour centrer le contenu */}
          <main className="chat-main">
            {/* Chat Container avec design moderne et centrage - affiché en premier */}
            <section className="py-12 md:py-16 lg:py-20">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 animate-fade-in-up">
                    <span className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent gentle-float">
                      {safeTranslations.chatRoastIA?.liveChatTitle || '🔥 Roast Me - Chat Roast Gratuit en Direct'}
                    </span>
                  </h1>

                </div>
              
              <div
                className={`chat-container mobile-scroll-optimized max-w-5xl mx-auto w-full transition-all duration-1000 ease-in-out opacity-100 transform translate-y-0 scroll-mt-28 md:scroll-mt-40 animate-fade-in-up`}
                style={{ animationDelay: '0.4s' }}
              >
                {/* Fond avec effet de dégradé pour le chat */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700/30 via-gray-800/50 to-gray-700/30 rounded-3xl group-hover:from-gray-600/40 group-hover:via-gray-700/60 group-hover:to-gray-600/40 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Contenu du chat */}
                  <div className="relative glass-morphism rounded-3xl shadow-2xl overflow-hidden interactive-element flex flex-col h-[500px] md:h-[600px]">
                      {/* En-tête du chat - Version compacte */}
                      <div className="text-center p-3 md:p-4 border-b border-gray-600/30 bg-gradient-to-r from-gray-700/40 to-gray-800/30 flex-shrink-0">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs font-medium text-green-400">{safeTranslations.chatRoastIA?.status?.aiConnected || 'IA Connectée'}</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-xs text-gray-300 flex-wrap">
                          <span className="flex items-center gap-1">
                            🌍 <span className="font-medium">{safeTranslations.languageName || currentLanguage}</span>
                          </span>
                          <span className="text-gray-400">•</span>
                          <span className="flex items-center gap-1">
                            🔥 <span className="font-medium">{safeTranslations.chatRoastIA?.advantages?.personalizedTitle || 'Roast personnalisé'}</span>
                          </span>
                        </div>
                      </div>
                      
                      {/* Zone de chat avec scroll - FLEX-1 pour prendre l'espace disponible */}
                      <div ref={chatContainerRef} onScroll={updateIsAtBottom} className="chat-messages-container chat-scroll-optimization p-4 md:p-6 overflow-y-auto flex-1 relative">
                        {/* Bienvenue: afficher uniquement temporairement avant l'ouverture du chat */}
                        {!showChat && messages.length === 0 && (
                          <WelcomeCard onChatOpen={() => setShowChat(true)} />
                        )}
                        
                        {/* Zone de chat avec espacement réduit et centrage optimisé */}
                        <div className="chat-centered-content space-y-3 sm:space-y-4 max-w-4xl mx-auto">
                          <div ref={messagesTopRef} />
                          {messages.map((message) => (
                            <ChatMessage 
                              key={message.id} 
                              message={message} 
                              timeFormat={safeTranslations.timeFormat} 
                            />
                          ))}
                          
                          {/* Afficher les suggestions rapides seulement quand il y a le message de bienvenue */}
                          {messages.length === 1 && messages[0]?.role === 'assistant' && (
                            <QuickSuggestions 
                              onSuggestionClick={handleSuggestionClick}
                              translations={safeTranslations}
                            />
                          )}
                          
                          {/* Donation Modal dans la zone de chat */}
                          {isDonateOpen && (
                            <div className="relative z-20">
                              <DonationModal 
                                isOpen={isDonateOpen} 
                                onClose={() => setIsDonateOpen(false)} 
                                currentLanguage={currentLanguage}
                              />
                            </div>
                          )}
                          
                          {isLoading && (
                            <div className="flex items-center justify-center py-8 md:py-12">
                              <div className="card glass-effect max-w-md w-full animate-in">
                                <LoadingSpinner message={safeTranslations.preparingRoast} size="md" />
                                
                                {/* Bouton d'annulation */}
                                <div className="mt-6 text-center">
                                  <button
                                    onClick={cancelRequest}
                                    className="px-4 py-2 text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 border border-gray-300 hover:border-red-300 rounded-lg"
                                  >
                                    ❌ Annuler
                                  </button>
                                  <p className="text-xs text-gray-400 mt-2">
                                    Si le chargement semble bloqué, cliquez pour annuler
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        {/* Bouton pour revenir vers le bas si l'utilisateur a scrollé vers le haut */}
                        {userScrolledUp && (
                          <div className="fixed bottom-24 right-6 z-20">
                            <button
                              onClick={() => {
                                setUserScrolledUp(false);
                                scrollToMessages();
                              }}
                              className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                              aria-label="Revenir aux derniers messages"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                              </svg>
                            </button>
                          </div>
                        )}
                      </div>
                      
                      {/* Input FIXE en bas - FLEX-SHRINK-0 pour rester toujours visible */}
                      <div className="chat-input-section p-6 md:p-8 bg-gradient-to-r from-gray-800/60 to-gray-700/40 border-t border-gray-600/30 flex-shrink-0 backdrop-blur-md">
                          
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
                              placeholder={safeTranslations.inputPlaceholder}
                              className={`input-styled mobile-text group-hover:border-flame-orange/50 transition-all duration-200 ${messages.length > 0 ? 'input-compact' : ''}`}
                              aria-label={safeTranslations.inputPlaceholder}
                              autoComplete="off"
                              maxLength={500}
                              name="message"
                              disabled={isLoading}
                              ref={inputRef}
                            />
                            
                            <button
                              type="submit"
                              disabled={isLoading || !input.trim()}
                              className="send-button-enhanced group"
                              aria-label={safeTranslations.chat?.send || 'Envoyer'}
                            >
                              {/* Icône principale avec animation améliorée */}
                              <Send className={`w-5 h-5 transition-all duration-300 ease-out relative z-10 ${
                                input.trim() ? 'text-current' : 'text-gray-400'
                              } ${isLoading ? 'animate-spin' : ''}`} />
                              
                              {/* Indicateur de chargement amélioré */}
                              {isLoading && (
                                <div className="send-loading">
                                  <div className="loading-dot smooth-pulse"></div>
                                  <div className="loading-dot smooth-pulse"></div>
                                  <div className="loading-dot smooth-pulse"></div>
                                </div>
                              )}
                              
                              {/* Effet de brillance au survol */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-500 pointer-events-none z-0"></div>
                              
                              {/* Tooltip informatif amélioré */}
                              <div className="send-tooltip glass-morphism">
                                {isLoading ? (safeTranslations.loading?.title || 'Envoi en cours...') : input.trim() ? (safeTranslations.chat?.send || 'Envoyer le message') : (safeTranslations.chat?.placeholder || 'Tapez un message pour envoyer')}
                              </div>
                            </button>
                          </div>
                          
                          {/* Indicateur de progression et conseils */}
                          {messages.length <= 1 && (
                            <div className="mt-3 flex items-center justify-between text-xs">
                              <div className="flex items-center gap-2">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  input.length < 20 ? 'bg-red-100 text-red-600' :
                                  input.length < 50 ? 'bg-yellow-100 text-yellow-600' :
                                  'bg-green-100 text-green-600'
                                }`}>
                                  {input.length < 20 ? (safeTranslations.chat?.progressIndicators?.needMoreDetails || '📝 Ajoute plus de détails') :
                                   input.length < 50 ? (safeTranslations.chat?.progressIndicators?.goodProgress || '👍 Bien, continue !') :
                                   (safeTranslations.chat?.progressIndicators?.perfectForRoast || '🔥 Parfait pour un super roast !')}
                                </span>
                              </div>
                              <span className="text-gray-400">
                                {input.length}/500 {safeTranslations.chat?.progressIndicators?.charactersCount || 'caractères'}
                              </span>
                            </div>
                          )}
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
                      {safeTranslations.chatRoastIA?.features?.title || 'Pourquoi Roast Me est le Meilleur Chat Roast ? 🔥'}
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    {safeTranslations.chatRoastIA?.features?.subtitle || 'Découvre l\'expérience de roast la plus cinglante. Se faire roaster n\'a jamais été aussi hilarant !'}
                  </p>
                </div>
              
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                  {/* Carte 1 - Roast Sans Filtres */}
                  <div className="group relative feature-card h-full flex flex-col animate-fade-in-up">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                    <div className="relative bg-gray-800/90 backdrop-blur-md border border-gray-600/50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex-1 flex flex-col">
                      <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="text-4xl">🔥</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-100 mb-6 text-center">{safeTranslations.chatRoastIA?.features?.roastWithoutFilters || 'Roast Me Sans Pitié'}</h3>
                      <p className="text-gray-300 text-center leading-relaxed text-lg flex-grow">
                        {safeTranslations.chatRoastIA?.features?.roastWithoutFiltersDesc || 'L\'IA la plus cinglante qui va te roaster sans aucune pitié ! Se faire roaster n\'a jamais été aussi hilarant. Chaque roast est un chef-d\'œuvre d\'humour brutal !'}
                      </p>
                    </div>
                  </div>
                  
                  {/* Carte 2 - Chat en Temps Réel */}
                  <div className="group relative feature-card h-full flex flex-col animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                    <div className="relative bg-gray-800/90 backdrop-blur-md border border-gray-600/50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex-1 flex flex-col">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="text-4xl">💬</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-100 mb-6 text-center">{safeTranslations.chatRoastIA?.features?.realTimeChat || 'Roast Instantané'}</h3>
                      <p className="text-gray-300 text-center leading-relaxed text-lg flex-grow">
                        {safeTranslations.chatRoastIA?.features?.realTimeChatDesc || 'Roast instantané et réponses ultra-rapides ! Notre roast machine IA avancée te roast en temps réel. Prépare-toi à être roasté à la vitesse de l\'éclair !'}
                      </p>
                    </div>
                  </div>
                  
                  {/* Carte 3 - Support Multilingue */}
                  <div className="group relative feature-card h-full flex flex-col animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                    <div className="relative bg-gray-800/90 backdrop-blur-md border border-gray-600/50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex-1 flex flex-col">
                      <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="text-4xl">🌍</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-100 mb-6 text-center">{safeTranslations.chatRoastIA?.features?.multilingualSupport || 'Roast Me Multilingue'}</h3>
                      <p className="text-gray-300 text-center leading-relaxed text-lg flex-grow">
                        {safeTranslations.chatRoastIA?.features?.multilingualSupportDesc || 'Se faire roaster en 12 langues pour un roast personnalisé dans ta langue ! Le roast n\'a pas de frontières avec notre roast bot international !'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Section des avantages avec H2 optimisé - DESIGN AMÉLIORÉ */}
            <section className="py-20 md:py-24 bg-gradient-to-br from-gray-800/50 to-gray-700/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                      {safeTranslations.chatRoastIA?.advantages?.title || 'Avantages de Roast Me - Chat Roast Gratuit ✨'}
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    {safeTranslations.chatRoastIA?.advantages?.subtitle || 'Tout ce dont tu as besoin pour te faire roaster gratuitement, sans aucun coût'}
                  </p>
                </div>
              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  {/* Carte 1 - 100% Gratuit */}
                  <div className="group relative feature-card h-full flex flex-col animate-fade-in-up">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-700/90 border border-gray-600/50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex-1 flex flex-col">
                      <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="text-4xl">🚀</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-100 mb-6 text-center">{safeTranslations.chatRoastIA?.advantages?.freeTitle || 'Roast Me 100% Gratuit'}</h3>
                      <p className="text-gray-300 text-center leading-relaxed text-lg flex-grow">
                        {safeTranslations.chatRoastIA?.advantages?.freeDesc || 'Se faire roaster gratuitement sans aucune limite ! Accès illimité à notre roast bot sans coût caché. Commence à te faire roaster maintenant !'}
                      </p>
                    </div>
                  </div>
                  
                  {/* Carte 2 - Roast Personnalisé */}
                  <div className="group relative feature-card h-full flex flex-col animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-700/90 border border-gray-600/50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex-1 flex flex-col">
                      <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="text-4xl">🎯</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-100 mb-6 text-center">{safeTranslations.chatRoastIA?.advantages?.personalizedTitle || 'Roast Me Personnalisé'}</h3>
                      <p className="text-gray-300 text-center leading-relaxed text-lg flex-grow">
                        {safeTranslations.chatRoastIA?.advantages?.personalizedDesc || 'Chaque roast est unique ! Notre roast machine analyse tes messages pour te roaster personnellement. Se faire roaster n\'a jamais été aussi précis !'}
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
                      {safeTranslations.chatRoastIA?.howToUse?.title || 'Comment Se Faire Roaster avec Roast Me ? 📱'}
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    {safeTranslations.chatRoastIA?.howToUse?.subtitle || 'En 3 étapes simples, découvre comment te faire roaster par notre IA cinglante'}
                  </p>
                </div>
              
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                  {/* Étape 1 */}
                  <div className="group relative feature-card h-full flex flex-col animate-fade-in-up">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                    <div className="relative bg-gray-800/90 backdrop-blur-md border border-gray-600/50 rounded-3xl p-8 lg:p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex-1 flex flex-col">
                      <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        1
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-100 mb-6">{safeTranslations.chatRoastIA?.howToUse?.step1?.title || 'Écris ton message'}</h3>
                      <p className="text-gray-300 leading-relaxed text-lg flex-grow">
                        {safeTranslations.chatRoastIA?.howToUse?.step1?.description || 'Tape ce que tu veux dans la zone de chat. Plus tu donnes de contexte, plus le roast sera cinglant et personnalisé !'}
                      </p>
                    </div>
                  </div>
                  
                  {/* Étape 2 */}
                  <div className="group relative feature-card h-full flex flex-col animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                    <div className="relative bg-gray-800/90 backdrop-blur-md border border-gray-600/50 rounded-3xl p-8 lg:p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex-1 flex flex-col">
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        2
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-100 mb-6">{safeTranslations.chatRoastIA?.howToUse?.step2?.title || 'Clique sur Envoyer'}</h3>
                      <p className="text-gray-300 leading-relaxed text-lg flex-grow">
                        {safeTranslations.chatRoastIA?.howToUse?.step2?.description || 'Notre IA va analyser et préparer ton roast. En quelques secondes, tu recevras une réponse qui va te faire rire aux larmes !'}
                      </p>
                    </div>
                  </div>
                  
                  {/* Étape 3 */}
                  <div className="group relative feature-card h-full flex flex-col animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-green-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                    <div className="relative bg-gray-800/90 backdrop-blur-md border border-gray-600/50 rounded-3xl p-8 lg:p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex-1 flex flex-col">
                      <div className="w-24 h-24 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        3
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-100 mb-6">{safeTranslations.chatRoastIA?.howToUse?.step3?.title || 'Reçois ton roast'}</h3>
                      <p className="text-gray-300 leading-relaxed text-lg flex-grow">
                        {safeTranslations.chatRoastIA?.howToUse?.step3?.description || 'Profite de l\'humour cinglant de notre IA ! Chaque roast est traduit dans ta langue pour une expérience parfaitement personnalisée.'}
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
                  <div className="relative bg-gray-800/95 backdrop-blur-md border border-gray-600/30 rounded-3xl p-10 md:p-16 shadow-2xl">
                    <div className="text-center mb-12">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
                          {safeTranslations.chatRoastIA?.cta?.title || '🔥 Prêt à Te Faire Roaster ? 🔥'}
                        </span>
                      </h2>
                      <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        {safeTranslations.chatRoastIA?.cta?.subtitle || 'Rejoins des milliers d\'utilisateurs qui se font roaster quotidiennement avec Roast Me !'}
                      </p>
                    </div>
                  
                    {/* Statistiques */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                      <div className="text-center group">
                        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-600 mb-3 group-hover:scale-110 transition-transform duration-300">12</div>
                        <div className="text-gray-300 text-lg font-medium">{safeTranslations.chatRoastIA?.stats?.languages || 'Langues Supportées'}</div>
                      </div>
                      <div className="text-center group">
                        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-600 mb-3 group-hover:scale-110 transition-transform duration-300">100%</div>




                        <div className="text-gray-300 text-lg font-medium">{safeTranslations.chatRoastIA?.stats?.free || 'Gratuit'}</div>
                      </div>
                      <div className="text-center group">
                        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-600 mb-3 group-hover:scale-110 transition-transform duration-300">24/7</div>
                        <div className="text-gray-300 text-lg font-medium">{safeTranslations.chatRoastIA?.stats?.available || 'Disponible'}</div>
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
                        <span>{safeTranslations.chatRoastIA?.cta?.startNow || '🔥 Roast Me Maintenant'}</span>
                        <span className="animate-bounce">⬆️</span>
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
          
          {/* Donation Modal - Supprimé d'ici car maintenant dans la zone de chat */}

        </div>
      </>
    </ErrorBoundary>
  );
}
