'use client'

import { useState, useCallback, useEffect } from 'react'
import ChatInterface from './components/ChatInterface'
import { Message } from './types'
import { useLanguageApp } from './hooks/useLanguage'
import SEOManager from './components/SEOManager'
import ErrorBoundary from './components/ErrorBoundary'
import Header from './components/Header'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import HomePageSEO from './components/HomePageSEO'
import MobileOptimizedLayout from './components/MobileOptimizedLayout'

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { currentLanguage, translations, changeLanguage } = useLanguageApp()

  // Utiliser des fallbacks pour les traductions manquantes
  const safeTranslations = {
    ...translations,
    title: translations?.title || 'RoastMe Chat',
    poweredBy: translations?.poweredBy || 'Propulsé par IA',
    timeFormat: translations?.timeFormat || 'fr-FR',
    chat: {
      welcome: translations?.chat?.welcome || "L'IA la plus cinglante du web",
      subtitle: translations?.chat?.subtitle || "Prêt à être roasté ? Dis-moi qui tu es!",
      inputPlaceholder: translations?.chat?.inputPlaceholder || "Écris ici qui tu es pour être roasté...",
      hint: translations?.chat?.hint || "Appuie sur Entrée pour envoyer, Shift + Entrée pour aller à la ligne",
      tip: translations?.chat?.tip || "💡 Plus tu me donnes de détails sur toi, plus le roast sera précis et hilarant!",
    },
    examples: {
      student: {
        category: translations?.examples?.student?.category || "Étudiant",
        text: translations?.examples?.student?.text || "Je suis étudiant, j'adore les jeux vidéo mais je suis nul en sport"
      },
      work: {
        category: translations?.examples?.work?.category || "Travail",
        text: translations?.examples?.work?.text || "J'ai 25 ans, je travaille dans l'informatique et je vis encore chez mes parents"
      },
      lifestyle: {
        category: translations?.examples?.lifestyle?.category || "Lifestyle",
        text: translations?.examples?.lifestyle?.text || "Je suis accro aux réseaux sociaux et je mange que des pizzas"
      }
    }
  }

  // Marquer le montage client pour éviter les problèmes d'hydratation
  useEffect(() => {
    setMounted(true)
    try {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual'
      }
    } catch {}
  }, [])

  // Envoyer le message à l'API
  const handleSendMessage = useCallback(async (content: string) => {
    // Ajouter le message utilisateur
    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      role: 'user',
      content,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])

    // Afficher l'indicateur de chargement
    setIsLoading(true)

    try {
      // Appeler l'API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: content,
          language: currentLanguage,
        })
      })

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      const data = await response.json()
      
      // Ajouter le message IA
      const aiMessage: Message = {
        id: `msg-${Date.now()}-ai`,
        role: 'assistant',
        content: data.response || data.message || "Désolé, une erreur s'est produite.",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
      
    } catch (error) {
      console.error('Chat error:', error)
      
      // Ajouter un message d'erreur
      const errorMessage: Message = {
        id: `msg-${Date.now()}-error`,
        role: 'system',
        content: "Désolé, une erreur s'est produite. Veuillez réessayer.",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }, [currentLanguage])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-600 border-t-flame-orange rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg font-bold text-flame-orange mb-4">Chargement...</p>
          <p className="text-sm text-gray-400">Initialisation de l'application...</p>
        </div>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <MobileOptimizedLayout>
        {/* Gestionnaire SEO dynamique */}
        <SEOManager />
        
        {/* SEO spécialisé pour la page d'accueil */}
        <HomePageSEO 
          title={safeTranslations.chatRoastIA?.heroTitle || 'Chat Roast IA Gratuit'}
          description={safeTranslations.chatRoastIA?.heroSubtitle || "Découvre l'intelligence artificielle la plus cinglante qui va te roaster de manière hilarante sans filtres. Teste maintenant gratuitement notre IA de roast en 12 langues !"}
          currentLanguage={currentLanguage}
        />
        
        <div className="chat-layout bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 min-h-screen flex flex-col">
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
          
          {/* Container principal - ChatInterface */}
          <main className="chat-main flex-1 flex flex-col">
            <ChatInterface
              messages={messages}
              isLoading={isLoading}
              onSendMessage={handleSendMessage}
                              translations={safeTranslations}
              onChatOpen={() => {}}
            />
          </main>
          
          {/* Footer */}
          <Footer />
          
          {/* Bouton scroll to top */}
          <ScrollToTop />
        </div>
      </MobileOptimizedLayout>
    </ErrorBoundary>
  )
}
