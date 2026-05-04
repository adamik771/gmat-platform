import type { MetadataRoute } from "next"

/**
 * PWA manifest. Renders at `/manifest.webmanifest` (Next.js convention)
 * and is referenced automatically from the document head.
 *
 * This is the foundation only — the icons referenced below are
 * placeholders. Drop real PNG icons into `public/icons/` (see paths) to
 * activate "Add to Home Screen" with proper branding. A favicon
 * generator (e.g. realfavicongenerator.net) can produce the full set.
 *
 * `display: "standalone"` makes the installed app open without browser
 * chrome — important for the "feels like a native app" experience the
 * offline review queue is meant to enable.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zakarian GMAT",
    short_name: "Zakarian GMAT",
    description:
      "GMAT Focus Edition prep — diagnostic-driven, mistake-driven, score-anchored.",
    start_url: "/dashboard",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0A0A0A",
    theme_color: "#C9A84C",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
