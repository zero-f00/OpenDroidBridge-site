import { readFileSync, statSync } from "node:fs";
import { dirname, join, normalize } from "node:path";

const root = new URL("../", import.meta.url).pathname;
const pages = [
  "index.html",
  "OpenDroidBridge/index.html",
  "OpenDroidBridge/support/index.html",
  "OpenDroidBridge/privacy/index.html",
  "OpenDroidBridge/terms/index.html",
  "OpenDroidBridge/legal/index.html"
];

const localizedPages = pages.filter((page) => page.startsWith("OpenDroidBridge/"));

const requiredFiles = [
  ".github/workflows/pages.yml",
  "OpenDroidBridge/assets/app-icon.png",
  "OpenDroidBridge/assets/og-image.png",
  "OpenDroidBridge/assets/og-image-ja.png",
  "OpenDroidBridge/assets/og-image-en.png",
  "OpenDroidBridge/assets/screenshot-pixel.png",
  "OpenDroidBridge/assets/screenshot-pixel-ja.png",
  "OpenDroidBridge/assets/screenshot-pixel-en.png",
  "OpenDroidBridge/assets/screenshot-quest.png",
  "OpenDroidBridge/assets/screenshot-quest-ja.png",
  "OpenDroidBridge/assets/screenshot-quest-en.png",
  "OpenDroidBridge/assets/screenshot-quest-display.png",
  "OpenDroidBridge/assets/screenshot-quest-display-ja.png",
  "OpenDroidBridge/assets/screenshot-quest-display-en.png",
  "OpenDroidBridge/assets/site.css",
  "OpenDroidBridge/assets/site-i18n.js"
];

const publicBaseUrl = "https://zero-f00.github.io/OpenDroidBridge-site";

for (const page of pages) {
  const html = readFileSync(join(root, page), "utf8");
  if (!/<title(\s|>)/.test(html)) {
    throw new Error(`${page} is missing a title`);
  }
  if (html.includes("support@example.com")) {
    throw new Error(`${page} still contains placeholder support@example.com`);
  }
  if (html.includes("github.com/zero-f00/OpenDroidBridge-site/issues")) {
    throw new Error(`${page} still links to public GitHub Issues for support`);
  }
}

const supportPage = readFileSync(join(root, "OpenDroidBridge/support/index.html"), "utf8");
if (!supportPage.includes("mailto:info@tkgshoyu.jp")) {
  throw new Error("support page must link to info@tkgshoyu.jp");
}

const legalI18n = readFileSync(join(root, "OpenDroidBridge/assets/site-i18n.js"), "utf8");
for (const required of [
  "info@tkgshoyu.jp",
  "〒150-0043 東京都渋谷区道玄坂1丁目10番8号 渋谷道玄坂東急ビル2F-C",
  "Shibuya Dogenzaka Tokyu Building 2F-C"
]) {
  if (!legalI18n.includes(required)) {
    throw new Error(`missing required legal/support value: ${required}`);
  }
}

const landingSources = [
  "OpenDroidBridge/index.html",
  "OpenDroidBridge/assets/site-i18n.js"
];
const forbiddenLandingPhrases = [
  "App Store向け",
  "App Store review",
  "サンドボックス環境",
  "sandboxed environment",
  "現在のアプリ",
  "This site describes",
  "別機能です"
];
for (const file of landingSources) {
  const content = readFileSync(join(root, file), "utf8");
  for (const phrase of forbiddenLandingPhrases) {
    if (content.includes(phrase)) {
      throw new Error(`${file} contains internal landing-page phrase: ${phrase}`);
    }
  }
}

const rootPage = readFileSync(join(root, "index.html"), "utf8");
if (!rootPage.includes("./OpenDroidBridge/")) {
  throw new Error("root redirect must be relative for GitHub project pages");
}

for (const file of [
  "index.html",
  "robots.txt",
  "sitemap.xml",
  "README.md",
  "docs/legal-readiness-review.md",
  "OpenDroidBridge/index.html",
  "OpenDroidBridge/assets/site-i18n.js"
]) {
  const content = readFileSync(join(root, file), "utf8");
  if (content.includes("https://example.com")) {
    throw new Error(`${file} still contains https://example.com`);
  }
}

for (const file of [
  "robots.txt",
  "sitemap.xml",
  "README.md",
  "OpenDroidBridge/index.html",
  "OpenDroidBridge/assets/site-i18n.js"
]) {
  const content = readFileSync(join(root, file), "utf8");
  if (!content.includes(publicBaseUrl)) {
    throw new Error(`${file} is missing GitHub Pages base URL`);
  }
}

for (const file of requiredFiles) {
  statSync(join(root, file));
}

const i18nSource = readFileSync(join(root, "OpenDroidBridge/assets/site-i18n.js"), "utf8");
for (const page of localizedPages) {
  const html = readFileSync(join(root, page), "utf8");
  const keys = [
    ...html.matchAll(/data-i18n(?:-[a-z-]+)?="([^"]+)"/g)
  ].map((match) => match[1]);

  for (const key of keys) {
    if (!i18nSource.includes(`"${key}"`)) {
      throw new Error(`${page} references missing i18n key ${key}`);
    }
  }

  const imageSources = [
    ...html.matchAll(/data-(?:ja|en)-src="([^"]+)"/g)
  ].map((match) => normalize(join(dirname(page), match[1])));

  for (const source of imageSources) {
    statSync(join(root, source));
  }
}

console.log("Static site checks passed.");
