#!/usr/bin/env bash
# ينسخ ملفات الموقع إلى مجلد www الذي يغلّفه Capacitor، ومعها capacitor.js
set -euo pipefail
rm -rf www && mkdir -p www
cp index.html app.js sw.js manifest.webmanifest www/
cp -r icons fonts lib www/
cp node_modules/@capacitor/core/dist/capacitor.js www/capacitor.js
