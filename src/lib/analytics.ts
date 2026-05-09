export function trackEvent(event: string, data?: Record<string, string>) {
  if (typeof window === "undefined") return;

  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Array<Record<string, unknown>>;
    posthog?: {
      capture?: (event: string, data?: Record<string, string>) => void;
      identify?: (id: string, props?: Record<string, unknown>) => void;
      get_distinct_id?: () => string;
    };
  };

  if (w.gtag) {
    w.gtag("event", event, data);
  }
  if (w.dataLayer) {
    w.dataLayer.push({ event, ...data });
  }
  if (w.posthog?.capture) {
    w.posthog.capture(event, data);
  }

  // Upgrade anonymous → identified person on conversion events so PostHog
  // creates a profile we can later match WhatsApp leads against.
  if (event === "whatsapp_click" && w.posthog?.identify && w.posthog?.get_distinct_id) {
    try {
      w.posthog.identify(w.posthog.get_distinct_id(), {
        last_whatsapp_location: data?.location,
        last_whatsapp_at: new Date().toISOString(),
      });
    } catch {
      // PostHog not ready yet — non-fatal.
    }
  }

  if (process.env.NODE_ENV === "development") {
    console.log(`[jaga] ${event}`, data);
  }
}
