'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqItems = [
    {
      question: "Comment fonctionne le Chat Roast IA ?",
             answer: "Notre Chat Roast IA utilise une intelligence artificielle avancée qui analyse tes messages et crée des roasts personnalisés et hilarants. Il suffit d&apos;écrire un message, de cliquer sur envoyer, et l&apos;IA te répondra avec un roast cinglant en quelques secondes !"
    },
    {
      question: "Est-ce vraiment 100% gratuit ?",
             answer: "Absolument ! Notre Chat Roast IA est entièrement gratuit. Aucun abonnement, aucun coût caché, aucun paiement requis. Tu peux l&apos;utiliser autant que tu veux, quand tu veux, sans aucune limitation."
    },
    {
      question: "Quelles langues sont supportées ?",
      answer: "Notre Chat Roast IA supporte 12 langues : Français, Anglais, Espagnol, Allemand, Italien, Portugais, Russe, Japonais, Coréen, Chinois, Arabe et Néerlandais. Chaque roast est traduit dans ta langue pour une expérience parfaitement personnalisée."
    },
    {
      question: "Les roasts sont-ils appropriés ?",
             answer: "Nos roasts sont drôles et cinglants, mais toujours respectueux. L&apos;IA est programmée pour éviter le contenu offensant ou inapproprié, tout en gardant l&apos;humour et la créativité qui font notre réputation."
    },
    {
      question: "Puis-je utiliser l&apos;IA pour roaster mes amis ?",
             answer: "Bien sûr ! C&apos;est même l&apos;un des usages les plus populaires. Tu peux décrire tes amis ou partager des situations, et l&apos;IA créera des roasts hilarants et personnalisés. C&apos;est parfait pour des soirées entre amis ou pour décompresser !"
    },
    {
      question: "L&apos;IA se souvient-elle de nos conversations ?",
             answer: "Non, chaque conversation est indépendante. L&apos;IA analyse le contexte de ton message actuel pour créer un roast personnalisé, mais elle ne garde pas de mémoire des conversations précédentes. Cela garantit la confidentialité et la fraîcheur de chaque interaction."
    },
    {
      question: "Que faire si je ne suis pas satisfait d&apos;un roast ?",
             answer: "Si un roast ne te convient pas, tu peux simplement demander à l&apos;IA de le refaire ou de changer de style. Notre IA est flexible et s&apos;adapte à tes préférences. Tu peux aussi essayer de reformuler ta demande pour obtenir un résultat différent."
    },
    {
      question: "Y a-t-il des limites d&apos;utilisation ?",
      answer: "Aucune limite ! Tu peux utiliser notre Chat Roast IA autant que tu veux, 24h/24 et 7j/7. Que ce soit pour quelques roasts par jour ou pour des sessions intensives, tout est permis et gratuit."
    }
  ]

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-16 lg:py-24 bg-white/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-flame-orange/20 to-purple-dark/20 text-flame-orange mb-6">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Questions Fréquentes 🤔
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tout ce que tu dois savoir sur notre Chat Roast IA
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {item.question}
                </span>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-flame-orange flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openItems.includes(index)
                    ? 'pb-4 opacity-100 max-h-96'
                    : 'pb-0 opacity-0 max-h-0 overflow-hidden'
                }`}
              >
                <div className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA après la FAQ */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Tu as encore des questions ? N&apos;hésite pas à nous contacter !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/faq"
              className="btn-secondary px-6 py-3 flex items-center justify-center group"
            >
              Voir toutes les FAQ
              <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="/#contact"
              className="btn-outline px-6 py-3 flex items-center justify-center group"
            >
              Nous Contacter
              <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
