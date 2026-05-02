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
  "OpenDroidBridge/assets/screenshot-pixel.png",
  "OpenDroidBridge/assets/screenshot-quest.png",
  "OpenDroidBridge/assets/screenshot-quest-display.png",
  "OpenDroidBridge/assets/site.css"
];

for (const page of pages) {
  const html = readFileSync(join(root, page), "utf8");
  if (!html.includes("<title>")) {
    throw new Error(`${page} is missing a title`);
  }
}

for (const file of requiredFiles) {
  statSync(join(root, file));
}

console.log("Static site checks passed.");
