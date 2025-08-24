export interface Message {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: Date
}

export interface ChatRequest {
  message: string
  history: Message[]
}

export interface ChatResponse {
  message: string
}
