# Pixel / Tag Setup Checklist — Zakarian GMAT

Click-by-click to stand up the Meta Pixel and the Google Ads remarketing tag / GA4
audience, set the two env vars in Vercel, and verify events fire. The site already
forwards every funnel event to `fbq` and `gtag` automatically — once the IDs are set,
no code changes are needed.

Legend:
- **[SKIPPED_USER_ACTION]** = Adam must do this himself (external login, account,
  payment, or platform UI). Claude cannot and should not do it.
- **[VERIFY]** = a check step to confirm it worked.

Relevant facts:
- Pixel component: `src/components/analytics/AdPixels.tsx` — renders NOTHING until the
  env vars are present; `trackEvent` forwards events automatically once they are.
- Env vars (build-time, set in Vercel): `NEXT_PUBLIC_META_PIXEL_ID` (UNSET),
  `NEXT_PUBLIC_GOOGLE_TAG_ID` (UNSET; accepts a GA4 `G-...` OR Google Ads `AW-...`).
  `NEXT_PUBLIC_SITE_URL = https://www.zakariangmat.com` (already set).
- These are **build-time** vars: after setting them you must **redeploy** for them to
  take effect.

---

## PART A — Meta Pixel

### A1. Create the pixel
1. **[SKIPPED_USER_ACTION]** Log in to Meta Business / Events Manager
   (business.facebook.com > Events Manager).
2. **[SKIPPED_USER_ACTION]** Events Manager > **Connect data sources** > **Web** >
   **Meta Pixel** > **Connect**.
3. **[SKIPPED_USER_ACTION]** Name it "Zakarian GMAT" and enter site URL
   `https://www.zakariangmat.com`.
4. **[SKIPPED_USER_ACTION]** Choose **"Install code manually"** (do NOT use the
   partner integration / no need to paste base code — the app already renders the
   pixel via `AdPixels.tsx`; you only need the **Pixel ID**).
5. **[SKIPPED_USER_ACTION]** Copy the **Pixel ID** (a 15-16 digit number).

### A2. Set the env var in Vercel
6. **[SKIPPED_USER_ACTION]** Vercel > project **gmat-platform** > **Settings** >
   **Environment Variables**.
7. **[SKIPPED_USER_ACTION]** Add: Name `NEXT_PUBLIC_META_PIXEL_ID`, Value = the Pixel
   ID from step 5. Environment: **Production** (also Preview if you want to test on a
   preview URL). Save.
8. **[SKIPPED_USER_ACTION]** **Redeploy** production (Deployments > latest > Redeploy,
   or push a commit). Build-time var — it only applies on a fresh build.

### A3. Verify Meta is firing
9. **[SKIPPED_USER_ACTION]** Install the **Meta Pixel Helper** Chrome extension.
10. **[VERIFY]** Open `https://www.zakariangmat.com` in Chrome. Pixel Helper should
    show the pixel ID and a **PageView**. (This confirms `AdPixels.tsx` picked up the
    env var.)
11. **[VERIFY]** Trigger a real funnel event and confirm it forwards to `fbq`:
    - Visit a landing page (e.g. `/gmat-study-plan`) -> expect `landing_view`.
    - Submit a lead form -> expect `lead_captured` (forwarded as a Meta event).
    - In Events Manager > **Test Events**, paste the site URL, browse, and watch
      events arrive in real time.
12. **[VERIFY]** Confirm the standard-event mapping looks right in Test Events:
    `signup` should appear as **CompleteRegistration**, `checkout_initiated` as
    **InitiateCheckout** (dormant), `purchase_completed` as **Purchase** (dormant).
    See CONVERSION_EVENT_MAP.md for the full mapping.

### A4. Build the Custom Audiences (after the pixel is warm)
13. **[SKIPPED_USER_ACTION]** Events Manager / Audiences > **Create Audience** >
    **Custom Audience** > **Website**. Build A1-A6 per RETARGETING_AUDIENCES.md
    (include the event, exclude the converter event, set the recency window).
14. **[VERIFY]** Each audience shows a growing member count. **Do not attach to a live
    ad** until it clears the size gate and the traffic gate (see that doc).

---

## PART B — Google (Ads remarketing tag + GA4 audience)

You can use EITHER a GA4 `G-...` id OR a Google Ads `AW-...` id in
`NEXT_PUBLIC_GOOGLE_TAG_ID`. **Recommended:** use the **GA4** `G-...` id, link GA4 to
Google Ads, and build audiences in GA4 (cleaner, future-proof, and GA4 is the
remarketing source). Set ONE id.

