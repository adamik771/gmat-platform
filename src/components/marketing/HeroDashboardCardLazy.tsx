"use client"

import dynamic from "next/dynamic"

// The hero dashboard card pulls in recharts (~97KB gz) and framer-motion
// (~50KB gz) — by far the heaviest dependencies on the landing page. It's a
// desktop-only (hidden lg:flex) decorative element below the headline, not the
// LCP, and it already reveals/animates only after hydration. Loading it
// client-side (ssr: false) keeps those libraries off the page's initial bundle.
// The placeholder reserves the card's exact footprint so there is no layout
// shift while the chunk loads. ssr:false isn't allowed in a Server Component,
// so this thin "use client" wrapper hosts the dynamic import.
const HeroDashboardCard = dynamic(() => import("./HeroDashboardCard"), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden="true"
      className="w-full max-w-sm rounded-2xl border border-white/[0.08] shadow-2xl"
      style={{
        height: 332,
        backgroundColor: "#111111",
        boxShadow:
          "0 0 80px rgba(201,168,76,0.08), 0 40px 80px rgba(0,0,0,0.5)",
      }}
    />
  ),
})

export default function HeroDashboardCardLazy() {
  return <HeroDashboardCard />
}
