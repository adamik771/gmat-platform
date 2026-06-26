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

// First-touch campaign attribution. Captured once on the first landing that
// carries any of these params (see captureAttribution / AttributionCapture),
// then merged into every trackEvent so signups/purchases can be traced back
// to the LinkedIn post, DM, or referral that started the journey.
const ATTRIBUTION_KEY = "zg_attribution"
const ATTRIBUTION_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "ref",
] as const

/**
 * Read the stored first-touch attribution. Returns {} on the server, when
 * storage is blocked, or before anything has been captured.
 */
export function getAttribution(): Record<string, string> {
  if (typeof window === "undefined") return {}
  try {
    const raw = window.localStorage.getItem(ATTRIBUTION_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw) as unknown
    return parsed && typeof parsed === "object"
      ? (parsed as Record<string, string>)
      : {}
  } catch {
    return {}
  }
}

/**
 * Persist first-touch campaign attribution from a URL query string. First
 * touch wins — once something is stored we never overwrite it, so a prospect
 * who arrives via a LinkedIn post and converts three visits later is still
 * credited to that post. No-op when no known param is present or storage is
 * unavailable (private mode, SSR).
 */
export function captureAttribution(search: string): void {
  if (typeof window === "undefined") return
  try {
    if (window.localStorage.getItem(ATTRIBUTION_KEY)) return // first touch wins
    const params = new URLSearchParams(search)
    const attr: Record<string, string> = {}
    for (const key of ATTRIBUTION_PARAMS) {
      const value = params.get(key)
      if (value) attr[key] = value.slice(0, 200)
    }
    if (Object.keys(attr).length === 0) return
    attr.landing_path = window.location.pathname.slice(0, 200)
    window.localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attr))
  } catch {
    // Storage blocked — attribution is best-effort, never break the page.
  }
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
 * Analytics "Events" view. Funnel events in use: `signup`,
 * `checkout_initiated`, `purchase_completed`, `pricing_view`,
 * `founding_reserve`, `referral_click`, `feedback_click`.
 *
 * First-touch campaign attribution (utm_* / ref) is merged into every event
 * automatically — see getAttribution / captureAttribution.
 */
export function trackEvent(name: string, props?: EventProps): void {
  const merged: EventProps = { ...getAttribution(), ...(props ?? {}) }

  // Vercel Web Analytics (no-op unless live).
  try {
    track(name, merged)
  } catch {
    // Swallow: a missing or ad-blocked analytics script must not break the
    // user's action.
  }

  if (typeof window === "undefined") return

  // Meta Pixel — mapped to a standard event when we have one, else custom.
  try {
    if (typeof window.fbq === "function") {
      const mapped = META_EVENT_MAP[name]
      if (mapped) window.fbq("track", mapped, merged)
      else window.fbq("trackCustom", name, merged)
    }
  } catch {
    // ignore — pixel blocked/absent
  }

  // Google tag (GA4 / Google Ads via gtag.js).
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, merged)
    }
  } catch {
    // ignore — tag blocked/absent
  }
}