### B1. Get a GA4 measurement ID (recommended path)
1. **[SKIPPED_USER_ACTION]** analytics.google.com > **Admin** > **Create property**
   (or use an existing one) named "Zakarian GMAT".
2. **[SKIPPED_USER_ACTION]** Admin > **Data streams** > **Add stream** > **Web** >
   URL `https://www.zakariangmat.com`, stream name "Web".
3. **[SKIPPED_USER_ACTION]** Copy the **Measurement ID** (`G-XXXXXXXXXX`).

### B1-alt. (If you'd rather use the Google Ads remarketing tag directly)
- **[SKIPPED_USER_ACTION]** Google Ads > **Tools** > **Shared library** >
  **Audience manager** > **Your data sources** > **Google Ads tag** > set up tag,
  copy the **Conversion/Remarketing ID** (`AW-XXXXXXXXX`). Use that as the env value
  instead of the `G-` id. (You can only put ONE value in the var; GA4 path is preferred.)

### B2. Set the env var in Vercel
4. **[SKIPPED_USER_ACTION]** Vercel > **gmat-platform** > Settings > Environment
   Variables. Add: Name `NEXT_PUBLIC_GOOGLE_TAG_ID`, Value = the `G-...` (or `AW-...`)
   id. Environment: **Production** (+ Preview optional). Save.
5. **[SKIPPED_USER_ACTION]** **Redeploy** production. Build-time var.

### B3. Verify Google is firing
6. **[SKIPPED_USER_ACTION]** Install the **Google Tag Assistant** (tagassistant.google.com)
   or use GA4 **DebugView**.
7. **[VERIFY]** Load `https://www.zakariangmat.com` — Tag Assistant should detect the
   tag and a `page_view`.
8. **[VERIFY]** In GA4 > **Admin** > **DebugView** (or Realtime), browse the site and
   confirm the forwarded events arrive: `landing_view`, `lead_captured`, `signup`,
   `founding_reserve`, `pricing_view`, `referral_click`.

### B4. Link GA4 to Google Ads + enable remarketing
9. **[SKIPPED_USER_ACTION]** GA4 > Admin > **Google Ads links** > **Link** your Google
   Ads account (enable personalized advertising / auto-tagging).
10. **[SKIPPED_USER_ACTION]** GA4 > Admin > **Data collection** > toggle ON **Google
    signals / personalized advertising data collection** (required for remarketing
    audiences to flow to Ads).

### B5. Build GA4 audiences (after the tag is collecting data)
11. **[SKIPPED_USER_ACTION]** GA4 > Admin > **Audiences** > **New audience** >
    **Create custom audience**. Build A1-A6 per RETARGETING_AUDIENCES.md
    (include condition = the event, exclude condition = the converter event, set
    membership duration = the recency window).
12. **[SKIPPED_USER_ACTION]** In **Google Ads** > Audience manager, confirm the GA4
    audiences appear under "Your data segments."
13. **[VERIFY]** Each audience shows **>= 100 active users** before it can serve on
    Display (RLSA Search lists need **>= 1,000**). Keep campaigns PAUSED until then.

### B6. Mark conversions (for optimization, not retargeting)
14. **[SKIPPED_USER_ACTION]** In GA4, mark `signup`, `lead_captured`,
    `founding_reserve` as **Key events**; import them into Google Ads as
    **conversions** to optimize toward (purchase is dormant). See CONVERSION_EVENT_MAP.md.

---

## PART C — Final verification matrix

| Check | Tool | Pass condition | Step |
|---|---|---|---|
| Meta pixel loads | Pixel Helper | PageView fires on homepage | A3.10 |
| Meta events forward | Test Events | landing_view / lead_captured / signup seen | A3.11-12 |
| Google tag loads | Tag Assistant | page_view fires | B3.7 |
| Google events forward | GA4 DebugView | landing_view / lead_captured / signup seen | B3.8 |
| Audiences populating | Meta / GA4 audiences | member counts climbing | A4.14 / B5.13 |
| Size gate | Meta / Google | Display >=100, RLSA >=1,000 | RETARGETING_AUDIENCES.md |

If any "events forward" check fails: the pixel ID/tag id is set but a build wasn't
redeployed (build-time var), OR the wrong id type was used. Re-check the env value and
redeploy. The forwarding code in `AdPixels.tsx` / `trackEvent` needs no edits.

> Reminder: setting these IDs only switches tracking ON. It does NOT start any ad
> spend. Keep all campaigns paused until the gate in RETARGETING_AUDIENCES.md is met.
