import type { Metadata } from "next"
import Link from "next/link"
import LegalPage, { LegalSection } from "@/components/marketing/LegalPage"
import { SITE_CONTACT_EMAIL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "How refunds work for each Zakarian GMAT plan — a 14-day money-back guarantee on every plan, plus package terms for Coaching and Intensive.",
  alternates: { canonical: "/refund" },
}

const LAST_UPDATED = "June 12, 2026"
const CONTACT_EMAIL = SITE_CONTACT_EMAIL

export default function RefundPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Refund Policy"
      intro="Clear, plan-by-plan refund terms — a 14-day money-back guarantee on every plan, plus the package terms for Coaching and Intensive."
      lastUpdated={LAST_UPDATED}
    >
      <LegalSection title="Summary">
        <ul>
          <li>
            <strong>Self-Study.</strong> 14-day money-back guarantee, no
            questions asked. One-time payment for four months of platform
            access.
          </li>
          <li>
            <strong>Self-Study + Mentorship.</strong> 14-day money-back
            guarantee, no questions asked. One-time payment for six months of
            platform access plus WhatsApp Q&amp;A access to Adam.
          </li>
          <li>
            <strong>Coaching.</strong> Refundable in full before the first
            coaching session. After that it is non-refundable for a change of
            mind, since the package is priced as a program.
          </li>
          <li>
            <strong>Intensive.</strong> Refundable in full before the first
            coaching session, then non-refundable for a change of mind, with a
            genuine-hardship exception. Priced as a full-service program.
          </li>
        </ul>
        <p>
          Full terms below. If you&apos;re unsure which applies to you, email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we will
          walk you through it.
        </p>
      </LegalSection>

      <LegalSection title="Self-Study and Self-Study + Mentorship">
        <p>
          You can request a full refund within 14 days of your purchase, for
          any reason. Email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> from the
          email address on your account, with the subject line &ldquo;Refund
          request,&rdquo; and we&apos;ll process it within five business days.
        </p>
        <p>
          After 14 days, the purchase is final. Self-Study includes four months
          of platform access and Self-Study + Mentorship includes six months;
          when that window ends, access ends. If a billing error or technical
          issue prevented you from accessing what you paid for, contact us — we
          will make it right.
        </p>
      </LegalSection>

      <LegalSection title="Coaching (8-week package)">
        <p>
          The Coaching plan is structured as a fixed-scope package: eight weekly
          1:1 sessions plus platform access. Refund terms:
        </p>
        <ul>
          <li>
            <strong>Before your first session.</strong> Full refund, less any
            payment-processing fees that we cannot recover from Stripe.
          </li>
          <li>
            <strong>After your first session.</strong> Non-refundable. The
            package is priced as a program, not a per-session rate.
          </li>
          <li>
            <strong>Genuine hardship.</strong> If you cannot continue the
            program because of a serious health issue, bereavement, or similar
            event, contact us. We will pause the package or offer a partial
            credit at our reasonable discretion.
          </li>
        </ul>
        <p>
          Sessions can be rescheduled with at least 24 hours&apos; notice.
          Sessions cancelled with less notice or missed without notice count
          toward the eight-session total.
        </p>
      </LegalSection>

      <LegalSection title="Intensive (16-week package)">
        <p>
          The Intensive plan is the 16-week, full-service program: sixteen
          weekly 1:1 sessions plus platform access. Refund terms:
        </p>
        <ul>
          <li>
            <strong>Before your first session.</strong> Full refund, less any
            payment-processing fees that we cannot recover from Stripe.
          </li>
          <li>
            <strong>After your first session.</strong> Non-refundable for a
            change of mind. The package is priced as a full program.
          </li>
          <li>
            <strong>Genuine hardship.</strong> If a serious health issue,
            bereavement, or similar event stops you continuing, contact us. We
            will pause the program or offer a partial credit at our reasonable
            discretion.
          </li>
        </ul>
        <p>
          Sessions can be rescheduled with at least 24 hours&apos; notice.
          Sessions cancelled with less notice or missed without notice count
          toward the sixteen-session total.
        </p>
      </LegalSection>

      <LegalSection title="No guarantee of results">
        <p>
          No plan guarantees a specific score, score improvement, or admissions
          outcome. Your results depend on your own preparation, effort, and
          individual circumstances. The refund terms above are the full extent
          of our money-back commitment.
        </p>
      </LegalSection>

      <LegalSection title="How refunds are paid">
        <p>
          Refunds are returned to the original payment method via Stripe.
          Depending on your bank, the credit can take up to ten business days
          to appear on your statement after we process it.
        </p>
      </LegalSection>

      <LegalSection title="Chargebacks">
        <p>
          If you have a billing concern, please contact us first — we will
          almost always resolve it faster than a chargeback can. Initiating a
          chargeback without first contacting us may result in your account
          being suspended pending the dispute outcome.
        </p>
      </LegalSection>

      <LegalSection title="Statutory rights">
        <p>
          Where you live in a jurisdiction whose consumer-protection laws
          provide stronger refund rights than this policy (for example, the
          UK&apos;s 14-day cooling-off period for digital services that have
          not yet started), those statutory rights apply.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          For all refund requests, email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> from the
          email address on your account. See also our{" "}
          <Link href="/terms">Terms of Service</Link> and{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
