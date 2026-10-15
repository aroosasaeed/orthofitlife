// ---------------------------------------------------------------------------
// Analytics architecture — provider-agnostic event bus
// ---------------------------------------------------------------------------
// All tracking funnels through track(). Providers (GA4, Meta Pixel, TikTok)
// implement the AnalyticsProvider interface and register themselves; UI code
// never imports provider SDKs directly. Nothing here sends data until a
// provider is configured via env (NEXT_PUBLIC_GA_ID etc.).
// ---------------------------------------------------------------------------

export interface AnalyticsPayload {
  [key: string]: string | number | boolean | undefined;
}

export interface AnalyticsProvider {
  id: string;
  /** Called once when event types are first used or on flush. */
  push(name: AnalyticsEvent, payload: AnalyticsPayload): void;
}

export type AnalyticsEvent =
  | "product_view"
  | "add_to_cart"
  | "remove_from_cart"
  | "wishlist_add"
  | "wishlist_remove"
  | "checkout_initiated"
  | "purchase"
  | "search"
  | "recommendation_click"
  | "blog_engagement"
  | "research_engagement"
  | "quiz_completed"
  | "newsletter_signup"
  | "contact_submit";

const providers: AnalyticsProvider[] = [];
let autoFlushBound = false;

export function registerProvider(provider: AnalyticsProvider) {
  const existing = providers.find((p) => p.id === provider.id);
  if (!existing) providers.push(provider);
  bindAutoFlush();
}

/** Push an event to all registered providers. Safe to call from anywhere. */
export function track(name: AnalyticsEvent, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;
  for (const provider of providers) {
    try {
      provider.push(name, { timestamp: Date.now(), ...payload });
    } catch {
      // Analytics must never break the UI.
    }
  }
}

/**
 * Lazily initialise the built-in dataLayer passthrough provider so that
 * Google Tag Manager / server-side containers can pick events up later.
 * No external script is loaded until NEXT_PUBLIC_GA_ID is configured.
 */
function bindAutoFlush() {
  if (autoFlushBound || typeof window === "undefined") return;
  autoFlushBound = true;
  registerProvider({
    id: "datalayer",
    push(name, payload) {
      (window as unknown as { dataLayer: object[] }).dataLayer =
        (window as unknown as { dataLayer: object[] }).dataLayer ?? [];
      (window as unknown as { dataLayer: object[] }).dataLayer.push({ event: name, ...payload });
    },
  });
}

/** Read provider configuration (placeholder until real IDs exist). */
export function analyticsConfig() {
  return {
    ga: process.env.NEXT_PUBLIC_GA_ID || "",
    meta: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID || "",
  };
}
