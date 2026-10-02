import * as Sentry from "@sentry/nextjs"

// Server-side error monitoring. OFF until SENTRY_DSN is set in the environment
// — no init, no network, no overhead — mirroring the app's other env-armed
// features (PAYWALL_ENABLED, the signup gate, the tutor rate limit). To arm:
// create a Sentry project and set SENTRY_DSN (+ NEXT_PUBLIC_SENTRY_DSN for
// client errors) in Vercel.
if (process.env.SENTRY_DSN) {
  // Error monitoring only by default; raise SENTRY_TRACES_SAMPLE_RATE to add
  // performance tracing once a DSN is live. Guard against a non-numeric env.
  const rate = Number(process.env.SENTRY_TRACES_SAMPLE_RATE)
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    sendDefaultPii: false,
    tracesSampleRate: Number.isFinite(rate) ? rate : 0,
  })
}
