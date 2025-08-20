"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, ChevronRight, BookOpen, MessageSquare } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href: string;
  icon?: React.ComponentType<any>;
}

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const segments = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Accueil', href: '/', icon: Home }
    ];

    if (segments.length === 0) return breadcrumbs;

    // Gestion spéciale pour le blog
    if (segments[0] === 'blog') {
      breadcrumbs.push({
        name: 'Blog',
        href: '/blog',
        icon: BookOpen
      });

      // Si c'est un article spécifique
      if (segments.length > 1) {
        breadcrumbs.push({
          name: 'Article',
          href: pathname
        });
      }
    } else if (segments[0] === 'chat') {
      breadcrumbs.push({
        name: 'Chat IA',
        href: '/#chat',
        icon: MessageSquare
      });
    } else {
      // Pour d'autres routes
      segments.forEach((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join('/')}`;
        const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
        breadcrumbs.push({ name, href });
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav className="mb-8" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1;
          const Icon = item.icon;

          return (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-500 mx-2 flex-shrink-0" />
              )}
              
              {isLast ? (
                <span className="flex items-center space-x-2 text-white font-medium">
                  {Icon && <Icon className="w-4 h-4" />}
                  <span className="truncate max-w-xs">{item.name}</span>
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="group flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors duration-200 hover:scale-105"
                >
                  {Icon && <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />}
                  <span className="truncate max-w-xs">{item.name}</span>
                  
                  {/* Effet de survol */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-red-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              )}
            </li>
          );
        })}
      </ol>

      {/* Indicateur de progression */}
      <div className="mt-2 flex items-center space-x-2">
        <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-yellow-400 to-red-500 rounded-full transition-all duration-500"
            style={{ width: `${(breadcrumbs.length - 1) / Math.max(breadcrumbs.length - 1, 1) * 100}%` }}
          />
        </div>
        <span className="text-xs text-gray-400">
          {breadcrumbs.length - 1} niveau{breadcrumbs.length > 2 ? 'x' : ''}
        </span>
      </div>
    </nav>
  );
};

export default Breadcrumb;
