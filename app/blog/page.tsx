'use client'

import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import BlogCard from '@/components/BlogCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { useLanguageApp } from '@/hooks/useLanguage';
import { useState, useEffect } from 'react';
import type { BlogPost } from '@/types/blog';
import './blog.css';

export const dynamic = 'force-dynamic';

export default function BlogPage() {
  const { currentLanguage, changeLanguage, t } = useLanguageApp();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getBlogPosts(currentLanguage);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Erreur lors du chargement des articles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [currentLanguage]); // Recharger quand la langue change

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Header 
        title="RoastMe Blog"
        poweredBy="Powered by AI"
        currentLanguage={currentLanguage}
        onLanguageChange={changeLanguage}
      />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb />
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              {t('blog.title')}
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('blog.description')}
          </p>
          <div className="mt-8">
            <Link 
              href="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-red-500 text-black font-bold rounded-full text-lg hover:from-yellow-300 hover:to-red-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🎭 {t('blog.readMore')}
            </Link>
          </div>
        </div>

        {/* Loading state */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
            <p className="text-white mt-4">{t('loading.title')}</p>
          </div>
        )}

        {/* Featured Post */}
        {!isLoading && posts.length > 0 && posts[0] && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              🔥 {t('blog.featured')}
            </h2>
            <div className="max-w-4xl mx-auto">
              <BlogCard post={posts[0]} featured={true} currentLanguage={currentLanguage} t={t} />
            </div>
          </div>
        )}

        {/* All Posts */}
        {!isLoading && posts.length > 1 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              📚 {t('blog.allPosts')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(1).map((post) => (
                <BlogCard key={post.slug} post={post} currentLanguage={currentLanguage} t={t} />
              ))}
            </div>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            🚀 {t('footer.newsletter')}
          </h3>
          <p className="text-gray-300 mb-6">
            {t('footer.newsletterDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t('footer.emailPlaceholder')}
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:border-yellow-400"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-red-500 text-black font-bold rounded-lg hover:from-yellow-300 hover:to-red-400 transition-all duration-300">
              {t('footer.subscribe')}
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
