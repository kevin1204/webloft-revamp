// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (
      command: 'event',
      action: string,
      parameters: {
        event_category?: string;
        event_label?: string;
        value?: number;
        custom_parameters?: Record<string, string | number | boolean>;
      }
    ) => void;
  }
}

// Track contact form submissions
export const trackContactFormSubmission = (formType: string, success: boolean = true) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'Contact',
      event_label: `${formType}_${success ? 'success' : 'error'}`,
      custom_parameters: {
        form_type: formType,
        success: success
      }
    });
  }
};

// Track service page visits
export const trackServicePageVisit = (serviceName: string, location?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      event_category: 'Service',
      event_label: location ? `${serviceName}_${location}` : serviceName,
      custom_parameters: {
        service_name: serviceName,
        location: location || 'general'
      }
    });
  }
};

// Track blog post reads
export const trackBlogPostRead = (postTitle: string, postCategory: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'blog_read', {
      event_category: 'Blog',
      event_label: postTitle,
      custom_parameters: {
        post_title: postTitle,
        post_category: postCategory
      }
    });
  }
};

// Track case study views
export const trackCaseStudyView = (caseStudyName: string, industry: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'case_study_view', {
      event_category: 'Case Study',
      event_label: caseStudyName,
      custom_parameters: {
        case_study_name: caseStudyName,
        industry: industry
      }
    });
  }
};

// Track CTA button clicks
export const trackCTAClick = (ctaText: string, ctaLocation: string, destination: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      event_category: 'CTA',
      event_label: ctaText,
      custom_parameters: {
        cta_text: ctaText,
        cta_location: ctaLocation,
        destination: destination
      }
    });
  }
};

// Track lead magnet downloads
export const trackLeadMagnetDownload = (leadMagnetType: string, formData?: Record<string, string>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'lead_magnet_download', {
      event_category: 'Lead Generation',
      event_label: leadMagnetType,
      custom_parameters: {
        lead_magnet_type: leadMagnetType,
        has_business_name: !!formData?.business,
        has_phone: !!formData?.phone
      }
    });
  }
};

// Track project view
export const trackProjectView = (projectName: string, projectCategory: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'project_view', {
      event_category: 'Portfolio',
      event_label: projectName,
      custom_parameters: {
        project_name: projectName,
        project_category: projectCategory
      }
    });
  }
};

// Track external link clicks
export const trackExternalLinkClick = (linkText: string, destination: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'external_link_click', {
      event_category: 'External Link',
      event_label: linkText,
      custom_parameters: {
        link_text: linkText,
        destination: destination
      }
    });
  }
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll_depth', {
      event_category: 'Engagement',
      event_label: `${depth}%`,
      value: depth,
      custom_parameters: {
        scroll_depth: depth
      }
    });
  }
};

// Track time on page
export const trackTimeOnPage = (pageName: string, timeInSeconds: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'time_on_page', {
      event_category: 'Engagement',
      event_label: pageName,
      value: timeInSeconds,
      custom_parameters: {
        page_name: pageName,
        time_seconds: timeInSeconds
      }
    });
  }
};
