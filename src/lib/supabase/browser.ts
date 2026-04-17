import { createBrowserClient } from "@supabase/ssr"

/**
 * Creates a singleton Supabase client for Client Components. The
 * `createBrowserClient` from @supabase/ssr handles cookie management
 * via `document.cookie` and caches the singleton internally.
 *
 * The env var lookups are hoisted to module-level constants so the
 * Next.js build inlines the string values into the client bundle at
 * build time (otherwise the runtime lookup may not be replaced).
 */
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Sanity check: anon key should be a long JWT (~200+ chars). Truncation
// produces a cryptic "Invalid API key" error from Supabase that's easy
// to misdiagnose, so fail loudly with a clear message instead.
const KEY_LOOKS_VALID =
  !!SUPABASE_ANON_KEY &&
  SUPABASE_ANON_KEY.length >= 100 &&
  SUPABASE_ANON_KEY.startsWith("eyJ")

export function createSupabaseBrowser() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error(
      "Supabase env vars missing at build time. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in Vercel and rebuild."
    )
  }
  if (!KEY_LOOKS_VALID) {
    throw new Error(
      `Supabase anon key looks truncated (length ${SUPABASE_ANON_KEY.length}, expected ~200+, must start with "eyJ"). Re-paste the FULL key from Supabase → Settings → API.`
    )
  }
  return createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY)
}
