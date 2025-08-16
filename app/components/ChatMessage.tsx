import { Bot, User } from 'lucide-react'
import { Message } from '../types'

interface ChatMessageProps {
  message: Message
  timeFormat: string
}

export default function ChatMessage({ message, timeFormat }: ChatMessageProps) {
  const isUser = message.role === 'user'
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex items-start space-x-3 max-w-[80%] ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isUser ? 'bg-primary' : 'bg-secondary'
        }`}>
          {isUser ? (
            <User className="w-5 h-5 text-white" />
          ) : (
            <Bot className="w-5 h-5 text-white" />
          )}
        </div>
        
        <div className={`chat-bubble ${isUser ? 'user-bubble' : 'ai-bubble'}`}>
          <div className="whitespace-pre-wrap">
            {message.content}
          </div>
          <div className={`text-xs mt-2 ${isUser ? 'text-white/70' : 'text-gray-500'}`}>
            {message.timestamp.toLocaleTimeString(timeFormat, { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
