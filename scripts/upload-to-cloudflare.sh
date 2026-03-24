#!/bin/bash
# Upload images to Cloudflare Images
# Usage: ./scripts/upload-to-cloudflare.sh [image_path] [image_name]
# Or: ./scripts/upload-to-cloudflare.sh --all (upload all from src/assets/upload/)

source .env

API_URL="https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/images/v1"
DELIVERY_URL="https://imagedelivery.net/${CLOUDFLARE_ACCOUNT_HASH}"

upload_image() {
  local file=$1
  local name=$2

  if [ -z "$name" ]; then
    name=$(basename "$file" | sed 's/\.[^.]*$//')
  fi

  echo "Uploading: $file as $name..."

  response=$(curl -s -X POST "$API_URL" \
    -H "Authorization: Bearer ${CLOUDFLARE_IMAGES_API_KEY}" \
    -F "file=@$file" \
    -F "id=$name")

  success=$(echo "$response" | python3 -c "import sys,json; print(json.load(sys.stdin).get('success', False))" 2>/dev/null)

  if [ "$success" = "True" ]; then
    image_id=$(echo "$response" | python3 -c "import sys,json; print(json.load(sys.stdin)['result']['id'])" 2>/dev/null)
    echo "✅ Uploaded: ${DELIVERY_URL}/${image_id}/public"
  else
    error=$(echo "$response" | python3 -c "import sys,json; errors=json.load(sys.stdin).get('errors',[]); print(errors[0]['message'] if errors else 'Unknown')" 2>/dev/null)
    echo "❌ Failed: $error"
  fi
}

if [ "$1" = "--all" ]; then
  dir="${2:-src/assets/upload}"
  echo "=== Uploading all images from $dir ==="
  for f in "$dir"/*.{jpg,jpeg,png,webp} 2>/dev/null; do
    [ -f "$f" ] && upload_image "$f"
  done
  echo "=== Done ==="
elif [ -n "$1" ]; then
  upload_image "$1" "$2"
else
  echo "Usage:"
  echo "  ./scripts/upload-to-cloudflare.sh image.jpg [name]"
  echo "  ./scripts/upload-to-cloudflare.sh --all [directory]"
fi
