import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  className = '', 
  showText = true,
  animated = false 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo SVG moderne */}
      <div className={`${sizeClasses[size]} flex-shrink-0 relative group ${animated ? 'animate-pulse' : ''}`}>
        {/* Effet de lueur en arrière-plan */}
        <div className="absolute inset-0 bg-gradient-to-r from-flame-orange/20 to-purple-dark/20 rounded-full blur-lg scale-110 group-hover:scale-125 transition-transform duration-500"></div>
        
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 200 200" 
          className="w-full h-full relative z-10 group-hover:scale-110 transition-transform duration-300"
          aria-label="RoastMe Chat Logo"
        >
          {/* Définitions des gradients modernisés */}
          <defs>
            <linearGradient id="flameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#ff6b35', stopOpacity: 1}} />
              <stop offset="30%" style={{stopColor: '#ff8c42', stopOpacity: 1}} />
              <stop offset="70%" style={{stopColor: '#ffa726', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#ffcc02', stopOpacity: 1}} />
            </linearGradient>
            
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#6a1b9a', stopOpacity: 1}} />
              <stop offset="50%" style={{stopColor: '#8e24aa', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#ab47bc', stopOpacity: 1}} />
            </linearGradient>
            
            <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" style={{stopColor: '#ff6b35', stopOpacity: 0.4}} />
              <stop offset="100%" style={{stopColor: '#ff6b35', stopOpacity: 0}} />
            </radialGradient>
            
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#6a1b9a" floodOpacity="0.4"/>
            </filter>
            
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Effet de lueur amélioré */}
          <circle cx="100" cy="100" r="85" fill="url(#flameGlow)" opacity="0.6"/>
          
          {/* Flamme principale avec ombre moderne */}
          <g filter="url(#shadow)">
            {/* Base de la flamme */}
            <path d="M100 40 C125 40 145 60 145 80 C145 100 125 120 100 140 C75 120 55 100 55 80 C55 60 75 40 100 40 Z" fill="url(#flameGradient)" stroke="#6a1b9a" strokeWidth="3" strokeLinejoin="round"/>
            
            {/* Corps de la flamme */}
            <path d="M100 140 C125 160 145 180 145 200 C145 220 125 240 100 260 C75 240 55 220 55 200 C55 180 75 160 100 140 Z" fill="url(#flameGradient)" stroke="#6a1b9a" strokeWidth="3" strokeLinejoin="round"/>
            
            {/* Détails de la flamme avec effet de profondeur */}
            <path d="M100 140 C112 152 125 165 125 175 C125 185 112 195 100 205 C88 195 75 185 75 175 C75 165 88 152 100 140 Z" fill="#ffcc02" opacity="0.9"/>
            
            {/* Reflets sur la flamme */}
            <path d="M85 60 Q95 70 105 60 Q95 50 85 60 Z" fill="rgba(255,255,255,0.3)" opacity="0.6"/>
          </g>
          
          {/* Yeux expressifs modernisés */}
          <g>
            {/* Œil gauche */}
            <ellipse cx="80" cy="100" rx="9" ry="13" fill="white" stroke="#6a1b9a" strokeWidth="2.5"/>
            <circle cx="80" cy="100" r="6" fill="#6a1b9a"/>
            <circle cx="78" cy="98" r="2.5" fill="white"/>
            <circle cx="82" cy="96" r="1" fill="rgba(255,255,255,0.8)"/>
            
            {/* Œil droit */}
            <ellipse cx="120" cy="100" rx="9" ry="13" fill="white" stroke="#6a1b9a" strokeWidth="2.5"/>
            <circle cx="120" cy="100" r="6" fill="#6a1b9a"/>
            <circle cx="122" cy="98" r="2.5" fill="white"/>
            <circle cx="118" cy="96" r="1" fill="rgba(255,255,255,0.8)"/>
          </g>
          
          {/* Sourire malicieux avec effet 3D */}
          <path d="M80 130 Q100 155 120 130" fill="none" stroke="#6a1b9a" strokeWidth="4.5" strokeLinecap="round" opacity="0.9"/>
          
          {/* Microphone détaillé et moderne */}
          <g>
            {/* Corps du microphone */}
            <rect x="150" y="140" width="16" height="42" rx="8" fill="url(#purpleGradient)" stroke="#6a1b9a" strokeWidth="2.5"/>
            
            {/* Tête du microphone */}
            <circle cx="158" cy="140" r="13" fill="url(#purpleGradient)" stroke="#6a1b9a" strokeWidth="2.5"/>
            
            {/* Grille du microphone moderne */}
            <circle cx="158" cy="140" r="9" fill="none" stroke="#6a1b9a" strokeWidth="1.5" opacity="0.8"/>
            <line x1="149" y1="140" x2="167" y2="140" stroke="#6a1b9a" strokeWidth="1.5" opacity="0.8"/>
            <line x1="158" y1="131" x2="158" y2="149" stroke="#6a1b9a" strokeWidth="1.5" opacity="0.8"/>
            
            {/* Câble du microphone avec effet de courbe */}
            <path d="M150 182 Q138 195 125 188" fill="none" stroke="#6a1b9a" strokeWidth="3.5" strokeLinecap="round"/>
          </g>
          
          {/* Petites flammes latérales animées */}
          <g>
            {/* Flamme gauche */}
            <path d="M40 120 Q52 108 62 120 Q52 132 40 120 Z" fill="url(#flameGradient)" stroke="#6a1b9a" strokeWidth="2.5"/>
            <path d="M35 125 Q47 113 57 125 Q47 137 35 125 Z" fill="url(#flameGradient)" stroke="#6a1b9a" strokeWidth="2" opacity="0.9"/>
            
            {/* Flamme droite */}
            <path d="M140 120 Q152 108 162 120 Q152 132 140 120 Z" fill="url(#flameGradient)" stroke="#6a1b9a" strokeWidth="2.5"/>
            <path d="M145 125 Q157 113 167 125 Q157 137 145 125 Z" fill="url(#flameGradient)" stroke="#6a1b9a" strokeWidth="2" opacity="0.9"/>
          </g>
          
          {/* Étincelles modernisées */}
          <g opacity="0.8">
            <circle cx="70" cy="60" r="2.5" fill="#ffcc02"/>
            <circle cx="130" cy="70" r="2" fill="#ffcc02"/>
            <circle cx="50" cy="90" r="1.5" fill="#ffcc02"/>
            <circle cx="150" cy="100" r="2" fill="#ffcc02"/>
            <circle cx="90" cy="50" r="1" fill="#ffcc02"/>
            <circle cx="110" cy="45" r="1.5" fill="#ffcc02"/>
          </g>
          
          {/* Effet de particules flottantes */}
          <g opacity="0.6">
            <circle cx="45" cy="70" r="1" fill="#ffcc02"/>
            <circle cx="155" cy="80" r="1.5" fill="#ffcc02"/>
            <circle cx="65" cy="110" r="1" fill="#ffcc02"/>
            <circle cx="135" cy="120" r="1.5" fill="#ffcc02"/>
          </g>
        </svg>
        
        {/* Effet de brillance au survol */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
      </div>
      
      {/* Texte du logo modernisé */}
      {showText && (
        <div className={`font-bold ${textSizes[size]} gradient-text tracking-tight group-hover:scale-105 transition-transform duration-300`}>
          RoastMe
        </div>
      )}
    </div>
  );
};

export default Logo;
