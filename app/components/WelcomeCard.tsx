import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { useLanguageApp } from '../hooks/useLanguage';

interface WelcomeCardProps {
  onChatOpen?: () => void;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({ onChatOpen }) => {
  const { t } = useLanguageApp();
  const [showChatHint, setShowChatHint] = useState(false);

  // Afficher l'indice du chat après 1 seconde
  useEffect(() => {
    const hintTimer = setTimeout(() => {
      setShowChatHint(true);
    }, 1000);
    
    return () => clearTimeout(hintTimer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-purple-900/20 to-indigo-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* En-tête principal */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-red-500/20 rounded-full border border-yellow-400/30 mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-400">Welcome</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t('welcome.title')}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              {t('welcome.subtitle')}
            </p>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              {t('welcome.description')}
            </p>

            {/* Indice d'ouverture automatique du chat */}
            {showChatHint && (
              <div className="mb-8 animate-in slide-in-from-bottom-4 duration-700">
                <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full border border-green-400/30">
                  <MessageSquare className="w-5 h-5 text-green-400 animate-pulse" />
                  <span className="text-green-400 font-medium">
                    Le chat s&apos;ouvrira automatiquement dans quelques secondes...
                  </span>
                </div>
              </div>
            )}
            
            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onChatOpen}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-red-500 text-black font-bold text-lg rounded-xl hover:from-yellow-300 hover:to-red-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <span>Ouvrir le chat maintenant</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <Link
                href="/blog"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-white/10 text-white font-bold text-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <span>{t('welcome.learnMore')}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeCard;
