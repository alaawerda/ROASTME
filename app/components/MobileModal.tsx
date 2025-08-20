"use client"

import { useEffect } from 'react'
import { X, ChevronDown } from 'lucide-react'

interface MobileModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  closeLabel?: string
}

export default function MobileModal({ isOpen, onClose, title, children, closeLabel = 'Close' }: MobileModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center animate-in">
      {/* Backdrop avec effet de flou */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal avec design moderne */}
      <div className="relative w-full max-w-md mx-4 bg-white/95 backdrop-blur-md rounded-t-3xl sm:rounded-3xl shadow-2xl border border-white/20 transform transition-all duration-300 ease-out animate-in">
        {/* Header moderne avec gradient */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200/50 bg-gradient-to-r from-orange-50 to-red-50">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse"></div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 text-gray-400 hover:text-gray-600 transition-all duration-200 ease-out rounded-xl hover:bg-gray-100/80 hover:scale-110 hover:rotate-90"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Indicateur de glissement pour mobile */}
        <div className="sm:hidden flex justify-center py-2">
          <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
        </div>
        
        {/* Content avec padding amélioré */}
        <div className="p-6">
          {children}
        </div>
        
        {/* Footer avec bouton de fermeture alternatif */}
        <div className="border-t border-gray-200/50 p-4 bg-gradient-to-r from-gray-50 to-gray-100">
          <button
            onClick={onClose}
            className="w-full py-3 px-4 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 font-medium rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all duration-200 ease-out hover:scale-[1.02] flex items-center justify-center space-x-2 group"
          >
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" />
            <span>{closeLabel}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
