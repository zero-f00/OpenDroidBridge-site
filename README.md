# OpenDroidBridge Website

Static website for the OpenDroidBridge App Store listing.

## Pages

- `/OpenDroidBridge/` - marketing page
- `/OpenDroidBridge/support/` - support URL for App Store Connect
- `/OpenDroidBridge/privacy/` - privacy policy URL for App Store Connect

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

- Replace placeholder contact links with the real support email, issue tracker, or contact form.
- Replace `https://example.com` metadata values with the final domain.
- Upload this directory as a separate Vercel project.

