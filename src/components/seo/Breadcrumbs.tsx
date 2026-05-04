import Link from "next/link"
import { ChevronRight } from "lucide-react"
import JsonLd from "@/components/seo/JsonLd"
import { breadcrumbLd } from "@/lib/structured-data"

export interface BreadcrumbItem {
  /** Display label for the breadcrumb. */
  label: string
  /** Path the breadcrumb points to. The leaf item's path is the current page. */
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

/**
 * Visible breadcrumb trail + matching BreadcrumbList JSON-LD.
 *
 * Render at the top of any page that has a parent context — e.g.
 * blog posts (Home / Blog / [post]), sample chapters (Home / Sample
 * chapter / [chapter]). The leaf item is rendered as plain text
 * since it represents the current page.
 */
export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length === 0) return null

  return (
    <>
      <JsonLd
        data={breadcrumbLd(
          items.map((i) => ({ name: i.label, path: i.href })),
        )}
      />
      <nav
        aria-label="Breadcrumb"
        className="text-[12px] text-[#888888] mb-6"
      >
        <ol className="flex items-center gap-1.5 flex-wrap">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {idx > 0 && (
                  <ChevronRight
                    className="w-3 h-3 text-[#444444]"
                    aria-hidden
                  />
                )}
                {isLast ? (
                  <span
                    aria-current="page"
                    className="text-[#C0C0C0]"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-[#F0F0F0] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
