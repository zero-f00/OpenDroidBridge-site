const translations = {
  ja: {
    "common.nav.aria": "メインナビゲーション",
    "common.nav.features": "機能",
    "common.nav.requirements": "必要環境",
    "common.nav.support": "サポート",
    "common.nav.privacy": "プライバシー",
    "common.nav.overview": "概要",
    "common.lang.aria": "表示言語",
    "common.footer.copyright": "Copyright 2026 Yuto Masamura",
    "common.footer.marketing": "Marketing",
    "common.footer.support": "Support",
    "common.footer.privacy": "Privacy",

    "home.title": "OpenDroidBridge - MacからAndroidとMeta Questへ安全にファイル転送",
    "home.description": "OpenDroidBridgeは、MacからAndroid端末やMeta QuestへUSB経由で安全にファイル転送するmacOSアプリです。復元できる削除、同名ファイル保護、スクリーンショット保存に対応します。",
    "home.og.description": "MacからAndroidとMeta Questへ、安全にファイル転送。",
    "home.hero.eyebrow": "macOS file transfer for Android-based devices",
    "home.hero.lead": "MacからAndroid端末やMeta Questへ、必要なファイルを安全に移動。USB接続、復元できる削除、同名ファイル保護、スクリーンショット保存まで一つにまとめます。",
    "home.hero.primary": "使い始める",
    "home.hero.secondary": "接続手順を見る",
    "home.hero.facts.aria": "主な対応",
    "home.core.eyebrow": "Core workflow",
    "home.core.title": "ファイル転送で怖いところを、最初から見える形に。",
    "home.core.lead": "端末の状態、現在の場所、空き容量、操作リスクを確認しながら、Macへ保存・端末へ追加・新規フォルダ作成を進められます。",
    "home.card.find.title": "見つける",
    "home.card.find.body": "DCIM、Pictures、Movies、Download、Quest録画など、よく使う場所へすばやく移動できます。",
    "home.card.transfer.title": "転送する",
    "home.card.transfer.body": "選択したファイルやフォルダをMacへ保存。Macから端末側フォルダへドラッグして追加できます。",
    "home.card.recover.title": "戻せる",
    "home.card.recover.body": "削除や上書き前の項目を復元エリアへ残し、誤操作に気づいたあとでも確認し直せます。",
    "home.quest.eyebrow": "Real device preview",
    "home.quest.title": "Questの録画やスクリーンショットも、Mac側から整理。",
    "home.quest.item1": "接続中のAndroid端末とMeta Questを並べて表示",
    "home.quest.item2": "Quest向けのOculusフォルダ、録画フォルダへショートカット",
    "home.quest.item3": "端末ストレージの空き容量と現在のパスを常に表示",
    "home.quest.item4": "USBデバッグ未許可やオフライン状態も診断しやすい表示",
    "home.safety.eyebrow": "Safety model",
    "home.safety.title": "置き換えも削除も、いきなり消さない。",
    "home.safety.lead": "同名ファイルを送るときは、置き換える・両方残す・スキップを選択。置き換え前の項目や削除した項目は、復元できる場所から確認できます。",
    "home.safety.callout.title": "App Store向けの説明にもそのまま使える設計です。",
    "home.safety.callout.body": "OpenDroidBridgeは、端末内ファイル操作をユーザーの明示的な操作として扱い、復元できる処理を既定にしています。",
    "home.display.eyebrow": "Quest diagnostics",
    "home.display.title": "Quest接続の確認とスナップショット取得にも対応。",
    "home.display.lead": "Quest Display画面では、ADB接続、Quest画面スナップショット、実機情報、ADB forwardの準備状態を確認できます。",
    "home.display.note": "VR空間への映像表示やQuest側受信アプリは別機能です。サイトでは、現在のアプリで実際に提供している診断機能として表現しています。",
    "home.requirements.eyebrow": "Requirements",
    "home.requirements.title": "必要環境",
    "home.requirements.mac.title": "Mac",
    "home.requirements.mac.body": "macOS 14以降。App Store配布版ではサンドボックス環境で動作します。",
    "home.requirements.device.title": "Android / Meta Quest",
    "home.requirements.device.body": "開発者向けオプションとUSBデバッグを有効化したAndroid端末、または開発者モードを有効化したMeta Quest。",
    "home.requirements.adb.title": "ADB",
    "home.requirements.adb.body": "Android platform-toolsに含まれるadbが必要です。Android Studioを入れている場合は通常同梱されています。",
    "home.img.quest.alt": "Quest 3Sを選択したOpenDroidBridgeのファイルブラウザ画面",
    "home.img.pixel.alt": "Pixel 6aを選択したOpenDroidBridgeのファイルブラウザ画面",
    "home.img.display.alt": "OpenDroidBridgeのQuest Display診断画面",

    "support.title": "サポート - OpenDroidBridge",
    "support.description": "OpenDroidBridgeのサポートページです。Android端末やMeta QuestのUSB接続、ADB、USBデバッグ、ファイル転送に関するよくある質問を掲載しています。",
    "support.hero.eyebrow": "Support",
    "support.hero.title": "OpenDroidBridge サポート",
    "support.hero.lead": "接続できない、端末が表示されない、ファイルを保存できないときは、このページの手順を順番に確認してください。",
    "support.mail": "メールで問い合わせる",
    "support.privacy": "プライバシーポリシー",
    "support.note.title": "問い合わせ時にあると助かる情報",
    "support.note.body": "MacのOSバージョン、端末名、接続状態、表示されたエラーメッセージ、再スキャン後の状態を添えてください。",
    "support.faq.start.title": "最初に確認すること",
    "support.faq.start.body": "macOS 14以降、Android platform-toolsのadb、USBデータ転送対応ケーブル、端末側のUSBデバッグ許可が必要です。端末をロック解除し、表示されたUSBデバッグ許可ダイアログを承認してから、OpenDroidBridgeの再スキャンを押してください。",
    "support.faq.android.title": "Android端末が表示されない",
    "support.faq.android.body": "USBケーブルを抜き差しし、充電専用ケーブルではないことを確認してください。Androidの開発者向けオプションでUSBデバッグを有効にし、接続時に表示される「このパソコンからのUSBデバッグを許可」を承認します。",
    "support.faq.quest.title": "Meta Questが表示されない",
    "support.faq.quest.body": "Meta Horizonアプリで開発者モードを有効化し、Questを装着した状態でUSBデバッグ許可ダイアログを確認してください。通常のメディアアクセスには、Quest側でUSBファイルアクセスの許可も必要です。",
    "support.faq.unauthorized.title": "unauthorized と表示される",
    "support.faq.unauthorized.body": "Mac側から端末は見えていますが、端末側でADB接続が許可されていません。端末の画面を確認し、USBデバッグ許可を承認してください。ダイアログが出ない場合は、USBデバッグを一度オフにしてから再度オンにします。",
    "support.faq.files.title": "ファイルを開けない、保存できない",
    "support.faq.files.body": "Androidのアプリ内部データや一部のシステム領域は、端末側の権限によりアクセスできないことがあります。OpenDroidBridgeは権限を回避するアプリではありません。写真、動画、Download、Documentsなどの共有ストレージから操作してください。",
    "support.faq.restore.title": "削除したファイルを戻したい",
    "support.faq.restore.body": "OpenDroidBridgeの削除は、通常は復元エリアへ移動します。サイドバーの「復元できる項目」から、削除した項目や置き換え前の項目を確認し、必要に応じて元の場所または選択した場所へ戻してください。",

    "privacy.title": "プライバシーポリシー - OpenDroidBridge",
    "privacy.description": "OpenDroidBridgeのプライバシーポリシーです。アプリが扱う端末情報、ファイル、任意のAI連携、問い合わせ情報について説明します。",
    "privacy.hero.eyebrow": "Privacy Policy",
    "privacy.hero.title": "プライバシーポリシー",
    "privacy.hero.lead": "OpenDroidBridgeは、Mac上でAndroid端末やMeta Questとのファイル転送を行うユーティリティです。このページでは、アプリが扱う情報と、その扱い方を説明します。",
    "privacy.updated.title": "最終更新日",
    "privacy.updated.body": "2026年5月3日",
    "privacy.collect.title": "収集する情報",
    "privacy.collect.body": "OpenDroidBridgeの通常利用において、開発者はユーザーのファイル、端末内データ、端末ID、閲覧履歴を収集しません。アプリはMac上で動作し、ユーザーが選択した端末やファイルに対してローカルに操作を行います。",
    "privacy.device.title": "端末情報とファイル",
    "privacy.device.body": "アプリは、接続中の端末名、接続状態、端末内パス、ファイル名、サイズ、更新日、権限情報などを表示します。これらはファイル転送、検索、復元、接続診断のためにMac上で利用されます。",
    "privacy.transfer.title": "ファイル転送",
    "privacy.transfer.body": "Macへ保存、端末へ追加、スクリーンショット保存、復元エリアへの移動などの操作は、ユーザーの明示的な操作によって実行されます。OpenDroidBridgeは、これらのファイルを開発者のサーバーへ送信しません。",
    "privacy.ai.title": "任意のAI連携",
    "privacy.ai.body": "ユーザーがAIチャット機能を設定して利用する場合、選択したAIプロバイダーに、現在の端末状態、選択パス、ユーザーが入力した相談内容、ユーザーが明示的に追加した参照情報が送られることがあります。AI連携は任意であり、ファイル転送や削除をAIが自動実行するものではありません。",
    "privacy.contact.title": "問い合わせ",
    "privacy.contact.body": "サポートへ問い合わせた場合、返信に必要なメールアドレス、問い合わせ内容、任意で添付された診断情報を受け取ることがあります。これらは問い合わせ対応のために利用されます。",
    "privacy.third.title": "第三者サービス",
    "privacy.third.body": "アプリ本体は、開発者が運営する分析サーバーへ利用状況を送信しません。ユーザーが別途設定したAIプロバイダー、メール、問い合わせフォーム、配布プラットフォームなどには、それぞれのプライバシーポリシーが適用されます。",
    "privacy.inquiry.title": "お問い合わせ",
    "privacy.inquiry.body": "プライバシーに関する問い合わせは、サポートページに記載された連絡先から送信してください。"
  },
  en: {
    "common.nav.aria": "Main navigation",
    "common.nav.features": "Features",
    "common.nav.requirements": "Requirements",
    "common.nav.support": "Support",
    "common.nav.privacy": "Privacy",
    "common.nav.overview": "Overview",
    "common.lang.aria": "Display language",
    "common.footer.copyright": "Copyright 2026 Yuto Masamura",
    "common.footer.marketing": "Marketing",
    "common.footer.support": "Support",
    "common.footer.privacy": "Privacy",

    "home.title": "OpenDroidBridge - Safe file transfer from Mac to Android and Meta Quest",
    "home.description": "OpenDroidBridge is a macOS app for safely transferring files from your Mac to Android devices and Meta Quest over USB. It supports recoverable deletion, protected replacement, and screenshot saving.",
    "home.og.description": "Safe file transfer from Mac to Android and Meta Quest.",
    "home.hero.eyebrow": "macOS file transfer for Android-based devices",
    "home.hero.lead": "Move the files you need between your Mac, Android devices, and Meta Quest with confidence. OpenDroidBridge brings USB connection status, recoverable deletion, protected same-name replacement, and screenshot saving into one focused app.",
    "home.hero.primary": "Get started",
    "home.hero.secondary": "Connection guide",
    "home.hero.facts.aria": "Supported devices and requirements",
    "home.core.eyebrow": "Core workflow",
    "home.core.title": "Keep the risky parts of file transfer visible.",
    "home.core.lead": "Check device state, current location, free space, and operation risk while saving files to your Mac, adding files to the device, and creating new folders.",
    "home.card.find.title": "Find",
    "home.card.find.body": "Jump quickly to DCIM, Pictures, Movies, Download, Quest recordings, and other folders people use every day.",
    "home.card.transfer.title": "Transfer",
    "home.card.transfer.body": "Save selected files or folders to your Mac, or add Mac files and folders to the current device folder.",
    "home.card.recover.title": "Recover",
    "home.card.recover.body": "Deleted and pre-replacement items can stay in the recovery area, so mistakes are easier to inspect and undo.",
    "home.quest.eyebrow": "Real device preview",
    "home.quest.title": "Organize Quest recordings and screenshots from your Mac.",
    "home.quest.item1": "Show connected Android devices and Meta Quest headsets side by side",
    "home.quest.item2": "Use shortcuts for Oculus folders and Quest recordings",
    "home.quest.item3": "Keep free space and the current path visible",
    "home.quest.item4": "Make USB debugging, unauthorized, and offline states easier to diagnose",
    "home.safety.eyebrow": "Safety model",
    "home.safety.title": "Replace and delete without making them disappear first.",
    "home.safety.lead": "When sending same-name files, choose replace, keep both, or skip. Pre-replacement items and deleted items remain available from the recovery area.",
    "home.safety.callout.title": "Designed to be clear enough for App Store review.",
    "home.safety.callout.body": "OpenDroidBridge treats file operations as explicit user actions and makes recoverable handling the default path.",
    "home.display.eyebrow": "Quest diagnostics",
    "home.display.title": "Check Quest connection and capture snapshots.",
    "home.display.lead": "The Quest Display window checks ADB connection, Quest screen snapshots, device details, and ADB forward readiness.",
    "home.display.note": "VR-space display and a Quest-side receiver app are separate pieces. This site describes the diagnostic features currently available in the app.",
    "home.requirements.eyebrow": "Requirements",
    "home.requirements.title": "Requirements",
    "home.requirements.mac.title": "Mac",
    "home.requirements.mac.body": "macOS 14 or later. The Mac App Store build runs in a sandboxed environment.",
    "home.requirements.device.title": "Android / Meta Quest",
    "home.requirements.device.body": "An Android device with Developer options and USB debugging enabled, or a Meta Quest headset with Developer Mode enabled.",
    "home.requirements.adb.title": "ADB",
    "home.requirements.adb.body": "Android Debug Bridge from Android platform-tools is required. It is usually included when Android Studio is installed.",
    "home.img.quest.alt": "OpenDroidBridge file browser with Quest 3S selected",
    "home.img.pixel.alt": "OpenDroidBridge file browser with Pixel 6a selected",
    "home.img.display.alt": "OpenDroidBridge Quest Display diagnostics window",

    "support.title": "Support - OpenDroidBridge",
    "support.description": "Support page for OpenDroidBridge, including USB connection, ADB, USB debugging, and file transfer troubleshooting for Android devices and Meta Quest.",
    "support.hero.eyebrow": "Support",
    "support.hero.title": "OpenDroidBridge Support",
    "support.hero.lead": "If your device is not appearing, cannot connect, or cannot save files, start with the checks below.",
    "support.mail": "Contact by email",
    "support.privacy": "Privacy Policy",
    "support.note.title": "Helpful details for support",
    "support.note.body": "Please include your macOS version, device name, connection state, visible error message, and the result after pressing Rescan.",
    "support.faq.start.title": "Start here",
    "support.faq.start.body": "OpenDroidBridge requires macOS 14 or later, Android platform-tools with adb, a USB data cable, and USB debugging approval on the device. Unlock the device, approve the USB debugging prompt, then press Rescan in OpenDroidBridge.",
    "support.faq.android.title": "My Android device does not appear",
    "support.faq.android.body": "Reconnect the USB cable and make sure it is not charge-only. In Android Developer options, enable USB debugging and approve the prompt asking whether to allow USB debugging from this computer.",
    "support.faq.quest.title": "My Meta Quest does not appear",
    "support.faq.quest.body": "Enable Developer Mode in the Meta Horizon mobile app, wear the headset, and approve the USB debugging prompt inside Quest. For normal media access, also allow USB file access when prompted.",
    "support.faq.unauthorized.title": "The app shows unauthorized",
    "support.faq.unauthorized.body": "The Mac can see the device, but the device has not approved the ADB connection. Check the device screen and allow USB debugging. If no prompt appears, turn USB debugging off and on again.",
    "support.faq.files.title": "I cannot open or save certain files",
    "support.faq.files.body": "Android app-private data and some system areas may be restricted by the device. OpenDroidBridge does not bypass Android permissions. Use shared storage such as Photos, Movies, Download, Documents, and similar folders.",
    "support.faq.restore.title": "I want to restore a deleted file",
    "support.faq.restore.body": "OpenDroidBridge normally moves deleted items into the recovery area. Open Recoverable Items in the sidebar, review Deleted Items or Pre-Replacement Items, and restore them to the original location or another folder.",

    "privacy.title": "Privacy Policy - OpenDroidBridge",
    "privacy.description": "Privacy policy for OpenDroidBridge, explaining device information, files, optional AI integration, and support contact data handled by the app.",
    "privacy.hero.eyebrow": "Privacy Policy",
    "privacy.hero.title": "Privacy Policy",
    "privacy.hero.lead": "OpenDroidBridge is a macOS utility for transferring files between your Mac and Android devices or Meta Quest. This page explains what information the app handles and how it is used.",
    "privacy.updated.title": "Last updated",
    "privacy.updated.body": "May 3, 2026",
    "privacy.collect.title": "Information collected",
    "privacy.collect.body": "During normal use, the developer does not collect your files, device data, device IDs, or browsing history. The app runs on your Mac and performs local operations on the devices and files you choose.",
    "privacy.device.title": "Device information and files",
    "privacy.device.body": "The app displays connected device names, connection state, device-side paths, filenames, sizes, modified dates, and permission information. This information is used locally on your Mac for file transfer, search, recovery, and connection diagnostics.",
    "privacy.transfer.title": "File transfer",
    "privacy.transfer.body": "Saving to Mac, adding to device, saving screenshots, and moving items to the recovery area happen only after explicit user actions. OpenDroidBridge does not send these files to a developer-operated server.",
    "privacy.ai.title": "Optional AI integration",
    "privacy.ai.body": "If you configure and use the optional AI chat feature, the selected AI provider may receive the current device state, selected paths, your prompt, and any references you explicitly add. AI integration is optional and does not automatically execute file transfers or deletions.",
    "privacy.contact.title": "Support contact",
    "privacy.contact.body": "If you contact support, your email address, message, and any diagnostic information you choose to include may be received for the purpose of responding to the request.",
    "privacy.third.title": "Third-party services",
    "privacy.third.body": "The app itself does not send analytics to a developer-operated server. Third-party AI providers, email, contact forms, and distribution platforms you choose to use are governed by their own privacy policies.",
    "privacy.inquiry.title": "Contact",
    "privacy.inquiry.body": "For privacy questions, use the contact method listed on the support page."
  }
};

