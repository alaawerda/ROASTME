'use client'

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPost, getBlogPosts } from '@/lib/blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import SocialShare from '@/components/SocialShare';
import Breadcrumb from '@/components/Breadcrumb';
import { useLanguageApp } from '@/hooks/useLanguage';
import type { BlogPost } from '@/types/blog';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export const dynamic = 'force-dynamic';

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { currentLanguage, changeLanguage, t } = useLanguageApp();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPost = await getBlogPost(params.slug, currentLanguage);
        if (!fetchedPost) {
          notFound();
        }
        setPost(fetchedPost);

        const fetchedRelatedPosts = await getBlogPosts(currentLanguage);
        const filteredPosts = fetchedRelatedPosts.filter(p => p.slug !== params.slug).slice(0, 3);
        setRelatedPosts(filteredPosts);
      } catch (error) {
        console.error('Erreur lors du chargement de l\'article:', error);
        notFound();
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params.slug, currentLanguage]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
          <p className="text-white mt-4">{t('loading.title')}</p>
        </div>
      </div>
    );
  }

  if (!post) {
    notFound();
  }

  // Fonction utilitaire pour obtenir le texte traduit
  const getText = (field: Record<string, string>) => {
    return field[currentLanguage as keyof typeof field] || field['en'] || Object.values(field)[0] || '';
  };

  // Fonction utilitaire pour obtenir les tags traduits
  const getTags = (tags: Record<string, string[]>) => {
    return tags[currentLanguage as keyof typeof tags] || tags['en'] || Object.values(tags)[0] || [];
  };

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

        {/* Article Header */}
        <article className="max-w-4xl mx-auto mb-16">
          {/* Cover Image */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-purple-600 to-blue-600">
            {post.coverImage && (
              <Image
                src={post.coverImage}
                alt={getText(post.title)}
                fill
                className="object-cover"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-red-500 text-black text-sm font-bold rounded-full mb-4">
                {getText(post.category)}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {getText(post.title)}
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl">
                {getText(post.excerpt)}
              </p>
            </div>
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">👤</span>
                <span className="text-gray-300">{getText(post.author)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">📅</span>
                <span className="text-gray-300">
                  {new Date(post.publishedAt).toLocaleDateString(currentLanguage === 'fr' ? 'fr-FR' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">⏱️</span>
                <span className="text-gray-300">{post.readingTime} min de lecture</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">🏷️</span>
              <div className="flex flex-wrap gap-2">
                {getTags(post.tags).map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag}`}
                    className="px-3 py-1 bg-white/20 text-white text-sm rounded-full border border-white/30 hover:bg-white/30 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <MarkdownRenderer content={getText(post.content)} />
          </div>

          {/* Social Share */}
          <div className="mt-8">
            <SocialShare 
              title={getText(post.title)}
              url={`/blog/${post.slug}`}
              description={getText(post.excerpt)}
            />
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-gradient-to-r from-yellow-400/20 to-red-500/20 rounded-2xl border border-yellow-400/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              🚀 {t('blog.readyToPractice')}
            </h3>
            <p className="text-gray-300 mb-6">
              {t('blog.practiceDescription')}
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-red-500 text-black font-bold rounded-full text-lg hover:from-yellow-300 hover:to-red-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🎭 {t('blog.tryRoastMe')}
            </Link>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              📚 {t('blog.relatedPosts')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} currentLanguage={currentLanguage} t={t} />
              ))}
            </div>
          </section>
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
