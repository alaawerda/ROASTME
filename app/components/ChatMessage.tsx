'use client'

import { Bot, User, Copy, Check } from 'lucide-react'
import { Message } from '../types'
import { useState } from 'react'

interface ChatMessageProps {
  message: Message
  timeFormat?: Intl.LocalesArgument
}

export default function ChatMessage({ message, timeFormat }: ChatMessageProps) {
  const [copied, setCopied] = useState(false)

  // Vérifier que le message est valide
  if (!message || !message.role || !message.content) {
    return (
      <div className="flex justify-center py-2">
        <div className="text-gray-500 text-sm bg-gray-800/50 px-3 py-2 rounded-lg">
          Message invalide
        </div>
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
      return new Intl.DateTimeFormat(locale, { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }).format(timestamp)
    } catch {
      return new Intl.DateTimeFormat('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }).format(timestamp)
    }
  })()

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-6 w-full animate-in fade-in`}>
      <div className={`flex items-end gap-3 max-w-3xl group ${isUser ? 'flex-row-reverse' : ''}`}>
        
        {/* Avatar */}
        <div className={`mobile-avatar-optimized flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isUser 
            ? 'bg-gradient-to-br from-flame-orange to-flame-orange-light ring-2 ring-flame-orange/30' 
            : 'bg-gradient-to-br from-purple-dark to-purple-medium ring-2 ring-purple-dark/30'
        }`}>
          {isUser ? (
            <User className="w-4 h-4 text-white" />
          ) : (
            <Bot className="w-4 h-4 text-white" />
          )}
        </div>

        {/* Message bubble */}
        <div className={`mobile-app-bubble-native relative px-4 py-3 rounded-2xl max-w-2xl break-words transition-all duration-300 ${
          isUser 
            ? 'bg-gradient-to-br from-flame-orange to-flame-orange-light text-white shadow-lg shadow-flame-orange/20 rounded-br-none' 
            : 'bg-gray-800 text-gray-100 shadow-lg shadow-purple-dark/10 rounded-bl-none'
        } group-hover:shadow-xl`}>
          
          {/* Message content */}
          <div className="whitespace-pre-wrap text-base leading-relaxed font-medium">
            {message.content}
          </div>

          {/* Timestamp */}
          <div className={`text-xs mt-2 opacity-70 ${isUser ? 'text-white/80' : 'text-gray-400'}`}>
            {formattedTime}
          </div>

          {/* Copy button on hover for AI messages */}
          {!isUser && (
            <button
              onClick={handleCopy}
              className="absolute -top-10 right-0 p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-200 opacity-0 group-hover:opacity-100 shadow-lg"
              title="Copier le message"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4 text-gray-300" />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
