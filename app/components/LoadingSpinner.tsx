import React from 'react';
import Logo from './Logo';
import { Flame, Sparkles, Zap } from 'lucide-react';

interface LoadingSpinnerProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = 'Chargement...', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-20 h-20',
    md: 'w-28 h-28',
    lg: 'w-36 h-36'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8 p-8 animate-in">
      {/* Logo animé avec effets modernisés */}
      <div className={`${sizeClasses[size]} relative group`}>
        {/* Effet de lueur en arrière-plan */}
        <div className="absolute inset-0 bg-gradient-to-r from-flame-orange/30 to-purple-dark/30 rounded-full blur-2xl animate-pulse"></div>
        
        {/* Cercle rotatif */}
        <div className="absolute inset-0 border-4 border-transparent border-t-flame-orange border-r-purple-dark rounded-full animate-spin"></div>
        
        {/* Logo au centre */}
        <div className="relative z-10 animate-bounce-gentle group-hover:scale-110 transition-transform duration-300">
          <Logo size={size} showText={false} />
        </div>
        
        {/* Particules flottantes */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-flame-yellow rounded-full animate-bounce-soft"></div>
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-light rounded-full animate-bounce-soft" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      {/* Message de chargement avec animation moderne */}
      <div className="text-center space-y-6">
        {/* Indicateurs animés */}
        <div className="flex items-center justify-center space-x-3">
          <div className="w-3 h-3 bg-gradient-to-r from-flame-orange to-flame-orange-light rounded-full animate-bounce-soft"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-flame-orange-light to-flame-yellow rounded-full animate-bounce-soft" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-gradient-to-r from-flame-yellow to-purple-medium rounded-full animate-bounce-soft" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-gradient-to-r from-purple-medium to-purple-dark rounded-full animate-bounce-soft" style={{ animationDelay: '0.3s' }}></div>
        </div>
        
        {/* Texte principal */}
        <div className="space-y-3">
          <p className={`${textSizes[size]} font-bold gradient-text leading-relaxed`}>
            {message}
          </p>
          <p className="text-sm text-gray-500 flex items-center justify-center space-x-2">
            <Flame className="w-4 h-4 text-flame-orange animate-pulse" />
            <span>Préparation de votre roast personnalisé...</span>
            <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
          </p>
        </div>
      </div>
      
      {/* Barre de progression moderne */}
      <div className="w-56 h-2 bg-gray-200/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-200/50">
        <div className="h-full bg-gradient-to-r from-flame-orange via-flame-yellow to-purple-medium rounded-full animate-pulse relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        </div>
      </div>
      
      {/* Indicateurs de statut */}
      <div className="flex items-center space-x-4 text-xs text-gray-500">
        <div className="flex items-center space-x-2">
          <Zap className="w-3 h-3 text-green-400 animate-pulse" />
          <span>IA active</span>
        </div>
        <div className="flex items-center space-x-2">
          <Sparkles className="w-3 h-3 text-blue-400 animate-pulse" />
          <span>Génération en cours</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
