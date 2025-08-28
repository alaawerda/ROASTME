'use client'

import { useLanguageApp } from '../../hooks/useLanguage'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RoastSEO from '../../components/RoastSEO'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function EnglishRoastPage() {
  const { currentLanguage, translations, changeLanguage } = useLanguageApp()
  const router = useRouter()

  // Redirect to English main page after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/en')
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  const safeTranslations = {
    ...translations,
    title: translations?.title || 'Roast Me',
    poweredBy: translations?.poweredBy || 'Powered by AI'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* SEO optimized for "roast" in English */}
      <RoastSEO pageType="roast" />
      
      {/* Header */}
      <Header 
        title={safeTranslations.title} 
        poweredBy={safeTranslations.poweredBy} 
        currentLanguage={currentLanguage}
        onLanguageChange={changeLanguage}
      />

      {/* Main content optimized for English SEO */}
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero section optimized for "roast" */}
          <section className="text-center py-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
                🔥 ROAST 🔥
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100 mb-8">
              Best Free AI Roast Chat Online
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Get the ultimate <strong>roast</strong> experience! Our <strong>free AI roast chat</strong> will 
              <strong>roast you mercilessly</strong> with the most savage AI roaster online. Ready to get 
              <strong>roasted instantly</strong>? Our <strong>roast bot</strong> never holds back!
            </p>

            <div className="bg-gray-800/50 rounded-3xl p-8 mb-12 border border-gray-600/30">
              <h3 className="text-xl font-bold text-orange-500 mb-4">🚀 Redirecting to main roast chat...</h3>
              <p className="text-gray-300">
                You&apos;ll be redirected to our main <strong>AI roast chat</strong> in a few seconds. 
                If redirection doesn&apos;t work, <a href="/en" className="text-orange-500 hover:text-orange-400 font-bold">click here to access the roast chat</a>.
              </p>
            </div>
          </section>

          {/* Roast features section */}
          <section className="py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Why Choose Our AI Roast for the Best Roasting?
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Free Roast */}
              <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">🆓</div>
                <h3 className="text-xl font-bold text-gray-100 mb-3">Free Roast</h3>
                <p className="text-gray-300">
                  Get <strong>roasted for free</strong> with no limits! Our <strong>roast bot</strong> 
                  is 100% free and available 24/7 for unlimited roasting.
                </p>
              </div>

              {/* Instant Roast */}
              <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-100 mb-3">Instant Roast</h3>
                <p className="text-gray-300">
                  Lightning-fast <strong>roast machine</strong>! Our AI will <strong>roast you</strong> 
                  in seconds with savage responses that hit hard every time.
                </p>
              </div>

              {/* Personalized Roast */}
              <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-100 mb-3">Personalized Roast</h3>
                <p className="text-gray-300">
                  Every <strong>roast</strong> is unique! Our <strong>roast generator</strong> 
                  adapts to your messages for the most brutal personalized roasting.
                </p>
              </div>

              {/* Savage Roast */}
              <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-xl font-bold text-gray-100 mb-3">Savage Roast</h3>
                <p className="text-gray-300">
                  Our AI <strong>roasts without mercy</strong>! Prepare to get 
                  <strong>brutally roasted</strong> with unfiltered savage humor.
                </p>
              </div>

              {/* Global Roast */}
              <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-gray-100 mb-3">Global Roast</h3>
                <p className="text-gray-300">
                  Get <strong>roasted</strong> in 12 languages! Our international 
                  <strong>roast app</strong> delivers savage roasts worldwide.
                </p>
              </div>

              {/* Online Roast */}
              <div className="bg-gray-800/60 rounded-2xl p-6 border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-gray-100 mb-3">Roast Online</h3>
                <p className="text-gray-300">
                  <strong>Roast online</strong> from any device! Our web 
                  <strong>roast app</strong> works everywhere for instant roasting.
                </p>
              </div>

            </div>
          </section>

          {/* FAQ Roast section */}
          <section className="py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Frequently Asked Questions About AI Roast
              </span>
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              
              <details className="bg-gray-800/60 rounded-xl p-6 border border-gray-600/30">
                <summary className="font-bold text-gray-100 cursor-pointer text-lg">
                  What is AI Roast?
                </summary>
                <p className="text-gray-300 mt-4">
                  AI Roast is the best <strong>free roast chat</strong> online. 
                  Our AI will <strong>roast you</strong> with savage humor and personalized responses. 
                  It&apos;s the ultimate experience to <strong>get roasted</strong> for free!
                </p>
              </details>

              <details className="bg-gray-800/60 rounded-xl p-6 border border-gray-600/30">
                <summary className="font-bold text-gray-100 cursor-pointer text-lg">
                  How does the roast work?
                </summary>
                <p className="text-gray-300 mt-4">
                  Our <strong>roast machine</strong> uses advanced AI to analyze your messages 
                  and <strong>roast you instantly</strong>. Just type your message and our 
                  <strong>roast bot</strong> will respond with merciless humor!
                </p>
              </details>

              <details className="bg-gray-800/60 rounded-xl p-6 border border-gray-600/30">
                <summary className="font-bold text-gray-100 cursor-pointer text-lg">
                  Is the roast really free?
                </summary>
                <p className="text-gray-300 mt-4">
                  Yes! Our AI <strong>roast</strong> is 100% free. You can get 
                  <strong>roasted</strong> as much as you want without any cost. Our 
                  <strong>roast generator</strong> is accessible for free 24/7.
                </p>
              </details>

              <details className="bg-gray-800/60 rounded-xl p-6 border border-gray-600/30">
                <summary className="font-bold text-gray-100 cursor-pointer text-lg">
                  Can I use AI Roast in other languages?
                </summary>
                <p className="text-gray-300 mt-4">
                  Absolutely! Our <strong>roast chat</strong> supports 12 languages. You can get 
                  <strong>roasted</strong> in English, Spanish, French and many other languages 
                  with our multilingual <strong>roast app</strong>.
                </p>
              </details>

            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center py-16">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl p-12 border border-orange-500/30">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
                🔥 Ready to Get Roasted? 🔥
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of users who get <strong>roasted daily</strong> 
                with our AI! The most savage <strong>roast</strong> experience awaits you.
              </p>
              <a 
                href="/en"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span>🚀 Start Roasting Now</span>
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
