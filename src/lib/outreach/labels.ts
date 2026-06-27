/**
 * Map a stored consent_source to the plain-English "why you're getting this"
 * line shown in every email footer and on the unsubscribe page. Pure.
 */
export function consentReasonFor(source: string): string {
  const map: Record<string, string> = {
    signup: "you created a Zakarian GMAT account",
    "founding-reservation": "you reserved founding access at zakariangmat.com",
    "lead-capture:founding-reservation":
      "you reserved founding access at zakariangmat.com",
    "lead-capture:error-log-template":
      "you requested the error-log template at zakariangmat.com",
    "lead-capture:newsletter": "you subscribed at zakariangmat.com",
    referral: "you joined through a referral link at zakariangmat.com",
    milestone: "you have a Zakarian GMAT account",
  }
  if (map[source]) return map[source]
  if (source.startsWith("lead-capture:"))
    return "you submitted a form at zakariangmat.com"
  return "you opted in at zakariangmat.com"
}
