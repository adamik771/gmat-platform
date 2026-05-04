import OfflineDrillClient from "./OfflineDrillClient"

export const metadata = {
  title: "Offline drill",
}

/**
 * /offline/drill — runs a spaced-retrieval drill from cached
 * IndexedDB data. Pure client-side: no server fetch on this route.
 * The page works fully offline as long as /review has been visited
 * online at least once (which primes the cache).
 *
 * Marked dynamic so Next.js doesn't try to statically prerender — the
 * actual content lives entirely in the client component below.
 */
export const dynamic = "force-dynamic"
export const revalidate = 0

export default function OfflineDrillPage() {
  return <OfflineDrillClient />
}
