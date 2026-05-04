/**
 * Tiny IndexedDB wrapper. Promisifies the IDB API for the few patterns
 * the offline review queue needs: open a versioned database, read/write
 * a single key in a single object store, list, clear.
 *
 * SCOPE: foundation only. Doesn't cover transactions across multiple
 * stores, indexed range queries, cursor walks, or schema migration
 * beyond a simple "create the store if missing" upgrade. Add those
 * when the offline feature surfaces ask for them.
 *
 * Browser support: IndexedDB is GA in every browser the platform
 * targets (iOS Safari 14+, Chromium, Firefox). Module gracefully
 * no-ops on the server (typeof indexedDB === "undefined") so importing
 * it from a server component doesn't blow up at build time.
 */

const DB_NAME = "zk-gmat-offline"
// Bump on every store-shape change. The upgrade handler is idempotent
// (it adds missing stores), so existing users transition cleanly.
//   v1 → review-queue, review-questions
//   v2 → + pending-attempts
const DB_VERSION = 2

export type StoreName =
  | "review-queue"
  | "review-questions"
  | "pending-attempts"

const STORE_NAMES: StoreName[] = [
  "review-queue",
  "review-questions",
  "pending-attempts",
]

function isAvailable(): boolean {
  return typeof window !== "undefined" && typeof indexedDB !== "undefined"
}

/** Open (or upgrade) the database. Single-version scheme for now. */
function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!isAvailable()) {
      reject(new Error("IndexedDB unavailable"))
      return
    }
    const req = indexedDB.open(DB_NAME, DB_VERSION)
    req.onerror = () => reject(req.error)
    req.onupgradeneeded = () => {
      const db = req.result
      for (const name of STORE_NAMES) {
        if (!db.objectStoreNames.contains(name)) {
          db.createObjectStore(name)
        }
      }
    }
    req.onsuccess = () => resolve(req.result)
  })
}

async function withStore<T>(
  store: StoreName,
  mode: IDBTransactionMode,
  fn: (s: IDBObjectStore) => IDBRequest
): Promise<T> {
  const db = await openDb()
  return new Promise<T>((resolve, reject) => {
    const tx = db.transaction(store, mode)
    const s = tx.objectStore(store)
    const req = fn(s)
    req.onsuccess = () => resolve(req.result as T)
    req.onerror = () => reject(req.error)
    tx.oncomplete = () => db.close()
    tx.onabort = () => {
      db.close()
      reject(tx.error)
    }
  })
}

/** Read one entry by key. Returns `undefined` when missing. */
export async function idbGet<T>(
  store: StoreName,
  key: IDBValidKey
): Promise<T | undefined> {
  if (!isAvailable()) return undefined
  try {
    const v = await withStore<T | undefined>(store, "readonly", (s) =>
      s.get(key)
    )
    return v
  } catch {
    return undefined
  }
}

/** Write one entry. Overwrites on conflict. */
export async function idbSet<T>(
  store: StoreName,
  key: IDBValidKey,
  value: T
): Promise<void> {
  if (!isAvailable()) return
  try {
    await withStore<IDBValidKey>(store, "readwrite", (s) => s.put(value, key))
  } catch {
    // Quota error or transient — non-fatal.
  }
}

/** Delete a single entry. Idempotent. */
export async function idbDelete(
  store: StoreName,
  key: IDBValidKey
): Promise<void> {
  if (!isAvailable()) return
  try {
    await withStore<undefined>(store, "readwrite", (s) => s.delete(key))
  } catch {
    // Non-fatal.
  }
}

/** Clear an entire store. */
export async function idbClear(store: StoreName): Promise<void> {
  if (!isAvailable()) return
  try {
    await withStore<undefined>(store, "readwrite", (s) => s.clear())
  } catch {
    // Non-fatal.
  }
}
