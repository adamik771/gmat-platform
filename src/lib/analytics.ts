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
  consult_request: "Lead",
  checkout_initiated: "InitiateCheckout",
  purchase_completed: "Purchase",
}

// ---------------------------------------------------------------------------
// Marketing-tracking consent (Google Consent Mode v2 + Meta Pixel gate).
//
// One binary choice covers the marketing/analytics storage the banner
// describes: Google tag (GA4/Ads), Meta Pixel, and first-touch advertising
// attribution in localStorage. "granted"/"denied" is the visitor's explicit
// banner choice; null means no choice yet — treated exactly like denied
// everywhere (nothing loads, nothing is stored) per the deny-by-default rule.
// The choice itself lives in localStorage (necessary storage, exempt).
// Vercel Web Analytics stays outside this gate on purpose: the installed
// @vercel/analytics v2 sets no cookies and Vercel identifies visitors by a
// request hash discarded after 24h (docs: analytics/privacy-policy).
// ---------------------------------------------------------------------------
const CONSENT_KEY = "zg_consent"
/** Fired on window whenever the stored consent choice changes. */
export const CONSENT_EVENT = "zg-consent-change"
/** Fired on window to re-open the consent banner (footer "Privacy settings"). */
export const CONSENT_OPEN_EVENT = "zg-consent-open"

export type ConsentStatus = "granted" | "denied" | null

/**
 * useSyncExternalStore subscription for the consent choice — fires the
 * callback whenever setConsent broadcasts a change. Lets components read
 * consent without a setState-in-effect (and hydration-safe: the server
 * snapshot is null = no choice, so nothing consent-gated renders on SSR).
 *
 * Also listens for cross-tab changes via the `storage` event so a
 * withdrawal in one tab propagates: the other tab re-syncs its UI and
 * pushes the denied/granted update into any already-loaded gtag/fbq
 * (idempotent, so multiple subscribers pushing it is harmless). Our own
 * trackEvent calls stop cross-tab regardless — they re-read localStorage
 * per call.
 */
export function subscribeConsent(callback: () => void): () => void {
  const onStorage = (e: StorageEvent) => {
    if (e.key !== CONSENT_KEY) return
    const status = e.newValue === "granted" ? "granted" : "denied"
    const mode = status
    try {
      window.gtag?.("consent", "update", {
        ad_storage: mode,
        ad_user_data: mode,
        ad_personalization: mode,
        analytics_storage: mode,
      })
    } catch {
      /* tag absent */
    }
    try {
      window.fbq?.("consent", status === "granted" ? "grant" : "revoke")
    } catch {
      /* pixel absent */
    }
    callback()
  }
  window.addEventListener(CONSENT_EVENT, callback)
  window.addEventListener("storage", onStorage)
  return () => {
    window.removeEventListener(CONSENT_EVENT, callback)
    window.removeEventListener("storage", onStorage)
  }
}

export function getConsent(): ConsentStatus {
  if (typeof window === "undefined") return null
  try {
    const v = window.localStorage.getItem(CONSENT_KEY)
    return v === "granted" || v === "denied" ? v : null
  } catch {
    return null
  }
}

/**
 * Persist the visitor's choice and apply it immediately: notify listeners
 * (the pixel loader + banner), push a Consent Mode v2 update to an
 * already-loaded Google tag, revoke Meta Pixel consent, and on denial clear
 * the stored advertising attribution.
 */
export function setConsent(status: "granted" | "denied"): void {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(CONSENT_KEY, status)
  } catch {
    // Storage blocked — the choice still applies for this page via the event.
  }
  const mode = status === "granted" ? "granted" : "denied"
  try {
    window.gtag?.("consent", "update", {
      ad_storage: mode,
      ad_user_data: mode,
      ad_personalization: mode,
      analytics_storage: mode,
    })
  } catch {
    /* tag absent/blocked */
  }
  try {
    window.fbq?.("consent", status === "granted" ? "grant" : "revoke")
  } catch {
    /* pixel absent/blocked */
  }
  if (status === "denied") {
    try {
      window.localStorage.removeItem(ATTRIBUTION_KEY)
    } catch {
      /* ignore */
    }
    // Nothing parked may survive a denial.
    parkedGtag.length = 0
    parkedFbq.length = 0
  }
  try {
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: status }))
  } catch {
    /* ignore */
  }
}

// ---------------------------------------------------------------------------
// Reliable ad-event delivery.
//
// next/script installs the gtag/fbq globals asynchronously after hydration,
// so a consent-granted event fired from a mount effect (e.g. the server-
// verified purchase conversion on /purchase-success) can race tag readiness
// and silently vanish. When consent is granted but a CONFIGURED tag's global
// is not installed yet, the event parks here and AdPixels flushes it from
// each tag script's onReady — exactly once per page load. Bounded, cleared
// on consent denial, in-memory only (a reload between park and flush drops
// the event; the per-session purchase marker below is what guarantees
// at-most-once across reloads).
// ---------------------------------------------------------------------------
interface ParkedAdEvent {
  name: string
  props: EventProps
}
const MAX_PARKED = 20
const parkedGtag: ParkedAdEvent[] = []
const parkedFbq: ParkedAdEvent[] = []

