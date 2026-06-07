#!/usr/bin/env bash
# Vercel "Ignored Build Step" — skip preview deploys for every branch
# except the production branch (main), so routine agent-branch pushes
# (claude/*) don't burn the daily Vercel deployment cap.
#
# Vercel runs this from the repo root before each build. The convention
# is exit code 1 = proceed with the build, exit code 0 = skip it. Wire
# this up once in the Vercel dashboard:
#
#   Project -> Settings -> Git -> Ignored Build Step
#   Command:  bash ./scripts/vercel-ignore.sh
#
# After that the logic lives in this file, version-controlled.

set -eu

BRANCH="${VERCEL_GIT_COMMIT_REF:-}"

# If we can't read the branch (e.g. local invocation outside Vercel),
# default to building — safer to over-build than silently skip a real
# deploy.
if [ -z "$BRANCH" ]; then
  echo "vercel-ignore: VERCEL_GIT_COMMIT_REF unset — proceeding with build"
  exit 1
fi

if [ "$BRANCH" = "main" ]; then
  echo "vercel-ignore: branch=$BRANCH — proceeding with build"
  exit 1
fi

echo "vercel-ignore: branch=$BRANCH — skipping preview deploy"
exit 0
