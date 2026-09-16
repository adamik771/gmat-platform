import * as Sentry from "@sentry/nextjs"

// Client-side error monitoring. OFF until NEXT_PUBLIC_SENTRY_DSN is set — no
// init, no client bundle init cost. Set it (alongside the server SENTRY_DSN)
// to start capturing browser errors, including those surfaced by the app's
// error boundaries.
if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  const rate = Number(process.env.NEXT_PUBLIC_SENTRY_TRACES_SAMPLE_RATE)
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    sendDefaultPii: false,
    tracesSampleRate: Number.isFinite(rate) ? rate : 0,
  })
}
