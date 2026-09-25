#!/usr/bin/env bash
# usage: img.sh <channel> <message_id> <outdir>   -> extracts that message's attachments, prints paths
set -eu
ch=$1; id=$2; out=$3; mkdir -p "$out"
B=/home/agent/work/turtle-discord
grep -m1 "\"id\": \"$id\"" "$B/norm/$ch/messages.jsonl" | python3 -c "import json,sys;[print(a) for a in json.loads(sys.stdin.read())['attachments']]" | while read -r a; do
  f="$out/${id}-$(basename "$a")"
  unzip -p "$B/zips/$ch.zip" "$ch/$a" > "$f" 2>/dev/null || true
  if [ -s "$f" ] && file "$f" | grep -qiE 'image|PNG|JPEG|GIF|WebP'; then
     case "$f" in *.png|*.jpg|*.jpeg|*.gif|*.webp) ;; *) t=$(file -b --mime-type "$f"|cut -d/ -f2); mv "$f" "$f.$t"; f="$f.$t";; esac
     echo "$f"
  else rm -f "$f"; fi
done
