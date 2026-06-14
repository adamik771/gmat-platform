import { track } from "@vercel/analytics"

/** Property values Vercel Analytics accepts on a custom event. */
type EventProps = Record<string, string | number | boolean | null>

/**
 * Fire a custom conversion event.
 *
 * A thin wrapper over Vercel Analytics' `track()` that:
 *   - never throws — analytics must never break a user flow (checkout, signup);
 *   - is a no-op unless Web Analytics is live (production on Vercel), so it's
 *     safe to call from anywhere, including dev and the server.
 *
 * Keep names stable and snake_case; they show up verbatim in the Vercel
 * Analytics "Events" view. Funnel events in use: `checkout_initiated`,
 * `signup`, `purchase_completed`.
 */
export function trackEvent(name: string, props?: EventProps): void {
  try {
    track(name, props)
  } catch {
    // Swallow: a missing or ad-blocked analytics script must not break the
    // user's action.
  }
}
