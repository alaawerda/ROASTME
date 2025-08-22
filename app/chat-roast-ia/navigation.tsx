'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function PageNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false)

  const navigationItems = [
    { name: 'Accueil', href: '/', external: false },
    { name: 'À propos', href: '/about', external: false },
    { name: 'FAQ', href: '/faq', external: false },
    { name: 'Blog', href: '/blog', external: false },
    { name: 'Contact', href: '/#contact', external: false }
  ]

  const featureLinks = [
    { name: 'Roast Sans Filtres', href: '#features', description: 'L\'IA la plus cinglante' },
    { name: 'Chat en Temps Réel', href: '#features', description: 'Réponses instantanées' },
    { name: 'Support Multilingue', href: '#features', description: '12 langues disponibles' },
    { name: '100% Gratuit', href: '#advantages', description: 'Aucun coût caché' },
    { name: 'Roast Personnalisé', href: '#advantages', description: 'Adapté à ta personnalité' }
  ]

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo et titre */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-flame-orange to-purple-dark rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <span className="text-white font-bold text-sm">🔥</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-flame-orange to-purple-dark bg-clip-text text-transparent">
                RoastMe
              </span>
            </Link>
          </div>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-flame-orange transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Menu déroulant des fonctionnalités */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-flame-orange transition-colors duration-200 font-medium">
                Fonctionnalités
                <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Découvre nos fonctionnalités</h3>
                  <div className="space-y-2">
                    {featureLinks.map((feature) => (
                      <Link
                        key={feature.name}
                        href={feature.href}
                        className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                      >
                        <div className="w-2 h-2 bg-flame-orange rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform duration-200"></div>
                        <div>
                          <div className="font-medium text-gray-900 group-hover:text-flame-orange transition-colors duration-200">
                            {feature.name}
                          </div>
                          <div className="text-sm text-gray-600">{feature.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/"
              className="btn-primary px-6 py-2"
            >
              Tester Maintenant
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-flame-orange transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 border border-gray-200">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-flame-orange hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="border-t border-gray-200 pt-2 mt-2">
                <button
                  onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-flame-orange transition-colors duration-200 font-medium"
                >
                  Fonctionnalités
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isFeaturesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isFeaturesOpen && (
                  <div className="pl-4 space-y-1 mt-2">
                    {featureLinks.map((feature) => (
                      <Link
                        key={feature.name}
                        href={feature.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-flame-orange hover:bg-gray-50 rounded-md transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {feature.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="border-t border-gray-200 pt-2 mt-2">
                <Link
                  href="/"
                  className="block w-full text-center btn-primary px-6 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tester Maintenant
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
