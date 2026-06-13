import * as Sentry from "@sentry/nextjs"

// Edge-runtime error monitoring (proxy/middleware, edge route handlers). Same
// env-gating as the server config — no-op until SENTRY_DSN is set.
if (process.env.SENTRY_DSN) {
  const rate = Number(process.env.SENTRY_TRACES_SAMPLE_RATE)
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    tracesSampleRate: Number.isFinite(rate) ? rate : 0,
  })
}
