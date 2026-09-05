import { createHmac } from "node:crypto"
import type { SupabaseClient } from "@supabase/supabase-js"

export interface SecurityRateDecision {
  allowed: boolean
  retryAfterSeconds: number
}

function rateLimitSecret(): string {
  const secret =
    process.env.RATE_LIMIT_SECRET ?? process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!secret) throw new Error("rate-limit secret is unavailable")
  return secret
}

/** Pseudonymize the subject before it reaches the database or logs. */
export function hashRateLimitSubject(value: string, secret: string): string {
  return createHmac("sha256", secret).update(value).digest("hex")
}

/** Vercel overwrites x-forwarded-for, preventing callers from spoofing it. */
export function getClientAddress(headers: Headers): string | null {
  const raw =
    headers.get("x-vercel-forwarded-for") ??
    headers.get("x-forwarded-for") ??
    headers.get("x-real-ip")
  const first = raw?.split(",", 1)[0]?.trim()
  return first && first.length <= 100 ? first : null
}

export async function consumeSecurityRateLimit(
  service: SupabaseClient,
  input: {
    action: string
    subject: string
    limit: number
    windowSeconds: number
  },
): Promise<SecurityRateDecision> {
  const keyHash = hashRateLimitSubject(input.subject, rateLimitSecret())
  const { data, error } = await service.rpc("consume_security_rate_limit", {
    p_action: input.action,
    p_key_hash: keyHash,
    p_limit: input.limit,
    p_window_seconds: input.windowSeconds,
  })
  if (error) throw error

  const row = Array.isArray(data) ? data[0] : data
  if (
    !row ||
    typeof row.allowed !== "boolean" ||
    typeof row.retry_after_seconds !== "number"
  ) {
    throw new Error("rate-limit function returned an invalid response")
  }
  return {
    allowed: row.allowed,
    retryAfterSeconds: Math.max(0, Math.ceil(row.retry_after_seconds)),
  }
}
