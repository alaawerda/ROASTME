// Type definitions for Google Analytics 4
type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
};

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
    dataLayer: Record<string, any>[];
  }
}

/**
 * Log a pageview to Google Analytics 4
 * @param url - The URL of the page to log
 */
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-V3NEK593B5', {
      page_path: url,
      transport_type: 'beacon',
      send_page_view: true,
    });
  }
};

/**
 * Log a custom event to Google Analytics 4
 * @param params - The event parameters
 * @param params.action - The event action
 * @param params.category - The event category
 * @param params.label - The event label
 * @param params.value - The event value
 */
export const event = ({ action, category, label, value, ...rest }: GTagEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      ...rest,
    });
  }
};

/**
 * Track outbound link clicks
 * @param url - The URL being linked to
 */
export const trackOutboundLink = (url: string) => {
  event({
    action: 'click',
    category: 'Outbound Link',
    label: url,
  });
  
  // Small delay to ensure the event is tracked before navigation
  setTimeout(() => {
    window.location.href = url;
  }, 150);
};

/**
 * Track social media shares
 * @param platform - The social media platform (twitter, facebook, linkedin)
 * @param url - The URL being shared
 */
export const trackSocialShare = (platform: string, url: string) => {
  event({
    action: 'share',
    category: 'Social',
    label: platform,
  });
  
  // Open share window
  const shareUrl = 
    platform === 'twitter' ? `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}` :
    platform === 'facebook' ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` :
    platform === 'linkedin' ? `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` :
    '';
    
  if (shareUrl) {
    window.open(shareUrl, '_blank', 'width=600,height=400');
  }
};

/**
 * Track form submissions
 * @param formName - The name/identifier of the form
 * @param formData - Optional form data to include in the event
 */
export const trackFormSubmission = (formName: string, formData?: Record<string, any>) => {
  event({
    action: 'submit',
    category: 'Form',
    label: formName,
    value: formData ? Object.keys(formData).length : 0,
  });
};

/**
 * Track button clicks
 * @param buttonText - The text/content of the button
 * @param location - Optional location context for the button
 */
export const trackButtonClick = (buttonText: string, location?: string) => {
  event({
    action: 'click',
    category: 'Button',
    label: location ? `${location} - ${buttonText}` : buttonText,
  });
};
