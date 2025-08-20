export interface BlogPost {
  slug: string;
  title: Record<string, string>; // Support multilingue
  excerpt: Record<string, string>; // Support multilingue
  content: Record<string, string>; // Support multilingue
  coverImage?: string; // Optionnel car nous n'avons plus d'images de couverture
  category: Record<string, string>; // Support multilingue
  tags: Record<string, string[]>; // Support multilingue
  publishedAt: string;
  readingTime: number;
  author: Record<string, string>; // Support multilingue
  seo: {
    title: Record<string, string>; // Support multilingue
    description: Record<string, string>; // Support multilingue
    keywords: Record<string, string[]>; // Support multilingue
  };
}

export interface BlogCategory {
  name: Record<string, string>; // Support multilingue
  slug: string;
  description: Record<string, string>; // Support multilingue
  postCount: number;
}
