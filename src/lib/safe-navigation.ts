const VALIDATION_ORIGIN = "https://internal-navigation.invalid"

/** Return a normalized same-origin path, never an absolute/protocol-relative URL. */
export function safeInternalPath(
  raw: string | null | undefined,
  fallback = "/dashboard",
): string {
  if (!raw || !raw.startsWith("/")) return fallback
  try {
    const resolved = new URL(raw, VALIDATION_ORIGIN)
    if (resolved.origin !== VALIDATION_ORIGIN) return fallback
    return resolved.pathname + resolved.search + resolved.hash
  } catch {
    return fallback
  }
}
