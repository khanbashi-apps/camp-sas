#!/usr/bin/env bash
# يبني APK لكامب ساس يثبّت مباشرة على أندرويد
set -euo pipefail
VER="${VER:-1.0}"
echo "== أدوات" ; node -v ; java -version 2>&1 | head -1
npm install --no-audit --no-fund
bash scripts/prepare-www.sh
npx cap add android
M=android/app/src/main/AndroidManifest.xml
grep -q 'POST_NOTIFICATIONS' "$M" || sed -i 's#</manifest>#    <uses-permission android:name="android.permission.POST_NOTIFICATIONS" />\n</manifest>#' "$M"
npx @capacitor/assets generate --android --iconBackgroundColor '#FFFFFF' --splashBackgroundColor '#F5F3F0' --splashBackgroundColorDark '#111418' || echo "!! تعذّر توليد الأيقونات، سيستمر البناء بالأيقونة الافتراضية"
npx cap sync android
G=android/app/build.gradle
sed -i "s/versionName \"[^\"]*\"/versionName \"$VER\"/" "$G" || true
sed -i "s/versionCode [0-9]*/versionCode ${GITHUB_RUN_NUMBER:-1}/" "$G" || true
if [ -n "${ANDROID_HOME:-}" ] && [ -x "$ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager" ]; then yes | "$ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager" --licenses > /dev/null || true; fi
cd android && chmod +x gradlew && ./gradlew assembleDebug --no-daemon --stacktrace --warning-mode none
mkdir -p ../out && cp app/build/outputs/apk/debug/app-debug.apk "../out/CampSAS-v$VER.apk"
ls -la ../out
