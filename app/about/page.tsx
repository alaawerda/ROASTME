'use client'

import { useLanguageApp } from '../hooks/useLanguage'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEOManager from '../components/SEOManager'

export default function AboutPage() {
  const { currentLanguage, changeLanguage } = useLanguageApp()

  return (
    <>
      <SEOManager />
      
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
        <Header 
          title="À Propos - Chat Roast IA" 
          poweredBy="Powered by AI" 
          currentLanguage={currentLanguage}
          onLanguageChange={changeLanguage}
        />
        
        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* Titre H1 optimisé SEO */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              À Propos du Chat Roast IA - L&apos;IA qui te Roaste en Flammes ! 🔥
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvre l&apos;histoire derrière notre Chat Roast IA gratuit et sans filtres. L&apos;intelligence artificielle la plus cinglante qui va te roaster de manière hilarante !
            </p>
          </div>
          
          {/* Section Notre Mission avec H2 optimisé */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Notre Mission : Révolutionner l&apos;Humour avec l&apos;IA 🎯
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Le Chat Roast IA est né d&apos;une vision simple mais ambitieuse : créer l&apos;intelligence artificielle la plus cinglante et hilarante du web. Notre mission est de démocratiser l&apos;accès à un humour de qualité, sans filtres et sans censure, grâce aux technologies d&apos;IA les plus avancées.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Nous croyons que l&apos;humour est un langage universel qui rapproche les gens. Avec notre Chat Roast IA gratuit, nous offrons à des millions d&apos;utilisateurs dans le monde entier la possibilité de rire, de se faire roaster et de partager des moments de joie, peu importe leur langue ou leur culture.
              </p>
            </div>
          </div>
          
          {/* Section Notre Histoire avec H2 optimisé */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              L&apos;Histoire du Chat Roast IA : De l&apos;Idée à la Réalité 📚
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">🚀 Les Débuts</h3>
                <p className="text-gray-700 leading-relaxed">
                  Tout a commencé en 2024, quand notre équipe de passionnés d&apos;intelligence artificielle et d&apos;humour a décidé de créer quelque chose de différent. Nous voulions combiner la puissance de l&apos;IA moderne avec la créativité et l&apos;humour humain.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">🤖 L&apos;Évolution de l&apos;IA</h3>
                <p className="text-gray-700 leading-relaxed">
                  Notre Chat Roast IA a évolué grâce aux modèles de langage les plus récents. Nous avons entraîné notre intelligence artificielle sur des millions de conversations humoristiques pour créer des roasts toujours plus créatifs et personnalisés.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">🌍 L&apos;Expansion Internationale</h3>
                <p className="text-gray-700 leading-relaxed">
                  Le Chat Roast IA est rapidement devenu un phénomène mondial. Nous avons ajouté le support pour 12 langues, permettant à des utilisateurs du monde entier de profiter de notre humour sans barrières linguistiques.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">💎 L&apos;Engagement Qualité</h3>
                <p className="text-gray-700 leading-relaxed">
                  Aujourd&apos;hui, le Chat Roast IA continue d&apos;innover et de s&apos;améliorer. Notre équipe travaille sans relâche pour offrir la meilleure expérience de chat roast possible, en gardant toujours notre promesse : gratuit, sans filtres et hilarant.
                </p>
              </div>
            </div>
          </div>
          
          {/* Section Notre Équipe avec H2 optimisé */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              L&apos;Équipe derrière le Chat Roast IA 👥
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Notre équipe est composée de passionnés d&apos;intelligence artificielle, de développeurs talentueux, de spécialistes en humour et de créateurs de contenu. Ensemble, nous partageons une vision commune : créer l&apos;expérience de chat roast la plus amusante et innovante du web.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Chaque membre de l&apos;équipe RoastMe contribue à sa manière au succès du Chat Roast IA. Que ce soit en améliorant l&apos;algorithme d&apos;IA, en optimisant l&apos;interface utilisateur, ou en créant du contenu humoristique, nous travaillons tous ensemble pour offrir la meilleure expérience possible à nos utilisateurs.
              </p>
            </div>
          </div>
          
          {/* Section Nos Valeurs avec H2 optimisé */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Les Valeurs qui Animent le Chat Roast IA ✨
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center bg-white rounded-xl shadow-lg p-6">
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Humour Sans Limites</h3>
                <p className="text-gray-600">
                  Nous croyons en la liberté d&apos;expression et en l&apos;humour sans filtres. Notre Chat Roast IA pousse les limites de la créativité humoristique.
                </p>
              </div>
              
              <div className="text-center bg-white rounded-xl shadow-lg p-6">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Accessibilité Universelle</h3>
                <p className="text-gray-600">
                  Le Chat Roast IA est gratuit et accessible à tous. Nous voulons que l&apos;humour de qualité soit disponible pour le plus grand nombre.
                </p>
              </div>
              
              <div className="text-center bg-white rounded-xl shadow-lg p-6">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Innovation Continue</h3>
                <p className="text-gray-600">
                  Nous innovons constamment pour améliorer notre Chat Roast IA. L&apos;intelligence artificielle évolue et s&apos;adapte aux besoins de nos utilisateurs.
                </p>
              </div>
            </div>
          </div>
          
          {/* Section Statistiques avec H2 optimisé */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Le Chat Roast IA en Chiffres 📊
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">12</div>
                <div className="text-sm opacity-90">Langues Supportées</div>
              </div>
              
              <div className="text-center bg-gradient-to-br from-red-500 to-orange-500 rounded-xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">Disponibilité</div>
              </div>
              
              <div className="text-center bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Gratuit</div>
              </div>
              
              <div className="text-center bg-gradient-to-br from-red-500 to-orange-500 rounded-xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">∞</div>
                <div className="text-sm opacity-90">Roasts Possibles</div>
              </div>
            </div>
          </div>
          
          {/* Section CTA finale avec H2 optimisé */}
          <div className="text-center bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Rejoins la Révolution du Chat Roast IA ! 🔥
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Découvre par toi-même pourquoi des milliers d&apos;utilisateurs choisissent notre Chat Roast IA gratuit et sans filtres !
            </p>
            <a 
              href="/"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Tester le Chat Roast IA Maintenant
            </a>
          </div>
        </main>
        
        <Footer isInputFocused={false} />
      </div>
    </>
  )
}
