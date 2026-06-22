import Script from "next/script"

/**
 * Ad-platform pixels (Meta Pixel + Google tag).
 *
 * Both are gated on a build-time env var and render NOTHING until you set it,
 * so this is safe to ship now and dormant until you actually run ads:
 *   - NEXT_PUBLIC_META_PIXEL_ID   — Meta (Facebook/Instagram) Pixel id
 *   - NEXT_PUBLIC_GOOGLE_TAG_ID   — a GA4 id ("G-…") or Google Ads id ("AW-…")
 *
 * Once loaded, conversion events flow automatically: lib/analytics.ts
 * `trackEvent` forwards every funnel event (signup, checkout_initiated,
 * purchase_completed) to `fbq` / `gtag`, so no call site changes are needed.
 *
 * For a Google Ads *conversion* (not just a GA4 event), create the conversion
 * action in Google Ads against the forwarded event name, or wire the specific
 * send_to label later — the base tag here is the prerequisite for either.
 *
 * Mounted once in the root layout.
 */
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID
const GOOGLE_TAG_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID

export default function AdPixels() {
  return (
    <>
      {META_PIXEL_ID && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      )}

      {GOOGLE_TAG_ID && (
        <>
          <Script
            id="google-tag-src"
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-tag-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_TAG_ID}');`}
          </Script>
        </>
      )}
    </>
  )
}
