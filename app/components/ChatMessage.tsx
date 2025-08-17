import { Bot, User } from 'lucide-react'
import { Message } from '../types'

interface ChatMessageProps {
  message: Message
  timeFormat: string
}

export default function ChatMessage({ message, timeFormat }: ChatMessageProps) {
  // Vérifier que le message est valide
  if (!message || !message.role || !message.content) {
    return (
      <div className="flex justify-center">
        <div className="text-gray-500 text-sm">Message invalide</div>
      </div>
    )
  }

  const isUser = message.role === 'user'
  
  // Vérifier que le timestamp est valide
  const timestamp = message.timestamp instanceof Date ? message.timestamp : new Date()
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex items-start space-x-2 max-w-[85%] ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
        <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
          isUser ? 'bg-primary' : 'bg-secondary'
        }`}>
          {isUser ? (
            <User className="w-4 h-4 text-white" />
          ) : (
            <Bot className="w-4 h-4 text-white" />
          )}
        </div>
        
        <div className={`chat-bubble ${isUser ? 'user-bubble' : 'ai-bubble'}`}>
          <div className="whitespace-pre-wrap text-sm leading-relaxed">
            {message.content}
          </div>
          <div className={`text-xs mt-1.5 ${isUser ? 'text-white/70' : 'text-gray-500'}`}>
            {timestamp.toLocaleTimeString(timeFormat || 'en-US', { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
