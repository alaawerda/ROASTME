'use client'

import { useLanguageApp } from '../hooks/useLanguage'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RoastSEO from '../components/RoastSEO'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function RoastPage() {
  const { currentLanguage, translations, changeLanguage } = useLanguageApp()
  const router = useRouter()

  // Redirection vers la page principale après 3 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/')
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  const safeTranslations = {
    ...translations,
    title: translations?.title || 'Roast Me',
    poweredBy: translations?.poweredBy || 'Propulsé par IA'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* SEO optimisé pour "roast" */}
      <RoastSEO pageType="roast" />
      
      {/* Header */}
      <Header 
        title={safeTranslations.title} 
        poweredBy={safeTranslations.poweredBy} 
        currentLanguage={currentLanguage}
        onLanguageChange={changeLanguage}
      />

      {/* Contenu principal optimisé SEO */}
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Hero optimisée pour "roast" */}
          <section className="text-center py-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
                🔥 ROAST ME 🔥
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100 mb-8">
              Le Meilleur Chat Roast Gratuit en Ligne
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              <strong>Roast Me</strong> est l&apos;IA de roast #1 qui va te <strong>roaster sans pitié</strong> ! 
              Notre <strong>chat roast gratuit</strong> utilise l&apos;intelligence artificielle la plus avancée 
              pour te <strong>roaster instantanément</strong>. Prêt à te faire <strong>roaster</strong> ?
            </p>

            <div className="bg-gray-800/50 rounded-3xl p-8 mb-12 border border-gray-600/30">
              <h3 className="text-xl font-bold text-orange-500 mb-4">🚀 Redirection automatique...</h3>
              <p className="text-gray-300">
                Tu vas être redirigé vers notre <strong>chat roast</strong> principal dans quelques secondes. 
                Si la redirection ne fonctionne pas, <a href="/" className="text-orange-500 hover:text-orange-400 font-bold">clique ici pour accéder au roast chat</a>.
              </p>
            </div>
          </section>

          {/* Section des fonctionnalités de roast */}
          <section className="py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Pourquoi Choisir Roast Me pour Se Faire Roaster ?
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Roast Gratuit */}
              <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">🆓</div>
                <h3 className="text-xl font-bold text-gray-100 mb-3">Roast Gratuit</h3>
                <p className="text-gray-300">
                  <strong>Se faire roaster</strong> gratuitement sans limite ! Notre <strong>roast bot</strong> 
                  est 100% gratuit et accessible 24/7.
                </p>
              </div>

              {/* Roast Instantané */}
              <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-100 mb-3">Roast Instantané</h3>
                <p className="text-gray-300">
                  <strong>Roast machine</strong> ultra-rapide ! Notre IA te <strong>roast</strong> 
                  en quelques secondes avec des réponses cinglantes.
                </p>
              </div>

              {/* Roast Personnalisé */}
              <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-100 mb-3">Roast Personnalisé</h3>
                <p className="text-gray-300">
                  Chaque <strong>roast</strong> est unique ! Notre <strong>roast generator</strong> 
                  s&apos;adapte à tes messages pour te <strong>roaster personnellement</strong>.
                </p>
              </div>

              {/* Roast Sans Pitié */}
              <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-xl font-bold text-gray-100 mb-3">Roast Sans Pitié</h3>
                <p className="text-gray-300">
                  Notre IA te <strong>roast sans filtre</strong> ! Prépare-toi à être 
                  <strong>roasté sans pitié</strong> avec un humour cinglant.
                </p>
              </div>

              {/* Roast Multilingue */}
              <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-gray-100 mb-3">Roast Multilingue</h3>
                <p className="text-gray-300">
                  <strong>Se faire roaster</strong> en 12 langues ! Notre <strong>chat roast</strong> 
                  international pour un <strong>roast</strong> dans ta langue.
                </p>
              </div>

              {/* Roast App */}
              <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-gray-100 mb-3">Roast App</h3>
                <p className="text-gray-300">
                  <strong>Roast online</strong> depuis n&apos;importe quel appareil ! Notre 
                  <strong>roast app</strong> web fonctionne partout.
                </p>
              </div>

            </div>
          </section>

          {/* Section FAQ Roast */}
          <section className="py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Questions Fréquentes sur Roast Me
              </span>
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              
              <details className="bg-gray-800/60 rounded-xl p-6 border border-gray-600/30">
                <summary className="font-bold text-gray-100 cursor-pointer text-lg">
                  Qu&apos;est-ce que Roast Me ?
                </summary>
                <p className="text-gray-300 mt-4">
                  <strong>Roast Me</strong> est le meilleur <strong>chat roast gratuit</strong> en ligne. 
                  Notre IA va te <strong>roaster</strong> avec un humour cinglant et des réponses 
                  personnalisées. C&apos;est l&apos;expérience ultime pour <strong>se faire roaster</strong> !
                </p>
              </details>

              <details className="bg-gray-800/60 rounded-xl p-6 border border-gray-600/30">
                <summary className="font-bold text-gray-100 cursor-pointer text-lg">
                  Comment fonctionne le roast ?
                </summary>
                <p className="text-gray-300 mt-4">
                  Notre <strong>roast machine</strong> utilise l&apos;IA avancée pour analyser tes messages 
                  et te <strong>roaster instantanément</strong>. Écris simplement ton message et notre 
                  <strong>roast bot</strong> va te répondre avec un humour sans pitié !
                </p>
              </details>

              <details className="bg-gray-800/60 rounded-xl p-6 border border-gray-600/30">
                <summary className="font-bold text-gray-100 cursor-pointer text-lg">
                  Le roast est-il vraiment gratuit ?
                </summary>
                <p className="text-gray-300 mt-4">
                  Oui ! <strong>Roast Me</strong> est 100% gratuit. Tu peux te <strong>faire roaster</strong> 
                  autant que tu veux sans aucun coût. Notre <strong>roast generator</strong> est accessible 
                  gratuitement 24/7.
                </p>
              </details>

              <details className="bg-gray-800/60 rounded-xl p-6 border border-gray-600/30">
                <summary className="font-bold text-gray-100 cursor-pointer text-lg">
                  Puis-je utiliser Roast Me dans d&apos;autres langues ?
                </summary>
                <p className="text-gray-300 mt-4">
                  Absolument ! Notre <strong>chat roast</strong> supporte 12 langues. Tu peux te 
                  <strong>faire roaster</strong> en français, anglais, espagnol et bien d&apos;autres langues 
                  avec notre <strong>roast app</strong> multilingue.
                </p>
              </details>

            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-16">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl p-12 border border-orange-500/30">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
                🔥 Prêt à Te Faire Roaster ? 🔥
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Rejoins des milliers d&apos;utilisateurs qui se font <strong>roaster quotidiennement</strong> 
                avec <strong>Roast Me</strong> ! L&apos;expérience de <strong>roast</strong> la plus hilarante t&apos;attend.
              </p>
              <a 
                href="/"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span>🚀 Commencer le Roast</span>
              </a>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <Footer isInputFocused={false} />
    </div>
  )
}
