-- =============================================================================
-- Consolidated migration batch: waves 8, 17, 23, 28, 34, 43
-- Generated: 2026-04-21
--
-- This file batches the 6 ALTER TABLE migrations that accumulated across
-- uncommitted waves. It is idempotent and safe to re-run -- every ADD COLUMN
-- uses IF NOT EXISTS, and the CHECK-constraint widening guards the DROP
-- with IF EXISTS.
--
-- Logical order (so constraints never conflict):
--   1. wave 8  -- practice_attempts: first_interaction_ms + device_type
--   2. wave 28 -- practice_attempts: confidence + hints_revealed
--   3. wave 17 -- error_tags: contributing_causes text[] (<=2 items)
--   4. wave 23 -- error_tags: root_cause text
--   5. wave 34 -- error_tags: widen tag CHECK constraint for 14-tag taxonomy
--   6. wave 43 -- error_tags: remediation_assigned_at + remediation_completed_at
--
-- Waves 8 + 28 target practice_attempts; 17, 23, 34, 43 target error_tags.
-- Column ADDs run before CHECK-constraint widening so no write can hit a
-- stale constraint while new columns are being created.
-- =============================================================================


-- -----------------------------------------------------------------------------
-- Wave 8 -- practice_attempts: first_interaction_ms + device_type
-- Captures time-to-first-interaction (ms since question shown) and the
-- session's device bucket (desktop/tablet/mobile) for pacing analytics.
-- -----------------------------------------------------------------------------
alter table public.practice_attempts
  add column if not exists first_interaction_ms integer
    check (first_interaction_ms is null or first_interaction_ms >= 0),
  add column if not exists device_type text
    check (device_type is null or device_type in ('desktop','tablet','mobile'));


-- -----------------------------------------------------------------------------
-- Wave 28 -- practice_attempts: confidence + hints_revealed
-- Confidence-before-submit tier and count of progressive hints surfaced
-- during the attempt. Both fields are always written by the API (undefined
-- coerces to null / 0) so the columns must exist before the new code ships.
-- -----------------------------------------------------------------------------
alter table public.practice_attempts
  add column if not exists confidence text
    check (confidence is null or confidence in ('low','medium','high')),
  add column if not exists hints_revealed integer not null default 0
    check (hints_revealed >= 0);


-- -----------------------------------------------------------------------------
-- Wave 17 -- error_tags: contributing_causes text[] (up to 2 items)
-- Up to 2 secondary root-cause codes alongside the primary root_cause.
-- Constraint enforces both the vocabulary (subset of the 12 root-cause codes)
-- and the cap (<= 2 items).
-- -----------------------------------------------------------------------------
alter table public.error_tags
  add column if not exists contributing_causes text[] not null default '{}'
    check (
      contributing_causes <@ array[
        'K1','K2','R1','R2','S1','S2','E1','E2','P1','P2','J1','F1'
      ]
      and coalesce(array_length(contributing_causes, 1), 0) <= 2
    );


-- -----------------------------------------------------------------------------
-- Wave 23 -- error_tags: root_cause text
-- Primary root-cause code per tagged mistake. 12-code vocabulary covering the
-- K/R/S/E/P/J/F families from the research-report framework.
-- -----------------------------------------------------------------------------
alter table public.error_tags
  add column if not exists root_cause text
    check (root_cause is null or root_cause in (
      'K1','K2','R1','R2','S1','S2','E1','E2','P1','P2','J1','F1'
    ));


-- -----------------------------------------------------------------------------
-- Wave 34 -- error_tags: widen tag CHECK constraint for 14-tag taxonomy
-- Drops the old 6-value CHECK and re-creates it with the 14 framework tags
-- plus the 6 legacy tags (so pre-existing rows keep validating). Drop is
-- guarded with IF EXISTS so re-runs are safe. Add is wrapped in a DO block
-- that swallows the "already exists" duplicate_object to guarantee
-- re-runnability even if the constraint was added by an out-of-band apply.
-- -----------------------------------------------------------------------------
alter table public.error_tags drop constraint if exists error_tags_tag_check;

do $$
begin
  alter table public.error_tags add constraint error_tags_tag_check
    check (tag is null or tag in (
      -- Framework taxonomy (14 new tags):
      'Q_CONCEPT','Q_SETUP','DS_SUFF','CR_SCOPE','RC_STRUCTURE','MSR_MAP',
      'TA_FILTER','GI_UNITS','TPA_LINK','CALC_SLIP','TIME_SINK','REVIEW_EDIT',
      'FATIGUE_DROP','OVERCONF',
      -- Legacy tags -- keep valid so existing rows don't violate the constraint.
      -- Drop these once the legacy rows have been re-tagged or cleared.
      'Conceptual','Careless','Time Pressure','Misread','Strategy','Other'
    ));
exception
  when duplicate_object then null;
end
$$;


-- -----------------------------------------------------------------------------
-- Wave 43 -- error_tags: remediation_assigned_at + remediation_completed_at
-- Per-mistake remediation tracking. Student cycles a row unassigned ->
-- in-progress (assigned_at stamped) -> completed (completed_at stamped) ->
-- unassigned (both cleared). The CHECK constraint prevents "complete without
-- assign" at the DB layer; the API validates the same rule for a clean 400.
-- -----------------------------------------------------------------------------
alter table public.error_tags
  add column if not exists remediation_assigned_at timestamptz null,
  add column if not exists remediation_completed_at timestamptz null;

alter table public.error_tags drop constraint if exists error_tags_remediation_order;

do $$
begin
  alter table public.error_tags add constraint error_tags_remediation_order
    check (
      remediation_completed_at is null
      or remediation_assigned_at is not null
    );
exception
  when duplicate_object then null;
end
$$;
