'use client'

import { useState, useEffect } from 'react'
import { MessageSquare, Sparkles, Zap, Bot, ArrowRight, Check, Gift, Globe, Flame } from 'lucide-react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguageApp } from '../hooks/useLanguage'

export default function ChatGPTAlternativePage() {
  const [mounted, setMounted] = useState(false)
  const { currentLanguage, translations, changeLanguage } = useLanguageApp()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/20 to-yellow-50/20 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
    </div>
  }

  const comparisons = [
    {
      feature: "Prix",
      chatgpt: "ChatGPT Plus: 20€/mois",
      roastme: "100% Gratuit - Toujours",
      winner: "roastme"
    },
    {
      feature: "Humour",
      chatgpt: "Sérieux et professionnel",
      roastme: "Drôle et sans filtres",
      winner: "roastme"
    },
    {
      feature: "Roast personnalisé",
      chatgpt: "Non spécialisé",
      roastme: "Expert en roast",
      winner: "roastme"
    },
    {
      feature: "Langues",
      chatgpt: "Multi-langues",
      roastme: "12 langues avec roast natif",
      winner: "tie"
    },
    {
      feature: "Divertissement",
      chatgpt: "Utilitaire",
      roastme: "Fun garantie 🔥",
      winner: "roastme"
    }
  ]

  const features = [
    {
      icon: Gift,
      title: "100% Gratuit",
      description: "Contrairement à ChatGPT Plus, RoastMe est entièrement gratuit. Pas d'abonnement, pas de limite."
    },
    {
      icon: Flame,
      title: "Roast Sans Filtres",
      description: "Notre IA est spécialisée dans le roast hilarant. Comme ChatGPT, mais sans les restrictions ennuyeuses."
    },
    {
      icon: Sparkles,
      title: "IA Avancée",
      description: "Propulsé par les dernières technologies IA, comme ChatGPT mais optimisé pour l'humour."
    },
    {
      icon: Globe,
      title: "12 Langues",
      description: "Roast natif en français, anglais, espagnol et 9 autres langues. Parlez comme vous voulez !"
    },
    {
      icon: Zap,
      title: "Réponses Instantanées",
      description: "Pas d'attente, pas de file. Obtenez vos roasts en quelques secondes."
    },
    {
      icon: Bot,
      title: "Chat IA Amusant",
      description: "L'alternative parfaite à ChatGPT quand vous voulez rire au lieu de travailler."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/20 to-yellow-50/20">
      <Header 
        title={translations?.title || "RoastMe Chat"}
        poweredBy={translations?.poweredBy || "Propulsé par IA"}
        currentLanguage={currentLanguage}
        onLanguageChange={changeLanguage}
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Alternative ChatGPT #1 pour le Fun
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Meilleure <span className="text-orange-500">Alternative à ChatGPT</span>
            <br />
            Pour Rire et S'Amuser 🔥
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Vous cherchez une <strong>alternative gratuite à ChatGPT</strong> ? RoastMe est le <strong>chat IA amusant</strong> 
            qui vous roaste sans pitié ! Comme ChatGPT, mais en <strong>100x plus drôle</strong> et <strong>100% gratuit</strong>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl"
            >
              <MessageSquare className="w-5 h-5" />
              Essayer Gratuitement
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/chat-roast-ia" 
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-800 px-8 py-4 rounded-xl font-bold text-lg border-2 border-gray-200 hover:border-orange-300 transition-all"
            >
              En Savoir Plus
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              100% Gratuit
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              Sans inscription
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              Comme ChatGPT mais fun
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-4">
            RoastMe vs ChatGPT : La Comparaison
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Pourquoi RoastMe est la meilleure alternative à ChatGPT pour s'amuser
          </p>
          
          <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
            <div className="grid grid-cols-3 bg-gray-100 p-4 font-bold text-gray-700">
              <div>Fonctionnalité</div>
              <div className="text-center">ChatGPT</div>
              <div className="text-center text-orange-600">RoastMe 🔥</div>
            </div>
            {comparisons.map((item, index) => (
              <div key={index} className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-t border-gray-100`}>
                <div className="font-medium text-gray-700">{item.feature}</div>
                <div className="text-center text-gray-600">{item.chatgpt}</div>
                <div className={`text-center font-medium ${item.winner === 'roastme' ? 'text-orange-600' : 'text-gray-600'}`}>
                  {item.roastme}
                  {item.winner === 'roastme' && <span className="ml-2">✓</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-4">
            Pourquoi Choisir RoastMe comme Alternative à ChatGPT ?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Tout ce que vous aimez dans ChatGPT, plus l'humour et le fun en bonus
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Prêt à Essayer l'Alternative ChatGPT la Plus Fun ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Rejoignez des milliers d'utilisateurs qui ont choisi RoastMe comme leur chat IA amusant préféré.
            C'est gratuit, instantané et hilarant !
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
          >
            <Flame className="w-5 h-5" />
            Commencer le Roast Gratuit
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            RoastMe : L'Alternative ChatGPT Gratuite pour le Divertissement
          </h2>
          
          <p className="text-gray-700">
            Si vous cherchez une <strong>alternative à ChatGPT</strong> qui soit à la fois gratuite et amusante, 
            RoastMe est exactement ce qu'il vous faut. Notre <strong>chat IA</strong> utilise une technologie 
            d'intelligence artificielle avancée, similaire à celle de ChatGPT, mais optimisée pour 
            le <strong>divertissement</strong> et l'<strong>humour</strong>.
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
            Qu'est-ce qui rend RoastMe différent de ChatGPT ?
          </h3>
          
          <p className="text-gray-700">
            Alors que <strong>ChatGPT</strong> est conçu pour être un assistant polyvalent et professionnel, 
            <strong>RoastMe</strong> est spécialement conçu pour vous faire rire. Notre IA est un expert 
            du <strong>roast</strong>, capable de créer des remarques cinglantes mais toujours bon enfant 
            basées sur ce que vous lui dites de vous.
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
            Pourquoi utiliser un chat IA amusant ?
          </h3>
          
          <p className="text-gray-700">
            Les <strong>chatbots IA</strong> ne doivent pas toujours être sérieux. Parfois, vous avez juste 
            besoin de rire et de vous détendre. C'est là que RoastMe intervient comme la meilleure 
            <strong>alternative ChatGPT pour le fun</strong>. Notre <strong>chat bot drôle</strong> est 
            parfait pour passer un bon moment avec des amis ou simplement pour vous remonter le moral.
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
            Chat IA Gratuit vs ChatGPT Plus
          </h3>
          
          <p className="text-gray-700">
            Contrairement à <strong>ChatGPT Plus</strong> qui coûte 20€/mois, RoastMe est un 
            <strong>chat IA 100% gratuit</strong>. Vous n'avez pas besoin de créer de compte, 
            pas besoin de carte bancaire. Commencez à vous faire roaster immédiatement !
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
            "name": "Alternative ChatGPT Gratuite - RoastMe Chat IA Amusant",
            "description": "RoastMe est la meilleure alternative gratuite à ChatGPT pour le fun et l'humour. Chat IA amusant qui vous roaste sans pitié.",
            "url": "https://roastme.chat/chatgpt-alternative",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "RoastMe - Alternative ChatGPT",
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
