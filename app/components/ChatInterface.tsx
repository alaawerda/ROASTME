'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Sparkles, Lightbulb, MessageSquare, Zap } from 'lucide-react'
import { Message } from '../types'
import ChatMessage from './ChatMessage'
import QuickSuggestions from './QuickSuggestions'

interface ChatInterfaceProps {
  messages: Message[]
  isLoading: boolean
  onSendMessage: (content: string) => void
  translations?: any
  onChatOpen?: () => void
}

export default function ChatInterface({
  messages,
  isLoading,
  onSendMessage,
  translations = {},
  onChatOpen
}: ChatInterfaceProps) {
  const [inputValue, setInputValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto'
      const scrollHeight = Math.min(inputRef.current.scrollHeight, 200)
      inputRef.current.style.height = scrollHeight + 'px'
    }
  }, [inputValue])

  const handleSend = () => {
    if (inputValue.trim() && !isLoading) {
      onSendMessage(inputValue.trim())
      setInputValue('')
      // Auto-focus après l'envoi
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      e.stopPropagation()
      handleSend()
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion)
    onChatOpen?.()
  }

  const isEmpty = messages.length === 0

  return (
    <div className="flex flex-col h-full w-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Fond dégradé animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      
      {/* Messages container */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-flame-orange/40 scrollbar-track-transparent w-full"
      >
        {/* Empty state avec design moderne */}
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center h-full px-4 py-8">
            {/* Logo/Icon animé */}
            <div className="mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-flame-orange to-purple-dark rounded-full blur-3xl opacity-30 animate-pulse" />
              <div className="relative w-20 h-20 bg-gradient-to-br from-flame-orange to-purple-dark rounded-full flex items-center justify-center shadow-2xl">
                <Sparkles className="w-10 h-10 text-white animate-spin" style={{ animationDuration: '3s' }} />
              </div>
            </div>

            {/* Titre et sous-titre */}
            <div className="text-center mb-8 max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-flame-orange via-purple-light to-flame-orange-light bg-clip-text text-transparent mb-2">
                🔥 RoastMe IA
              </h1>
              <p className="text-base md:text-lg text-gray-400 mb-1">
                {translations?.chat?.welcome || 'L\'IA la plus cinglante du web'}
              </p>
              <p className="text-sm text-gray-500">
                {translations?.chat?.subtitle || 'Prêt à être roasté ? Dis-moi qui tu es!'}
              </p>
            </div>

            {/* Quick suggestions */}
            {messages.length === 0 && (
              <div className="w-full max-w-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 mb-4">
                  {[
                    {
                      icon: MessageSquare,
                      title: translations?.examples?.student?.category || 'Étudiant',
                      description: translations?.examples?.student?.text || 'Je suis étudiant...',
                      color: 'from-blue-500 to-cyan-500'
                    },
                    {
                      icon: Zap,
                      title: translations?.examples?.work?.category || 'Travail',
                      description: translations?.examples?.work?.text || 'Je travaille en IT...',
                      color: 'from-yellow-500 to-orange-500'
                    },
                    {
                      icon: Lightbulb,
                      title: translations?.examples?.lifestyle?.category || 'Lifestyle',
                      description: translations?.examples?.lifestyle?.text || 'Je suis accro aux réseaux...',
                      color: 'from-purple-500 to-pink-500'
                    }
                  ].map((item, idx) => {
                    const Icon = item.icon
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          handleSuggestionClick(item.description)
                        }}
                        className="group relative p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-flame-orange/20 text-left overflow-hidden"
                      >
                        {/* Gradient background on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                        
                        <div className="relative z-10">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <div className="text-xs font-semibold text-white mb-1 group-hover:text-flame-orange transition-colors">
                            {item.title}
                          </div>
                          <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors line-clamp-2">
                            {item.description}
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>

                {/* Tips section - Compact */}
                <div className="p-2 md:p-3 rounded-lg bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30">
                  <div className="flex gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-100">
                      {translations?.chat?.tip || '💡 Plus tu me donnes de détails sur toi, plus le roast sera précis et hilarant!'}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Messages list */
          <div className="w-full max-w-4xl mx-auto px-4 py-8">
            <div className="space-y-4">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message}
                  timeFormat={translations?.timeFormat || 'en-US'}
                />
              ))}
              
              {/* Quick suggestions after first AI message */}
              {messages.length === 1 && messages[0]?.role === 'assistant' && (
                <QuickSuggestions
                  onSuggestionClick={handleSuggestionClick}
                  translations={translations}
                />
              )}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-xs bg-gray-800 rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-flame-orange rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-flame-orange rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-flame-orange rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>
        )}
      </div>

      {/* Input section with glassmorphism */}
      <div className="w-full border-t border-gray-700/50 bg-gradient-to-b from-gray-900/50 to-gray-950 backdrop-blur-md relative sticky bottom-0 z-50">
        <div className="w-full max-w-4xl mx-auto px-4 py-4">
          <div className={`
            relative rounded-2xl transition-all duration-300
            ${isFocused 
              ? 'bg-gray-800/80 ring-2 ring-flame-orange/50 shadow-lg shadow-flame-orange/20' 
              : 'bg-gray-800/50 hover:bg-gray-800/60 ring-1 ring-gray-700/50'
            }
          `}>
            <textarea
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={translations?.chat?.inputPlaceholder || 'Écris ici qui tu es pour être roasté...'}
              className="w-full bg-transparent text-white placeholder-gray-500 outline-none resize-none px-4 py-3 text-base leading-relaxed"
              rows={1}
              style={{ maxHeight: '200px' }}
            />

            {/* Send button */}
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleSend()
              }}
              disabled={!inputValue.trim() || isLoading}
              className={`
                absolute right-3 bottom-3 p-2.5 rounded-lg font-semibold transition-all duration-300
                flex items-center justify-center
                ${inputValue.trim() && !isLoading
                  ? 'bg-gradient-to-r from-flame-orange to-flame-orange-light text-white hover:shadow-lg hover:shadow-flame-orange/40 transform hover:scale-105 active:scale-95'
                  : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }
              `}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>

          {/* Helper text */}
          <div className="mt-2 px-1 text-xs text-gray-500 flex items-center justify-between">
            <span>{translations?.chat?.hint || 'Appuie sur Entrée pour envoyer, Shift + Entrée pour aller à la ligne'}</span>
            <span>0/{translations?.chat?.maxChars || '5000'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
