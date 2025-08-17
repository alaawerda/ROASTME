'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Bug, Home } from 'lucide-react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Erreur capturée par ErrorBoundary:', error, errorInfo)
  }

  override render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/30 to-yellow-50/30">
          <div className="card max-w-lg mx-auto text-center animate-in">
            {/* Icône d'erreur moderne */}
            <div className="w-20 h-20 bg-gradient-to-r from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Oups ! Quelque chose s&apos;est mal passé
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Une erreur inattendue s&apos;est produite. Ne vous inquiétez pas, ce n&apos;est pas de votre faute !
            </p>
            
            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button
                onClick={() => {
                  this.setState({ hasError: false })
                  window.location.reload()
                }}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Recharger la page</span>
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="btn-outline flex items-center justify-center space-x-2"
              >
                <Home className="w-4 h-4" />
                <span>Retour à l&apos;accueil</span>
              </button>
            </div>
            
            {/* Détails de l'erreur */}
            {this.state.error && (
              <details className="text-left">
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700 transition-colors flex items-center space-x-2 hover:bg-gray-50 p-2 rounded-lg">
                  <Bug className="w-4 h-4" />
                  <span>Détails de l&apos;erreur (pour les développeurs)</span>
                </summary>
                <div className="mt-3 p-4 bg-gray-100 rounded-xl text-xs text-gray-700 overflow-auto border max-h-40">
                  <pre className="whitespace-pre-wrap">
                    {this.state.error.toString()}
                  </pre>
                </div>
              </details>
            )}
            
            {/* Message d'encouragement */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
              <p className="text-sm text-blue-700">
                💡 <strong>Conseil :</strong> Si le problème persiste, essayez de vider le cache de votre navigateur.
              </p>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
