/**
 * Marketing-consent flag stored in Supabase user_metadata at signup.
 *
 * The platform records EXPLICIT marketing consent: the signup form has an
 * unticked-by-default checkbox; when the user ticks it we write
 * `user_metadata.marketing_consent = { optedIn: true, at, source }`. The
 * outreach cron enrols a new account into the marketing sequence ONLY when this
 * flag reads optedIn === true. Merely creating an account never enrols anyone.
 *
 * Pure (no I/O) — usable on the client (to build the flag) and server (to read
 * it) and unit-tested.
 */

export interface MarketingConsentFlag {
  optedIn: boolean
  /** ISO timestamp the user ticked the box. */
  at?: string
  /** Where consent was given, e.g. "signup". */
  source?: string
}

/** Read the marketing-consent flag from a user_metadata object. Default: not opted in. */
export function readMarketingConsent(
  meta: Record<string, unknown> | null | undefined
): MarketingConsentFlag {
  const raw = meta?.marketing_consent
  if (raw && typeof raw === "object") {
    const r = raw as Record<string, unknown>
    return {
      optedIn: r.optedIn === true,
      at: typeof r.at === "string" ? r.at : undefined,
      source: typeof r.source === "string" ? r.source : undefined,
    }
  }
  return { optedIn: false }
}

/** Build the flag to store at signup from the checkbox state + opt-in time. */
export function buildMarketingConsent(
  optedIn: boolean,
  atIso: string,
  source = "signup"
): MarketingConsentFlag {
  return optedIn ? { optedIn: true, at: atIso, source } : { optedIn: false }
}
