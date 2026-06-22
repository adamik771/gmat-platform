import { track } from "@vercel/analytics"

/** Property values Vercel Analytics accepts on a custom event. */
type EventProps = Record<string, string | number | boolean | null>

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Map our stable snake_case funnel events to the standard ad-platform event
 * names so a pixel/tag can optimize toward them. Events not in the map are
 * still forwarded (Meta as a custom event, Google as a plain event).
 */
const META_EVENT_MAP: Record<string, string> = {
  signup: "CompleteRegistration",
  checkout_initiated: "InitiateCheckout",
  purchase_completed: "Purchase",
}

/**
 * Fire a custom conversion event.
 *
 * A thin wrapper that fans the same event out to every analytics sink that's
 * actually live, and:
 *   - never throws — analytics must never break a user flow (checkout, signup);
 *   - is a no-op for any sink that isn't loaded (Vercel Analytics off in dev;
 *     Meta Pixel / Google tag absent until NEXT_PUBLIC_META_PIXEL_ID /
 *     NEXT_PUBLIC_GOOGLE_TAG_ID are set — see components/analytics/AdPixels).
 *
 * Keep names stable and snake_case; they show up verbatim in the Vercel
 * Analytics "Events" view. Funnel events in use: `checkout_initiated`,
 * `signup`, `purchase_completed`.
 */
export function trackEvent(name: string, props?: EventProps): void {
  // Vercel Web Analytics (no-op unless live).
  try {
    track(name, props)
  } catch {
    // Swallow: a missing or ad-blocked analytics script must not break the
    // user's action.
  }

  if (typeof window === "undefined") return

  // Meta Pixel — mapped to a standard event when we have one, else custom.
  try {
    if (typeof window.fbq === "function") {
      const mapped = META_EVENT_MAP[name]
      if (mapped) window.fbq("track", mapped, props ?? {})
      else window.fbq("trackCustom", name, props ?? {})
    }
  } catch {
    // ignore — pixel blocked/absent
  }

  // Google tag (GA4 / Google Ads via gtag.js).
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, props ?? {})
    }
  } catch {
    // ignore — tag blocked/absent
  }
}
