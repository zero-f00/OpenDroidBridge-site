# OpenDroidBridge legal readiness review

Checked on 2026-05-03. This is an implementation checklist and risk review for the website, not legal advice.

## Assumptions

- OpenDroidBridge is planned as a paid one-time macOS app distributed through the Mac App Store.
- The app does not use subscriptions, in-app purchases, external payment links, or a developer-operated analytics server in the described release model.
- The site owner and seller name currently shown as `Yuto Masamura` is based on the existing website copyright. Confirm this is the exact App Store Connect seller/legal name before release.
- A public GitHub Issues intake is available at `https://github.com/zero-f00/OpenDroidBridge-site/issues/new`, and `gh repo view` confirmed Issues are enabled.

## What is required or strongly recommended

### Privacy policy

Required for App Store submission. Apple states that App Store Connect requires a privacy policy URL for apps and requires developers to explain data handling practices. Japan's personal information guidance also supports publishing or notifying the purpose when personal information is obtained, especially for support messages.

Implementation:

- `/OpenDroidBridge/privacy/`
- Covers local file/device handling, no developer analytics collection, optional AI provider transfer, support contact data, App Store purchase/payment handling, retention/deletion, security, and contact route.

Sources:

- Apple App Store Connect Help, "Manage app privacy": https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy
- Personal Information Protection Commission guideline: https://www.ppc.go.jp/personalinfo/legal/guidelines_tsusoku/

### Terms of use

Not strictly required as a separate website page if relying on Apple's standard EULA, because Apple provides a standard EULA when no custom EULA is supplied. A separate app-specific terms page is still useful because it explains file-operation responsibility, backups, ADB/device prerequisites, optional AI use, support, and the relationship to Apple terms without replacing Apple's EULA.

Implementation:

- `/OpenDroidBridge/terms/`
- States that Apple standard EULA or any custom EULA, Apple terms, and mandatory consumer law may take precedence.
- Avoids pretending to be a full custom EULA submitted to App Store Connect.

Source:

- Apple App Store Connect Help, "Provide a custom license agreement": https://developer.apple.com/help/app-store-connect/manage-app-information/provide-a-custom-license-agreement/

### Specified Commercial Transactions Act notice

Needed or at least strongly recommended for Japan-facing paid distribution. The Consumer Affairs Agency's guide for mail-order sales lists required advertisement items including price, payment timing/method, delivery timing, cancellation/returns, seller name/address/phone, additional fees, and software operating environment. It also states some display items, including seller name/address/phone, can be omitted only when the ad says those items will be provided without delay on request and the seller can actually provide them.

Implementation:

- `/OpenDroidBridge/legal/`
- Covers seller, operations manager, address/phone disclosure on request, contact route, App Store price, extra fees, payment timing/method, delivery timing, returns/refunds, operating environment, and special sales conditions.
- Uses "App Store product page price" rather than inventing a price.
- Uses Apple refund process for App Store purchases rather than inventing a developer-run refund flow.

Sources:

- Consumer Affairs Agency mail-order guide: https://www.no-trouble.caa.go.jp/what/mailorder/
- Consumer Affairs Agency mail-order advertisement Q&A: https://www.no-trouble.caa.go.jp/qa/advertising.html
- Apple Support refund process: https://support.apple.com/en-bh/118223
- Apple App Store Connect Help, "Set a price": https://developer.apple.com/help/app-store-connect/manage-app-pricing/set-a-price

## Release blockers that cannot be truthfully filled by Codex

- Replace `https://example.com` in Open Graph metadata and `sitemap.xml` with the final Vercel or custom domain.
- Confirm the legal seller name exactly matches App Store Connect and the paid apps agreement account.
- Establish a private support email or form before submission. Public GitHub Issues is acceptable for general troubleshooting, but privacy requests, refunds, identity details, and address/phone disclosure requests should not start or finish in a public issue.
- If address and phone number are not displayed directly, confirm the "disclose without delay on request" process is operational before launch.

## Current conclusion

The site now has the right page structure and non-placeholder content for App Store readiness: marketing, support, privacy policy, terms of use, and Japan SCTA notice. The remaining items are factual business details and deployment-domain replacements, not missing page implementation.
