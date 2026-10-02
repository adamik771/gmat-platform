/**
 * Service worker shell — Zakarian GMAT.
 *
 * SCOPE OF THIS FILE: This is the foundation, not the full offline
 * feature. Specifically it handles:
 *   1. App-shell precache on install (offline navigation fallback)
 *   2. Stale-while-revalidate for static assets (JS, CSS, fonts, images)
 *   3. Never caches authenticated HTML or user-specific API responses.
 *
 * NOT YET IMPLEMENTED — call out for a follow-up session:
 *   - Background sync to queue practice-session submissions made while
 *     offline and replay them when the network returns.
 *   - Periodic cache eviction beyond the simple "delete old version"
 *     policy in the activate handler.
 *   - Push notifications for due review items (requires VAPID keys,
 *     /api subscription endpoints; see Next.js PWA guide for the full
 *     pattern).
 *
 * CRITICAL OPS NOTES:
 *   - Bump CACHE_VERSION on every breaking change (e.g., changing the
 *     review-API response shape). The activate handler purges old
 *     caches, so users will re-fetch the new shape on next visit.
 *   - The `/sw.js` file itself MUST NOT be cached by the browser. Set
 *     `Cache-Control: no-cache, no-store, must-revalidate` for it in
 *     next.config — see the Next.js PWA guide §8.
 *   - User-specific offline data belongs in user-scoped IndexedDB stores,
 *     never Cache Storage. Cache Storage keys are shared by every account
 *     using the same browser profile.
 */

// ===== Versioning =====
// Bump this whenever a hot-path response shape changes or the shell
// HTML changes such that older cached versions would be incompatible.
const CACHE_VERSION = "v2"
const SHELL_CACHE = `zk-shell-${CACHE_VERSION}`
const ASSET_CACHE = `zk-assets-${CACHE_VERSION}`

// ===== Precache list =====
// Only cache user-agnostic shells. Authenticated pages and API responses must
// always come from the network so one account can never receive another
// account's cached HTML on a shared device.
const PRECACHE_URLS = ["/offline", "/offline/drill"]

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
  // This release removes a user-data cache. Activate it immediately so old
  // authenticated responses are purged without waiting for every tab to close.
  self.skipWaiting()
})

// ===== Activate: purge old caches =====
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const allow = new Set([SHELL_CACHE, ASSET_CACHE])
      const names = await caches.keys()
      await Promise.all(
        names.filter((n) => n.startsWith("zk-") && !allow.has(n)).map((n) => caches.delete(n))
      )
      await self.clients.claim()
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
