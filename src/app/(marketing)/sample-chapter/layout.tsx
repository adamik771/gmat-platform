import type { ReactNode } from "react"

export default function SampleChapterLayout({ children }: { children: ReactNode }) {
  return <div style={{ paddingTop: "var(--public-header-height, 73px)" }}>{children}</div>
}
