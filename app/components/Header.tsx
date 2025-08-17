import React from 'react';
import { Zap, Sparkles, Coffee } from 'lucide-react';
import Logo from './Logo';
import LanguageSelector from './LanguageSelector';

interface HeaderProps {
  title: string;
  poweredBy: string;
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  title, 
  poweredBy, 
  currentLanguage, 
  onLanguageChange 
}) => {
  return (
    <header className="header-gradient text-white shadow-md relative overflow-hidden sticky top-0 z-[9998]" role="banner">
      {/* Effet de particules en arrière-plan (masqué sur mobile) */}
      <div className="particles-bg hidden lg:block"></div>
      
      {/* Gradient overlay subtil */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5"></div>
      
      {/* Ligne décorative animée en haut (masquée sur mobile) */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-50 animate-pulse hidden md:block"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-3 md:px-4 py-1.5 md:py-2">
        <div className="flex items-center justify-between">
          {/* Logo et titre - Version ultra-compacte */}
          <div className="flex items-center space-x-1.5 md:space-x-3">
            <div className="flame-glow hover:scale-105 transition-transform duration-200">
              <Logo size="sm" showText={false} animated={true} />
            </div>
            <div className="flex flex-col space-y-0.5">
              <h1 className="text-base md:text-xl lg:text-2xl font-bold text-white drop-shadow-md tracking-tight leading-tight">
                {title}
              </h1>
              {/* Indicateur de statut ultra-compact */}
              <div className="flex items-center space-x-1.5 text-[9px] md:text-xs">
                <div className="status-indicator-compact md:hidden">
                  <Zap className="w-2.5 h-2.5 text-yellow-300 animate-pulse" />
                  <span className="font-medium text-orange-100">{poweredBy}</span>
                </div>
                {/* Version desktop compacte */}
                <div className="hidden md:flex items-center space-x-2">
                  <div className="status-indicator">
                    <Zap className="w-3 h-3 text-yellow-300 animate-pulse" />
                    <span className="font-medium text-orange-100 text-xs">{poweredBy}</span>
                  </div>
                  <div className="status-indicator hidden lg:flex">
                    <Sparkles className="w-2.5 h-2.5 text-purple-300 animate-pulse" />
                    <span className="text-xs text-purple-100">IA Avancée</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sélecteur de langue et indicateurs de statut */}
          <div className="flex items-center space-x-1.5 md:space-x-3 relative z-[9998]">
            {/* Lien Buy Me a Coffee */}
            <a 
              href="https://buymeacoffee.com/roastme" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 bg-orange-500 hover:bg-orange-600 text-white px-2 py-1.5 rounded-full transition-all duration-200 hover:scale-105 group"
            >
              <Coffee className="w-3.5 h-3.5 text-white" />
              <span className="text-xs font-medium hidden sm:inline">Buy me a ☕</span>
            </a>
            
            <LanguageSelector 
              currentLanguage={currentLanguage} 
              onLanguageChange={onLanguageChange} 
            />
            
            {/* Indicateurs de statut améliorés (masqués sur mobile) */}
            <div className="hidden lg:flex items-center space-x-2">
              <div className="status-indicator">
                <div className="status-dot bg-green-400"></div>
                <span className="font-medium text-green-100 text-xs">En ligne</span>
              </div>
              
              <div className="status-indicator">
                <div className="status-dot bg-blue-400"></div>
                <span className="font-medium text-blue-100 text-xs">Ultra-rapide</span>
              </div>
              
              <div className="status-indicator">
                <div className="status-dot bg-purple-400"></div>
                <span className="font-medium text-purple-100 text-xs">Sécurisé</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Barre de progression subtile (masquée sur mobile) */}
        <div className="mt-1 md:mt-2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 hidden md:block"></div>
      </div>
      
      {/* Ligne décorative en bas avec animation (masquée sur mobile) */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50 hidden md:block">
        <div className="h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
      </div>
    </header>
  );
};

export default Header;
