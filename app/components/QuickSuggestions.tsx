'use client'

import { useState } from 'react'
import { MessageSquare, Lightbulb, Zap } from 'lucide-react'

interface QuickSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void
  translations: any
}

export default function QuickSuggestions({ onSuggestionClick, translations }: QuickSuggestionsProps) {
  const [isVisible, setIsVisible] = useState(true)

  const suggestions = [
    {
      icon: MessageSquare,
      text: translations?.examples?.student?.text || "Je suis étudiant, j'adore les jeux vidéo mais je suis nul en sport",
      category: translations?.examples?.student?.category || "Étudiant"
    },
    {
      icon: Zap,
      text: translations?.examples?.work?.text || "J'ai 25 ans, je travaille dans l'informatique et je vis encore chez mes parents",
      category: translations?.examples?.work?.category || "Travail"
    },
    {
      icon: Lightbulb,
      text: translations?.examples?.lifestyle?.text || "Je suis accro aux réseaux sociaux et je mange que des pizzas",
      category: translations?.examples?.lifestyle?.category || "Lifestyle"
    }
  ]

  if (!isVisible) return null

  return (
    <div className="mb-6 animate-fade-in-up">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Lightbulb className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              💡 {translations?.examples?.title || 'Exemples pour commencer'}
            </h3>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 text-sm px-2 py-1 rounded transition-colors"
          >
            ✕
          </button>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">
          {translations?.examples?.subtitle || 'Clique sur un exemple ou écris ta propre description :'}
        </p>
        
        <div className="grid grid-cols-1 gap-3">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => onSuggestionClick(suggestion.text)}
              className="group flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 text-left"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <suggestion.icon className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-blue-600 mb-1">
                  {suggestion.category}
                </div>
                <div className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                  "{suggestion.text}"
                </div>
              </div>
              <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
        
        <div className="mt-4 p-3 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl">
          <p className="text-sm text-amber-700">
            {translations?.chat?.tip || '💡 Conseil : Plus tu me donnes de détails sur toi (âge, situation, hobbies, défauts...), plus le roast sera précis et hilarant ! 😄'}
          </p>
        </div>
      </div>
    </div>
  )
}
