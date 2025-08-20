import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  // Fonction simple pour convertir le markdown en HTML
  const renderMarkdown = (text: string): string => {
    return text
      // Titres
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-white mb-4 mt-6">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-white mb-6 mt-8 border-b border-white/20 pb-2">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-white mb-6 mt-8">$1</h1>')
      
      // Paragraphes
      .replace(/\n\n/g, '</p><p class="text-gray-300 mb-4 leading-relaxed">')
      
      // Mise en forme
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-yellow-400 font-bold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-gray-200 italic">$1</em>')
      .replace(/`(.*?)`/g, '<code class="bg-white/10 text-yellow-300 px-2 py-1 rounded text-sm font-mono">$1</code>')
      
      // Citations
      .replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-yellow-400 pl-4 py-2 my-4 bg-white/5 rounded-r">$1</blockquote>')
      
      // Listes
      .replace(/^\d+\. (.*$)/gim, '<li class="text-gray-300 mb-2 ml-4">$1</li>')
      .replace(/^- (.*$)/gim, '<li class="text-gray-300 mb-2 ml-4">• $1</li>')
      
      // Liens
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-yellow-400 hover:text-yellow-300 underline" target="_blank" rel="noopener noreferrer">$1</a>')
      
      // Séparateurs
      .replace(/^---$/gim, '<hr class="border-white/20 my-8">')
      
      // Emojis et icônes
      .replace(/🎯/g, '<span class="text-2xl">🎯</span>')
      .replace(/🚀/g, '<span class="text-2xl">🚀</span>')
      .replace(/🎭/g, '<span class="text-2xl">🎭</span>')
      .replace(/💡/g, '<span class="text-2xl">💡</span>')
      .replace(/📚/g, '<span class="text-2xl">📚</span>')
      .replace(/✨/g, '<span class="text-2xl">✨</span>')
      .replace(/🔥/g, '<span class="text-2xl">🔥</span>')
      .replace(/🚫/g, '<span class="text-2xl">🚫</span>')
      .replace(/🎪/g, '<span class="text-2xl">🎪</span>')
      .replace(/💬/g, '<span class="text-2xl">💬</span>');
  };

  const htmlContent = renderMarkdown(content);

  return (
    <div 
      className="prose prose-lg prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default MarkdownRenderer;
