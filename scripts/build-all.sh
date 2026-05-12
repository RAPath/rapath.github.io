#!/usr/bin/env bash
set -e

echo "Building all RAPath sites..."

SITES=(hub au eu hc sg uk us jp swiss cn in kr br my id vt ru)
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DIST="$ROOT_DIR/dist"

rm -rf "$DIST"
mkdir -p "$DIST"

for site in "${SITES[@]}"; do
  echo "▶ Building $site..."
  npm run build --workspace="sites/$site"
done

echo "Merging build outputs into dist/..."

# Hub goes to root
cp -r "$ROOT_DIR/sites/hub/build/." "$DIST/"

# All other sites go into subfolders
for site in au eu hc sg uk us jp swiss cn in kr br my id vt ru; do
  mkdir -p "$DIST/$site"
  cp -r "$ROOT_DIR/sites/$site/build/." "$DIST/$site/"
done

echo "Done. Output → dist/"
echo "Site count: $(ls "$DIST" | wc -l) top-level entries"
