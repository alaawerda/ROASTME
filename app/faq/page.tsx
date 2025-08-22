'use client'

import { useLanguageApp } from '../hooks/useLanguage'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEOManager from '../components/SEOManager'

export default function FAQPage() {
  const { currentLanguage, changeLanguage } = useLanguageApp()

  const faqData = [
    {
      question: "Qu'est-ce que le Chat Roast IA ?",
      answer: "Le Chat Roast IA est une application web gratuite qui utilise l'intelligence artificielle pour créer des roasts humoristiques personnalisés. C'est l'IA la plus cinglante qui va te roaster de manière hilarante sans filtres."
    },
    {
      question: "Le Chat Roast IA est-il vraiment gratuit ?",
      answer: "Oui, le Chat Roast IA est 100% gratuit ! Tu as accès à toutes les fonctionnalités sans aucun coût caché. Tu peux chatter autant que tu veux avec notre IA."
    },
    {
      question: "Comment fonctionne le Chat Roast IA ?",
      answer: "C'est très simple : tu écris un message, tu cliques sur Envoyer, et notre intelligence artificielle va analyser ton message pour créer un roast personnalisé et hilarant en temps réel."
    },
    {
      question: "Le Chat Roast IA est-il sans filtres ?",
      answer: "Oui, notre Chat Roast IA fonctionne sans filtres ! L'IA va te roaster de manière cinglante et hilarante sans aucune censure, pour un maximum d'humour."
    },
    {
      question: "En combien de langues est disponible le Chat Roast IA ?",
      answer: "Le Chat Roast IA est disponible en 12 langues : français, anglais, espagnol, allemand, italien, portugais, russe, japonais, coréen, chinois, arabe et néerlandais."
    },
    {
      question: "Puis-je utiliser le Chat Roast IA sur mobile ?",
      answer: "Absolument ! Le Chat Roast IA est entièrement responsive et optimisé pour tous les appareils : smartphones, tablettes et ordinateurs. L'interface s'adapte parfaitement à chaque écran."
    },
    {
      question: "Le Chat Roast IA est-il sécurisé ?",
      answer: "Oui, le Chat Roast IA est entièrement sécurisé. Nous ne stockons pas tes messages personnels et utilisons des protocoles de sécurité avancés pour protéger ta vie privée."
    },
    {
      question: "Comment l'IA du Chat Roast crée-t-elle des roasts ?",
      answer: "Notre intelligence artificielle analyse ton message en temps réel, comprend le contexte et crée un roast personnalisé et créatif. Chaque roast est unique et adapté à ce que tu écris."
    },
    {
      question: "Puis-je partager mes roasts sur les réseaux sociaux ?",
      answer: "Bien sûr ! Tu peux facilement partager tes meilleurs roasts sur Twitter, Facebook, Instagram et autres réseaux sociaux. Nos roasts sont parfaits pour faire rire tes amis !"
    },
    {
      question: "Le Chat Roast IA est-il approprié pour tous les âges ?",
      answer: "Le Chat Roast IA est conçu pour un public adulte (18+) en raison de l'humour cinglant et des roasts sans filtres. C'est parfait pour ceux qui aiment l'humour décalé."
    },
    {
      question: "Combien de temps faut-il pour recevoir un roast ?",
      answer: "Les roasts sont générés en temps réel ! Dès que tu envoies ton message, notre intelligence artificielle analyse et crée ton roast en quelques secondes. C'est instantané !"
    },
    {
      question: "Puis-je utiliser le Chat Roast IA sans compte ?",
      answer: "Oui, aucun compte n'est requis ! Tu peux commencer à utiliser le Chat Roast IA immédiatement, sans inscription ni connexion. C'est simple et direct."
    },
    {
      question: "Le Chat Roast IA fonctionne-t-il hors ligne ?",
      answer: "Non, le Chat Roast IA nécessite une connexion internet car il utilise notre intelligence artificielle en temps réel pour générer des roasts personnalisés et créatifs."
    },
    {
      question: "Puis-je suggérer des améliorations pour le Chat Roast IA ?",
      answer: "Absolument ! Nous adorons recevoir des suggestions d'amélioration. Tu peux nous contacter via notre formulaire de contact pour partager tes idées et nous aider à améliorer l'expérience."
    },
    {
      question: "Le Chat Roast IA est-il disponible dans tous les pays ?",
      answer: "Oui, le Chat Roast IA est accessible depuis n'importe quel pays du monde. Notre service est disponible 24h/24 et 7j/7, peu importe où tu te trouves."
    },
    {
      question: "Comment l'IA du Chat Roast apprend-elle ?",
      answer: "Notre intelligence artificielle utilise des modèles de langage avancés qui s'améliorent constamment. Elle analyse des millions de conversations pour créer des roasts toujours plus créatifs et hilarants."
    },
    {
      question: "Puis-je utiliser le Chat Roast IA pour des événements ?",
      answer: "Parfaitement ! Le Chat Roast IA est excellent pour animer des soirées, des événements d'entreprise ou des réunions entre amis. C'est un excellent brise-glace !"
    },
    {
      question: "Le Chat Roast IA respecte-t-il la vie privée ?",
      answer: "Absolument ! Nous respectons totalement ta vie privée. Tes conversations ne sont pas stockées et ne sont utilisées que pour générer des roasts en temps réel."
    },
    {
      question: "Puis-je utiliser le Chat Roast IA sur tous les navigateurs ?",
      answer: "Oui, le Chat Roast IA fonctionne sur tous les navigateurs modernes : Chrome, Firefox, Safari, Edge, etc. Assure-toi simplement d'avoir JavaScript activé."
    },
    {
      question: "Comment puis-je signaler un problème avec le Chat Roast IA ?",
      answer: "Si tu rencontres un problème, tu peux nous contacter via notre formulaire de support. Notre équipe technique répond rapidement pour résoudre tous les soucis."
    }
  ]

  return (
    <>
      <SEOManager />
      
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
        <Header 
          title="FAQ - Chat Roast IA" 
          poweredBy="Powered by AI" 
          currentLanguage={currentLanguage}
          onLanguageChange={changeLanguage}
        />
        
        <main className="max-w-4xl mx-auto px-4 py-8">
          {/* Titre H1 optimisé SEO */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              FAQ - Questions Fréquentes sur le Chat Roast IA 🤔
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tout ce que tu dois savoir sur notre Chat Roast IA gratuit et sans filtres. L&apos;intelligence artificielle la plus cinglante qui va te roaster de manière hilarante !
            </p>
          </div>
          
          {/* Section FAQ avec H2 optimisé */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Questions Générales sur le Chat Roast IA 💬
            </h2>
            
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Section CTA avec H2 optimisé */}
          <div className="text-center bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à Être Roasté par Notre IA ? 🔥
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Rejoins des milliers d&apos;utilisateurs qui se font roaster quotidiennement par notre intelligence artificielle hilarante !
            </p>
            <a 
              href="/"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Commencer le Chat Roast IA Maintenant
            </a>
          </div>
        </main>
        
        <Footer isInputFocused={false} />
      </div>
    </>
  )
}
