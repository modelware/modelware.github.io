#!/usr/bin/env bash
# Renders each event flyer and banner page into the PDF and JPG the site links to, so they
# always match the event page's `event:` front matter.
#
#   scripts/render-flyer.sh [site_dir]
#
# With no argument it makes a production build into a temporary folder (so the QR code and
# address carry www.modelware.io, not localhost) and writes the results into assets/ for
# committing. The deploy passes _site instead, and the rendered files replace the ones there.
set -euo pipefail

cd "$(dirname "$0")/.."
FLYERS=(
  # page                                        PDF (- for none)                             JPG
  "research/events/onto-nexus-forum-2027-flyer  assets/events/onto-nexus-forum-2027-flyer.pdf assets/images/events/onto-nexus-forum-2027-flyer.jpg"
  "research/events/onto-nexus-forum-2027-banner -                                             assets/images/events/onto-nexus-forum-2027-banner.jpg"
)

if [[ $# -ge 1 ]]; then
  SITE="$1"; OUT="$1"
else
  SITE="$(mktemp -d)"; OUT="."
  JEKYLL_ENV=production bundle exec jekyll build -q -d "$SITE"
fi

CHROME="${CHROME:-}"
for c in google-chrome google-chrome-stable chromium chromium-browser \
         "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"; do
  [[ -n "$CHROME" ]] && break
  if command -v "$c" >/dev/null 2>&1 || [[ -x "$c" ]]; then CHROME="$c"; fi
done
[[ -n "$CHROME" ]] || { echo "render-flyer: no Chrome or Chromium found (set CHROME)" >&2; exit 1; }

PORT="${PORT:-4517}"
python3 -m http.server "$PORT" --bind 127.0.0.1 --directory "$SITE" >/dev/null 2>&1 &
SERVER=$!
trap 'kill $SERVER 2>/dev/null || true' EXIT
for _ in $(seq 1 50); do curl -s -o /dev/null "http://127.0.0.1:$PORT/" && break; sleep 0.1; done

for entry in "${FLYERS[@]}"; do
  read -r page pdf jpg <<<"$entry"
  url="http://127.0.0.1:$PORT/$page.html"
  # Render only a page that is there: a missing one (unpublished, say) is skipped, never
  # printed as the 404 page over the real flyer.
  status="$(curl -s -o /dev/null -w '%{http_code}' "$url")"
  if [[ "$status" != "200" ]]; then echo "render-flyer: skipping $page ($status)" >&2; continue; fi
  # The page's own viewport meta gives the capture size (1080 x 1350, or 1600 x 900).
  size="$(curl -s "$url" | sed -n 's/.*name="viewport" content="width=\([0-9]*\)".*/\1/p' | head -1)"
  case "$size" in 1600) window=1600,900 ;; *) window=1080,1350 ;; esac
  mkdir -p "$OUT/$(dirname "$jpg")"
  # The budget gives the web fonts and the QR script time to finish before capture.
  if [[ "$pdf" != "-" ]]; then
    mkdir -p "$OUT/$(dirname "$pdf")"
    "$CHROME" --headless=new --disable-gpu --hide-scrollbars --no-sandbox --force-device-scale-factor=1 \
      --virtual-time-budget=8000 --no-pdf-header-footer --print-to-pdf="$OUT/$pdf" "$url" 2>/dev/null
  fi
  # Chrome picks the screenshot format from the extension, so the JPG needs no converter.
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --no-sandbox --force-device-scale-factor=1 \
    --window-size="$window" --virtual-time-budget=8000 --screenshot="$OUT/$jpg" "$url" 2>/dev/null
  echo "render-flyer: $page -> $pdf, $jpg ($window)"
done
