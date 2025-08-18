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
    <div className="flex flex-col items-center justify-center space-y-6 p-6">
      {/* Spinner simple et robuste */}
      <div className={`${sizeClasses[size]} relative`}>
        {/* Cercle rotatif simple */}
        <div className="absolute inset-0 border-4 border-gray-200 border-t-orange-500 rounded-full animate-spin"></div>
        
        {/* Logo au centre */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <Logo size={size} showText={false} />
        </div>
      </div>
      
      {/* Message de chargement */}
      <div className="text-center space-y-4">
        <p className={`${textSizes[size]} font-bold text-orange-600`}>
          {message}
        </p>
        <p className="text-sm text-gray-500">
          Préparation de votre roast personnalisé...
        </p>
      </div>
      
      {/* Barre de progression simple */}
      <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-orange-500 to-purple-600 rounded-full animate-pulse"></div>
      </div>
      
      {/* Indicateurs de statut simples */}
      <div className="flex items-center space-x-4 text-xs text-gray-500">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>IA active</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span>Génération en cours</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
