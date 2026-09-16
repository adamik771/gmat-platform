# UTM Template — Google Ads

This defines the exact tracking parameters appended to every Final URL in the campaign, and how they flow into the site's first-touch attribution.

## 1. Fixed scheme

Every Google Ads Final URL uses:

| Parameter | Value | Source |
|-----------|-------|--------|
| `utm_source` | `google` | fixed |
| `utm_medium` | `cpc` | fixed |
| `utm_campaign` | `zg-search-launch` | fixed (matches campaign `ZG-Search-Launch`, lowercased) |
| `utm_content` | the ad group, e.g. `ag-study-plan` | per ad group |
| `utm_term` | `{keyword}` | ValueTrack — Google fills the matched keyword |
| `gclid` | (auto) | Google appends automatically; powers conversion import |

Plus two ValueTrack params kept in a separate set of custom parameters for reporting (optional but recommended):
- `campaignid={campaignid}`
- `keyword={keyword}`

### How to enter this in Google Ads (do it ONCE, at campaign level)

Use **Account/Campaign settings -> Tracking template** so you never hand-edit each ad. Set the **campaign-level Final URL suffix** (preferred over tracking template because it survives auto-tagging and does not require redirect verification):

**Final URL suffix (campaign level):**
```
utm_source=google&utm_medium=cpc&utm_campaign=zg-search-launch&utm_content={_adgroup}&utm_term={keyword}
```

Because `utm_content` cannot read the ad group name from a built-in ValueTrack token, set a **custom parameter** `{_adgroup}` per ad group:
- In each ad group, add custom parameter: name `adgroup`, value = that ad group's slug (e.g. `ag-study-plan`). Then reference `{_adgroup}` in the suffix above.
- Simpler alternative if custom params feel fiddly: set the Final URL suffix at the **ad-group level** with `utm_content` hardcoded to that ad group's slug. Six ad groups = six suffixes. This is the most reliable approach.

Leave **auto-tagging (gclid) ON** — it is required for clean conversion import from GA4 / Google Ads and does not conflict with the UTMs.

## 2. Per-ad-group `utm_content` values

| Ad Group | utm_content |
|----------|-------------|
| AG-Study-Plan | `ag-study-plan` |
| AG-Error-Log-Template | `ag-error-log-template` |
| AG-Mock-Review | `ag-mock-review` |
| AG-Data-Insights | `ag-data-insights` |
| AG-Quant-Practice | `ag-quant-practice` |
| AG-Prep-Platform | `ag-prep-platform` |

## 3. Full example Final URLs (paste-ready)

These show the live page + UTMs with `utm_content` hardcoded per ad group (the reliable approach). `{keyword}` is left as a ValueTrack token for Google to fill at click time.

**Study plan ad group:**
```
https://www.zakariangmat.com/gmat-study-plan?utm_source=google&utm_medium=cpc&utm_campaign=zg-search-launch&utm_content=ag-study-plan&utm_term={keyword}
```

**Error log template ad group (highest intent):**
```
https://www.zakariangmat.com/error-log-template?utm_source=google&utm_medium=cpc&utm_campaign=zg-search-launch&utm_content=ag-error-log-template&utm_term={keyword}
```

**Mock review ad group:**
```
https://www.zakariangmat.com/gmat-mock-review?utm_source=google&utm_medium=cpc&utm_campaign=zg-search-launch&utm_content=ag-mock-review&utm_term={keyword}
```

**Prep platform / free trial ad group:**
```
https://www.zakariangmat.com/gmat-free-trial?utm_source=google&utm_medium=cpc&utm_campaign=zg-search-launch&utm_content=ag-prep-platform&utm_term={keyword}
```

(Data Insights and Quant follow the same pattern: page = the live URL from LANDING_PAGE_MAP.md, `utm_content` = `ag-data-insights` / `ag-quant-practice`.)

## 4. How this flows into the site's attribution

- On the FIRST visit, the site reads `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, and `ref` from the URL and stores them once in `localStorage` under key **`zg_attribution`** (first-touch — it is not overwritten on later visits).
- Every funnel event (`landing_view`, `lead_captured`, `signup_initiated`, `signup`, `founding_reserve`, `referral_click`, etc.) automatically merges `zg_attribution` into its payload. No code change is needed.
- So a Google-Ads-sourced `lead_captured` or `signup` carries `utm_source=google`, `utm_medium=cpc`, `utm_campaign=zg-search-launch`, and the originating `utm_content` ad group — letting you attribute conversions back to the exact ad group (and, via `utm_term`/`gclid`, the keyword) in your own analytics, independent of Google's reporting.
- The `gclid` (from auto-tagging) is what Google Ads itself uses to import conversions from GA4 / its own tag. The UTMs are for YOUR first-party attribution. Both run in parallel; keep both.

## 5. Consistency rules

- `utm_campaign` is always `zg-search-launch`. If you later clone the campaign (e.g. a brand campaign), give it a distinct slug.
- `utm_content` always equals the ad-group slug in the table above — this is what ties a conversion to an ad group inside `zg_attribution`.
- Do not put PII or ad text in UTMs.
