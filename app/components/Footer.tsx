"use client"

import React from 'react';
import { Heart, Zap, Shield, Users, MessageSquare, Globe, ArrowUpRight, Flame, Coffee } from 'lucide-react';
import Logo from './Logo';


interface FooterProps {
  isInputFocused?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isInputFocused = false }) => {

  
  return (
    <footer className={`relative overflow-hidden transition-all duration-300 ease-out ${
      isInputFocused ? 'md:block hidden' : 'block'
    }`}>
      {/* Arrière-plan avec gradient inversé orange/violet - Version ultra-compacte */}
      <div className="bg-gradient-to-r from-orange-500 to-violet-700 relative">
        {/* Particules minimales */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-2 left-8 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-2 right-12 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-3">
          {/* Footer ultra-compacte en une seule ligne */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            
            {/* Logo et branding - Version compacte */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="absolute inset-0 bg-violet-400 rounded-full blur-sm opacity-40"></div>
                <Logo size="sm" showText={false} className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm">RoastMe</span>
                <span className="text-orange-200 text-xs">AI Chat</span>
              </div>
            </div>
            
            {/* Statistiques ultra-compactes en ligne - UX Excellence */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="flex items-center space-x-2 glass-morphism rounded-full px-2 py-1 interactive-element smooth-pulse">
                <Users className="w-3 h-3 text-violet-300 gentle-float" />
                <span className="text-white text-xs font-medium">75K+</span>
              </div>
              <div className="flex items-center space-x-2 glass-morphism rounded-full px-2 py-1 interactive-element smooth-pulse" style={{ animationDelay: '0.2s' }}>
                <MessageSquare className="w-3 h-3 text-orange-300 gentle-float" />
                <span className="text-white text-xs font-medium">3M+</span>
              </div>

              <div className="flex items-center space-x-2 glass-morphism rounded-full px-2 py-1 interactive-element smooth-pulse" style={{ animationDelay: '0.4s' }}>
                <Globe className="w-3 h-3 text-violet-300 gentle-float" />
                <span className="text-white text-xs font-medium">15+</span>
              </div>
            </div>
            
            {/* Indicateurs de statut compacts */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full px-2 py-1 border border-white/20">
                <Shield className="w-3 h-3 text-green-300" />
                <span className="text-white text-xs">Sécurisé</span>
              </div>
              <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full px-2 py-1 border border-white/20">
                <Zap className="w-3 h-3 text-yellow-300" />
                <span className="text-white text-xs">Rapide</span>
              </div>
            </div>
            
            {/* Liens et copyright - Version ultra-compacte */}
            <div className="flex items-center space-x-3">
              {/* Lien Buy Me a Coffee */}
              <a 
                href="https://buymeacoffee.com/roastme" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded-full transition-all duration-200 hover:scale-105 group"
              >
                <Coffee className="w-3 h-3 text-white" />
                <span className="text-xs font-medium hidden sm:inline">Buy me a ☕</span>
              </a>
              
              {/* Liens rapides */}
              <div className="hidden sm:flex items-center space-x-2">
                <a href="#" className="footer-link-compact group">
                  <span className="text-xs">Accueil</span>
                  <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </a>
                <a href="#" className="footer-link-compact group">
                  <span className="text-xs">À propos</span>
                  <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </a>
              </div>
              
                             {/* Copyright compact */}
               <div className="flex items-center space-x-1 text-xs">
                 <span className="text-violet-200">© 2025</span>
                 <Heart className="w-3 h-3 text-red-300 animate-pulse" />
                 <span className="text-violet-200">RoastMe</span>
               </div>
            </div>
          </div>
          
          {/* Ligne de séparation ultra-mince */}
          <div className="mt-2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          {/* Section inférieure ultra-compacte */}
          <div className="mt-2 flex flex-col sm:flex-row items-center justify-between space-y-1 sm:space-y-0">
            {/* Badge de qualité compact */}
            <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full px-2 py-1 border border-white/20">
              <Flame className="w-3 h-3 text-orange-300" />
              <span className="text-white text-xs">Premium AI</span>
            </div>
            
            {/* Liens légaux compacts */}
            <div className="flex items-center space-x-3 text-xs">
              <a href="#" className="text-violet-200 hover:text-white transition-colors duration-200">Privacy</a>
              <a href="#" className="text-violet-200 hover:text-white transition-colors duration-200">Terms</a>
              <a href="#" className="text-violet-200 hover:text-white transition-colors duration-200">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
