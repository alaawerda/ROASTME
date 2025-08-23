
// Define the ReportHandler type locally since it's not exported from web-vitals
type ReportHandler = (metric: any) => void;

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    });
  }
};

export const logWebVitals = (metric: any) => {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }
  
  // Send to analytics (e.g., Google Analytics)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    const { id, name, value } = metric;
    (window as any).gtag('event', name, {
      event_category: 'Web Vitals',
      event_label: id,
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      non_interaction: true,
    });
  }
};

export const measurePageLoad = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const [pageNav] = performance.getEntriesByType('navigation');
    if (pageNav) {
      const { domComplete, loadEventEnd, domContentLoadedEventEnd } = pageNav as PerformanceNavigationTiming;
      
      console.log(`Page load time: ${domComplete}ms`);
      console.log(`Full load time: ${loadEventEnd}ms`);
      console.log(`DOM Content Loaded: ${domContentLoadedEventEnd}ms`);
      
      // Log to analytics if available
      if ((window as any).gtag) {
        (window as any).gtag('event', 'timing_complete', {
          name: 'Page Load',
          value: domComplete,
          event_category: 'Performance',
        });
      }
    }
  }
};

export default reportWebVitals;
