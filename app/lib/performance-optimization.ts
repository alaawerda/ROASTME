/**
 * Performance Optimization Utilities for RoastMe Chat
 * UX/UI Excellence & Mobile-First Optimization
 */

// Lazy loading intersection observer
export const createLazyLoadObserver = (callback: (entry: IntersectionObserverEntry) => void) => {
  if (typeof window === 'undefined') return null;

  return new IntersectionObserver(
    (entries) => {
      entries.forEach(callback);
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.1,
    }
  );
};

// Image optimization with responsive loading
export const optimizeImage = (src: string, width?: number, height?: number) => {
  if (typeof window === 'undefined') return src;

  const isWebPSupported = (() => {
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/webp').startsWith('data:image/webp');
  })();

  // Add WebP support if available
  const extension = isWebPSupported ? '.webp' : '.jpg';
  const optimizedSrc = src.replace(/\.(jpg|jpeg|png)$/, extension);

  // Add responsive parameters
  if (width && height) {
    return `${optimizedSrc}?w=${width}&h=${height}&q=85&fm=${isWebPSupported ? 'webp' : 'jpg'}`;
  }

  return optimizedSrc;
};

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;

  const criticalResources = [
    '/favicon.svg',
    '/og-image.jpg',
  ];

  criticalResources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.svg') ? 'image' : 'image';
    document.head.appendChild(link);
  });
};

// Debounce function for scroll events
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for resize events
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Viewport detection for mobile optimization
export const getViewportInfo = () => {
  if (typeof window === 'undefined') {
    return { width: 1024, height: 768, isMobile: false, isTablet: false };
  }

  const width = window.innerWidth;
  const height = window.innerHeight;
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  return { width, height, isMobile, isTablet };
};

// Touch interaction optimization
export const optimizeTouchInteraction = (element: HTMLElement) => {
  if (typeof window === 'undefined') return;

  // Add touch-action for better touch performance
  element.style.touchAction = 'manipulation';
  
  // Remove 300ms click delay on mobile
  (element.style as any).webkitTapHighlightColor = 'transparent';
  
  // Add will-change for better animation performance
  element.style.willChange = 'transform, opacity';
};

// Animation frame optimization
export const requestIdleCallback = (callback: () => void) => {
  if (typeof window === 'undefined') return;

  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(callback);
  } else {
    setTimeout(callback, 16); // Fallback to 60fps
  }
};

// Memory cleanup utility
export const cleanupEventListeners = (listeners: Array<() => void>) => {
  listeners.forEach(cleanup => cleanup());
};

// Core Web Vitals optimization
export const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && typeof window !== 'undefined') {
    // Web vitals reporting would go here
    // Currently disabled to avoid build issues
    console.log('Web vitals reporting would be enabled here');
  }
};

// Font loading optimization
export const optimizeFontLoading = () => {
  if (typeof window === 'undefined') return;

  // Preload Inter font
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
  link.as = 'style';
  link.onload = () => {
    link.rel = 'stylesheet';
  };
  document.head.appendChild(link);
};

// Bundle size optimization
export const lazyLoadComponent = async (importFn: () => Promise<any>) => {
  const loadedModule = await importFn();
  return loadedModule.default || loadedModule;
};

// Service Worker registration for PWA capabilities
export const registerServiceWorker = async () => {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register('/sw.js');
    console.log('SW registered: ', registration);
  } catch (registrationError) {
    console.log('SW registration failed: ', registrationError);
  }
};

// Performance monitoring
export class PerformanceMonitor {
  private startTime: number = 0;
  private metrics: Record<string, number> = {};

  start(label: string) {
    this.startTime = performance.now();
    this.metrics[label] = this.startTime;
  }

  end(label: string) {
    const endTime = performance.now();
    const duration = endTime - (this.metrics[label] || this.startTime);
    console.log(`${label}: ${duration.toFixed(2)}ms`);
    return duration;
  }

  mark(label: string) {
    performance.mark(label);
  }

  measure(name: string, startMark: string, endMark: string) {
    performance.measure(name, startMark, endMark);
  }
}

export const performanceMonitor = new PerformanceMonitor();
