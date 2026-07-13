import Link from "next/link"
import { Mail } from "lucide-react"
import LeadCapture from "@/components/marketing/LeadCapture"
import { SITE_CONTACT_EMAIL } from "@/lib/site"

const platformLinks = [
  { label: "Course Overview", href: "/course" },
  { label: "Pricing", href: "/pricing" },
  { label: "Free Resources", href: "/resources" },
  { label: "Refer a Friend", href: "/refer" },
  { label: "FAQ", href: "/faq" },
  { label: "Login", href: "/login" },
]

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "How We Compare", href: "/how-we-compare" },
  { label: "Student Results", href: "/students" },
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
      {/* Faint bottom-right gold radial flourish */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 92% 100%, rgba(201,168,76,0.07) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      {/* Subtle top hairline rule for separation from page above */}
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(201,168,76,0.12), transparent)",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Lead capture — error-log template lead magnet. Drives the
            social-channel CTAs ("DM me and I'll send the template") and
            collects emails for prospects who bounce without signing up. */}
        <div className="mb-14 max-w-xl">
          <LeadCapture
            source="footer"
            leadMagnet="error-log-template"
            eyebrow="Free template"
            headline="Get the GMAT error-log template I used to go from 565 to 735."
            description="The exact six-tag taxonomy and the spreadsheet structure. Two months of honest logging surfaces the patterns. No account needed — just your email."
            ctaLabel="Send me the template"
          />
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
            <p className="font-display text-[13px] text-[#888888] leading-relaxed mb-6 max-w-[18rem]">
              A premium GMAT preparation system. 565 → 735, built by someone who
              solved the hard version.
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
                <Mail className="w-4 h-4 text-[#555555] hover:text-[#C9A84C] transition-colors" />
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
          <p className="text-[11px] text-[#555555] tracking-tight">
            © {new Date().getFullYear()} Zakarian GMAT. All rights reserved.
          </p>
          <p className="text-[11px] text-[#555555] tracking-tight">
            <a
              href={`mailto:${SITE_CONTACT_EMAIL}`}
              className="hover:text-[#C9A84C] transition-colors duration-200"
            >
              {SITE_CONTACT_EMAIL}
            </a>
          </p>
        </div>

        {/* No-affiliation disclaimer — kept site-wide in the footer so the
            trademark notice is visible on every page, not just /terms. */}
        <p className="mt-5 text-[11px] text-[#555555] leading-relaxed max-w-3xl">
          GMAT™ is a registered trademark of the Graduate Management Admission
          Council™ (GMAC™). GMAC does not endorse, nor is it affiliated in any
          way with, the owner or any content of this site. All references to the
          GMAT exam are for descriptive and educational purposes only.
        </p>
      </div>
    </footer>
  )
}
