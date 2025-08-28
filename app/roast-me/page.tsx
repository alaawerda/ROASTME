'use client'

import { useLanguageApp } from '../hooks/useLanguage'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RoastSEO from '../components/RoastSEO'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function RoastMePage() {
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
      {/* SEO optimisé pour "roast me" */}
      <RoastSEO pageType="roast-me" />
      
      {/* Header */}
      <Header 
        title={safeTranslations.title} 
        poweredBy={safeTranslations.poweredBy} 
        currentLanguage={currentLanguage}
        onLanguageChange={changeLanguage}
      />

      {/* Contenu principal optimisé SEO pour "roast me" */}
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Hero optimisée pour "roast me" */}
          <section className="text-center py-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
                🔥 ROAST ME 🔥
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100 mb-8">
              L&apos;IA qui va te Roaster Sans Pitié !
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Tu veux te faire <strong>roaster</strong> ? <strong>Roast Me</strong> est l&apos;IA de 
              <strong>roast</strong> la plus cinglante qui va te <strong>roaster me</strong> sans aucune pitié ! 
              Notre <strong>roast me chat</strong> gratuit utilise l&apos;intelligence artificielle pour 
              te <strong>roaster</strong> instantanément avec un humour brutal.
            </p>

            <div className="bg-gray-800/50 rounded-3xl p-8 mb-12 border border-gray-600/30">
              <h3 className="text-xl font-bold text-orange-500 mb-4">🚀 Redirection vers le Chat Roast...</h3>
              <p className="text-gray-300">
                Tu vas être redirigé vers notre <strong>roast me chat</strong> principal dans quelques secondes. 
                Si la redirection ne fonctionne pas, <a href="/" className="text-orange-500 hover:text-orange-400 font-bold">clique ici pour commencer à te faire roaster</a>.
              </p>
            </div>
          </section>

          {/* Section spéciale "Roast Me" */}
          <section className="py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Pourquoi Dire &quot;Roast Me&quot; à Notre IA ?
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Roast Me Gratuit */}
              <div className="bg-gray-800/60 rounded-2xl p-8 border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-5xl mb-6 text-center">🎯</div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4 text-center">Roast Me Gratuit</h3>
                <p className="text-gray-300 text-center">
                  Dis simplement <strong>&quot;roast me&quot;</strong> et notre IA va te <strong>roaster</strong> 
                  gratuitement ! Aucun coût, aucune limite. Notre <strong>roast me ai</strong> est 100% gratuit.
                </p>
              </div>

              {/* Roast Me Personnalisé */}
              <div className="bg-gray-800/60 rounded-2xl p-8 border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-5xl mb-6 text-center">🔥</div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4 text-center">Roast Me Sans Pitié</h3>
                <p className="text-gray-300 text-center">
                  Notre <strong>roast me ia</strong> analyse tes messages pour te <strong>roaster</strong> 
                  personnellement. Chaque <strong>roast me</strong> est unique et brutal !
                </p>
              </div>

              {/* Roast Me Instantané */}
              <div className="bg-gray-800/60 rounded-2xl p-8 border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-5xl mb-6 text-center">⚡</div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4 text-center">Roast Me Instantané</h3>
                <p className="text-gray-300 text-center">
                  Dis <strong>&quot;roast me&quot;</strong> et reçois ton <strong>roast</strong> en quelques secondes ! 
                  Notre <strong>roast me chat</strong> est ultra-rapide et toujours disponible.
                </p>
              </div>

              {/* Roast Me Multilingue */}
              <div className="bg-gray-800/60 rounded-2xl p-8 border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-5xl mb-6 text-center">🌍</div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4 text-center">Roast Me International</h3>
                <p className="text-gray-300 text-center">
                  Tu peux dire <strong>&quot;roast me&quot;</strong> en 12 langues ! Notre <strong>roast me ai</strong> 
                  multilingue te comprend et te <strong>roast</strong> dans ta langue.
                </p>
              </div>

            </div>
          </section>

          {/* Section témoignages */}
          <section className="py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Ils ont dit &quot;Roast Me&quot; et ne le regrettent pas !
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              
              <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-600/30">
                <div className="text-4xl mb-4">😂</div>
                <p className="text-gray-300 mb-4 italic">
                  &quot;J&apos;ai dit <strong>roast me</strong> et l&apos;IA m&apos;a détruit ! Trop drôle, 
                  je recommande ce <strong>roast me chat</strong> à tous mes amis !&quot;
                </p>
                <div className="text-orange-500 font-bold">- Marie, 25 ans</div>
              </div>

              <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-600/30">
                <div className="text-4xl mb-4">🔥</div>
                <p className="text-gray-300 mb-4 italic">
                  &quot;Le meilleur <strong>roast me ai</strong> que j&apos;ai testé ! L&apos;humour est 
                  cinglant et les <strong>roasts</strong> sont toujours hilarants.&quot;
                </p>
                <div className="text-orange-500 font-bold">- Thomas, 30 ans</div>
              </div>

              <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-600/30">
                <div className="text-4xl mb-4">💀</div>
                <p className="text-gray-300 mb-4 italic">
                  &quot;Cette <strong>roast me ia</strong> m&apos;a tellement bien <strong>roasté</strong> 
                  que j&apos;y reviens tous les jours ! Addictif !&quot;
                </p>
                <div className="text-orange-500 font-bold">- Sarah, 28 ans</div>
              </div>

            </div>
          </section>

          {/* Section FAQ Roast Me */}
          <section className="py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Questions sur &quot;Roast Me&quot;
              </span>
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              
              <details className="bg-gray-800/60 rounded-xl p-6 border border-gray-600/30">
                <summary className="font-bold text-gray-100 cursor-pointer text-lg">
                  Que se passe-t-il quand je dis &quot;roast me&quot; ?
                </summary>
                <p className="text-gray-300 mt-4">
                  Quand tu dis <strong>&quot;roast me&quot;</strong>, notre IA analyse ton message et te 
                  <strong>roast</strong> avec un humour cinglant ! Plus tu donnes de contexte, 
                  plus le <strong>roast</strong> sera personnalisé et hilarant.
                </p>
              </details>

              <details className="bg-gray-800/60 rounded-xl p-6 border border-gray-600/30">
                <summary className="font-bold text-gray-100 cursor-pointer text-lg">
                  Le &quot;roast me&quot; est-il gratuit ?
                </summary>
                <p className="text-gray-300 mt-4">
                  Oui ! Tu peux dire <strong>&quot;roast me&quot;</strong> autant que tu veux gratuitement. 
                  Notre <strong>roast me chat</strong> est 100% gratuit, sans limite d&apos;utilisation.
                </p>
              </details>

              <details className="bg-gray-800/60 rounded-xl p-6 border border-gray-600/30">
                <summary className="font-bold text-gray-100 cursor-pointer text-lg">
                  L&apos;IA comprend-elle &quot;roast me&quot; en d&apos;autres langues ?
                </summary>
                <p className="text-gray-300 mt-4">
                  Absolument ! Notre <strong>roast me ai</strong> comprend <strong>&quot;roast me&quot;</strong> 
                  en français, anglais, espagnol et 9 autres langues. L&apos;IA s&apos;adapte à ta langue !
                </p>
              </details>

              <details className="bg-gray-800/60 rounded-xl p-6 border border-gray-600/30">
                <summary className="font-bold text-gray-100 cursor-pointer text-lg">
                  Puis-je personnaliser mon &quot;roast me&quot; ?
                </summary>
                <p className="text-gray-300 mt-4">
                  Oui ! Plus tu donnes d&apos;informations avec ton <strong>&quot;roast me&quot;</strong>, 
                  plus notre <strong>roast me ia</strong> peut te <strong>roaster</strong> de manière 
                  personnalisée et précise !
                </p>
              </details>

            </div>
          </section>

          {/* Call to Action final */}
          <section className="text-center py-16">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl p-12 border border-orange-500/30">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
                🔥 Dis &quot;Roast Me&quot; Maintenant ! 🔥
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Rejoins la communauté <strong>Roast Me</strong> ! Des milliers d&apos;utilisateurs 
                se font <strong>roaster</strong> quotidiennement avec notre <strong>roast me ai</strong>. 
                À ton tour de dire <strong>&quot;roast me&quot;</strong> !
              </p>
              <a 
                href="/"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span>🚀 Dire &quot;Roast Me&quot;</span>
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
