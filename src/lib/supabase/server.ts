import { createServerClient } from "@supabase/ssr"
import type { User } from "@supabase/supabase-js"
import { cache } from "react"
import { cookies } from "next/headers"

/**
 * Creates a Supabase client for use in Server Components, Server Actions,
 * and Route Handlers. A fresh client is created per request (never cached
 * across requests) as required by @supabase/ssr.
 */
export async function createSupabaseServer() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          // Server Components cannot set cookies — the proxy handles token
          // refresh instead. Route Handlers and Server Actions can write.
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // Called from a Server Component — swallow silently.
          }
        },
      },
    }
  )
}

/**
 * Request-memoized authenticated user. `supabase.auth.getUser()` is a
 * network round-trip to the Auth server, and several pages called it two
 * or three times per render (guard block + main block, on top of the
 * proxy's own check) — serial latency for the same answer. React
 * `cache()` scopes the memo to the current request, so two reads in one
 * render can also never observe different user_metadata.
 */
export const getRequestUser = cache(async (): Promise<User | null> => {
  try {
    const supabase = await createSupabaseServer()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    return user
  } catch {
    return null
  }
})
