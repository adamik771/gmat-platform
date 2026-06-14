// Next.js instrumentation hook. Loads the runtime-appropriate Sentry config
// (each is a no-op until SENTRY_DSN is set) and forwards server/SSR/route
// errors to Sentry via onRequestError.
//
// NOTE: this is the manual setup WITHOUT withSentryConfig — runtime error
// capture works, but source-map upload + the ad-blocker tunnel are not wired.
// Add withSentryConfig (and a SENTRY_AUTH_TOKEN) later if you want readable
// stack traces in the Sentry UI.
export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config")
  } else if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config")
  }
}

export { captureRequestError as onRequestError } from "@sentry/nextjs"
