import { cookies } from "next/headers"

/**
 * The user's IANA timezone from the `tz` cookie the (app) layout sets on
 * the client. Undefined on the very first request of a brand-new browser
 * (falls back to server-timezone math — the pre-cookie status quo — and
 * self-heals on the next navigation). Server-only (next/headers).
 */
export async function getUserTz(): Promise<string | undefined> {
  try {
    const v = (await cookies()).get("tz")?.value
    // IANA names are letters/digits with / _ + - separators.
    return v && /^[A-Za-z0-9_+/-]{1,64}$/.test(v) ? v : undefined
  } catch {
    return undefined
  }
}
