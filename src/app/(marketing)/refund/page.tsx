import type { Metadata } from "next"
import Link from "next/link"
import LegalPage, { LegalSection } from "@/components/marketing/LegalPage"

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "How refunds work for each Zakarian GMAT plan, including the Intensive score guarantee.",
  alternates: { canonical: "/refund" },
}

const LAST_UPDATED = "May 3, 2026"
const CONTACT_EMAIL = "adamzakaryan17@gmail.com"

export default function RefundPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Refund Policy"
      intro="Clear, plan-by-plan refund terms — including the conditions for the Intensive score guarantee."
      lastUpdated={LAST_UPDATED}
    >
      <LegalSection title="Summary">
        <ul>
          <li>
            <strong>Self-Study.</strong> 14-day money-back
            guarantee, no questions asked.
          </li>
          <li>
            <strong>Coaching.</strong> Refundable in full before the first
            coaching session. Non-refundable after that, prorated only at our
            discretion in genuine hardship cases.
          </li>
          <li>
            <strong>Intensive.</strong>
            {" "}
            Backed by a score guarantee. If you complete the program as
            designed and don&apos;t hit your target, you choose between a full
            refund of the program fee or continued coaching at no additional
            cost.
          </li>
        </ul>
        <p>
          Full terms below. If you&apos;re unsure which applies to you, email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we will
          walk you through it.
        </p>
      </LegalSection>

      <LegalSection title="Self-Study">
        <p>
          You can request a full refund within 14 days of your purchase, for
          any reason. Email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> from the
          email address on your account, with the subject line &ldquo;Refund
          request,&rdquo; and we&apos;ll process it within five business days.
        </p>
        <p>
          After 14 days, the purchase is final. If a billing error or technical
          issue prevented you from accessing what you paid for, contact us — we
          will make it right.
        </p>
      </LegalSection>

      <LegalSection title="Coaching (8-week package)">
        <p>
          The Coaching plan is structured as a fixed-scope package: eight weekly
          1:1 sessions plus full Platform access. Refund terms:
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

      <LegalSection title="Intensive — Score Guarantee">
        <p>
          The Intensive plan is the 16-week, full-service program. It includes
          a score guarantee on the following terms:
        </p>
        <p>
          <strong>What we promise.</strong> If you complete the Intensive
          program as designed and your verified official GMAT score is below
          the target score we set with you at the start of the program, you may
          choose either:
        </p>
        <ol>
          <li>A full refund of the Intensive program fee, or</li>
          <li>
            Continued 1:1 coaching at no additional charge until your next
            official attempt.
          </li>
        </ol>
        <p>
          <strong>What &ldquo;completing the program as designed&rdquo;
          means.</strong> All of the following:
        </p>
        <ul>
          <li>Attendance at all 16 scheduled coaching sessions.</li>
          <li>
            Adherence to the personalised study plan we build for you within
            the first two weeks, with at least the agreed weekly study hours
            logged on the Platform.
          </li>
          <li>
            Completion of all assigned mock exams and a written debrief for
            each, submitted within seven days of the mock.
          </li>
          <li>
            Use of the error-log on the Platform, with at least one tagged
            entry per missed practice question across the program.
          </li>
          <li>
            Sitting your official GMAT exam within 30 days of your final
            coaching session, on a date agreed in advance.
          </li>
        </ul>
        <p>
          <strong>How to claim the guarantee.</strong> Within 14 days of
          receiving your official score report, email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with:
        </p>
        <ul>
          <li>Your official score report (PDF or screenshot).</li>
          <li>The target score we agreed at the start of the program.</li>
          <li>
            A short note confirming which option you would like — refund or
            extended coaching.
          </li>
        </ul>
        <p>
          We will verify program completion against your activity on the
          Platform and, if eligible, process the refund within ten business
          days or schedule the additional coaching at a mutually convenient
          time.
        </p>
        <p>
          <strong>What is not covered.</strong> The guarantee does not apply
          if any of the conditions above are not met, if the target score is
          changed unilaterally after the program begins, or if the official
          score is invalidated by the testing organisation.
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
