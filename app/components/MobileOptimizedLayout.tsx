'use client'

import { useEffect, useState } from 'react'

interface MobileOptimizedLayoutProps {
  children: React.ReactNode
  className?: string
}

export default function MobileOptimizedLayout({ children, className = '' }: MobileOptimizedLayoutProps) {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    // Détecter si on est sur mobile
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      
      // Ajuster la hauteur viewport pour mobile (gérer le clavier virtuel)
      if (mobile) {
        const vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
      }
    }

    // Gérer le redimensionnement (clavier virtuel sur mobile)
    const handleResize = () => {
      if (isMobile) {
        const vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
      }
    }

    // Initialiser
    checkMobile()
    
    // Écouter les changements
    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', checkMobile)
    
    // Gérer le viewport mobile
    const metaViewport = document.querySelector('meta[name="viewport"]')
    if (metaViewport && isMobile) {
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover, user-scalable=no')
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', checkMobile)
    }
  }, [isMobile])

  // CSS personnalisé pour mobile
  const mobileStyles = isMobile ? {
    width: '100vw',
    maxWidth: '100vw',
    minHeight: 'calc(var(--vh, 1vh) * 100)',
    overflowX: 'hidden' as const,
    position: 'relative' as const,
    boxSizing: 'border-box' as const,
  } : {}

  return (
    <div 
      className={`mobile-optimized-layout ${className} ${isMobile ? 'mobile-layout-active' : ''}`}
      style={mobileStyles}
    >
      {children}
      
      {/* CSS injecté pour optimisations mobiles */}
      {isMobile && (
        <style jsx>{`
          .mobile-optimized-layout {
            /* Forcer l'affichage mobile optimal */
            width: 100vw !important;
            max-width: 100vw !important;
            overflow-x: hidden !important;
            
            /* Gérer le safe area sur iPhone - SANS padding-top pour la header */
            padding-top: 0 !important;
            padding-bottom: env(safe-area-inset-bottom);
            padding-left: env(safe-area-inset-left);
            padding-right: env(safe-area-inset-right);
          }
          
          .mobile-layout-active * {
            /* Optimisations globales pour mobile */
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
            touch-action: manipulation;
          }
          
          .mobile-layout-active input,
          .mobile-layout-active textarea {
            /* Empêcher le zoom sur iOS */
            font-size: 16px !important;
            transform: translateZ(0);
            -webkit-transform: translateZ(0);
          }
          
          .mobile-layout-active button {
            /* Boutons tactiles optimaux */
            min-height: 48px;
            min-width: 48px;
            cursor: pointer;
          }
          
          /* Optimisations spécifiques aux bulles de chat */
          .mobile-layout-active .chat-bubble {
            max-width: calc(100vw - 2rem) !important;
            width: 100% !important;
            word-wrap: break-word;
            overflow-wrap: break-word;
            hyphens: auto;
          }
          
          /* Container de chat mobile */
          .mobile-layout-active .chat-container {
            width: 100vw !important;
            max-width: 100vw !important;
            margin-left: calc(-50vw + 50%) !important;
            margin-right: calc(-50vw + 50%) !important;
          }
          
          /* Messages container mobile */
          .mobile-layout-active .chat-messages-container {
            width: 100% !important;
            max-width: 100% !important;
            height: 60vh !important;
            min-height: 400px;
            -webkit-overflow-scrolling: touch;
          }
          
          /* Input mobile parfait */
          .mobile-layout-active .input-styled {
            width: 100% !important;
            min-height: 52px !important;
            font-size: 16px !important;
          }
          
          /* Sections mobile */
          .mobile-layout-active section {
            width: 100vw !important;
            max-width: 100vw !important;
            margin-left: calc(-50vw + 50%) !important;
            margin-right: calc(-50vw + 50%) !important;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          
          /* Grid mobile */
          .mobile-layout-active .grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          
          /* Conteneurs mobile */
          .mobile-layout-active .max-w-7xl,
          .mobile-layout-active .max-w-6xl,
          .mobile-layout-active .max-w-5xl,
          .mobile-layout-active .max-w-4xl,
          .mobile-layout-active .max-w-3xl {
            max-width: 100vw !important;
            width: 100vw !important;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
        `}</style>
      )}
    </div>
  )
}

