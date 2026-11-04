"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { usePathname } from "next/navigation"
import { startPublicMotion } from "./public-motion"
import styles from "./PublicMotion.module.css"

export default function PublicMotion({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (ref.current) return startPublicMotion(ref.current)
  }, [pathname, children])

  return <div ref={ref} className={styles.root}>{children}</div>
}