const supportedLanguages = ["ja", "en"];

function normalizeLanguage(value) {
  if (!value) return "";
  const normalized = value.toLowerCase();
  return normalized.startsWith("ja") ? "ja" : normalized.startsWith("en") ? "en" : "";
}

function readSavedLanguage() {
  try {
    return normalizeLanguage(window.localStorage.getItem("odb-site-language"));
  } catch {
    return "";
  }
}

function saveLanguage(language) {
  try {
    window.localStorage.setItem("odb-site-language", language);
  } catch {
    // Ignore storage errors in private browsing or locked-down webviews.
  }
}

function browserLanguage() {
  const candidates = Array.isArray(window.navigator.languages) && window.navigator.languages.length > 0
    ? window.navigator.languages
    : [window.navigator.language];
  return candidates.map(normalizeLanguage).find(Boolean) || "";
}

function detectLanguage() {
  const params = new URLSearchParams(window.location.search);
  const queryLanguage = normalizeLanguage(params.get("lang"));
  if (queryLanguage) {
    saveLanguage(queryLanguage);
    return queryLanguage;
  }

  const bootLanguage = normalizeLanguage(window.__odbInitialLanguage);
  if (bootLanguage) return bootLanguage;

  const savedLanguage = readSavedLanguage();
  if (savedLanguage) return savedLanguage;

  return browserLanguage() || "en";
}

