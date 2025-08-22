'use client'

import { useState, useEffect } from 'react'
import { Send, MessageSquare, Globe, Flame, Users, Clock, ArrowRight, Sparkles, Trophy, Target, Languages, Gift } from 'lucide-react'
import { useLanguageApp } from '../hooks/useLanguage'
import PageNavigation from './navigation'
import Breadcrumb from './breadcrumb'
import Footer from '../components/Footer'
import Link from 'next/link'
import StructuredData from './structured-data'
import Testimonials from './testimonials'
import FAQ from './faq'
import TranslationDemo from './translation-demo'

export default function ChatRoastIAPage() {
  const { isInitialized, currentLocale, t } = useLanguageApp()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Debug: Log current language and translations
  useEffect(() => {
    console.log('=== PAGE DEBUG ===')
    console.log('mounted:', mounted)
    console.log('isInitialized:', isInitialized)
    console.log('currentLocale:', currentLocale)
    if (isInitialized) {
      console.log('Hero title translation:', t('chatRoastIA.heroTitle'))
      console.log('Hero subtitle translation:', t('chatRoastIA.heroSubtitle'))
    }
    console.log('==================')
  }, [mounted, isInitialized, currentLocale, t])

  if (!mounted || !isInitialized) {
    return <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/20 to-yellow-50/20 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-flame-orange"></div>
    </div>
  }

  const features = [
    {
      icon: Flame,
      title: t('chatRoastIA.features.roastWithoutFilters'),
      description: t('chatRoastIA.features.roastWithoutFiltersDesc'),
      color: "from-red-500 to-orange-500"
    },
    {
      icon: MessageSquare,
      title: t('chatRoastIA.features.realTimeChat'),
      description: t('chatRoastIA.features.realTimeChatDesc'),
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: t('chatRoastIA.features.multilingualSupport'),
      description: t('chatRoastIA.features.multilingualSupportDesc'),
      color: "from-green-500 to-emerald-500"
    }
  ]

  const advantages = [
    {
      icon: Gift,
      title: t('chatRoastIA.advantages.freeTitle'),
      description: t('chatRoastIA.advantages.freeDesc'),
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: t('chatRoastIA.advantages.personalizedTitle'),
      description: t('chatRoastIA.advantages.personalizedDesc'),
      color: "from-yellow-500 to-orange-500"
    }
  ]

  const steps = [
    {
      number: "1",
      title: t('chatRoastIA.howToUse.step1.title'),
      description: t('chatRoastIA.howToUse.step1.description'),
      icon: MessageSquare
    },
    {
      number: "2",
      title: t('chatRoastIA.howToUse.step2.title'),
      description: t('chatRoastIA.howToUse.step2.description'),
      icon: Send
    },
    {
      number: "3",
      title: t('chatRoastIA.howToUse.step3.title'),
      description: t('chatRoastIA.howToUse.step3.description'),
      icon: Sparkles
    }
  ]

  const stats = [
    { number: "12", label: t('chatRoastIA.stats.languages'), icon: Languages },
    { number: "100%", label: t('chatRoastIA.stats.free'), icon: Gift },
    { number: "24/7", label: t('chatRoastIA.stats.available'), icon: Clock }
  ]

  return (
    <>
      <StructuredData />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50/20 to-yellow-50/20">
        <PageNavigation />
        <Breadcrumb />
        
        <main className="pt-4 pb-16">
          {/* Language Selector for Testing */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="text-lg font-semibold mb-3">🌍 Test Language Selection:</h3>
              <div className="flex flex-wrap gap-2">
                {['fr', 'en', 'es', 'de', 'it', 'pt', 'nl', 'ru', 'ja', 'ko', 'ar', 'zh'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      localStorage.setItem('locale', lang);
                      window.location.reload();
                    }}
                    className={`px-3 py-1 rounded text-sm font-medium ${
                      currentLocale === lang
                        ? 'bg-flame-orange text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Current language: <strong>{currentLocale}</strong> | 
                Browser language: <strong>{typeof window !== 'undefined' ? navigator.language : 'N/A'}</strong>
              </p>
              
              {/* Test Translation Display */}
              <div className="mt-4 p-3 bg-gray-100 rounded">
                <h4 className="font-semibold mb-2">🧪 Test Translations:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <div><strong>Hero Title:</strong> {t('chatRoastIA.heroTitle')}</div>
                  <div><strong>Hero Subtitle:</strong> {t('chatRoastIA.heroSubtitle')}</div>
                  <div><strong>Live Chat Title:</strong> {t('chatRoastIA.liveChatTitle')}</div>
                  <div><strong>Live Chat Subtitle:</strong> {t('chatRoastIA.liveChatSubtitle')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-flame-orange/10 via-purple-dark/5 to-flame-yellow/10"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-flame-orange/20 to-purple-dark/20 border border-flame-orange/30 text-flame-orange font-medium text-sm mb-6 animate-fade-in">
                                     <Flame className="w-4 h-4 mr-2 animate-flame-flicker" />
                  L&apos;IA la plus cinglante du web
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  {t('chatRoastIA.heroTitle')}
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                  {t('chatRoastIA.heroSubtitle')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/" className="btn-primary text-lg px-8 py-4 flex items-center group">
                    🔥 Commencer Maintenant
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button className="btn-secondary text-lg px-8 py-4 flex items-center group">
                    <Users className="mr-2" />
                    Voir les Avis
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-16 lg:py-24 bg-white/50 backdrop-blur-sm scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t('chatRoastIA.liveChatTitle')}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {t('chatRoastIA.liveChatSubtitle')}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Advantages Section */}
          <section id="advantages" className="py-16 lg:py-24 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t('chatRoastIA.advantages.freeTitle')} ✨
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {t('chatRoastIA.advantages.freeDesc')}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {advantages.map((advantage, index) => (
                  <div 
                    key={index}
                    className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${advantage.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <advantage.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How to Use Section */}
          <section className="py-16 lg:py-24 bg-white/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t('chatRoastIA.howToUse.title')}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {t('chatRoastIA.howToUse.subtitle')}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-flame-orange to-purple-dark text-white text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
                        {step.number}
                      </div>
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 mb-6">
                        <step.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                    
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <ArrowRight className="w-8 h-8 text-flame-orange" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-flame-orange/20 to-purple-dark/20 text-flame-orange mb-6 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-10 h-10" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-lg text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <Testimonials />

          {/* FAQ Section */}
          <FAQ />

          {/* Translation Demo Section */}
          <TranslationDemo />

          {/* CTA Section */}
          <section className="py-16 lg:py-24 bg-gradient-to-r from-flame-orange to-purple-dark relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t('chatRoastIA.cta.title')}
              </h2>
              <p className="text-xl text-white/90 mb-8">
                {t('chatRoastIA.cta.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/" className="bg-white text-flame-orange hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center group">
                  {t('chatRoastIA.cta.startNow')}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="border-2 border-white text-white hover:bg-white hover:text-flame-orange font-bold text-lg px-8 py-4 rounded-lg transition-all duration-200 flex items-center group">
                  <Trophy className="mr-2" />
                  {t('chatRoastIA.cta.seeRankings')}
                </button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  )
}
