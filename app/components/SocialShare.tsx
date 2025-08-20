"use client"

import React from 'react';
import { Share2, Twitter, Facebook, Linkedin, Copy, Check } from 'lucide-react';

interface SocialShareProps {
  title: string;
  url: string;
  description: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ title, url, description }) => {
  const [copied, setCopied] = React.useState(false);

  const shareData = {
    title,
    text: description,
    url: typeof window !== 'undefined' ? window.location.origin + url : url,
  };

  const handleShare = async () => {
    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log('Erreur lors du partage:', error);
      }
    } else {
      // Fallback: copier le lien
      handleCopyLink();
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareData.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.log('Erreur lors de la copie:', error);
    }
  };

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareData.url)}`;
    window.open(twitterUrl, '_blank');
  };

  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`;
    window.open(facebookUrl, '_blank');
  };

  const handleLinkedinShare = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareData.url)}`;
    window.open(linkedinUrl, '_blank');
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white flex items-center space-x-2">
          <Share2 className="w-5 h-5 text-yellow-400" />
          <span>Partager cet article</span>
        </h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {/* Partage natif */}
        <button
          onClick={handleShare}
          className="flex flex-col items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 hover:scale-105"
        >
          <Share2 className="w-5 h-5 mb-1" />
          <span className="text-xs">Partager</span>
        </button>

        {/* Twitter */}
        <button
          onClick={handleTwitterShare}
          className="flex flex-col items-center justify-center p-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-lg hover:from-sky-600 hover:to-sky-700 transition-all duration-200 hover:scale-105"
        >
          <Twitter className="w-5 h-5 mb-1" />
          <span className="text-xs">Twitter</span>
        </button>

        {/* Facebook */}
        <button
          onClick={handleFacebookShare}
          className="flex flex-col items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 hover:scale-105"
        >
          <Facebook className="w-5 h-5 mb-1" />
          <span className="text-xs">Facebook</span>
        </button>

        {/* LinkedIn */}
        <button
          onClick={handleLinkedinShare}
          className="flex flex-col items-center justify-center p-3 bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-lg hover:from-blue-800 hover:to-blue-900 transition-all duration-200 hover:scale-105"
        >
          <Linkedin className="w-5 h-5 mb-1" />
          <span className="text-xs">LinkedIn</span>
        </button>

        {/* Copier le lien */}
        <button
          onClick={handleCopyLink}
          className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 hover:scale-105 ${
            copied
              ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
              : 'bg-gradient-to-r from-gray-500 to-gray-600 text-white hover:from-gray-600 hover:to-gray-700'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-5 h-5 mb-1" />
              <span className="text-xs">Copié !</span>
            </>
          ) : (
            <>
              <Copy className="w-5 h-5 mb-1" />
              <span className="text-xs">Copier</span>
            </>
          )}
        </button>
      </div>

      {copied && (
        <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
          <p className="text-green-300 text-sm text-center">
            ✅ Lien copié dans le presse-papiers !
          </p>
        </div>
      )}
    </div>
  );
};

export default SocialShare;
