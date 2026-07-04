#!/usr/bin/env bash
# Contributor tool — learners never touch this (zero-terminal promise).
#
# Builds the site on THIS machine, then copies the finished files to
# the web host. The server never builds anything; it only holds files.
#
# One-time setup (saves the server address so you never type it again):
#   echo "youruser@yourserver.dreamhost.com:~/cdesktop.deanpeters.com/" > scripts/.deploy-destination
#
# Every deploy after that is just:
#   ./scripts/deploy.sh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
DEST_FILE="$SCRIPT_DIR/.deploy-destination"

# Address comes from the saved file, or a DEPLOY_DEST env var if you prefer.
if [[ -z "${DEPLOY_DEST:-}" && -f "$DEST_FILE" ]]; then
  DEPLOY_DEST="$(head -n1 "$DEST_FILE")"
fi

if [[ -z "${DEPLOY_DEST:-}" ]]; then
  echo "No destination set. One-time setup:"
  echo '  echo "youruser@yourserver.dreamhost.com:~/cdesktop.deanpeters.com/" > scripts/.deploy-destination'
  exit 1
fi

cd "$SCRIPT_DIR/../website"
npm run build
rsync -avz --delete dist/ "$DEPLOY_DEST"

echo "Deployed to $DEPLOY_DEST"
