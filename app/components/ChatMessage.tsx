'use client'

import { Bot, User, Sparkles, Clock, Settings } from 'lucide-react'
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
  const isSystem = message.role === 'system'

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

  // Messages système avec style spécial centré et plus visible
  if (isSystem) {
    return (
      <div className="flex justify-center mb-4 md:mb-6 animate-in w-full">
        <div className="system-message-container relative group max-w-[95%] sm:max-w-[90%] md:max-w-[85%]">
          {/* Conteneur principal avec effets visuels améliorés */}
          <div className="system-message-bubble relative p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 backdrop-blur-lg border-2 border-blue-400/40 shadow-xl hover:shadow-2xl transition-all duration-300 ease-out">
            {/* Indicateur système avec animation */}
            <div className="flex items-center justify-center mb-3 md:mb-4">
              <div className="flex items-center space-x-2 md:space-x-3 px-3 md:px-4 py-2 md:py-2.5 bg-blue-500/80 rounded-full shadow-lg backdrop-blur-sm border border-blue-300/50">
                <Settings className="w-4 h-4 md:w-5 md:h-5 text-white animate-pulse" />
                <span className="text-white font-bold text-xs md:text-sm tracking-wide">SYSTÈME</span>
              </div>
            </div>
            
            {/* Contenu du message système avec typographie améliorée */}
            <div className="text-center">
              <div className="system-message-text text-white font-semibold text-sm md:text-base lg:text-lg leading-relaxed mb-3 md:mb-4 px-2">
                {message.content}
              </div>
              
              {/* Timestamp pour les messages système */}
              <div className="flex items-center justify-center space-x-2">
                <div className="flex items-center space-x-1.5 px-2 md:px-3 py-1 md:py-1.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                  <Clock className="w-3 h-3 md:w-3.5 md:h-3.5 text-white/90" />
                  <span className="text-white/90 font-medium text-xs md:text-sm">
                    {formattedTime || '--:--'}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Effet de brillance animé */}
            <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Bordure animée au survol */}
            <div className="absolute inset-0 rounded-xl md:rounded-2xl border-2 border-blue-300/60 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-blue-200/80"></div>
          </div>
          
          {/* Effet de lueur externe */}
          <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-blue-500/20 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 -z-10"></div>
        </div>
      </div>
    )
  }

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3 md:mb-4 animate-in w-full`}>
      <div className={`flex items-start max-w-[90%] sm:max-w-[85%] ${isUser ? 'flex-row-reverse' : ''}`}>
        {/* Avatar avec effets UX Excellence - Version ultra-compacte pour mobile */}
        <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center shadow-md interactive-element ${isUser 
          ? 'bg-gradient-to-br from-flame-orange to-flame-orange-light ring-2 ring-flame-orange/30 hover:ring-flame-orange/50 ml-3 md:ml-4 gentle-float' 
          : 'bg-gradient-to-br from-purple-dark to-purple-medium ring-2 ring-purple-dark/30 hover:ring-purple-dark/50 mr-3 md:mr-4 smooth-pulse'
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
        
        {/* Bulle de message UX Excellence avec largeur optimisée pour mobile - Version ultra-compacte */}
        <div className={`chat-bubble mobile-bubble-optimized relative group p-4 md:p-5 interactive-element ${isUser ? 'user-bubble mobile-contrast-user' : 'ai-bubble-solid mobile-contrast'} max-w-[calc(100%-3rem)] sm:max-w-[calc(100%-4rem)]`}>
          {/* Contenu du message avec meilleure typographie et largeur contrôlée - Version ultra-compacte */}
          <div className="whitespace-pre-wrap mobile-optimized-text leading-relaxed font-semibold max-w-full text-sm md:text-base mb-3" style={{ color: '#000000', fontWeight: '600' }}>
            {message.content}
          </div>
          
          {/* Timestamp avec icône et meilleur design - Version ultra-compacte pour mobile */}
          <div className={`flex items-center space-x-2 md:space-x-3 mt-2 md:mt-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`text-xs flex items-center space-x-1 md:space-x-1.5 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full ${isUser 
              ? 'text-white/80 bg-white/10 backdrop-blur-sm' 
              : 'text-gray-600 bg-gray-200/90 shadow-sm'
            }`}>
              <Clock className="w-2 md:w-2.5 h-2 md:h-2.5" />
              <span className="font-medium">
                {formattedTime || '--:--'}
              </span>
            </div>
            
            {/* Indicateur de statut pour l'IA - Version ultra-compacte pour mobile */}
            {!isUser && (
              <div className="flex items-center space-x-2 px-1 md:px-1.5 py-0.5 md:py-1 rounded-full bg-purple-500/90 text-white shadow-sm">
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
