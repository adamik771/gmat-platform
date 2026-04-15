import Link from "next/link"
import { Mail } from "lucide-react"

const platformLinks = [
  { label: "Course Overview", href: "/course" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Login", href: "/login" },
]

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Results", href: "/about#results" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "#" },
]

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Refund Policy", href: "#" },
]

export default function Footer() {
  return (
    <footer
      className="border-t border-white/[0.06]"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-1 mb-4">
              <span className="text-[#F0F0F0] font-bold text-base">ZAKARIAN</span>
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "#C9A84C" }}
              />
              <span className="text-[#F0F0F0] font-bold text-base">GMAT</span>
            </Link>
            <p className="text-sm text-[#555555] leading-relaxed mb-6">
              Premium GMAT prep built by someone who solved the hard version. 565 → 735.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:adamzakaryan17@gmail.com"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-[#888888]" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-[#888888] text-xs font-bold"
                aria-label="Twitter"
              >
                𝕏
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-[#888888] text-xs font-bold"
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#555555] mb-4">
              Platform
            </h3>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#888888] hover:text-[#F0F0F0] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#555555] mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#888888] hover:text-[#F0F0F0] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#555555] mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#888888] hover:text-[#F0F0F0] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#555555]">
            © {new Date().getFullYear()} Zakarian GMAT. All rights reserved.
          </p>
          <p className="text-xs text-[#555555]">
            <a
              href="mailto:adamzakaryan17@gmail.com"
              className="hover:text-[#888888] transition-colors"
            >
              adamzakaryan17@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
