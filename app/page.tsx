'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Bot, User, Zap, Flame } from 'lucide-react'
import ChatMessage from './components/ChatMessage'
import { Message } from './types'
import { useLanguage } from './hooks/useLanguage'
import LanguageSelector from './components/LanguageSelector'

export default function Home() {
  const { currentLanguage, translations, changeLanguage } = useLanguage()
  
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Initialiser le message de bienvenue et le mettre à jour quand la langue change
  useEffect(() => {
    if (translations && translations.welcomeMessage) {
      if (messages.length === 0) {
        // Initialiser le message de bienvenue
        setMessages([
          {
            id: '1',
            role: 'assistant',
            content: translations.welcomeMessage,
            timestamp: new Date()
          }
        ])
      } else if (messages[0]?.role === 'assistant') {
        // Mettre à jour le message de bienvenue existant
        setMessages(prev => [
          {
            ...prev[0],
            content: translations.welcomeMessage
          },
          ...prev.slice(1)
        ])
      }
    }
  }, [translations, messages.length])

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
        content: translations.networkError,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  // Afficher un loader si les traductions ne sont pas encore chargées
  if (!translations) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-screen bg-light">
      {/* Header - More compact */}
      <header className="bg-gradient-to-r from-primary to-secondary text-white p-3 shadow-md">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Flame className="w-6 h-6 text-yellow-300" />
            <h1 className="text-xl font-bold">{translations.title}</h1>
          </div>
          <div className="flex items-center space-x-3">
            <LanguageSelector 
              currentLanguage={currentLanguage} 
              onLanguageChange={changeLanguage} 
            />
            <div className="hidden sm:flex items-center space-x-2 text-xs">
              <Zap className="w-3 h-3" />
              <span>{translations.poweredBy}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Container - More compact spacing */}
      <div className="flex-1 overflow-y-auto p-3 max-w-4xl mx-auto w-full">
        <div className="space-y-3">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} timeFormat={translations.timeFormat} />
          ))}
          {isLoading && (
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
              <span>{translations.preparingRoast}</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Form - More compact */}
      <div className="border-t bg-white p-3">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="flex space-x-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={translations.inputPlaceholder}
                className="w-full p-2.5 pr-10 border border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors text-sm"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-primary hover:text-primary/80 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-1.5 text-center">
            {translations.warningMessage}
          </p>
        </form>
      </div>
    </div>
  )
}
