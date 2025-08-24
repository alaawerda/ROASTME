"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, MessageSquare } from 'lucide-react';
import './navigation.css';

const Navigation: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (!pathname) return false;
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  // Traductions basées sur la langue actuelle (détectée depuis le document)
  const getNavText = (key: string) => {
    const lang = typeof document !== 'undefined' ? document.documentElement.lang : 'fr';
    
    const translations: Record<string, Record<string, string>> = {
      fr: {
        home: 'Accueil',
        blog: 'Blog',
        chat: 'Chat IA',
        homeDesc: 'Page d\'accueil',
        blogDesc: 'Articles et guides',
        chatDesc: 'Discuter avec l\'IA'
      },
      en: {
        home: 'Home',
        blog: 'Blog',
        chat: 'AI Chat',
        homeDesc: 'Home page',
        blogDesc: 'Articles and guides',
        chatDesc: 'Chat with AI'
      },
      es: {
        home: 'Inicio',
        blog: 'Blog',
        chat: 'Chat IA',
        homeDesc: 'Página de inicio',
        blogDesc: 'Artículos y guías',
        chatDesc: 'Chatear con IA'
      },
      de: {
        home: 'Startseite',
        blog: 'Blog',
        chat: 'KI-Chat',
        homeDesc: 'Startseite',
        blogDesc: 'Artikel und Anleitungen',
        chatDesc: 'Mit KI chatten'
      }
    };
    
    return translations[lang]?.[key] || translations.fr?.[key] || key;
  };

  const navItems = [
    { href: '/', label: getNavText('home'), icon: Home, description: getNavText('homeDesc') },
    { href: '/blog', label: getNavText('blog'), icon: BookOpen, description: getNavText('blogDesc') },
    { href: '/#chat', label: getNavText('chat'), icon: MessageSquare, description: getNavText('chatDesc') }
  ];

  return (
    <nav className="flex items-center space-x-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = isActive(item.href);
        
        return (
          <div key={item.href} className="nav-item group">
            <Link
              href={item.href}
              className={`nav-item-interactive flex items-center space-x-2 px-4 py-2.5 rounded-xl ${
                active 
                  ? 'selected bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-400/30 shadow-lg' 
                  : 'text-white/80 hover:text-white'
              } hover-glow-modern`}
            >
              <Icon className={`w-4 h-4 transition-transform duration-200 ${
                active ? 'text-blue-400' : 'group-hover:scale-110'
              }`} />
              <span className="font-medium text-sm">{item.label}</span>
              {active && <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" />}
            </Link>
            
            {/* Tooltip amélioré */}
            <div className="nav-tooltip">
              {item.description}
            </div>
          </div>
        );
      })}
    </nav>
  );
};

export default Navigation;
