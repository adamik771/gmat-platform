import type { ReactNode } from "react"
import { notFound } from "next/navigation"

// Evaluate the gate at request time, not when a production build is generated.
export const dynamic = "force-dynamic"

export default function LandingPreviewLayout({ children }: { children: ReactNode }) {
  if (process.env.VERCEL || (process.env.NODE_ENV !== "development" && process.env.LOCAL_LANDING_PREVIEW !== "1")) {
    notFound()
  }
  return children
}
