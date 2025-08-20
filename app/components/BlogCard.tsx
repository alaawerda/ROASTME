import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  currentLanguage: string;
  t: (key: string) => string;
}

export default function BlogCard({ post, featured = false, currentLanguage, t }: BlogCardProps) {
  // Fonction utilitaire pour obtenir le texte traduit
  const getText = (field: Record<string, string>) => {
    return field[currentLanguage as keyof typeof field] || field['en'] || Object.values(field)[0] || '';
  };

  // Fonction utilitaire pour obtenir les tags traduits
  const getTags = (tags: Record<string, string[]>) => {
    return tags[currentLanguage as keyof typeof tags] || tags['en'] || Object.values(tags)[0] || [];
  };

  if (featured) {
    return (
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-white/20">
        <div className="relative h-64 md:h-80 bg-gradient-to-br from-purple-600 to-blue-600">
          {post.coverImage && (
            <Image
              src={post.coverImage}
              alt={getText(post.title)}
              fill
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-400 to-red-500 text-black text-sm font-bold rounded-full mb-3">
              🔥 {t('blog.featuredLabel')}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 line-clamp-2">
              {getText(post.title)}
            </h3>
            <p className="text-gray-200 line-clamp-2">
              {getText(post.excerpt)}
            </p>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">📅</span>
              <span className="text-gray-300 text-sm">
                {new Date(post.publishedAt).toLocaleDateString(currentLanguage === 'fr' ? 'fr-FR' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">⏱️</span>
              <span className="text-gray-300 text-sm">{post.readingTime} min</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {getTags(post.tags).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/20 text-white text-sm rounded-full border border-white/30"
              >
                #{tag}
              </span>
            ))}
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-red-500 text-black font-bold rounded-lg hover:from-yellow-300 hover:to-red-400 transition-all duration-300 w-full justify-center"
          >
            {t('blog.readArticle')} 🚀
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-white/20">
      <div className="relative h-48 bg-gradient-to-br from-purple-600 to-blue-600">
        {post.coverImage && (
          <Image
            src={post.coverImage}
            alt={getText(post.title)}
            fill
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-3 right-3">
          <span className="inline-block px-2 py-1 bg-gradient-to-r from-yellow-400 to-red-500 text-black text-xs font-bold rounded-full">
            {getText(post.category)}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 hover:text-yellow-400 transition-colors">
          {getText(post.title)}
        </h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {getText(post.excerpt)}
        </p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-yellow-400 text-sm">📅</span>
            <span className="text-gray-400 text-sm">
              {new Date(post.publishedAt).toLocaleDateString(currentLanguage === 'fr' ? 'fr-FR' : 'en-US', {
                month: 'short',
                day: 'numeric'
              })}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-400 text-sm">⏱️</span>
            <span className="text-gray-400 text-sm">{post.readingTime} min</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {getTags(post.tags).slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-white/20 text-white text-xs rounded-full border border-white/30"
            >
              #{tag}
            </span>
          ))}
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-red-500 text-black font-bold rounded-lg hover:from-yellow-300 hover:to-red-400 transition-all duration-300 text-sm w-full justify-center"
        >
          {t('blog.readMoreButton')} 📖
        </Link>
      </div>
    </div>
  );
}
