"use client"

import type { ReactNode } from "react"
import { usePathname } from "next/navigation"

/** Internal candidates must not inherit outcome claims or marketing measurement. */
export default function ExcludeLandingPreview({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  if (pathname === "/landing-preview" || pathname?.startsWith("/landing-preview/")) return null
  return children
}
