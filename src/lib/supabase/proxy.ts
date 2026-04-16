import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

/**
 * Creates a Supabase client for use inside the Next.js proxy (formerly
 * middleware). Reads and writes cookies on the NextRequest / NextResponse
 * and forwards cache-busting headers from @supabase/ssr so CDNs don't
 * cache auth responses.
 *
 * Usage:
 *   const { supabase, response } = createSupabaseProxy(request)
 *   await supabase.auth.getUser()
 *   return response()   // <-- call the getter AFTER getUser()
 */
export function createSupabaseProxy(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet, headers) {
          // Write to the request (so downstream server components see the
          // refreshed tokens).
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )

          // Recreate the response with the updated request.
          supabaseResponse = NextResponse.next({ request })

          // Write to the response (so the browser receives Set-Cookie).
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )

          // Forward cache-busting headers from @supabase/ssr to prevent
          // CDNs from caching auth responses.
          if (headers) {
            Object.entries(headers).forEach(([key, value]) =>
              supabaseResponse.headers.set(key, value)
            )
          }
        },
      },
    }
  )

  // Wrapped in a getter because setAll may recreate supabaseResponse
  // during a token refresh. Always call response() AFTER getUser().
  return { supabase, response: () => supabaseResponse }
}
