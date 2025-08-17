import React from 'react';
import { Flame, Zap, Star, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

const WelcomeCard: React.FC = () => {
  return (
    <div className="card glass-effect max-w-4xl mx-auto mb-4 animate-in pt-6 sm:pt-8 md:pt-10">
      <div className="text-center compact-spacing">
        {/* Titre avec effet de gradient moderne - Version compacte */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 bg-gradient-to-r from-flame-orange/10 to-purple-dark/10 rounded-full border border-flame-orange/20">
            <Sparkles className="w-3.5 h-3.5 text-flame-orange animate-pulse" />
            <span className="text-xs font-medium text-flame-orange">Nouveau !</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold gradient-text leading-tight">
            Bienvenue sur RoastMe Chat ! 🔥
          </h2>
          <p className="compact-text text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Prêt à être roaster par l'IA la plus cinglante ? 
            Découvre une expérience unique de chat avec des réponses créatives et hilarantes !
          </p>
        </div>

        {/* Fonctionnalités principales avec design moderne - Version compacte */}
        <div className="feature-grid mt-4">
          <div className="group p-3 rounded-xl bg-gradient-to-br from-flame-orange/5 to-flame-yellow/5 border border-flame-orange/20 hover:border-flame-orange/40 transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg">
            <div className="w-10 h-10 bg-gradient-to-br from-flame-orange to-flame-orange-light rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <h3 className="compact-heading text-gray-800 mb-1.5">Roasts Créatifs</h3>
            <p className="compact-text text-gray-600 leading-relaxed">
              Des réponses uniques et personnalisées qui vont te faire rire aux éclats
            </p>
          </div>

          <div className="group p-3 rounded-xl bg-gradient-to-br from-purple-dark/5 to-purple-medium/5 border border-purple-dark/20 hover:border-purple-dark/40 transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-dark to-purple-medium rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h3 className="compact-heading text-gray-800 mb-1.5">Ultra-Rapide</h3>
            <p className="compact-text text-gray-600 leading-relaxed">
              Réponses instantanées grâce à notre IA de pointe et infrastructure optimisée
            </p>
          </div>

          <div className="group p-3 rounded-xl bg-gradient-to-br from-flame-yellow/5 to-purple-light/5 border border-flame-yellow/20 hover:border-flame-yellow/40 transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg">
            <div className="w-10 h-10 bg-gradient-to-br from-flame-yellow to-purple-light rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200">
              <Star className="w-5 h-5 text-white" />
            </div>
            <h3 className="compact-heading text-gray-800 mb-1.5">Qualité Premium</h3>
            <p className="compact-text text-gray-600 leading-relaxed">
              Une expérience utilisateur exceptionnelle et des réponses de qualité professionnelle
            </p>
          </div>
        </div>

        {/* Instructions d'utilisation modernisées - Version compacte */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 mt-4 border border-gray-200/50">
          <h3 className="font-bold text-lg text-gray-800 mb-3 flex items-center justify-center space-x-2">
            <MessageCircle className="w-4 h-4 text-flame-orange" />
            <span>Comment ça marche ?</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="flex items-center space-x-2 group">
              <div className="w-7 h-7 bg-gradient-to-r from-flame-orange to-flame-orange-light text-white rounded-full flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-200">1</div>
              <div>
                <span className="font-semibold text-gray-800 compact-text">Écris ton message</span>
                <p className="ultra-compact-text text-gray-600">Tape ce que tu veux dans la zone de texte</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 group">
              <div className="w-7 h-7 bg-gradient-to-r from-flame-orange to-flame-orange-light text-white rounded-full flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-200">2</div>
              <div>
                <span className="font-semibold text-gray-800 compact-text">L'IA prépare ton roast</span>
                <p className="ultra-compact-text text-gray-600">Notre IA génère une réponse personnalisée</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 group">
              <div className="w-7 h-7 bg-gradient-to-r from-flame-orange to-flame-orange-light text-white rounded-full flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-200">3</div>
              <div>
                <span className="font-semibold text-gray-800 compact-text">Profite de la réponse !</span>
                <p className="ultra-compact-text text-gray-600">Lis et ris de ton roast personnalisé</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-action moderne - Version compacte */}
        <div className="bg-gradient-to-r from-flame-orange/10 to-purple-dark/10 rounded-xl p-3 border border-flame-orange/20">
          <div className="flex items-center justify-center space-x-2 text-flame-orange font-semibold compact-text">
            <span className="text-sm">🚀</span>
            <span>Prêt à commencer ? Tape ton premier message ci-dessous !</span>
            <ArrowRight className="w-3.5 h-3.5 animate-bounce" />
          </div>
        </div>

        {/* Avertissement modernisé et plus visible - Version compacte */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-3">
          <div className="flex items-start space-x-2">
            <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-yellow-600 text-xs font-bold">⚠️</span>
            </div>
            <div className="text-left">
              <p className="compact-text font-medium text-yellow-800 mb-1">
                <strong>Attention :</strong> Ce chat est conçu pour le divertissement et l'humour
              </p>
              <p className="ultra-compact-text text-yellow-700 leading-relaxed">
                Les réponses sont générées par IA et peuvent contenir du contenu humoristique. 
                Utilise avec discernement et respect.
              </p>
            </div>
          </div>
        </div>

        {/* Informations supplémentaires compactes */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-3">
          <div className="flex items-center justify-center space-x-2 text-blue-700 compact-text">
            <span className="text-sm">💡</span>
            <span>Conseil : Plus tu donnes de contexte, plus ton roast sera personnalisé !</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
