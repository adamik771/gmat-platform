/**
 * Service worker shell — Zakarian GMAT.
 *
 * SCOPE OF THIS FILE: This is the foundation, not the full offline
 * feature. Specifically it handles:
 *   1. App-shell precache on install (offline navigation fallback)
 *   2. Stale-while-revalidate for static assets (JS, CSS, fonts, images)
 *   3. Network-first with cache fallback for /review and review API
 *      responses (so the queue is viewable offline once you've loaded
 *      it once online)
 *
 * NOT YET IMPLEMENTED — call out for a follow-up session:
 *   - Background sync to queue practice-session submissions made while
 *     offline and replay them when the network returns.
 *   - Per-user cache namespacing (this version is shared across users
 *     on the same device; fine for solo-Adam beta, must change before
 *     multi-user testing).
 *   - Periodic cache eviction beyond the simple "delete old version"
 *     policy in the activate handler.
 *   - Push notifications for due review items (requires VAPID keys,
 *     /api subscription endpoints; see Next.js PWA guide for the full
 *     pattern).
 *   - Skip waiting + clientsClaim for instant updates on deploy.
 *
 * CRITICAL OPS NOTES:
 *   - Bump CACHE_VERSION on every breaking change (e.g., changing the
 *     review-API response shape). The activate handler purges old
 *     caches, so users will re-fetch the new shape on next visit.
 *   - The `/sw.js` file itself MUST NOT be cached by the browser. Set
 *     `Cache-Control: no-cache, no-store, must-revalidate` for it in
 *     next.config — see the Next.js PWA guide §8.
 *   - Authenticated requests to Supabase don't go through this worker
 *     (they hit Supabase directly, not /api/*). That means the review
 *     queue page (server-rendered with a Supabase query) won't render
 *     offline. To make it offline-capable, the page would need to
 *     fall back to client-side fetch from a cached IndexedDB store —
 *     see src/lib/offline/review-cache.ts for that wrapper.
 */

// ===== Versioning =====
// Bump this whenever a hot-path response shape changes or the shell
// HTML changes such that older cached versions would be incompatible.
const CACHE_VERSION = "v1"
const SHELL_CACHE = `zk-shell-${CACHE_VERSION}`
const ASSET_CACHE = `zk-assets-${CACHE_VERSION}`
const DATA_CACHE = `zk-data-${CACHE_VERSION}`

// ===== Precache list =====
// Routes worth precaching on install. /offline is the fallback page;
// /offline/drill is the offline drill runner; /review is the primary
// online surface that primes the IndexedDB cache. Add more as the
// feature expands.
const PRECACHE_URLS = ["/offline", "/offline/drill", "/review"]

// ===== Install: precache the shell =====
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(SHELL_CACHE)
      // `addAll` is atomic — any failure rolls back the whole batch.
      // For routes that may legitimately be missing (no /offline yet)
      // we use `add` per URL with a permissive try.
      for (const url of PRECACHE_URLS) {
        try {
          await cache.add(url)
        } catch {
          // Route may not exist yet; non-fatal.
        }
      }
    })()
  )
  // Don't `skipWaiting()` — let the next reload pick up the new
  // worker. Adam can change this later if he wants insta-updates.
})

// ===== Activate: purge old caches =====
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const allow = new Set([SHELL_CACHE, ASSET_CACHE, DATA_CACHE])
      const names = await caches.keys()
      await Promise.all(
        names.filter((n) => n.startsWith("zk-") && !allow.has(n)).map((n) => caches.delete(n))
      )
      // self.clients.claim() would let the new worker take over open
      // pages immediately; we don't claim, so the change applies on
      // the next navigation. Predictable for users.
    })()
  )
})

// ===== Fetch routing =====
self.addEventListener("fetch", (event) => {
  const req = event.request
  if (req.method !== "GET") return

  const url = new URL(req.url)

  // Skip cross-origin (Supabase, third-party assets). The browser's
  // own cache handles those reasonably; mishandling them in a worker
  // is the easiest way to break a site.
  if (url.origin !== self.location.origin) return

  // Skip the SW itself + Next.js internal endpoints we don't want to
  // intercept (e.g., HMR, RSC payloads in dev).
  if (url.pathname === "/sw.js") return
  if (url.pathname.startsWith("/_next/static")) {
    // Static-asset cache — long-lived, hash-named, safe to SWR.
    event.respondWith(staleWhileRevalidate(req, ASSET_CACHE))
    return
  }
  if (url.pathname.startsWith("/_next/")) return

  // Review surfaces — network-first with cache fallback. The student
  // should see fresh data when online, the last good version when not.
  if (url.pathname === "/review" || url.pathname.startsWith("/review/")) {
    event.respondWith(networkFirstWithFallback(req, DATA_CACHE))
    return
  }

  // App shell HTML — for any other navigation request, try network,
  // fall back to /offline if both network and cache miss.
  if (req.mode === "navigate") {
    event.respondWith(navigationFallback(req))
    return
  }

  // Fonts, images, icons — stale-while-revalidate.
  if (
    req.destination === "image" ||
    req.destination === "font" ||
    req.destination === "style"
  ) {
    event.respondWith(staleWhileRevalidate(req, ASSET_CACHE))
  }
})

// ===== Strategies =====

async function staleWhileRevalidate(req, cacheName) {
  const cache = await caches.open(cacheName)
  const cached = await cache.match(req)
  const network = fetch(req)
    .then((res) => {
      if (res.ok) cache.put(req, res.clone())
      return res
    })
    .catch(() => null)
  return cached || (await network) || Response.error()
}

async function networkFirstWithFallback(req, cacheName) {
  const cache = await caches.open(cacheName)
  try {
    const res = await fetch(req)
    if (res.ok) cache.put(req, res.clone())
    return res
  } catch {
    const cached = await cache.match(req)
    if (cached) return cached
    // Final fallback — let the navigation handler render /offline.
    return navigationFallback(req)
  }
}

async function navigationFallback(req) {
  try {
    const res = await fetch(req)
    if (res.ok) return res
    return res
  } catch {
    const cache = await caches.open(SHELL_CACHE)
    const offline = await cache.match("/offline")
    if (offline) return offline
    return new Response("You are offline.", {
      status: 503,
      statusText: "Service Unavailable",
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    })
  }
}
