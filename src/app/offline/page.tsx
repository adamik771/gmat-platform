import Link from "next/link"
import { ArrowRight, WifiOff } from "lucide-react"

export const metadata = {
  title: "Offline",
}

/**
 * Offline fallback page. Served by the service worker when the user
 * navigates to a route the worker can't reach over the network and
 * doesn't have cached. Specifically routed to from `sw.js` when
 * `fetch()` fails inside `navigationFallback()`.
 *
 * Kept deliberately tiny so it precaches quickly and renders without
 * needing any client-side JS. The Review queue link is the only
 * out-going action — that's the surface guaranteed to work offline
 * once the cache is primed.
 */
export default function OfflinePage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      <div className="max-w-md text-center">
        <div
          className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-6"
          style={{
            backgroundColor: "rgba(201,168,76,0.10)",
            border: "1px solid rgba(201,168,76,0.22)",
          }}
        >
          <WifiOff className="w-6 h-6" style={{ color: "#C9A84C" }} />
        </div>
        <h1 className="font-display text-3xl font-semibold text-[#F0F0F0] tracking-[-0.02em] mb-3">
          You&apos;re offline.
        </h1>
        <p className="text-[14px] text-[#C0C0C0] leading-relaxed mb-8">
          The page you tried to load needs the network. Your spaced-review
          queue is still available if you cached it earlier — drill those
          and your progress will sync when you reconnect.
        </p>
        <Link
          href="/offline/drill"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
          style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
        >
          Open offline drill
          <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-[11px] text-[#666666] mt-6 leading-snug">
          Drills you complete offline queue locally and sync to your
          account when the network returns.
        </p>
      </div>
    </div>
  )
}
