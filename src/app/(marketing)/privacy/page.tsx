import type { Metadata } from "next"
import Link from "next/link"
import LegalPage, { LegalSection } from "@/components/marketing/LegalPage"
import ConsentSettingsButton from "@/components/analytics/ConsentSettingsButton"
import { SITE_CONTACT_EMAIL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Zakarian GMAT collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
}

const LAST_UPDATED = "September 2, 2026"
const CONTACT_EMAIL = SITE_CONTACT_EMAIL

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This policy explains what information Zakarian GMAT collects when you use the platform, how it is used, and the choices you have."
      lastUpdated={LAST_UPDATED}
    >
      <LegalSection title="Who we are">
        <p>
          Zakarian GMAT (the &ldquo;Platform&rdquo;) is operated by Adam
          Zakarian, an independent GMAT prep provider (the &ldquo;Operator,&rdquo;
          &ldquo;we,&rdquo; or &ldquo;us&rdquo;). We can be reached at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </LegalSection>

      <LegalSection title="Information we collect">
        <p>We collect only the information needed to operate the Platform:</p>
        <ul>
          <li>
            <strong>Account information.</strong> Your name, email address, and
            a password you choose. Passwords are stored as a salted hash via our
            authentication provider; we never see them in plain text.
          </li>
          <li>
            <strong>Study data.</strong> Your practice sessions, question
            attempts, error-log entries, exam date, target score, chapter
            progress, notification preferences, and a coarse active-use
            estimate. The active-use estimate stores only the total active
            seconds for each day and the latest activity time. It counts a tab
            only while it is visible and has been used recently; it does not
            store a page-by-page browsing history. This is the data the
            Platform uses to give you analytics, an adaptive plan, a spaced
            review queue, and more informed progress support.
          </li>
          <li>
            <strong>Payment information.</strong> If you purchase a plan, our
            payments processor (Stripe) collects your card details directly. We
            store only a record of which plan you purchased and the
            corresponding identifier from Stripe. We never receive or store
            full card numbers.
          </li>
          <li>
            <strong>AI tutor messages.</strong> If you use the in-product AI
            tutor on a question, the question, your selected answer, and the
            messages you send to the tutor are sent to our model provider
            (Anthropic) to generate a reply. We do not retain the conversation
            on our servers beyond what is needed to render it back to you in
            the session.
          </li>
          <li>
            <strong>Device and log data.</strong> Standard server logs (IP
            address, request path, user agent, timestamp). These are retained
            for a limited period for security and debugging.
          </li>
        </ul>
        <p>
          We use Vercel Web Analytics to count page views and key product
          events in aggregate. If you accept measurement in the consent
          banner, we also store the campaign parameters that brought you to
          the site (for example, utm_source) in your browser&apos;s local
          storage so we can attribute signups to a campaign; if you decline,
          nothing is stored. Emails from our marketing sequences include an
          open-tracking pixel and links that pass through our own
          click-tracking redirect so we can tell which emails are useful;
          unsubscribing stops those emails. When our advertising measurement
          tags (Meta Pixel, Google tag) are active, they measure whether ads
          lead to signups. We do not use session-replay tools.
        </p>
      </LegalSection>

      <LegalSection title="How we use your information">
        <ul>
          <li>To provide the Platform and its core features.</li>
          <li>To compute your analytics, study plan, and review queue.</li>
          <li>
            To understand course progress and provide students with more
            relevant study guidance and support.
          </li>
          <li>To process payments and manage your subscription or plan.</li>
          <li>To send transactional emails (account verification, password reset, receipts).</li>
          <li>To send product updates if you opt in via your notification preferences.</li>
          <li>To diagnose bugs, prevent abuse, and keep the Platform secure.</li>
        </ul>
        <p>We do not sell your personal information.</p>
      </LegalSection>

      <LegalSection title="Service providers we use">
        <p>
          The Platform runs on a small set of vendors who process data on our
          behalf:
        </p>
        <ul>
          <li>
            <strong>Supabase</strong> — authentication and database (your
            account, study data, error log).
          </li>
          <li>
            <strong>Stripe</strong> — payments processing.
          </li>
          <li>
            <strong>Vercel</strong> — application hosting and content delivery.
          </li>
          <li>
            <strong>Anthropic</strong> — language-model inference for the
            in-product AI tutor.
          </li>
          <li>
            <strong>Resend</strong> — transactional and product email delivery
            (processes your name and email address).
          </li>
          <li>
            <strong>Formspree</strong> — contact-form processing (US-based;
            the name, email, and message you submit on the contact page).
          </li>
        </ul>
        <p>
          Each of these providers has its own privacy and security commitments.
          We share only the data necessary for them to perform their role.
        </p>
      </LegalSection>

      <LegalSection title="Cookies and similar technologies">
        <p>
          We use a small number of cookies (and equivalent local-storage keys)
          that are necessary for the Platform to function — primarily to keep
          you signed in and to remember session state such as your study timer
          and offline cache. Our analytics does not use advertising cookies.
          Advertising measurement tags (Meta Pixel, Google tag) and
          advertising attribution are loaded and stored only if you accept
          them in the consent banner; they stay off by default and when you
          reject. Beyond that we do not use cross-site tracking cookies. You
          can change your choice at any time:
        </p>
        <p>
          <ConsentSettingsButton className="underline hover:opacity-80" />
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>
          Depending on where you live (for example, the EU/UK under GDPR or
          California under CCPA), you may have the right to:
        </p>
        <ul>
          <li>Request a copy of the personal data we hold about you.</li>
          <li>Request that inaccurate data be corrected.</li>
          <li>Request that your account and associated data be deleted.</li>
          <li>Object to or restrict certain processing.</li>
          <li>Receive your data in a portable format.</li>
        </ul>
        <p>
          To exercise any of these rights, email us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We will
          respond within 30 days.
        </p>
      </LegalSection>

      <LegalSection title="Data retention">
        <p>
          We retain your account and study data for as long as your account is
          active. If you close your account, we delete your personal data
          within 30 days, except where we are required to keep specific records
          (for example, transaction records for tax purposes) or where the data
          is held in routine backups, in which case it is purged on the normal
          backup rotation.
        </p>
      </LegalSection>

      <LegalSection title="Security">
        <p>
          We use industry-standard safeguards — TLS in transit, encrypted
          credentials at rest via our authentication provider, and least-
          privilege access to production systems. No system can guarantee
          perfect security; if we ever detect a breach affecting your data, we
          will notify you and the relevant regulators as required by law.
        </p>
      </LegalSection>

      <LegalSection title="International transfers">
        <p>
          Our service providers may store and process your data in countries
          other than your own, including the United States. By using the
          Platform, you consent to that transfer. Where required, we rely on
          standard contractual clauses or equivalent safeguards.
        </p>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          The Platform is intended for users aged 16 and over. We do not
          knowingly collect personal information from children under 16. If you
          believe a child has created an account, please contact us and we will
          delete it.
        </p>
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <p>
          We may update this policy from time to time. When we do, we will
          revise the &ldquo;Last updated&rdquo; date above and, for material
          changes, give existing users reasonable notice by email or in the
          Platform.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions, requests, or complaints about this policy can be sent to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. See also our{" "}
          <Link href="/terms">Terms of Service</Link> and{" "}
          <Link href="/refund">Refund Policy</Link>.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
