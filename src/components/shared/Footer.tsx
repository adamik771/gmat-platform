import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
import ConsentSettingsButton from "@/components/analytics/ConsentSettingsButton"
import { SITE_CONTACT_EMAIL } from "@/lib/site"

const platformLinks = [
  { label: "Course Overview", href: "/course" },
  { label: "Free 7-Day Trial", href: "/gmat-free-trial" },
  { label: "Pricing", href: "/pricing" },
  { label: "Free Resources", href: "/resources" },
  { label: "GMAT Focus Changes", href: "/gmat-focus-edition-changes" },
  { label: "Refer a Friend", href: "/refer" },
  { label: "FAQ", href: "/faq" },
  { label: "Login", href: "/login" },
]

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "How We Compare", href: "/how-we-compare" },
  { label: "Results and evidence", href: "/students" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
]

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund Policy", href: "/refund" },
]

export default function Footer() {
  return (
    <footer
      className="relative border-t border-white/[0.06] overflow-hidden"
      style={{ backgroundColor: "#050505" }}
    >
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 border-b border-white/10 pb-6">
          <Link href="/resources#templates" className="inline-flex min-h-11 items-center gap-2 text-sm text-[#C9A84C] hover:underline">
            Free GMAT error-log template <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-1 mb-4">
              <span className="text-[#F0F0F0] font-bold text-base tracking-tight">
                ZAKARIAN
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "#C9A84C" }}
              />
              <span className="text-[#F0F0F0] font-bold text-base tracking-tight">
                GMAT
              </span>
            </Link>
            <p className="text-sm text-[#B9B7AE] leading-relaxed mb-6 max-w-[18rem]">
              Structured GMAT preparation, focused practice, and spaced review.
            </p>
            {/* Social icons removed until real profile URLs exist — a dead
                href="#" button reads worse than no button. Re-add with the
                actual profile links when they're live. */}
            <div className="flex items-center gap-2">
              <a
                href={`mailto:${SITE_CONTACT_EMAIL}`}
                className="p-2 rounded-full border border-white/[0.08] hover:border-[#C9A84C]/30 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-[#888888] hover:text-[#C9A84C] transition-colors" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3
              className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-5"
              style={{ color: "#C9A84C" }}
            >
              Platform
            </h3>
            <ul className="space-y-2.5">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#888888] hover:text-[#F0F0F0] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-5"
              style={{ color: "#C9A84C" }}
            >
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#888888] hover:text-[#F0F0F0] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3
              className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-5"
              style={{ color: "#C9A84C" }}
            >
              Legal
            </h3>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[#888888] hover:text-[#F0F0F0] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                {/* Reopens the consent banner — the persistent privacy-
                    settings entry point required alongside the one-time
                    banner choice. */}
                <ConsentSettingsButton className="text-[13px] text-[#888888] hover:text-[#F0F0F0] transition-colors duration-200" />
              </li>
            </ul>
          </div>
        </div>

        {/* Gold-fading divider rule */}
        <div
          className="mt-14 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(201,168,76,0.15), transparent)",
          }}
          aria-hidden
        />

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[#888888] tracking-tight">
            © {new Date().getFullYear()} Zakarian GMAT. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-[#888888] tracking-tight">
            <a
              href="/third-party-notices.txt"
              className="hover:text-[#C9A84C] transition-colors duration-200"
            >
              Third-party notices
            </a>
            <a
              href={`mailto:${SITE_CONTACT_EMAIL}`}
              className="hover:text-[#C9A84C] transition-colors duration-200"
            >
              {SITE_CONTACT_EMAIL}
            </a>
          </div>
        </div>

        {/* No-affiliation disclaimer — kept site-wide in the footer so the
            trademark notice is visible on every page, not just /terms. */}
        <p className="mt-5 text-[11px] text-[#888888] leading-relaxed max-w-3xl">
          GMAC™, GMAT™, Graduate Management Admission Council™, and Graduate
          Management Admission Test™ are trademarks of GMAC in the United
          States and other countries. Zakarian GMAT is independent and is not
          affiliated with, endorsed by, or sponsored by GMAC. References to the
          GMAT exam are for descriptive and educational purposes only.
        </p>
      </div>
    </footer>
  )
}
