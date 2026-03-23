export function trackEvent(event: string, data?: Record<string, string>) {
  if (typeof window !== "undefined") {
    // GA4
    if ((window as any).gtag) {
      (window as any).gtag("event", event, data);
    }
    // GTM dataLayer fallback
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push({ event, ...data });
    }
    // PostHog
    if ((window as any).posthog?.capture) {
      (window as any).posthog.capture(event, data);
    }
    // Dev logging
    if (process.env.NODE_ENV === "development") {
      console.log(`[jaga] ${event}`, data);
    }
  }
}
