"use client"

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <Header 
        title="RoastMe" 
        poweredBy="Powered by AI" 
        currentLanguage="en"
        onLanguageChange={() => {}}
      />

      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>

            <div className="space-y-8 text-gray-300">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                <p>
                  RoastMe ("we", "us", "our") operates the roastme.chat website. This page informs you of our policies 
                  regarding the collection, use, and disclosure of personal data when you use our Service and the choices 
                  you have associated with that data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Information Collection and Use</h2>
                <p className="mb-4">
                  We collect several different types of information for various purposes to provide and improve our Service to you.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Usage Data:</strong> We may collect information about how you interact with our Service.</li>
                  <li><strong>Device Information:</strong> We collect information about your device such as IP address and browser type.</li>
                  <li><strong>Cookies:</strong> We use cookies to enhance your experience on our platform.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                <p>
                  The security of your data is important to us, but remember that no method of transmission over the Internet 
                  or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect 
                  your personal data, we cannot guarantee its absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
                  Privacy Policy on this page.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at support@roastme.chat
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer isInputFocused={false} />
    </div>
  )
}