function applyLanguage(language) {
  const lang = supportedLanguages.includes(language) ? language : "en";
  const table = translations[lang];
  const root = document.documentElement;
  root.lang = lang;
  root.dataset.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (table[key]) element.textContent = table[key];
  });

  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    const key = element.dataset.i18nContent;
    if (table[key]) element.setAttribute("content", table[key]);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (table[key]) element.setAttribute("aria-label", table[key]);
  });

  document.querySelectorAll("[data-locale-src]").forEach((element) => {
    const source = lang === "ja" ? element.dataset.jaSrc : element.dataset.enSrc;
    const alt = lang === "ja" ? element.dataset.jaAlt : element.dataset.enAlt;
    if (source) element.setAttribute("src", source);
    if (alt) element.setAttribute("alt", alt);
  });

  document.querySelectorAll("[data-lang-button]").forEach((button) => {
    const active = button.dataset.langButton === lang;
    button.setAttribute("aria-pressed", String(active));
  });

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription && table["home.og.description"]) {
    ogDescription.setAttribute("content", table["home.og.description"]);
  }

  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) {
    ogImage.setAttribute("content", `https://example.com/OpenDroidBridge/assets/og-image-${lang}.png`);
  }
}

function bindLanguageControls() {
  document.querySelectorAll("[data-lang-button]").forEach((button) => {
    button.addEventListener("click", () => {
      const lang = normalizeLanguage(button.dataset.langButton);
      if (!lang) return;
      saveLanguage(lang);
      applyLanguage(lang);
    });
  });
}

bindLanguageControls();
applyLanguage(detectLanguage());
