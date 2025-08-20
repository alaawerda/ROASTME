import { BlogPost } from '@/types/blog';
import { blogPosts } from './blog-data';

export async function getBlogPosts(language: string = 'fr'): Promise<BlogPost[]> {
  // Simuler un délai de chargement
  await new Promise(resolve => setTimeout(resolve, 100));
  
  // Filtrer les posts par langue et les trier par date
  return blogPosts
    .filter(post => post.title[language as keyof typeof post.title]) // Vérifier que la langue est supportée
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export async function getBlogPost(slug: string, language: string = 'fr'): Promise<BlogPost | null> {
  await new Promise(resolve => setTimeout(resolve, 100));
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post || !post.title[language as keyof typeof post.title]) {
    return null;
  }
  
  return post;
}

export async function getBlogPostsByCategory(category: string, language: string = 'fr'): Promise<BlogPost[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return blogPosts
    .filter(post => 
      post.category[language as keyof typeof post.category]?.toLowerCase() === category.toLowerCase() &&
      post.title[language as keyof typeof post.title]
    );
}

export async function getBlogPostsByTag(tag: string, language: string = 'fr'): Promise<BlogPost[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return blogPosts
    .filter(post => 
      post.tags[language as keyof typeof post.tags]?.some(t => t.toLowerCase() === tag.toLowerCase()) &&
      post.title[language as keyof typeof post.title]
    );
}
