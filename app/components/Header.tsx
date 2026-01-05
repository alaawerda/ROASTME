"use client";

import React, { useState, useEffect, useCallback, memo } from 'react';
import dynamic from 'next/dynamic';
import { Zap, Sparkles, Coffee, Menu, X } from 'lucide-react';
import Logo from './Logo';
import LanguageSelector from './LanguageSelector';
import type { LocaleKey } from '../locales';

// Charger la navigation de manière dynamique pour le chargement paresseux
const DynamicNavigation = dynamic(
  () => import('./Navigation'), 
  { 
    ssr: false,
    loading: () => <div className="w-6 h-6" />
  }
);

interface HeaderProps {
  title: string;
  poweredBy: string;
  currentLanguage: string;
  onLanguageChange: (lang: LocaleKey) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  title, 
  poweredBy, 
  currentLanguage, 
  onLanguageChange 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Mémoriser la fonction de gestion du scroll
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  // Gestion du scroll pour l'effet de transparence avec debounce
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const debouncedScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener('scroll', debouncedScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  // Gestion du menu mobile
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Mémoriser les traductions pour éviter les recalculs
  const translations = React.useMemo(() => ({
    fr: {
      aiAdvanced: 'IA Avancée',
      buyMeCoffee: 'M\'offrir un ☕',
      menu: 'Menu',
      close: 'Fermer',
      home: 'Accueil',
      homePage: 'Page d\'accueil',
      blog: 'Blog',
      blogDesc: 'Articles et guides',
      tapToClose: 'Appuyez en dehors pour fermer'
    },
    en: {
      aiAdvanced: 'Advanced AI',
      buyMeCoffee: 'Buy me a ☕',
      menu: 'Menu',
      close: 'Close',
      home: 'Home',
      homePage: 'Home page',
      blog: 'Blog',
      blogDesc: 'Articles and guides',
      tapToClose: 'Tap outside to close'
    },
    es: {
      aiAdvanced: 'IA Avanzada',
      buyMeCoffee: 'Cómprame un ☕',
      menu: 'Menú',
      close: 'Cerrar',
      home: 'Inicio',
      homePage: 'Página de inicio',
      blog: 'Blog',
      blogDesc: 'Artículos y guías',
      tapToClose: 'Toca afuera para cerrar'
    },
    de: {
      aiAdvanced: 'Fortgeschrittene KI',
      buyMeCoffee: 'Kauf mir einen ☕',
      menu: 'Menü',
      close: 'Schließen',
      home: 'Startseite',
      homePage: 'Startseite',
      blog: 'Blog',
      blogDesc: 'Artikel und Anleitungen',
      tapToClose: 'Tippen Sie außen, um zu schließen'
    },
    it: {
      aiAdvanced: 'IA Avanzata',
      buyMeCoffee: 'Offrimi un ☕',
      menu: 'Menu',
      close: 'Chiudi',
      home: 'Home',
      homePage: 'Pagina iniziale',
      blog: 'Blog',
      blogDesc: 'Articoli e guide',
      tapToClose: 'Tocca fuori per chiudere'
    },
    pt: {
      aiAdvanced: 'IA Avançada',
      buyMeCoffee: 'Me pague um ☕',
      menu: 'Menu',
      close: 'Fechar',
      home: 'Início',
      homePage: 'Página inicial',
      blog: 'Blog',
      blogDesc: 'Artigos e guias',
      tapToClose: 'Toque fora para fechar'
    },
    nl: {
      aiAdvanced: 'Geavanceerde AI',
      buyMeCoffee: 'Koop me een ☕',
      menu: 'Menu',
      close: 'Sluiten',
      home: 'Home',
      homePage: 'Startpagina',
      blog: 'Blog',
      blogDesc: 'Artikelen en handleidingen',
      tapToClose: 'Tik buiten om te sluiten'
    },
    ru: {
      aiAdvanced: 'Продвинутый ИИ',
      buyMeCoffee: 'Купи мне ☕',
      menu: 'Меню',
      close: 'Закрыть',
      home: 'Главная',
      homePage: 'Главная страница',
      blog: 'Блог',
      blogDesc: 'Статьи и руководства',
      tapToClose: 'Нажмите снаружи, чтобы закрыть'
    },
    ja: {
      aiAdvanced: '高度なAI',
      buyMeCoffee: 'コーヒーをおごって ☕',
      menu: 'メニュー',
      close: '閉じる',
      home: 'ホーム',
      homePage: 'ホームページ',
      blog: 'ブログ',
      blogDesc: '記事とガイド',
      tapToClose: '外側をタップして閉じる'
    },
    ko: {
      aiAdvanced: '고급 AI',
      buyMeCoffee: '커피 사주세요 ☕',
      menu: '메뉴',
      close: '닫기',
      home: '홈',
      homePage: '홈 페이지',
      blog: '블로그',
      blogDesc: '기사 및 가이드',
      tapToClose: '닫으려면 외부를 탭하세요'
    },
    ar: {
      aiAdvanced: 'ذكاء اصطناعي متقدم',
      buyMeCoffee: 'اشتري لي ☕',
      menu: 'القائمة',
      close: 'إغلاق',
      home: 'الرئيسية',
      homePage: 'الصفحة الرئيسية',
      blog: 'المدونة',
      blogDesc: 'المقالات والأدلة',
      tapToClose: 'انقر في الخارج للإغلاق'
    },
    zh: {
      aiAdvanced: '高级AI',
      buyMeCoffee: '请我喝杯 ☕',
      menu: '菜单',
      close: '关闭',
      home: '首页',
      homePage: '主页',
      blog: '博客',
      blogDesc: '文章和指南',
      tapToClose: '点击外部关闭'
    }
  }), []);

  // Mémoriser la fonction de traduction
  const getStatusText = useCallback((key: 'aiAdvanced' | 'buyMeCoffee' | 'menu' | 'close' | 'home' | 'homePage' | 'blog' | 'blogDesc' | 'tapToClose') => {
    const lang = currentLanguage as keyof typeof translations;
    return (translations[lang]?.[key] || translations.fr[key] || key) as string;
  }, [currentLanguage, translations]);

  // Mémoriser les éléments de navigation
  const navItems = React.useMemo(() => [
    { href: '/', label: getStatusText('home'), icon: '🏠', desc: getStatusText('homePage') },
    { href: '/blog', label: getStatusText('blog'), icon: '📚', desc: getStatusText('blogDesc') }
  ], [getStatusText]);

  return (
    <header 
      className={`header-gradient text-white shadow-lg relative overflow-visible sticky top-0 z-[9998] transition-all duration-300 block w-full ${
        isScrolled ? 'bg-opacity-95 backdrop-blur-md' : ''
      }`}
      role="banner"
    >
      {/* Effet de particules en arrière-plan (masqué sur mobile) */}
      <div className="particles-bg hidden lg:block"></div>
      
      {/* Gradient overlay subtil */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5"></div>
      
      {/* Ligne décorative animée en haut (masquée sur mobile) */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-50 animate-pulse hidden md:block"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-2 sm:py-3 md:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4">
          {/* Logo et titre - Version UX Excellence */}
          <div className="flex items-center space-x-2 md:space-x-4 flex-shrink-0 min-w-0">
            <div className="flame-glow hover:scale-105 transition-transform duration-300 interactive-element gentle-float flex-shrink-0">
              <Logo size="sm" showText={false} animated={true} />
            </div>
            <div className="flex flex-col space-y-0.5 min-w-0">
              <h1 className="text-sm md:text-xl lg:text-2xl font-bold text-white drop-shadow-md tracking-tight leading-tight transition-all duration-300 hover:text-yellow-200 truncate">
                {title}
              </h1>
              {/* Indicateur de statut amélioré et responsive */}
              <div className="flex items-center space-x-2 text-xs md:text-sm">
                <div className="status-indicator-compact md:hidden flex-shrink-0">
                  <Zap className="w-2.5 h-2.5 text-yellow-300 animate-pulse" />
                  <span className="font-medium text-orange-100 text-xs">{poweredBy}</span>
                </div>
                {/* Version desktop améliorée */}
                <div className="hidden md:flex items-center space-x-3">
                  <div className="status-indicator">
                    <Zap className="w-3 h-3 text-yellow-300 animate-pulse" />
                    <span className="font-medium text-orange-100 text-xs">{poweredBy}</span>
                  </div>
                  <div className="status-indicator hidden lg:flex">
                    <Sparkles className="w-3 h-3 text-purple-300 animate-pulse" />
                    <span className="text-xs text-purple-100">{getStatusText('aiAdvanced')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Desktop - Chargée de manière dynamique */}
          <div className="hidden lg:flex flex-1 justify-center">
            <DynamicNavigation />
          </div>
          
          {/* Actions de droite - Alignées à droite - Toujours visibles */}
          <div className="flex items-center space-x-1 md:space-x-3 relative z-[9998] flex-shrink-0">
            {/* Lien Buy Me a Coffee - UX Excellence - Visible sur mobile */}
            <a 
              href="https://buymeacoffee.com/roastme" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-1.5 enhanced-button group bg-orange-500 hover:bg-orange-600 text-white px-2 py-1.5 md:px-3 md:py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl optimized-focus"
              aria-label={getStatusText('buyMeCoffee')}
            >
              <Coffee className="w-3.5 h-3.5 md:w-4 md:h-4 text-white smooth-pulse" />
              <span className="text-xs font-medium hidden md:inline">{getStatusText('buyMeCoffee')}</span>
            </a>
            
            {/* Sélecteur de langue - Amélioré pour mobile */}
            <LanguageSelector 
              currentLanguage={currentLanguage} 
              onLanguageChange={onLanguageChange} 
            />

            {/* Bouton menu mobile - Zone tactile optimisée */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 active:bg-white/30 transition-all duration-200 touch-manipulation"
              aria-label={getStatusText('menu')}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
        
        {/* Barre de progression subtile (masquée sur mobile) */}
        <div className="mt-2 md:mt-3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 hidden md:block"></div>
      </div>
      
      {/* Ligne décorative en bas avec animation (masquée sur mobile) */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50 hidden md:block">
        <div className="h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
      </div>

      {/* Menu mobile overlay optimisé */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[9999] opacity-100 visible transition-opacity duration-200">
          {/* Backdrop avec animation simplifiée */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
            role="button"
            aria-label="Fermer le menu"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setIsMobileMenuOpen(false)}
          />
          
          {/* Menu mobile avec animation CSS optimisée */}
          <div 
            className="absolute top-0 left-0 right-0 mt-0 mx-0 bg-gradient-to-br from-gray-900/95 via-purple-900/95 to-indigo-900/95 backdrop-blur-md border-b border-white/20 shadow-xl overflow-hidden"
            style={{
              animation: 'slideInFromTopFast 0.2s ease-out forwards',
              transform: 'translateY(0)',
              transition: 'transform 0.2s ease-out, opacity 0.2s ease-out'
            }}
          >
            {/* Header du menu mobile - Design amélioré */}
            <div className="p-5 bg-gradient-to-r from-yellow-400/30 via-orange-500/30 to-red-500/30 border-b border-white/30 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-yellow-400 to-red-500 flex items-center justify-center shadow-lg">
                    <span className="text-white text-lg">🍔</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Menu</h3>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mobile-close-button p-3 rounded-xl hover:bg-white/20 transition-all duration-200 hover:scale-110 hover:rotate-90"
                  aria-label={getStatusText('close')}
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
            
            {/* Items de navigation mobile - Design amélioré */}
            <div className="p-6 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="mobile-menu-item flex items-center space-x-4 p-5 rounded-2xl text-white hover:bg-gradient-to-r hover:from-white/15 hover:to-white/5 transition-all duration-200 group hover:scale-[1.02] active:scale-[0.98] border border-white/10 hover:border-white/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400/30 to-red-500/30 border border-yellow-400/40 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-200 shadow-lg">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-xl mb-1">{item.label}</div>
                    <div className="text-sm text-gray-300 opacity-80">
                      {item.desc}
                    </div>
                  </div>
                  <div className="text-gray-400 group-hover:text-white transition-all duration-200 transform group-hover:translate-x-1">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-200">
                      →
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Action rapide en bas du menu mobile - Design amélioré */}
            <div className="p-6 bg-gradient-to-r from-white/10 to-transparent border-t border-white/20">
              <a 
                href="https://buymeacoffee.com/roastme" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white px-6 py-4 rounded-2xl transition-all duration-200 hover:scale-105 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <Coffee className="w-6 h-6" />
                <span className="font-bold text-lg">{getStatusText('buyMeCoffee')}</span>
              </a>
              
              {/* Indicateur de fermeture amélioré */}
              <div className="mt-4 text-center">
                <p className="text-gray-400 text-sm font-medium">
                  {getStatusText('tapToClose')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default memo(Header);

