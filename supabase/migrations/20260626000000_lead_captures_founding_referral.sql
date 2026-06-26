-- =============================================================================
-- lead_captures — admit the launch funnel's founding-member + referral sources
--
-- The 30-day launch adds two new capture surfaces:
--   - founding-member: prospects reserving a locked-in founding discount while
--     the platform is free in beta (source 'founding-member',
--     lead_magnet 'founding-reservation').
--   - referral: prospects arriving from the /refer page (source 'referral').
--
-- src/app/api/lead-capture/route.ts VALID_SOURCES / VALID_MAGNETS already
-- accept these; without widening the CHECK constraints the inserts fail the DB
-- check and are silently swallowed (the route returns ok even on insert
-- failure), so founding reservations would be lost. This aligns the
-- constraints with the route. Run this in the Supabase SQL editor before the
-- launch outreach starts.
-- =============================================================================

alter table public.lead_captures drop constraint if exists lead_captures_source_check;
alter table public.lead_captures add constraint lead_captures_source_check
  check (source in (
    'footer',
    'homepage',
    'free-diagnostic',
    'blog-post',
    'resources',
    'score-converter',
    'study-schedule',
    'score-by-school',
    'founding-member',
    'referral',
    'other'
  ));

alter table public.lead_captures drop constraint if exists lead_captures_lead_magnet_check;
alter table public.lead_captures add constraint lead_captures_lead_magnet_check
  check (lead_magnet in (
    'error-log-template',
    'newsletter',
    'diagnostic-deeper-view',
    'founding-reservation'
  ));
