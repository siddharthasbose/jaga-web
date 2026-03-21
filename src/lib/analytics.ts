export function trackEvent(event: string, data?: Record<string, string>) {
  if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
    console.log(`[jaga] ${event}`, data);
  }
}
