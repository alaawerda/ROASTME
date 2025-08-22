'use client'

import { useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Alexandre M.",
      role: "Développeur",
      avatar: "👨‍💻",
      rating: 5,
             content: "L&apos;IA la plus cinglante que j&apos;ai jamais testée ! Les roasts sont hilarants et vraiment personnalisés. Je me marre à chaque fois !",
      language: "Français"
    },
    {
      name: "Sarah K.",
      role: "Designer",
      avatar: "👩‍🎨",
      rating: 5,
      content: "Enfin une IA qui comprend l'humour ! Les réponses sont rapides, créatives et vraiment drôles. C'est devenu mon passe-temps favori !",
      language: "Français"
    },
    {
      name: "Marco R.",
      role: "Étudiant",
      avatar: "👨‍🎓",
      rating: 5,
      content: "Incroyable ! L'IA arrive à roaster mes amis de manière hilarante. Le support multilingue est parfait pour nos conversations internationales !",
      language: "Italien"
    },
    {
      name: "Emma L.",
      role: "Marketing",
      avatar: "👩‍💼",
      rating: 5,
      content: "Parfait pour décompresser après une journée de travail ! L'humour est intelligent et jamais vulgaire. Vraiment bien pensé !",
      language: "Anglais"
    },
    {
      name: "Carlos M.",
      role: "Ingénieur",
      avatar: "👨‍🔧",
      rating: 5,
      content: "Une expérience unique ! L'IA comprend le contexte et crée des roasts vraiment originaux. Le fait que ce soit gratuit est incroyable !",
      language: "Espagnol"
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex] || testimonials[0]

  if (!currentTestimonial) return null

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-gray-50 to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos utilisateurs ⭐
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvre pourquoi des milliers d&apos;utilisateurs adorent notre Chat Roast IA
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Témoignage principal */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100 relative">
            {/* Guillemets décoratifs */}
            <div className="absolute top-6 left-6 text-6xl text-flame-orange/20">
              <Quote />
            </div>
            
            <div className="relative z-10">
              {/* Note */}
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Contenu */}
                             <blockquote className="text-lg md:text-xl text-gray-700 text-center mb-8 leading-relaxed italic">
                 &ldquo;{currentTestimonial.content}&rdquo;
               </blockquote>

              {/* Auteur */}
              <div className="flex items-center justify-center space-x-4">
                <div className="text-4xl">{currentTestimonial.avatar}</div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">{currentTestimonial.name}</div>
                  <div className="text-gray-600">{currentTestimonial.role}</div>
                  <div className="text-sm text-flame-orange font-medium">{currentTestimonial.language}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-gray-200"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            {/* Indicateurs */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-flame-orange scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-gray-200"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Statistiques de satisfaction */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-flame-orange mb-2">98%</div>
              <div className="text-gray-600">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-dark mb-2">4.9/5</div>
              <div className="text-gray-600">Note moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-flame-yellow mb-2">12</div>
              <div className="text-gray-600">Langues</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-green mb-2">24/7</div>
              <div className="text-gray-600">Disponibilité</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
