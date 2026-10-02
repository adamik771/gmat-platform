import type { Metadata } from "next"

// The unsubscribe page is a client component and cannot export metadata
// itself. This passthrough layout keeps the token-based utility page out of
// search indexes (it is linked from every marketing email).
export const metadata: Metadata = {
  title: "Unsubscribe",
  robots: { index: false },
}

export default function UnsubscribeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
