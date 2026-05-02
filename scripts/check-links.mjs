import { readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../", import.meta.url).pathname;
const pages = [
  "index.html",
  "OpenDroidBridge/index.html",
  "OpenDroidBridge/support/index.html",
  "OpenDroidBridge/privacy/index.html"
];

const requiredFiles = [
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

for (const page of pages) {
  const html = readFileSync(join(root, page), "utf8");
  if (!/<title(\s|>)/.test(html)) {
    throw new Error(`${page} is missing a title`);
  }
}

for (const file of requiredFiles) {
  statSync(join(root, file));
}

console.log("Static site checks passed.");
