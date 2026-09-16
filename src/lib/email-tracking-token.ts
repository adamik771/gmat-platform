import { createHmac, timingSafeEqual } from "node:crypto"

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

function trackingSecret(): string | null {
  return (
    process.env.EMAIL_TRACKING_SECRET ??
    process.env.CRON_SECRET ??
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    null
  )
}

export function signEmailTrackingId(queueId: string): string | null {
  const secret = trackingSecret()
  if (!secret || !UUID.test(queueId)) return null
  return createHmac("sha256", secret).update(queueId).digest("base64url")
}

export function verifyEmailTrackingId(
  queueId: string | null,
  token: string | null,
): queueId is string {
  if (!queueId || !token || token.length !== 43 || !UUID.test(queueId)) {
    return false
  }
  const expected = signEmailTrackingId(queueId)
  if (!expected) return false
  const actualBuffer = Buffer.from(token)
  const expectedBuffer = Buffer.from(expected)
  return (
    actualBuffer.length === expectedBuffer.length &&
    timingSafeEqual(actualBuffer, expectedBuffer)
  )
}
