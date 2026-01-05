"use client"

import React, { useMemo } from 'react';
import { Heart, Zap, Shield, Users, MessageSquare, Globe, ArrowUpRight, Flame, Coffee } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../hooks/useLanguage';

interface FooterProps {
  isInputFocused?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isInputFocused = false }) => {
  const { locale } = useLanguage();
  
  // Traductions pour toutes les 12 langues
  const translations = useMemo(() => ({
    fr: {
      secure: 'Sécurisé',
      fast: 'Rapide',
      buyMeCoffee: 'M\'offrir un ☕',
      home: 'Accueil',
      about: 'À propos',
      premiumAI: 'IA Premium',
      privacy: 'Confidentialité',
      terms: 'Conditions',
      support: 'Support',
      copyright: '© 2026'
    },
    en: {
      secure: 'Secure',
      fast: 'Fast',
      buyMeCoffee: 'Buy me a ☕',
      home: 'Home',
      about: 'About',
      premiumAI: 'Premium AI',
      privacy: 'Privacy',
      terms: 'Terms',
      support: 'Support',
      copyright: '© 2026'
    },
    es: {
      secure: 'Seguro',
      fast: 'Rápido',
      buyMeCoffee: 'Invítame un ☕',
      home: 'Inicio',
      about: 'Acerca de',
      premiumAI: 'IA Premium',
      privacy: 'Privacidad',
      terms: 'Términos',
      support: 'Soporte',
      copyright: '© 2026'
    },
    de: {
      secure: 'Sicher',
      fast: 'Schnell',
      buyMeCoffee: 'Kauf mir einen ☕',
      home: 'Startseite',
      about: 'Über uns',
      premiumAI: 'Premium KI',
      privacy: 'Datenschutz',
      terms: 'Bedingungen',
      support: 'Support',
      copyright: '© 2026'
    },
    it: {
      secure: 'Sicuro',
      fast: 'Veloce',
      buyMeCoffee: 'Offrimi un ☕',
      home: 'Home',
      about: 'Chi siamo',
      premiumAI: 'IA Premium',
      privacy: 'Privacy',
      terms: 'Termini',
      support: 'Supporto',
      copyright: '© 2026'
    },
    pt: {
      secure: 'Seguro',
      fast: 'Rápido',
      buyMeCoffee: 'Me pague um ☕',
      home: 'Início',
      about: 'Sobre',
      premiumAI: 'IA Premium',
      privacy: 'Privacidade',
      terms: 'Termos',
      support: 'Suporte',
      copyright: '© 2026'
    },
    nl: {
      secure: 'Veilig',
      fast: 'Snel',
      buyMeCoffee: 'Koop me een ☕',
      home: 'Home',
      about: 'Over ons',
      premiumAI: 'Premium AI',
      privacy: 'Privacy',
      terms: 'Voorwaarden',
      support: 'Ondersteuning',
      copyright: '© 2026'
    },
    ru: {
      secure: 'Безопасно',
      fast: 'Быстро',
      buyMeCoffee: 'Купи мне ☕',
      home: 'Главная',
      about: 'О нас',
      premiumAI: 'Премиум ИИ',
      privacy: 'Конфиденциальность',
      terms: 'Условия',
      support: 'Поддержка',
      copyright: '© 2026'
    },
    ja: {
      secure: '安全',
      fast: '高速',
      buyMeCoffee: 'コーヒーをおごって ☕',
      home: 'ホーム',
      about: '概要',
      premiumAI: 'プレミアムAI',
      privacy: 'プライバシー',
      terms: '利用規約',
      support: 'サポート',
      copyright: '© 2026'
    },
    ko: {
      secure: '안전',
      fast: '빠름',
      buyMeCoffee: '커피 사주세요 ☕',
      home: '홈',
      about: '소개',
      premiumAI: '프리미엄 AI',
      privacy: '개인정보',
      terms: '이용약관',
      support: '지원',
      copyright: '© 2026'
    },
    ar: {
      secure: 'آمن',
      fast: 'سريع',
      buyMeCoffee: 'اشتري لي ☕',
      home: 'الرئيسية',
      about: 'حول',
      premiumAI: 'ذكاء اصطناعي متميز',
      privacy: 'الخصوصية',
      terms: 'الشروط',
      support: 'الدعم',
      copyright: '© 2026'
    },
    zh: {
      secure: '安全',
      fast: '快速',
      buyMeCoffee: '请我喝杯 ☕',
      home: '首页',
      about: '关于',
      premiumAI: '高级AI',
      privacy: '隐私',
      terms: '条款',
      support: '支持',
      copyright: '© 2026'
    }
  }), []);

  // Fonction pour obtenir les traductions
  const t = (key: keyof typeof translations.fr) => {
    const lang = locale as keyof typeof translations;
    return translations[lang]?.[key] || translations.fr[key] || key;
  };
  
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
                <span className="text-white text-xs">{t('secure')}</span>
              </div>
              <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full px-2 py-1 border border-white/20">
                <Zap className="w-3 h-3 text-yellow-300" />
                <span className="text-white text-xs">{t('fast')}</span>
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
                <span className="text-xs font-medium hidden sm:inline">{t('buyMeCoffee')}</span>
              </a>
              
              {/* Social Media Links */}
              <a 
                href="https://twitter.com/roastmechat" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Follow us on Twitter"
                className="text-violet-200 hover:text-white transition-colors duration-200 text-xs"
              >
                Twitter
              </a>
              <a 
                href="https://github.com/roastme" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Check our GitHub"
                className="text-violet-200 hover:text-white transition-colors duration-200 text-xs"
              >
                GitHub
              </a>
              
              {/* Liens rapides */}
              <div className="hidden sm:flex items-center space-x-2">
                <a href="/" className="footer-link-compact group">
                  <span className="text-xs">{t('home')}</span>
                  <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </a>
                <a href="/about" className="footer-link-compact group">
                  <span className="text-xs">{t('about')}</span>
                  <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </a>
              </div>
              
              {/* Copyright compact */}
              <div className="flex items-center space-x-1 text-xs">
                <span className="text-violet-200">{t('copyright')}</span>
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
              <span className="text-white text-xs">{t('premiumAI')}</span>
            </div>
            
            {/* Liens légaux compacts */}
            <div className="flex items-center space-x-3 text-xs">
              <a href="/privacy" className="text-violet-200 hover:text-white transition-colors duration-200">{t('privacy')}</a>
              <a href="/terms" className="text-violet-200 hover:text-white transition-colors duration-200">{t('terms')}</a>
              <a href="/faq" className="text-violet-200 hover:text-white transition-colors duration-200">{t('support')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
