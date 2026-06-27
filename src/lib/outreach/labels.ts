/**
 * Map a stored consent_source to the plain-English "why you're getting this"
 * line shown in every email footer and on the unsubscribe page. Pure.
 */
export function consentReasonFor(source: string): string {
  const map: Record<string, string> = {
    signup: "you opted in to Zakarian GMAT emails when you created your account",
    "founding-reservation":
      "you opted in to emails when you reserved founding access",
    "lead-capture:founding-reservation":
      "you opted in to emails when you reserved founding access",
    "lead-capture:error-log-template":
      "you opted in to emails when you requested the error-log template",
    "lead-capture:newsletter": "you opted in to Zakarian GMAT emails",
    referral: "you opted in to emails through a referral at zakariangmat.com",
    milestone: "you opted in to Zakarian GMAT emails",
  }
  if (map[source]) return map[source]
  if (source.startsWith("lead-capture:"))
    return "you opted in to emails at zakariangmat.com"
  return "you opted in to emails at zakariangmat.com"
}
