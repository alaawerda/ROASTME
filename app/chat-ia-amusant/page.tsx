'use client'

import { useState, useEffect } from 'react'
import { Sparkles, Laugh, Heart, ArrowRight, Check, Smile, PartyPopper, Flame, Zap, Bot } from 'lucide-react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguageApp } from '../hooks/useLanguage'

export default function ChatIAAmusantPage() {
  const [mounted, setMounted] = useState(false)
  const { currentLanguage, translations, changeLanguage } = useLanguageApp()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/20 to-pink-50/20 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
    </div>
  }

  const funFeatures = [
    {
      icon: Laugh,
      title: "Humour Sans Limites",
      description: "Notre chat IA est programmé pour vous faire rire avec des roasts personnalisés et hilarants."
    },
    {
      icon: Flame,
      title: "Roast Personnalisé",
      description: "Plus vous en dites sur vous, plus le roast est précis et drôle. L'IA s'adapte à votre profil !"
    },
    {
      icon: Zap,
      title: "Réponses Instantanées",
      description: "Pas besoin d'attendre. Notre chat IA drôle répond en quelques secondes."
    },
    {
      icon: Bot,
      title: "IA Avancée",
      description: "Propulsé par une IA de dernière génération, comme ChatGPT mais optimisé pour l'humour."
    },
    {
      icon: Heart,
      title: "100% Gratuit",
      description: "Aucun abonnement, aucune limite. Riez autant que vous voulez sans payer un centime."
    },
    {
      icon: PartyPopper,
      title: "Fun Garanti",
      description: "Parfait entre amis ou en solo. Le meilleur chatbot pour passer un bon moment."
    }
  ]

  const useCases = [
    {
      title: "Entre Amis",
      description: "Partagez vos roasts avec vos amis et voyez qui se fait le plus roaster !",
      emoji: "👥"
    },
    {
      title: "Brise-Glace",
      description: "Utilisez notre chat IA comme brise-glace lors de soirées ou réunions.",
      emoji: "🎉"
    },
    {
      title: "Anti-Stress",
      description: "Rien de tel qu'un bon rire pour déstresser. Laissez-vous roaster !",
      emoji: "😌"
    },
    {
      title: "Contenu Social",
      description: "Partagez vos meilleurs roasts sur les réseaux sociaux.",
      emoji: "📱"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/20 to-pink-50/20">
      <Header 
        title={translations?.title || "RoastMe Chat"}
        poweredBy={translations?.poweredBy || "Propulsé par IA"}
        currentLanguage={currentLanguage}
        onLanguageChange={changeLanguage}
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Smile className="w-4 h-4" />
            Le Chat IA le Plus Amusant du Web
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            <span className="text-purple-500">Chat IA Amusant</span> & Drôle
            <br />
            Gratuit et Sans Limites 😂
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Découvrez le <strong>chat IA le plus drôle</strong> d'internet ! Notre <strong>chatbot amusant</strong> 
            est spécialisé dans le roast et l'humour. <strong>100% gratuit</strong>, <strong>instantané</strong> 
            et <strong>hilarant</strong>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
            >
              <Laugh className="w-5 h-5" />
              Essayer le Chat IA Drôle
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/chatgpt-alternative" 
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-800 px-8 py-4 rounded-xl font-bold text-lg border-2 border-gray-200 hover:border-purple-300 transition-all"
            >
              Alternative ChatGPT
            </Link>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              Chat IA Gratuit
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              Humour Garanti
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              12 Langues
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              Sans Inscription
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-4">
            Pourquoi Notre Chat IA est le Plus Amusant ?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Des fonctionnalités uniques pour vous faire rire comme jamais
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50/30 rounded-xl p-6 hover:shadow-lg transition-all border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-4">
            Comment Utiliser Notre Chat IA Drôle ?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Plein de façons de s'amuser avec notre chatbot humoristique
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 flex items-start gap-4">
                <span className="text-4xl">{useCase.emoji}</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Prêt à Vous Faire Roaster par notre Chat IA ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Rejoignez des milliers de personnes qui rient chaque jour avec notre chat IA amusant.
            C'est gratuit, c'est fun, c'est maintenant !
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
          >
            <Sparkles className="w-5 h-5" />
            Lancer le Chat IA Amusant
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Le Meilleur Chat IA Amusant et Gratuit en 2026
          </h2>
          
          <p className="text-gray-700">
            Vous cherchez un <strong>chat IA amusant</strong> qui va vous faire rire ? RoastMe est 
            le <strong>chatbot drôle</strong> qu'il vous faut ! Notre <strong>intelligence artificielle 
            humoristique</strong> est spécialement conçue pour créer des roasts personnalisés qui vous 
            feront mourir de rire.
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
            Qu'est-ce qu'un Chat IA Drôle ?
          </h3>
          
          <p className="text-gray-700">
            Un <strong>chat IA drôle</strong> est un chatbot basé sur l'intelligence artificielle 
            qui est programmé pour générer des réponses humoristiques. Contrairement aux assistants 
            IA classiques comme ChatGPT ou Alexa, un <strong>chatbot amusant</strong> comme RoastMe 
            est optimisé pour le divertissement et l'humour.
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
            Pourquoi utiliser un Chatbot Humoristique ?
          </h3>
          
          <p className="text-gray-700">
            L'<strong>humour IA</strong> a de nombreux avantages : il permet de se détendre, de 
            partager des moments fun avec ses amis, et même d'améliorer sa créativité. Notre 
            <strong>chat IA gratuit</strong> est parfait pour tous ceux qui veulent ajouter un 
            peu de légèreté à leur journée.
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
            Chat IA en Français et Autres Langues
          </h3>
          
          <p className="text-gray-700">
            Notre <strong>chat IA en français</strong> comprend parfaitement les nuances de la 
            langue française et peut créer des roasts adaptés à notre culture. Mais ce n'est pas 
            tout : RoastMe supporte également 11 autres langues pour que chacun puisse profiter 
            du <strong>meilleur chat IA amusant</strong> dans sa langue maternelle.
          </p>
        </div>
      </section>

      <Footer />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Chat IA Amusant Gratuit - RoastMe Chatbot Drôle",
            "description": "Le meilleur chat IA amusant et drôle du web ! Chatbot humoristique gratuit qui vous roaste sans pitié.",
            "url": "https://roastme.chat/chat-ia-amusant",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "RoastMe - Chat IA Amusant",
              "applicationCategory": "EntertainmentApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR"
              }
            }
          })
        }}
      />
    </div>
  )
}
