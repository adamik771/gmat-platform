const DEFAULT_SITE_ORIGIN = "https://www.zakariangmat.com"

interface SiteOriginEnvironment {
  NODE_ENV?: string
  NEXT_PUBLIC_SITE_URL?: string
  VERCEL_ENV?: string
  VERCEL_URL?: string
  VERCEL_BRANCH_URL?: string
}

function originOf(value: string | undefined, assumeHttps = false): string | null {
  if (!value) return null
  try {
    const candidate = assumeHttps && !value.includes("://") ? `https://${value}` : value
    const parsed = new URL(candidate)
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return null
    if (parsed.username || parsed.password) return null
    return parsed.origin
  } catch {
    return null
  }
}

function isLoopback(origin: string): boolean {
  const host = new URL(origin).hostname
  return host === "localhost" || host === "127.0.0.1" || host === "[::1]"
}

/**
 * Choose a redirect/callback origin from trusted deployment configuration.
 * Production never trusts the incoming Host header. Localhost is allowed in
 * development, and Vercel previews are allowed only when their exact host is
 * present in Vercel's signed deployment environment.
 */
export function resolveSiteOrigin(
  requestUrl: string | undefined,
  env: SiteOriginEnvironment,
): string {
  const canonical = originOf(env.NEXT_PUBLIC_SITE_URL) ?? DEFAULT_SITE_ORIGIN
  const requestOrigin = originOf(requestUrl)
  if (!requestOrigin) return canonical

  if (env.NODE_ENV !== "production" && isLoopback(requestOrigin)) {
    return requestOrigin
  }

  if (env.VERCEL_ENV === "preview") {
    const allowedPreviewOrigins = [env.VERCEL_URL, env.VERCEL_BRANCH_URL]
      .map((value) => originOf(value, true))
      .filter((value): value is string => value !== null)
    if (allowedPreviewOrigins.includes(requestOrigin)) return requestOrigin
  }

  return canonical
}

export function getTrustedSiteOrigin(requestUrl?: string): string {
  return resolveSiteOrigin(requestUrl, process.env)
}
