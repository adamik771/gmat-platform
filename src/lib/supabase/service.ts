import { createClient, type SupabaseClient } from "@supabase/supabase-js"

/**
 * Service-role Supabase client for server-to-server contexts where there is
 * no user session — specifically the Stripe webhook handler.
 *
 * This client BYPASSES Row-Level Security. Use it ONLY:
 *   - from API routes that verify the caller's authenticity by other means
 *     (e.g. a signed Stripe webhook signature)
 *   - to write/read rows on behalf of a user_id that you've authoritatively
 *     derived from that signed payload
 *
 * Do NOT import this from pages, client components, or anywhere a request
 * body can influence which user_id is written to.
 *
 * The service role key lives in SUPABASE_SERVICE_ROLE_KEY (never prefixed
 * NEXT_PUBLIC — this key must never reach the browser).
 */
let cached: SupabaseClient | null = null

export function getSupabaseService(): SupabaseClient {
  if (cached) return cached
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) {
    throw new Error(
      "SUPABASE_SERVICE_ROLE_KEY (and/or NEXT_PUBLIC_SUPABASE_URL) is not set — required for service-role writes."
    )
  }
  cached = createClient(url, key, {
    auth: {
      // Service-role client has no user session and should not try to
      // persist or refresh tokens.
      autoRefreshToken: false,
      persistSession: false,
    },
  })
  return cached
}
