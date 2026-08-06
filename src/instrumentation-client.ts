// Client-side error monitoring. OFF until NEXT_PUBLIC_SENTRY_DSN is set — no
// init, no client bundle cost. The import is dynamic and lives INSIDE the env
// gate: a static `import * as Sentry` shipped ~76 kB gz of SDK in the shared
// bundle on every page even with monitoring off. Set the DSN (alongside the
// server SENTRY_DSN) to start capturing browser errors, including those
// surfaced by the app's error boundaries.
if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  const rate = Number(process.env.NEXT_PUBLIC_SENTRY_TRACES_SAMPLE_RATE)
  void import("@sentry/nextjs").then((Sentry) => {
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      tracesSampleRate: Number.isFinite(rate) ? rate : 0,
    })
  })
}
