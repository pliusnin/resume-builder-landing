#!/usr/bin/env bash
# Build the landing for production (base "/", VITE_SITE_URL from .env) and upload dist/ to /var/www/html.
#   deploy/deploy-landing.sh [ssh-host]
set -euo pipefail

HOST="${1:-resumint}"
REMOTE_DIR=/var/www/html

cd "$(dirname "$0")/.."

echo "→ building"
yarn -s build

echo "→ uploading dist/ to $HOST:$REMOTE_DIR"
rsync -az --delete dist/ "$HOST:$REMOTE_DIR/"

echo "→ smoke test"
ssh "$HOST" "curl -fsS -o /dev/null -w 'landing -> HTTP %{http_code}\n' -H 'Host: resumint.net' http://127.0.0.1/"
echo "✓ landing deployed"
