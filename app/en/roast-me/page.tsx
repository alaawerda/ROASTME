'use client'

import { useLanguageApp } from '../../hooks/useLanguage'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RoastSEO from '../../components/RoastSEO'
import { useEffect } from 'react'

export default function EnglishRoastMePage() {
  const { currentLanguage, translations, changeLanguage } = useLanguageApp()

  // Redirect to main domain after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://www.roastme.chat'
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const safeTranslations = {
    ...translations,
    title: translations?.title || 'Roast Me',
    poweredBy: translations?.poweredBy || 'Powered by AI'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* SEO optimized for "roast me" in English */}
      <RoastSEO pageType="roast-me" />
      
      {/* Header */}
      <Header 
        title={safeTranslations.title} 
        poweredBy={safeTranslations.poweredBy} 
        currentLanguage={currentLanguage}
        onLanguageChange={changeLanguage}
      />

      {/* Main content optimized for "roast me" English SEO */}
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero section optimized for "roast me" */}
          <section className="text-center py-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
                🔥 ROAST ME 🔥
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100 mb-8">
              The AI That Will Roast You Mercilessly!
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Want to get <strong>roasted</strong>? <strong>Roast Me</strong> is the most savage 
              <strong>AI roaster</strong> that will <strong>roast me</strong> without any mercy! 
              Our <strong>roast me chat</strong> uses advanced AI to 
              <strong>roast you instantly</strong> with brutal humor.
            </p>

            <div className="bg-gray-800/50 rounded-3xl p-8 mb-12 border border-gray-600/30">
              <h3 className="text-xl font-bold text-orange-500 mb-4">🚀 Redirecting to Roast Me Chat...</h3>
              <p className="text-gray-300">
                You&apos;ll be redirected to our main <strong>roast me chat</strong> in a few seconds. 
                If redirection doesn&apos;t work, <a href="https://www.roastme.chat" className="text-orange-500 hover:text-orange-400 font-bold">click here to start getting roasted</a>.
              </p>
            </div>
          </section>

          {/* Special "Roast Me" section */}
          <section className="py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Why Say &quot;Roast Me&quot; to Our AI?
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Roast Me Free */}
              <div className="bg-gray-800/60 rounded-2xl p-8 border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-5xl mb-6 text-center">🎯</div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4 text-center">Roast Me Free</h3>
                <p className="text-gray-300 text-center">
                  Just say <strong>&quot;roast me&quot;</strong> and our AI will <strong>roast you</strong> 
                  for free! No cost, no limits. Our <strong>roast me ai</strong> is 100% free to use.
                </p>
              </div>

              {/* Roast Me Savage */}
              <div className="bg-gray-800/60 rounded-2xl p-8 border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-5xl mb-6 text-center">🔥</div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4 text-center">Roast Me Savage</h3>
                <p className="text-gray-300 text-center">
                  Our <strong>roast me ai</strong> analyzes your messages to <strong>roast you</strong> 
                  personally. Every <strong>roast me</strong> session is unique and brutal!
                </p>
              </div>

              {/* Roast Me Instant */}
              <div className="bg-gray-800/60 rounded-2xl p-8 border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-5xl mb-6 text-center">⚡</div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4 text-center">Roast Me Instant</h3>
                <p className="text-gray-300 text-center">
                  Say <strong>&quot;roast me&quot;</strong> and get your <strong>roast</strong> in seconds! 
                  Our <strong>roast me chat</strong> is lightning-fast and always available.
                </p>
              </div>

              {/* Roast Me Global */}
              <div className="bg-gray-800/60 rounded-2xl p-8 border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-5xl mb-6 text-center">🌍</div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4 text-center">Roast Me International</h3>
                <p className="text-gray-300 text-center">
                  You can say <strong>&quot;roast me&quot;</strong> in 12 languages! Our multilingual 
                  <strong>roast me ai</strong> understands and <strong>roasts you</strong> in your language.
                </p>
              </div>

            </div>
          </section>

          {/* Testimonials section */}
          <section className="py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                They Said &quot;Roast Me&quot; and Loved It!
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              
              <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-600/30">
                <div className="text-4xl mb-4">😂</div>
                <p className="text-gray-300 mb-4 italic">
                  &quot;I said <strong>roast me</strong> and the AI destroyed me! So funny, 
                  I recommend this <strong>roast me chat</strong> to all my friends!&quot;
                </p>
                <div className="text-orange-500 font-bold">- Sarah, 25</div>
              </div>

              <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-600/30">
                <div className="text-4xl mb-4">🔥</div>
                <p className="text-gray-300 mb-4 italic">
                  &quot;Best <strong>roast me ai</strong> I&apos;ve ever tried! The humor is 
                  savage and the <strong>roasts</strong> are always hilarious.&quot;
                </p>
                <div className="text-orange-500 font-bold">- Mike, 30</div>
              </div>

              <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-600/30">
                <div className="text-4xl mb-4">💀</div>
                <p className="text-gray-300 mb-4 italic">
                  &quot;This <strong>roast me ai</strong> <strong>roasted me</strong> so well 
                  that I come back every day! Totally addictive!&quot;
                </p>
                <div className="text-orange-500 font-bold">- Alex, 28</div>
              </div>

            </div>
          </section>

          {/* FAQ Roast Me section */}
          <section className="py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Questions About &quot;Roast Me&quot;
              </span>
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              
              <details className="bg-gray-800/60 rounded-xl p-6 border border-gray-600/30">
                <summary className="font-bold text-gray-100 cursor-pointer text-lg">
                  What happens when I say &quot;roast me&quot;?
                </summary>
                <p className="text-gray-300 mt-4">
                  When you say <strong>&quot;roast me&quot;</strong>, our AI analyzes your message and 
                  <strong>roasts you</strong> with savage humor! The more context you give, 
                  the more personalized and hilarious the <strong>roast</strong> will be.
                </p>
              </details>

              <details className="bg-gray-800/60 rounded-xl p-6 border border-gray-600/30">
                <summary className="font-bold text-gray-100 cursor-pointer text-lg">
                  Is &quot;roast me&quot; really free?
                </summary>
                <p className="text-gray-300 mt-4">
                  Yes! You can say <strong>&quot;roast me&quot;</strong> as many times as you want for free. 
                  Our <strong>roast me chat</strong> is 100% free with no usage limits.
                </p>
              </details>

              <details className="bg-gray-800/60 rounded-xl p-6 border border-gray-600/30">
                <summary className="font-bold text-gray-100 cursor-pointer text-lg">
                  Does the AI understand &quot;roast me&quot; in other languages?
                </summary>
                <p className="text-gray-300 mt-4">
                  Absolutely! Our <strong>roast me ai</strong> understands <strong>&quot;roast me&quot;</strong> 
                  in English, Spanish, French and 9 other languages. The AI adapts to your language!
                </p>
              </details>

              <details className="bg-gray-800/60 rounded-xl p-6 border border-gray-600/30">
                <summary className="font-bold text-gray-100 cursor-pointer text-lg">
                  Can I customize my &quot;roast me&quot; experience?
                </summary>
                <p className="text-gray-300 mt-4">
                  Yes! The more information you give with your <strong>&quot;roast me&quot;</strong>, 
                  the more our <strong>roast me ai</strong> can <strong>roast you</strong> in a 
                  personalized and precise way!
                </p>
              </details>

            </div>
          </section>

          {/* Final Call to Action */}
          <section className="text-center py-16">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl p-12 border border-orange-500/30">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
                🔥 Say &quot;Roast Me&quot; Now! 🔥
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the <strong>Roast Me</strong> community! Thousands of users 
                get <strong>roasted daily</strong> with our <strong>roast me ai</strong>. 
                Your turn to say <strong>&quot;roast me&quot;</strong>!
              </p>
              <a 
                href="https://www.roastme.chat"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span>🚀 Say &quot;Roast Me&quot;</span>
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
