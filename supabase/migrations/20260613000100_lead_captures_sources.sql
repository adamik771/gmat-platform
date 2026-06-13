-- =============================================================================
-- lead_captures.source — widen the allowed-source CHECK to match the API route
--
-- The original CHECK (20260503000000_lead_captures.sql) admitted only
-- footer / free-diagnostic / blog-post / other, but src/app/api/lead-capture/
-- route.ts VALID_SOURCES accepts nine surfaces. Leads tagged homepage,
-- resources, score-converter, study-schedule, or score-by-school passed the
-- route's validation, failed this DB CHECK, and were silently swallowed (the
-- route returns ok even on insert failure). This aligns the constraint with
-- the route so marketing leads are actually persisted.
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
    'other'
  ));
