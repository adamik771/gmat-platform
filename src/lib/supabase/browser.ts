import { createBrowserClient } from "@supabase/ssr"

/**
 * Creates a singleton Supabase client for Client Components. The
 * `createBrowserClient` from @supabase/ssr handles cookie management
 * via `document.cookie` and caches the singleton internally.
 */
export function createSupabaseBrowser() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
