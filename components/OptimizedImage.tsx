import React from 'react';
import Image, { ImageProps } from 'next/image';

type OptimizedImageProps = Omit<ImageProps, 'alt' | 'width' | 'height'> & {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  style?: React.CSSProperties;
  imgClassName?: string;
};

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 80,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  style = {},
  imgClassName = '',
  ...props
}) => {
  // Check if the image is from an external source
  const isExternal = src.startsWith('http') || src.startsWith('//');
  
  // Generate blur data URL for placeholder
  const getBlurDataURL = (w: number, h: number) => {
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return '';
    
    // Create a simple gradient for the placeholder
    const gradient = ctx.createLinearGradient(0, 0, w, h);
    gradient.addColorStop(0, '#f0f0f0');
    gradient.addColorStop(0.5, '#e0e0e0');
    gradient.addColorStop(1, '#f0f0f0');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);
    
    return canvas.toDataURL('image/jpeg', 0.1);
  };

  // Only generate blur data URL on client side
  const [blurDataURL, setBlurDataURL] = React.useState<string>('');
  
  React.useEffect(() => {
    setBlurDataURL(getBlurDataURL(width, height));
  }, [width, height]);

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        paddingBottom: `${(height / width) * 100}%`,
        ...style,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={quality}
        placeholder={blurDataURL ? 'blur' : 'empty'}
        blurDataURL={blurDataURL}
        className={`object-cover ${imgClassName}`}
        unoptimized={isExternal} // Only optimize images from our domain
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
