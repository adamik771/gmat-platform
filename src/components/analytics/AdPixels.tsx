"use client"

import { useSyncExternalStore } from "react"
import Script from "next/script"
import { getConsent, subscribeConsent } from "@/lib/analytics"

/**
 * Ad-platform pixels (Meta Pixel + Google tag), consent-gated.
 *
 * Both are gated twice:
 *   1. Build-time env vars — nothing renders until these are set:
 *      NEXT_PUBLIC_META_PIXEL_ID / NEXT_PUBLIC_GOOGLE_TAG_ID.
 *   2. Explicit visitor consent (ConsentBanner) — basic Consent Mode v2:
 *      NO Google/Meta script loads until the choice is "granted", so a
 *      visitor who rejects (or never answers) sends nothing to either
 *      platform. When granted, the Google snippet still sets the four
 *      Consent Mode v2 defaults to denied BEFORE `config` (the ordering
 *      Google's consent guide requires), then applies the granted update.
 *
 * Once loaded, conversion events flow automatically: lib/analytics.ts
 * `trackEvent` forwards funnel events to `fbq` / `gtag` (also consent-
 * guarded, so a same-page withdrawal stops them immediately).
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
  // Server snapshot is null (= no choice), so nothing consent-gated renders
  // on SSR; the store re-syncs on the client and on every setConsent.
  const consent = useSyncExternalStore(subscribeConsent, getConsent, () => null)

  if (consent !== "granted") return null

  return (
    <>
      {META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('consent', 'grant');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
        </Script>
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
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied'
});
gtag('consent', 'update', {
  'ad_storage': 'granted',
  'ad_user_data': 'granted',
  'ad_personalization': 'granted',
  'analytics_storage': 'granted'
});
gtag('js', new Date());
gtag('config', '${GOOGLE_TAG_ID}');`}
          </Script>
        </>
      )}
    </>
  )
}
