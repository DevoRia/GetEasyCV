// Google Analytics 4 (GA4) Configuration
class Analytics {
  constructor() {
    this.trackingId = import.meta.env.VITE_GA_TRACKING_ID
    this.isInitialized = false
  }

  // Initialize Google Analytics
  init() {
    if (!this.trackingId || this.isInitialized) {
      console.warn('Google Analytics: No tracking ID provided or already initialized')
      return
    }

    // Load Google Analytics script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.trackingId}`
    document.head.appendChild(script)

    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag = gtag

    // Configure GA4
    gtag('js', new Date())
    gtag('config', this.trackingId, {
      page_title: document.title,
      page_location: window.location.href
    })

    this.isInitialized = true
    console.log('Google Analytics initialized with tracking ID:', this.trackingId)
  }

  // Track page views
  trackPageView(pageTitle, pagePath) {
    if (!this.isInitialized) return
    
    window.gtag('config', this.trackingId, {
      page_title: pageTitle,
      page_location: pagePath
    })
  }

  // Track custom events
  trackEvent(eventName, parameters = {}) {
    if (!this.isInitialized) return
    
    window.gtag('event', eventName, {
      ...parameters,
      app_name: 'GetEasyCV'
    })
  }

  // Track CV export
  trackCVExport(format = 'pdf') {
    this.trackEvent('cv_export', {
      export_format: format,
      event_category: 'engagement',
      event_label: 'CV Export'
    })
  }

  // Track template reset
  trackTemplateReset() {
    this.trackEvent('template_reset', {
      event_category: 'engagement',
      event_label: 'Template Reset'
    })
  }

  // Track content clear
  trackContentClear() {
    this.trackEvent('content_clear', {
      event_category: 'engagement',
      event_label: 'Content Clear'
    })
  }

  // Track help panel open
  trackHelpOpen() {
    this.trackEvent('help_open', {
      event_category: 'engagement',
      event_label: 'Help Panel'
    })
  }
}

// Create singleton instance
const analytics = new Analytics()

export default analytics 