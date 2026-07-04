#!/usr/bin/env bash
# Contributor tool — learners never touch this (zero-terminal promise).
#
# Builds the reference site and rsyncs the static output to the host.
# The site is fully static, so the server needs nothing but files.
#
# Usage:
#   DEPLOY_DEST="user@server.dreamhost.com:~/cdesktop.deanpeters.com/" ./scripts/deploy.sh
#
# Set DEPLOY_DEST to your Dreamhost SSH user, host, and the subdomain's
# web directory. Keep it out of the repo — it's an env var on purpose.

set -euo pipefail

cd "$(dirname "$0")/../website"

: "${DEPLOY_DEST:?Set DEPLOY_DEST to user@host:path for the subdomain web directory}"

npm run build
rsync -avz --delete dist/ "$DEPLOY_DEST"

echo "Deployed to $DEPLOY_DEST"