// Literal member expressions so Next can inline them in client bundles;
// call-time reads so node tests can stub the env.
function googleTagConfigured(): boolean {
  return !!process.env.NEXT_PUBLIC_GOOGLE_TAG_ID
}
function metaPixelConfigured(): boolean {
  return !!process.env.NEXT_PUBLIC_META_PIXEL_ID
}

function sendToMeta(name: string, props: EventProps): void {
  const mapped = META_EVENT_MAP[name]
  if (mapped) window.fbq?.("track", mapped, props)
  else window.fbq?.("trackCustom", name, props)
}

/**
 * Deliver any parked ad events to tags that are now installed. Called from
 * AdPixels' Script onReady handlers; safe to call repeatedly (each parked
 * event is delivered at most once). Consent is re-checked at flush time —
 * a denial in the park-to-flush window empties the queues instead.
 */
export function flushPendingAdEvents(): void {
  if (typeof window === "undefined") return
  if (getConsent() !== "granted") {
    parkedGtag.length = 0
    parkedFbq.length = 0
    return
  }
  if (typeof window.fbq === "function") {
    for (const e of parkedFbq.splice(0)) {
      try {
        sendToMeta(e.name, e.props)
      } catch {
        /* pixel blocked */
      }
    }
  }
  if (typeof window.gtag === "function") {
    for (const e of parkedGtag.splice(0)) {
      try {
        window.gtag?.("event", e.name, e.props)
      } catch {
        /* tag blocked */
      }
    }
  }
}

/**
 * At-most-once marker for the purchase conversion, keyed by the Stripe
 * session id. Returns true exactly once per session id; a reload of the
 * verified confirmation page returns false thereafter. If storage is
 * blocked (private mode) it returns true each call — the caller's ref
 * still dedupes within a single page view.
 */
export function markPurchaseTracked(sessionId: string): boolean {
  if (typeof window === "undefined") return false
  const key = `zg_purchase_tracked:${sessionId}`
  try {
    if (window.localStorage.getItem(key) !== null) return false
    window.localStorage.setItem(key, "1")
    return true
  } catch {
    return true
  }
}

// First-touch campaign attribution. Captured once on the first landing that
// carries any of these params (see captureAttribution / AttributionCapture),
// then merged into every trackEvent so signups/purchases can be traced back
// to the LinkedIn post, DM, or referral that started the journey.
// Consent-gated: nothing is stored or read without an explicit "granted".
const ATTRIBUTION_KEY = "zg_attribution"
const ATTRIBUTION_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "ref",
  // Ad-click IDs (Google Ads gclid / wbraid / gbraid). Captured with the same
  // first-touch rules so a signup can later be joined back to the exact ad
  // click — the prerequisite for offline/enhanced conversion uploads.
  "gclid",
  "wbraid",
  "gbraid",
] as const

/**
 * Read the stored first-touch attribution. Returns {} on the server, when
 * storage is blocked, or before anything has been captured.
 */
export function getAttribution(): Record<string, string> {
  if (typeof window === "undefined") return {}
  if (getConsent() !== "granted") return {}
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
  if (getConsent() !== "granted") return
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
 * `founding_reserve`, `referral_click`, `feedback_click`,
 * `lead_captured`, `marketing_opt_in` (props: source, lead_magnet,
 * placement = "inline" | "post_download"), `practice_completed`
 * (props: section, topic, questions, session_id — fires once after
 * SessionClient persists a session online; the signup-to-activation
 * signal. The offline drain deliberately does not fire it).
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

  // Google/Meta forwarding requires explicit consent. The pixels only load
  // after "granted" (see AdPixels), but a same-page withdrawal leaves them
  // loaded — this guard stops our events the moment consent is revoked.
  if (getConsent() !== "granted") return

  // Meta Pixel — mapped to a standard event when we have one, else custom.
  // If the pixel is configured but its global isn't installed yet (Script
  // still initializing), park the event; AdPixels flushes on readiness.
  try {
    if (typeof window.fbq === "function") {
      sendToMeta(name, merged)
    } else if (metaPixelConfigured() && parkedFbq.length < MAX_PARKED) {
      parkedFbq.push({ name, props: merged })
    }
  } catch {
    // ignore — pixel blocked/absent
  }

  // Google tag (GA4 / Google Ads via gtag.js) — same park-until-ready rule.
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, merged)
    } else if (googleTagConfigured() && parkedGtag.length < MAX_PARKED) {
      parkedGtag.push({ name, props: merged })
    }
  } catch {
    // ignore — tag blocked/absent
  }
}
