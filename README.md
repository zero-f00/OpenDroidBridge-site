# OpenDroidBridge Website

Static website for the OpenDroidBridge App Store listing.

## Pages

- `/OpenDroidBridge/` - marketing page
- `/OpenDroidBridge/support/` - support URL for App Store Connect
- `/OpenDroidBridge/privacy/` - privacy policy URL for App Store Connect
- `/OpenDroidBridge/terms/` - app-specific terms of use
- `/OpenDroidBridge/legal/` - Specified Commercial Transactions Act notice for Japan

The pages auto-select Japanese when the browser language starts with `ja`; all other languages default to English. Users can override the language with the header toggle or `?lang=ja` / `?lang=en`. Screenshots are split into Japanese and English assets and are switched with the same language setting.

## Local preview

Open `OpenDroidBridge/index.html` directly, or serve this directory:

```sh
python3 -m http.server 3000
```

Then visit:

```txt
http://localhost:3000/OpenDroidBridge/
```

## Before deploying

- Confirm the seller name, address, representative, phone disclosure process, and support intake match the App Store Connect seller information before release.
- The current support link uses `info@tkgshoyu.jp`. Keep that mailbox able to handle privacy requests, refund-related support, and Specified Commercial Transactions Act disclosure requests.
- Replace `https://example.com` metadata values with the final domain.
- Upload this directory as a separate Vercel project.
