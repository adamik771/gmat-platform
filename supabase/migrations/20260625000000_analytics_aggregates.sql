-- =============================================================================
-- Analytics aggregates RPC — push the /analytics fan-out into Postgres
-- =============================================================================
--
-- Background: src/app/(app)/analytics/page.tsx fetched up to 20,000
-- practice_attempts rows over the wire on every page load and ran ~6 separate
-- JS passes over them (per-topic, pacing, per-difficulty timing, behaviour
-- patterns, readiness stats, confidence calibration buckets, baseline-unlock
-- signals). The dominant cost is transferring 20k rows; the aggregations
-- themselves collapse those rows to a few dozen groups.
--
-- This function does the GROUP BY work in the database and returns only the
-- compact per-group aggregates. The page keeps ALL of its existing thresholds,
-- rounding and sorting (it just shapes these groups instead of raw rows), so
-- the rendered numbers are unchanged.
--
-- SECURITY: this is SECURITY INVOKER (the default). It runs as the calling
-- user, so the existing practice_attempts / practice_sessions RLS policies
-- (auth.uid() = user_id, see 20260428000000_practice_rls.sql) apply — the
-- function can only ever see the caller's own rows. It takes NO user_id
-- argument precisely so a caller cannot ask for another user's data. Do not
-- change this to SECURITY DEFINER without re-adding an explicit auth.uid()
-- filter on every query below.
--
-- Idempotent: create or replace + a guarded grant. Safe to re-run.
-- =============================================================================

create or replace function public.get_analytics_aggregates()
returns jsonb
language sql
stable
security invoker
set search_path = public
as $$
  with
  -- All of the caller's attempts (RLS already scopes this to auth.uid()).
  -- The section filter mirrors the JS guard that ignores any row whose
  -- section is not one of the three live sections.
  att as (
    select
      a.section,
      coalesce(a.topic, 'Other')       as topic,
      coalesce(a.difficulty, 'Intermediate') as difficulty,
      a.is_correct,
      a.time_spent_ms,
      a.confidence,
      s.created_at as session_created_at
    from public.practice_attempts a
    left join public.practice_sessions s on s.id = a.session_id
    where a.section in ('Quant', 'Verbal', 'DI')
  ),
  -- Per-section average ms over "valid time" attempts (> 1000ms), used as the
  -- baseline for the behaviour-pattern ratio. Matches the JS sectionAvgMs.
  section_base as (
    select section, avg(time_spent_ms)::float8 as avg_ms
    from att
    where time_spent_ms > 1000
    group by section
  ),
  -- Behaviour-pattern classification: ratio of an attempt's time to its
  -- section baseline. <=0.7 fast, >=1.3 slow; combined with correctness.
  labelled as (
    select
      case
        when att.time_spent_ms / b.avg_ms <= 0.7 and att.is_correct then 'efficient'
        when att.time_spent_ms / b.avg_ms <= 0.7 and not att.is_correct then 'rushed'
        when att.time_spent_ms / b.avg_ms >= 1.3 and att.is_correct then 'labored'
        when att.time_spent_ms / b.avg_ms >= 1.3 and not att.is_correct then 'stuck'
        else null
      end as label
    from att
    join section_base b on b.section = att.section
    where att.time_spent_ms > 1000 and b.avg_ms > 0
  )
  select jsonb_build_object(
    -- has any attempt at all (drives the BaselineView vs full-analytics gate)
    'attempt_count', (select count(*) from att),

    -- Per (section, topic) accuracy. Page filters >= 5 attempts + sorts.
    'topic_stats', coalesce((
      select jsonb_agg(jsonb_build_object(
        'section', section, 'topic', topic,
        'total', total, 'correct', correct))
      from (
        select section, topic,
               count(*) as total,
               count(*) filter (where is_correct) as correct
        from att group by section, topic
      ) t
    ), '[]'::jsonb),

    -- Per-section time (valid-time only) for pacing + the behaviour baseline.
    'section_time', coalesce((
      select jsonb_agg(jsonb_build_object(
        'section', section, 'total_ms', total_ms, 'cnt', cnt))
      from (
        select section, sum(time_spent_ms)::float8 as total_ms, count(*) as cnt
        from att where time_spent_ms > 1000 group by section
      ) t
    ), '[]'::jsonb),

    -- Per (section, difficulty) timing + accuracy (valid-time only).
    'difficulty_time', coalesce((
      select jsonb_agg(jsonb_build_object(
        'section', section, 'difficulty', difficulty,
        'total_ms', total_ms, 'cnt', cnt, 'correct', correct))
      from (
        select section, difficulty,
               sum(time_spent_ms)::float8 as total_ms,
               count(*) as cnt,
               count(*) filter (where is_correct) as correct
        from att where time_spent_ms > 1000 group by section, difficulty
      ) t
    ), '[]'::jsonb),

    -- Per-section totals over ALL attempts (readiness gate + attempt counts).
    'section_totals', coalesce((
      select jsonb_agg(jsonb_build_object(
        'section', section, 'total', total, 'correct', correct))
      from (
        select section, count(*) as total,
               count(*) filter (where is_correct) as correct
        from att group by section
      ) t
    ), '[]'::jsonb),

    -- Confidence buckets for the practice side of calibration.
    'confidence_buckets', coalesce((
      select jsonb_agg(jsonb_build_object(
        'confidence', confidence, 'total', total, 'correct', correct))
      from (
        select confidence, count(*) as total,
               count(*) filter (where is_correct) as correct
        from att where confidence is not null group by confidence
      ) t
    ), '[]'::jsonb),

    'confidence_rated_count', (select count(*) from att where confidence is not null),

    -- Behaviour-pattern tallies.
    'error_patterns', jsonb_build_object(
      'efficient', (select count(*) from labelled where label = 'efficient'),
      'labored',   (select count(*) from labelled where label = 'labored'),
      'rushed',    (select count(*) from labelled where label = 'rushed'),
      'stuck',     (select count(*) from labelled where label = 'stuck')
    ),

    -- Distinct practice weeks (baseline-unlock signal). NOTE: this uses the
    -- ISO week in the database timezone; the legacy JS path bucketed by the
    -- viewer's LOCAL week, so a session within a day of a week boundary in a
    -- non-UTC timezone can land in an adjacent week. This only feeds the
    -- pre-data unlock checklist count, so the drift is immaterial.
    'week_count', (
      select count(distinct date_trunc('week', session_created_at))
      from att where session_created_at is not null
    )
  );
$$;

comment on function public.get_analytics_aggregates() is
  'Compact per-group analytics aggregates for the calling user (RLS-scoped via SECURITY INVOKER). Replaces a 20k-row practice_attempts fetch on /analytics.';

grant execute on function public.get_analytics_aggregates() to authenticated;
