import type { Metadata } from "next"
import Link from "next/link"
import LegalPage, { LegalSection } from "@/components/marketing/LegalPage"
import { SITE_CONTACT_EMAIL } from "@/lib/site"
import { PAYWALL_ENABLED } from "@/lib/entitlements"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your use of Zakarian GMAT — accounts, payment, content, and acceptable use.",
  alternates: { canonical: "/terms" },
}

const LAST_UPDATED = "August 20, 2026"
const CONTACT_EMAIL = SITE_CONTACT_EMAIL

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="These terms govern your use of Zakarian GMAT. Please read them carefully — they describe what you can expect from the Platform and what we expect from you."
      lastUpdated={LAST_UPDATED}
    >
      <LegalSection title="Agreement to terms">
        <p>
          By creating an account, purchasing a plan, or otherwise using the
          Zakarian GMAT website, application, or related services
          (collectively, the &ldquo;Platform&rdquo;), you agree to be bound by
          these Terms of Service. If you do not agree, do not use the Platform.
        </p>
        <p>
          The Platform is operated by Adam Zakarian, an independent GMAT prep
          provider (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or the
          &ldquo;Operator&rdquo;).
        </p>
      </LegalSection>

      <LegalSection title="Eligibility and accounts">
        <p>
          You must be at least 16 years old to use the Platform. You agree to
          provide accurate registration information and to keep it up to date.
          You are responsible for maintaining the confidentiality of your
          password and for all activity that occurs under your account.
        </p>
        <p>
          One person, one account. You may not share your account credentials
          with anyone else. If we reasonably believe an account is being shared
          across multiple people, we may suspend it.
        </p>
      </LegalSection>

      <LegalSection title="Plans and payment">
        <p>
          Plans, prices, and inclusions are described on the{" "}
          <Link href="/pricing">pricing page</Link>. By purchasing a plan you
          authorize our payments processor (Stripe) to charge your payment
          method for the listed amount.
        </p>
        {PAYWALL_ENABLED ? (
          <p>
            Creating an account is free and does not require a credit card.
            Access to paid features requires purchasing a plan as described on
            the <Link href="/pricing">pricing page</Link>. The price and the
            duration of access are shown before you are charged.
          </p>
        ) : (
          <p>
            The Platform is currently free to use, and creating an account does
            not require a credit card. If a paid plan or a time-limited trial is
            introduced, its terms and duration will be described before you are
            charged.
          </p>
        )}
        <p>
          All prices are listed in U.S. dollars unless otherwise stated. You
          are responsible for any taxes that apply to your purchase.
        </p>
      </LegalSection>

      <LegalSection title="Refunds">
        <p>
          Refunds are governed by our separate{" "}
          <Link href="/refund">Refund Policy</Link>, which forms part of these
          Terms.
        </p>
      </LegalSection>

      <LegalSection title="Acceptable use">
        <p>You agree not to:</p>
        <ul>
          <li>
            Copy, scrape, redistribute, resell, sublicense, or republish any
            part of the Platform&apos;s questions, chapters, explanations, or
            other content.
          </li>
          <li>
            Use the Platform or its content to train, fine-tune, or evaluate
            any machine-learning model.
          </li>
          <li>
            Reverse engineer, probe for vulnerabilities, or interfere with the
            operation of the Platform.
          </li>
          <li>
            Use the Platform to harass others, transmit unlawful content, or
            violate the rights of any third party.
          </li>
          <li>Share your account access with anyone outside your household.</li>
          <li>
            Use automated tools to access the Platform other than as
            permitted by our published <code>robots.txt</code>.
          </li>
        </ul>
        <p>
          We may suspend or terminate accounts that violate these rules,
          without refund, in our reasonable discretion.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual property">
        <p>
          Except for third-party materials and trademarks identified on the
          Platform, the Platform&apos;s original content, selection,
          arrangement, design, and software are owned by or licensed to the
          Operator and may be protected by copyright and other
          intellectual-property laws. You receive a limited, personal,
          non-transferable, non-exclusive license to access and use the
          Platform for your own GMAT preparation. No other rights are granted.
        </p>
        <p>
          The Platform uses third-party software, including open-source
          components, and may link to third-party educational resources. Those
          materials remain subject to their own terms and licenses. Notices
          for software distributed with the Platform are available in our{" "}
          <a href="/third-party-notices.txt">third-party notices</a>.
        </p>
        <p>
          You retain ownership of any notes, error-log entries, or other
          content you create. By using the Platform you grant us a limited
          license to store, display, and process that content as needed to
          provide the service to you.
        </p>
      </LegalSection>

      <LegalSection title="AI tutor">
        <p>
          The in-product AI tutor is an aid, not an authority. Its output is
          generated by a third-party language model and may be incomplete or
          incorrect. Always defer to the question&apos;s own explanation, and
          do not rely on the tutor as a substitute for professional advice on
          test-taking strategy or admissions decisions.
        </p>
      </LegalSection>

      <LegalSection title="No guarantee of results">
        <p>
          We do not guarantee any specific score, score improvement, or
          admissions outcome. Your results depend on your own preparation,
          effort, and individual circumstances. Refund terms for each plan are
          described in our <Link href="/refund">Refund Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection title="No exam-board affiliation">
        <p>
          GMAC&trade;, GMAT&trade;, Graduate Management Admission
          Council&trade;, and Graduate Management Admission Test&trade; are
          trademarks of GMAC in the United States and other countries.
          Zakarian GMAT is independent and is not affiliated with, endorsed
          by, or sponsored by GMAC. References to the GMAT exam are for
          descriptive and educational purposes only.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimers">
        <p>
          The Platform is provided &ldquo;as is&rdquo; and &ldquo;as
          available.&rdquo; To the fullest extent permitted by law, we
          disclaim all warranties, express or implied, including warranties of
          merchantability, fitness for a particular purpose, and
          non-infringement. We do not warrant that the Platform will be
          uninterrupted, error-free, or that any specific outcome — including
          a target GMAT score — will result from your use of it.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of liability">
        <p>
          To the maximum extent permitted by law, the Operator&apos;s total
          liability arising out of or related to these Terms or the Platform
          will not exceed the greater of (a) the amount you paid the Operator
          in the twelve months before the event giving rise to the claim or
          (b) one hundred U.S. dollars (USD 100). The Operator will not be
          liable for indirect, incidental, special, consequential, or
          exemplary damages, including lost profits, lost data, or loss of
          goodwill.
        </p>
        <p>
          Some jurisdictions do not allow the exclusion of certain warranties
          or limitations of liability, so some of the above may not apply to
          you.
        </p>
      </LegalSection>

      <LegalSection title="Termination">
        <p>
          You may close your account at any time by emailing us. We may
          suspend or terminate your access to the Platform if you breach
          these Terms, if your payment fails, or if continuing to provide the
          service to you would expose us to legal liability. On termination,
          your license to use the Platform ends and we will delete your data
          in accordance with our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection title="Changes to these terms">
        <p>
          We may update these Terms from time to time. When we make material
          changes, we will revise the &ldquo;Last updated&rdquo; date above
          and notify existing users by email or in the Platform. Continued use
          of the Platform after the changes take effect means you accept the
          revised Terms.
        </p>
      </LegalSection>

      <LegalSection title="Governing law and disputes">
        <p>
          These Terms are governed by the laws of the jurisdiction where the
          Operator resides, without regard to its conflict-of-laws rules. Any
          dispute arising out of or related to these Terms will be resolved
          in the competent courts of that jurisdiction, except where
          mandatory consumer-protection laws give you the right to bring a
          claim where you live.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about these Terms can be sent to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
