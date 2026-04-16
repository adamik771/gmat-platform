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

export function createSupabaseBrowser() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error(
      "Supabase env vars missing at build time. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in Vercel and rebuild."
    )
  }
  return createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY)
}
