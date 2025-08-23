'use client'

import { Bot, User, Sparkles, Clock } from 'lucide-react'
import { Message } from '../types'

interface ChatMessageProps {
  message: Message
  timeFormat?: Intl.LocalesArgument
}

export default function ChatMessage({ message, timeFormat }: ChatMessageProps) {
  // Vérifier que le message est valide
  if (!message || !message.role || !message.content) {
    return (
      <div className="flex justify-center animate-in">
        <div className="text-gray-500 text-sm bg-gray-100 px-3 py-2 rounded-lg">Message invalide</div>
      </div>
    )
  }

  const isUser = message.role === 'user'

  // Normaliser et vérifier que le timestamp est valide
  let timestamp: Date
  try {
    const raw = (message as any)?.timestamp
    const parsed = raw instanceof Date ? raw : new Date(raw ?? Date.now())
    timestamp = isNaN(parsed.getTime()) ? new Date() : parsed
  } catch {
    timestamp = new Date()
  }

  // Déterminer la locale de formatage avec fallback
  const locale: Intl.LocalesArgument = timeFormat || 'en-US'
  const formattedTime = (() => {
    try {
      return new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit' }).format(timestamp)
    } catch {
      // Fallback robuste
      return new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit' }).format(timestamp)
    }
  })()

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3 md:mb-4 animate-in w-full`}>
      <div className={`flex items-start max-w-[90%] sm:max-w-[85%] ${isUser ? 'flex-row-reverse' : ''}`}>
        {/* Avatar avec effets modernisés et distinction claire - Version ultra-compacte pour mobile */}
        <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center shadow-md transition-all duration-200 ease-out hover:scale-105 ${isUser 
          ? 'bg-gradient-to-br from-flame-orange to-flame-orange-light ring-2 ring-flame-orange/30 hover:ring-flame-orange/50 ml-3 md:ml-4' 
          : 'bg-gradient-to-br from-purple-dark to-purple-medium ring-2 ring-purple-dark/30 hover:ring-purple-dark/50 mr-3 md:mr-4'
        }`}>
          {isUser ? (
            <User className="w-4 h-4 md:w-5 md:h-5 text-white" />
          ) : (
            <div className="relative">
              <Bot className="w-4 h-4 md:w-5 md:h-5 text-white" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 md:w-3 md:h-3 bg-flame-yellow rounded-full animate-pulse shadow-md"></div>
            </div>
          )}
        </div>
        
        {/* Bulle de message modernisée avec largeur optimisée pour mobile - Version ultra-compacte */}
        <div className={`chat-bubble mobile-bubble-optimized relative group p-4 md:p-5 ${isUser ? 'user-bubble mobile-contrast-user' : 'ai-bubble mobile-contrast'} max-w-[calc(100%-3rem)] sm:max-w-[calc(100%-4rem)]`}>
          {/* Contenu du message avec meilleure typographie et largeur contrôlée - Version ultra-compacte */}
          <div className="whitespace-pre-wrap mobile-optimized-text leading-relaxed font-medium max-w-full text-sm md:text-base mb-3">
            {message.content}
          </div>
          
          {/* Timestamp avec icône et meilleur design - Version ultra-compacte pour mobile */}
          <div className={`flex items-center space-x-2 md:space-x-3 mt-2 md:mt-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`text-xs flex items-center space-x-1 md:space-x-1.5 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full ${isUser 
              ? 'text-white/80 bg-white/10 backdrop-blur-sm' 
              : 'text-gray-500 bg-gray-100/80'
            }`}>
              <Clock className="w-2 md:w-2.5 h-2 md:h-2.5" />
              <span className="font-medium">
                {formattedTime || '--:--'}
              </span>
            </div>
            
            {/* Indicateur de statut pour l'IA - Version ultra-compacte pour mobile */}
            {!isUser && (
              <div className="flex items-center space-x-2 px-1 md:px-1.5 py-0.5 md:py-1 rounded-full bg-purple-100/80 text-purple-600">
                <Sparkles className="w-2 md:w-2.5 h-2 md:h-2.5" />
                <span className="text-xs font-medium">IA</span>
              </div>
            )}
          </div>
          
          {/* Effet de survol amélioré - Version ultra-compacte */}
          <div className={`absolute inset-0 rounded-lg md:rounded-xl opacity-0 group-hover:opacity-100 mobile-animation-optimized ${isUser 
            ? 'bg-gradient-to-r from-flame-orange/10 to-flame-orange-light/10' 
            : 'bg-gradient-to-r from-purple-dark/10 to-purple-medium/10'
          }`}></div>
          
          {/* Bordure subtile au survol - Version ultra-compacte */}
          <div className={`absolute inset-0 rounded-lg md:rounded-xl border-2 opacity-0 group-hover:opacity-100 mobile-animation-optimized ${isUser 
            ? 'border-flame-orange/20' 
            : 'border-purple-dark/20'
          }`}></div>
        </div>
      </div>
    </div>
  )
}
