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
    "common.footer.terms": "Terms",
    "common.footer.legal": "Legal",

    "home.title": "OpenDroidBridge - MacからAndroidとMeta Questへ安全にファイル転送",
    "home.description": "OpenDroidBridgeは、MacからAndroidスマホ/タブレットやMeta QuestへUSB経由で安全にファイル転送するmacOSアプリです。復元できる削除、同名ファイル保護、スクリーンショット保存に対応します。",
    "home.og.description": "MacからAndroidとMeta Questへ、安全にファイル転送。",
    "home.hero.eyebrow": "macOS file transfer for Android-based devices",
    "home.hero.lead": "MacからAndroidスマホ/タブレットやMeta Questへ、必要なファイルを安全に移動。USB接続、復元できる削除、同名ファイル保護、スクリーンショット保存まで一つにまとめます。",
    "home.hero.primary": "使い始める",
    "home.hero.secondary": "接続手順を見る",
    "home.hero.facts.aria": "主な対応",
    "home.hero.fact.android": "Androidスマホ/タブレット",
    "home.hero.fact.quest": "Meta Quest",
    "home.hero.fact.adb": "ADB over USB",
    "home.hero.fact.safety": "復元エリア",
    "home.hero.fact.mac": "macOS 14+",
    "home.core.eyebrow": "Core workflow",
    "home.core.title": "ファイル転送で怖いところを、最初から見える形に。",
    "home.core.lead": "端末の状態、現在の場所、空き容量、検索結果を確認しながら、Macへ保存・端末へ追加・新規フォルダ作成を進められます。",
    "home.card.find.title": "見つける",
    "home.card.find.body": "DCIM、Pictures、Movies、Download、Documents、アプリストレージ、Quest録画などへすばやく移動できます。",
    "home.card.transfer.title": "転送する",
    "home.card.transfer.body": "選択したファイルやフォルダをMacへ保存。Mac側のファイルやフォルダは、選択またはドラッグで端末へ追加できます。",
    "home.card.recover.title": "戻せる",
    "home.card.recover.body": "削除や上書き前の項目を復元エリアへ残し、誤操作に気づいたあとでも確認し直せます。",
    "home.card.organize.title": "絞り込む",
    "home.card.organize.body": "現在フォルダ内を検索し、よく使うファイルやフォルダはお気に入りとしてサイドバーから開けます。",
    "home.quest.eyebrow": "Real device preview",
    "home.quest.title": "Questの録画やスクリーンショットも、Mac側から整理。",
    "home.quest.item1": "接続中のAndroidスマホ/タブレットとMeta Questを並べて表示",
    "home.quest.item2": "Quest向けのOculusフォルダ、録画フォルダへショートカット",
    "home.quest.item3": "端末ストレージの空き容量と現在のパスを常に表示",
    "home.quest.item4": "USBデバッグ未許可やオフライン状態も診断しやすい表示",
    "home.safety.eyebrow": "Safety model",
    "home.safety.title": "置き換えも削除も、いきなり消さない。",
    "home.safety.lead": "同名ファイルを送るときは、置き換える・両方残す・スキップを選択。置き換え前の項目や削除した項目は、復元できる場所から確認できます。",
    "home.safety.callout.title": "大切なファイルを守るための安全設計です。",
    "home.safety.callout.body": "OpenDroidBridgeは、端末内ファイル操作をユーザーの明示的な操作として扱い、削除や置き換えでは復元エリアを使う流れを既定にしています。",
    "home.display.eyebrow": "Quest diagnostics",
    "home.display.title": "Quest接続の確認とスナップショット取得にも対応。",
    "home.display.lead": "Quest Display画面では、ADB接続、Quest画面スナップショット、実機情報、ADB forwardの設定・テスト状態を確認できます。",
    "home.display.note": "Quest側の録画やスクリーンショット整理の前に、接続が正しく通っているかを確認したいときにも使えます。",
    "home.ai.eyebrow": "Optional AI planning",
    "home.ai.title": "AIに聞ける。でも、操作はあなたの確認で。",
    "home.ai.lead": "Codex CLI、Claude Code、Ollama、LM Studioなど、ユーザーが設定したAIツールに現在の端末状態を渡して、ファイル整理や復元の手順を相談できます。",
    "home.ai.card.context.title": "文脈を渡す",
    "home.ai.card.context.body": "選択中の端末種別、接続状態、現在フォルダの件数、操作リスク、ユーザーが明示的に追加したMac側参照だけを相談材料にします。",
    "home.ai.card.command.title": "手順案をもらう",
    "home.ai.card.command.body": "AIはOpenDroidBridgeのUI操作や、利用できる場合はopendroidctl形式のコマンド案を返します。raw adbより安全な手順を優先する前提です。",
    "home.ai.card.safe.title": "勝手に実行しない",
    "home.ai.card.safe.body": "AI連携は任意です。AIがファイル転送、削除、ADBコマンドを自動実行することはなく、実際の操作はアプリ側の確認フローに残ります。",
    "home.requirements.eyebrow": "Requirements",
    "home.requirements.title": "必要環境",
    "home.requirements.mac.title": "Mac",
    "home.requirements.mac.body": "macOS 14以降。",
    "home.requirements.device.title": "Android / Meta Quest",
    "home.requirements.device.body": "開発者向けオプションとUSBデバッグを有効化したAndroidスマホ/タブレット、または開発者モードを有効化したMeta Quest。",
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
    "support.note.title": "問い合わせる場合",
    "support.note.body": "多くの問題は下のFAQだけで確認できます。メールで相談する場合は、必要な範囲でMacのOSバージョン、端末名、接続状態、表示されたエラーメッセージを添えてください。個人ファイルの内容は送らないでください。",
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
    "support.faq.ai.title": "AI連携が動かない",
    "support.faq.ai.body": "Codex CLI、Claude Code、Ollama、LM Studioなど、利用するAIツールはユーザー側でインストールまたは起動しておく必要があります。AIパネルの状態更新を押し、CLIやローカルサーバーが見つかるか確認してください。OpenDroidBridgeは、AIプロバイダーとしてshell、adb、opendroidctlなどを直接実行する設定を受け付けず、AIがファイル操作を自動実行することもありません。",
    "support.faq.multiple.title": "端末が複数あるとき",
    "support.faq.multiple.body": "上部のデバイスメニューで操作対象のAndroidスマホ/タブレットまたはMeta Questを選んでください。OpenDroidBridgeは現在選択中の端末名、接続状態、パスを表示し、誤って別端末へ操作しにくいようにしています。",

    "privacy.title": "プライバシーポリシー - OpenDroidBridge",
    "privacy.description": "OpenDroidBridgeのプライバシーポリシーです。アプリが扱う端末情報、ファイル、任意のAI連携、問い合わせ情報について説明します。",
    "privacy.hero.eyebrow": "Privacy Policy",
    "privacy.hero.title": "プライバシーポリシー",
    "privacy.hero.lead": "OpenDroidBridgeは、Mac上でAndroid端末やMeta Questとのファイル転送を行うユーティリティです。このページでは、アプリが扱う情報と、その扱い方を説明します。",
    "privacy.updated.title": "最終更新日",
    "privacy.updated.body": "2026年5月3日",
    "privacy.collect.title": "収集する情報",
    "privacy.collect.body": "OpenDroidBridgeの通常利用において、開発者はユーザーのファイル、端末内データ、端末ID、閲覧履歴、利用分析データを収集しません。アプリはMac上で動作し、ユーザーが選択した端末やファイルに対してローカルに操作を行います。",
    "privacy.device.title": "端末情報とファイル",
    "privacy.device.body": "アプリは、接続中の端末名、接続状態、端末内パス、ファイル名、サイズ、更新日、権限情報などを表示します。これらはファイル転送、検索、復元、接続診断のためにMac上で利用されます。",
    "privacy.transfer.title": "ファイル転送",
    "privacy.transfer.body": "Macへ保存、端末へ追加、スクリーンショット保存、復元エリアへの移動などの操作は、ユーザーの明示的な操作によって実行されます。OpenDroidBridgeは、これらのファイルを開発者のサーバーへ送信しません。",
    "privacy.purchase.title": "購入と支払い",
    "privacy.purchase.body": "有料買い切り版の購入、決済、返金申請、購入履歴の管理はApp StoreとApple Accountの仕組みで行われます。開発者はクレジットカード番号などの支払い情報を直接受け取りません。Appleから提供される売上・財務レポートには、App Storeの運営上必要な集計情報が含まれることがあります。",
    "privacy.ai.title": "任意のAI連携",
    "privacy.ai.body": "ユーザーがAIチャット機能を設定して利用する場合、選択したAIプロバイダーに、現在の端末状態、選択パス、ユーザーが入力した相談内容、ユーザーが明示的に追加した参照情報が送られることがあります。AI連携は任意であり、ファイル転送や削除をAIが自動実行するものではありません。",
    "privacy.contact.title": "問い合わせ",
    "privacy.contact.body": "サポートへ問い合わせた場合、返信に必要なメールアドレス、問い合わせ内容、任意で添付された診断情報を受け取ることがあります。これらは問い合わせ対応のために利用されます。",
    "privacy.third.title": "第三者サービス",
    "privacy.third.body": "アプリ本体は、開発者が運営する分析サーバーへ利用状況を送信しません。ユーザーが別途設定したAIプロバイダー、メール、問い合わせフォーム、配布プラットフォームなどには、それぞれのプライバシーポリシーが適用されます。",
    "privacy.retention.title": "保存期間と削除",
    "privacy.retention.body": "問い合わせ情報は、対応、再発防止、法令上必要な記録管理のために必要な期間だけ保存します。不要になった情報は合理的な期間内に削除します。アプリ内の端末情報、ファイル一覧、復元エリア内の項目はユーザーのMacまたは接続端末側に保存され、ユーザーの操作やmacOSの通常機能で削除できます。",
    "privacy.security.title": "安全管理",
    "privacy.security.body": "OpenDroidBridgeは、端末操作をローカルで行い、ユーザーの明示的な操作なしにファイルを外部へ送信しない設計です。サポート対応で受け取った情報は、不正アクセス、紛失、漏えいを防ぐため合理的な管理を行います。",
    "privacy.inquiry.title": "お問い合わせ",
    "privacy.inquiry.body": "プライバシーに関する問い合わせ、開示・訂正・削除の相談は、info@tkgshoyu.jp へ送信してください。",

    "terms.title": "利用規約 - OpenDroidBridge",
    "terms.description": "OpenDroidBridgeの利用規約です。App Storeでの有料買い切り購入、Apple標準EULA、ファイル操作、任意のAI連携、サポートについて説明します。",
    "terms.hero.eyebrow": "Terms of Use",
    "terms.hero.title": "利用規約",
    "terms.hero.lead": "この利用規約は、OpenDroidBridgeの利用条件を説明するものです。App Storeでの購入、配布、ライセンスにはAppleの条件も適用されます。",
    "terms.relation.title": "Appleの条件との関係",
    "terms.relation.body": "OpenDroidBridgeがApp Storeで配布される場合、Appleの標準エンドユーザ使用許諾契約書（EULA）またはApp Store Connectで設定されたカスタムEULA、Appleメディアサービス利用規約、適用される消費者保護法が優先して適用されることがあります。このページは、アプリ固有の利用条件を補足します。",
    "terms.purchase.title": "購入形態",
    "terms.purchase.body": "OpenDroidBridgeは、有料買い切りのmacOSアプリとして提供される予定です。アプリ内課金、サブスクリプション、外部決済への誘導は、このサイトで記載しているリリース形態には含めていません。価格、税、支払い、再ダウンロード、返金申請はApp Storeの表示とAppleの手続きに従います。",
    "terms.license.title": "利用許諾",
    "terms.license.body": "ユーザーは、OpenDroidBridgeを自己が管理し、または利用権限を持つMac、Android端末、Meta Questで利用できます。アプリの複製、再配布、リバースエンジニアリング、アクセス制御の回避、第三者の権利を侵害する利用は禁止します。ただし、法令で認められる範囲は除きます。",
    "terms.files.title": "ファイル操作とバックアップ",
    "terms.files.body": "OpenDroidBridgeは、ユーザーの明示的な操作に基づいてファイルの保存、追加、削除、復元、スクリーンショット保存を行います。復元エリアは誤操作を減らすための機能ですが、すべての状況で復元を保証するものではありません。重要なファイルは、操作前に別途バックアップしてください。",
    "terms.devices.title": "端末、ADB、権限",
    "terms.devices.body": "アプリの利用には、macOS 14以降、Android platform-toolsのadb、USBデータ転送対応ケーブル、端末側のUSBデバッグ許可が必要です。OpenDroidBridgeはAndroidやMeta Questの権限を回避する目的のアプリではありません。端末メーカー、OS、Meta、Google、Appleの条件や制限に従って利用してください。",
    "terms.ai.title": "任意のAI連携",
    "terms.ai.body": "AIチャット機能は任意です。ユーザーがAIプロバイダーを設定して利用する場合、送信される内容とAIプロバイダーの条件を確認してください。秘密情報、第三者の個人情報、送信権限のないファイル内容を入力しないでください。",
    "terms.support.title": "サポートと変更",
    "terms.support.body": "サポートはサポートページに記載した方法で受け付けます。機能、必要環境、サポート方法、これらの規約は、改善、法令対応、App Storeの要件変更に応じて更新されることがあります。重要な変更は、このサイト上で更新日とともに表示します。",
    "terms.disclaimer.title": "免責",
    "terms.disclaimer.body": "OpenDroidBridgeは、適用法で認められる範囲で、現状有姿で提供されます。開発者は、アプリがすべての端末、OSバージョン、ADB環境で常に動作すること、またはすべてのデータ損失を防止できることを保証しません。強行法規上認められない免責や責任制限は適用されません。",
    "terms.contact.title": "お問い合わせ",
    "terms.contact.body": "利用規約に関する問い合わせは、サポートページに記載された連絡先から送信してください。",

    "legal.title": "特定商取引法に基づく表記 - OpenDroidBridge",
    "legal.description": "OpenDroidBridgeの特定商取引法に基づく表記です。有料買い切りのApp Store配布を前提に、販売価格、支払方法、提供時期、返品・返金、必要環境を記載します。",
    "legal.hero.eyebrow": "Legal Notice",
    "legal.hero.title": "特定商取引法に基づく表記",
    "legal.hero.lead": "OpenDroidBridgeを日本向けに有料買い切りアプリとして提供する場合の取引条件を整理しています。App Store上の表示と矛盾する場合は、App Store上の表示およびAppleの手続きが優先されることがあります。",
    "legal.note.title": "重要",
    "legal.note.body": "以下は、OpenDroidBridgeを有料買い切りのMac App Storeアプリとして提供する前提の表示です。電話番号は、法令に基づき請求があった場合に遅滞なく開示します。",
    "legal.seller.title": "販売業者",
    "legal.seller.body": "Yuto Masamura",
    "legal.manager.title": "代表者",
    "legal.manager.body": "Yuto Masamura",
    "legal.address.title": "所在地",
    "legal.address.body": "〒150-0043 東京都渋谷区道玄坂1丁目10番8号 渋谷道玄坂東急ビル2F-C",
    "legal.contact.title": "連絡先",
    "legal.contact.body": "info@tkgshoyu.jp。電話番号は、特定商取引法に基づき請求があった場合に遅滞なく開示します。電話番号の開示請求は、メール件名を「特商法表示事項の開示請求」として送信してください。",
    "legal.price.title": "販売価格",
    "legal.price.body": "App Storeの商品ページに表示される価格です。価格は国または地域、税、App Storeの価格設定により異なります。",
    "legal.fees.title": "販売価格以外の必要料金",
    "legal.fees.body": "インターネット接続料金、通信料金、USBケーブル、対応端末、Mac、必要に応じたAndroid platform-toolsの導入環境はユーザーの負担です。商品の性質上、送料は発生しません。",
    "legal.payment.title": "支払方法・支払時期",
    "legal.payment.body": "App StoreおよびApple Accountで利用可能な支払方法により、購入時に決済されます。開発者はクレジットカード番号などの支払い情報を直接受け取りません。",
    "legal.delivery.title": "提供時期",
    "legal.delivery.body": "App Storeでの購入手続き完了後、App Storeからダウンロード可能になります。端末、ネットワーク、App Storeの状態により利用開始まで時間がかかる場合があります。",
    "legal.cancel.title": "返品・キャンセル・返金",
    "legal.cancel.body": "デジタル商品の性質上、購入完了後のユーザー都合による返品・キャンセルは原則として受け付けていません。App Storeで購入したアプリの返金申請は、Appleのreportaproblem.apple.com等の手続きに従ってください。不具合がある場合はサポートページから連絡してください。",
    "legal.environment.title": "動作環境",
    "legal.environment.body": "macOS 14以降、Android platform-toolsに含まれるadb、USBデータ転送対応ケーブル、USBデバッグを許可したAndroid端末、または開発者モードを有効化したMeta Questが必要です。詳細はマーケティングページとサポートページに記載しています。",
    "legal.special.title": "特別な販売条件",
    "legal.special.body": "本サイトで想定しているリリース形態は、有料買い切りのMac App Store配布です。サブスクリプション、アプリ内課金、定期購入契約、物理商品の配送はありません。将来これらを追加する場合は、事前に表示を更新します。"
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
    "common.footer.terms": "Terms",
    "common.footer.legal": "Legal",

    "home.title": "OpenDroidBridge - Safe file transfer from Mac to Android and Meta Quest",
    "home.description": "OpenDroidBridge is a macOS app for safely transferring files from your Mac to Android devices and Meta Quest over USB. It supports recoverable deletion, protected replacement, and screenshot saving.",
    "home.og.description": "Safe file transfer from Mac to Android and Meta Quest.",
    "home.hero.eyebrow": "macOS file transfer for Android-based devices",
    "home.hero.lead": "Move the files you need between your Mac, Android devices, and Meta Quest with confidence. OpenDroidBridge brings USB connection status, recoverable deletion, protected same-name replacement, and screenshot saving into one focused app.",
    "home.hero.primary": "Get started",
    "home.hero.secondary": "Connection guide",
    "home.hero.facts.aria": "Supported devices and requirements",
    "home.hero.fact.android": "Android phones & tablets",
    "home.hero.fact.quest": "Meta Quest",
    "home.hero.fact.adb": "ADB over USB",
    "home.hero.fact.safety": "Recovery area",
    "home.hero.fact.mac": "macOS 14+",
    "home.core.eyebrow": "Core workflow",
    "home.core.title": "Keep the risky parts of file transfer visible.",
    "home.core.lead": "Check device state, current location, free space, and search results while saving files to your Mac, adding files to the device, and creating new folders.",
    "home.card.find.title": "Find",
    "home.card.find.body": "Jump quickly to DCIM, Pictures, Movies, Download, Documents, app storage, Quest recordings, and other folders people use every day.",
    "home.card.transfer.title": "Transfer",
    "home.card.transfer.body": "Save selected files or folders to your Mac, or add Mac files and folders to the device by choosing them or dropping them into the app.",
    "home.card.recover.title": "Recover",
    "home.card.recover.body": "Deleted and pre-replacement items can stay in the recovery area, so mistakes are easier to inspect and undo.",
    "home.card.organize.title": "Organize",
    "home.card.organize.body": "Search within the current folder and pin frequently used files or folders as favorites in the sidebar.",
    "home.quest.eyebrow": "Real device preview",
    "home.quest.title": "Organize Quest recordings and screenshots from your Mac.",
    "home.quest.item1": "Show connected Android phones, tablets, and Meta Quest headsets side by side",
    "home.quest.item2": "Use shortcuts for Oculus folders and Quest recordings",
    "home.quest.item3": "Keep free space and the current path visible",
    "home.quest.item4": "Make USB debugging, unauthorized, and offline states easier to diagnose",
    "home.safety.eyebrow": "Safety model",
    "home.safety.title": "Replace and delete without making them disappear first.",
    "home.safety.lead": "When sending same-name files, choose replace, keep both, or skip. Pre-replacement items and deleted items remain available from the recovery area.",
    "home.safety.callout.title": "Built to protect important files.",
    "home.safety.callout.body": "OpenDroidBridge treats file operations as explicit user actions and uses the recovery area by default for deletes and replacements.",
    "home.display.eyebrow": "Quest diagnostics",
    "home.display.title": "Check Quest connection and capture snapshots.",
    "home.display.lead": "The Quest Display window checks ADB connection, Quest screen snapshots, device details, and ADB forward setup and test state.",
    "home.display.note": "Use it when you want to confirm the connection before organizing Quest recordings and screenshots.",
    "home.ai.eyebrow": "Optional AI planning",
    "home.ai.title": "Ask AI for a plan while you stay in control.",
    "home.ai.lead": "OpenDroidBridge can send current device context to AI tools you already run locally or from your terminal, including Codex CLI, Claude Code, Ollama, and LM Studio.",
    "home.ai.card.context.title": "Share context",
    "home.ai.card.context.body": "The prompt includes the selected device family, connection state, current-folder counts, risk summaries, and only the Mac references you explicitly add.",
    "home.ai.card.command.title": "Get a plan",
    "home.ai.card.command.body": "The assistant suggests OpenDroidBridge UI actions and, when available, opendroidctl-style command ideas. Its prompt prefers safer workflows over raw adb shell commands.",
    "home.ai.card.safe.title": "No automatic actions",
    "home.ai.card.safe.body": "AI integration is optional. It does not execute file transfers, deletes, or ADB commands automatically; real operations stay behind the app's confirmation flows.",
    "home.requirements.eyebrow": "Requirements",
    "home.requirements.title": "Requirements",
    "home.requirements.mac.title": "Mac",
    "home.requirements.mac.body": "macOS 14 or later.",
    "home.requirements.device.title": "Android / Meta Quest",
    "home.requirements.device.body": "An Android phone or tablet with Developer options and USB debugging enabled, or a Meta Quest headset with Developer Mode enabled.",
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
    "support.note.title": "When contacting support",
    "support.note.body": "Most issues can be checked with the FAQ below. If you email support, include only what is needed, such as your macOS version, device name, connection state, and visible error message. Do not send personal file contents.",
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
    "support.faq.ai.title": "AI integration is not working",
    "support.faq.ai.body": "AI tools such as Codex CLI, Claude Code, Ollama, or LM Studio must be installed or running on your Mac. Press Status Update in the AI panel and confirm the CLI or local server is found. OpenDroidBridge does not accept shell, adb, or opendroidctl as direct AI provider commands, and the AI assistant does not automatically execute file operations.",
    "support.faq.multiple.title": "Multiple devices are connected",
    "support.faq.multiple.body": "Use the device menu at the top to choose the Android phone, tablet, or Meta Quest you want to operate. OpenDroidBridge shows the selected device name, connection state, and current path so it is easier to avoid acting on the wrong device.",

    "privacy.title": "Privacy Policy - OpenDroidBridge",
    "privacy.description": "Privacy policy for OpenDroidBridge, explaining device information, files, optional AI integration, and support contact data handled by the app.",
    "privacy.hero.eyebrow": "Privacy Policy",
    "privacy.hero.title": "Privacy Policy",
    "privacy.hero.lead": "OpenDroidBridge is a macOS utility for transferring files between your Mac and Android devices or Meta Quest. This page explains what information the app handles and how it is used.",
    "privacy.updated.title": "Last updated",
    "privacy.updated.body": "May 3, 2026",
    "privacy.collect.title": "Information collected",
    "privacy.collect.body": "During normal use, the developer does not collect your files, device data, device IDs, browsing history, or analytics data. The app runs on your Mac and performs local operations on the devices and files you choose.",
    "privacy.device.title": "Device information and files",
    "privacy.device.body": "The app displays connected device names, connection state, device-side paths, filenames, sizes, modified dates, and permission information. This information is used locally on your Mac for file transfer, search, recovery, and connection diagnostics.",
    "privacy.transfer.title": "File transfer",
    "privacy.transfer.body": "Saving to Mac, adding to device, saving screenshots, and moving items to the recovery area happen only after explicit user actions. OpenDroidBridge does not send these files to a developer-operated server.",
    "privacy.purchase.title": "Purchases and payment",
    "privacy.purchase.body": "Purchases of the paid one-time app, payment processing, refund requests, and purchase history are handled through the App Store and Apple Account. The developer does not directly receive credit card numbers or other payment credentials. Sales and financial reports provided by Apple may include aggregated information needed to operate the App Store relationship.",
    "privacy.ai.title": "Optional AI integration",
    "privacy.ai.body": "If you configure and use the optional AI chat feature, the selected AI provider may receive the current device state, selected paths, your prompt, and any references you explicitly add. AI integration is optional and does not automatically execute file transfers or deletions.",
    "privacy.contact.title": "Support contact",
    "privacy.contact.body": "If you contact support, your email address, message, and any diagnostic information you choose to include may be received for the purpose of responding to the request.",
    "privacy.third.title": "Third-party services",
    "privacy.third.body": "The app itself does not send analytics to a developer-operated server. Third-party AI providers, email, contact forms, and distribution platforms you choose to use are governed by their own privacy policies.",
    "privacy.retention.title": "Retention and deletion",
    "privacy.retention.body": "Support information is kept only for as long as needed to respond, prevent recurrence, and maintain legally necessary records. Information that is no longer needed is deleted within a reasonable period. Device information, file lists, and recovery-area items inside the app are stored on your Mac or connected device and can be deleted through your actions or normal macOS features.",
    "privacy.security.title": "Security",
    "privacy.security.body": "OpenDroidBridge is designed to perform device operations locally and not send files externally without your explicit action. Information received for support is managed with reasonable safeguards against unauthorized access, loss, and leakage.",
    "privacy.inquiry.title": "Contact",
    "privacy.inquiry.body": "For privacy questions, or to ask about access, correction, or deletion, contact info@tkgshoyu.jp.",

    "terms.title": "Terms of Use - OpenDroidBridge",
    "terms.description": "Terms of use for OpenDroidBridge, covering the paid one-time App Store purchase, Apple standard EULA, file operations, optional AI integration, and support.",
    "terms.hero.eyebrow": "Terms of Use",
    "terms.hero.title": "Terms of Use",
    "terms.hero.lead": "These terms explain the app-specific conditions for using OpenDroidBridge. App Store purchase, distribution, and licensing are also governed by Apple terms.",
    "terms.relation.title": "Relationship with Apple terms",
    "terms.relation.body": "When OpenDroidBridge is distributed through the App Store, Apple's standard End User License Agreement (EULA), or any custom EULA configured in App Store Connect, Apple Media Services terms, and applicable consumer protection laws may apply first. This page supplements those terms for app-specific use.",
    "terms.purchase.title": "Purchase model",
    "terms.purchase.body": "OpenDroidBridge is planned as a paid one-time macOS app. In-app purchases, subscriptions, and links to external payment are not part of the release model described on this site. Price, tax, payment, re-downloads, and refund requests follow the App Store listing and Apple procedures.",
    "terms.license.title": "License",
    "terms.license.body": "You may use OpenDroidBridge on Macs, Android devices, and Meta Quest headsets that you own, manage, or are authorized to use. Copying, redistribution, reverse engineering, bypassing access controls, or using the app to infringe third-party rights is prohibited except where allowed by law.",
    "terms.files.title": "File operations and backups",
    "terms.files.body": "OpenDroidBridge saves, adds, deletes, restores, and captures screenshots only through explicit user actions. The recovery area is designed to reduce mistakes, but recovery is not guaranteed in every situation. Back up important files before operating on them.",
    "terms.devices.title": "Devices, ADB, and permissions",
    "terms.devices.body": "Using the app requires macOS 14 or later, adb from Android platform-tools, a USB data cable, and USB debugging approval on the device. OpenDroidBridge is not intended to bypass Android or Meta Quest permissions. Use it in accordance with the terms and restrictions of device manufacturers, operating systems, Meta, Google, and Apple.",
    "terms.ai.title": "Optional AI integration",
    "terms.ai.body": "The AI chat feature is optional. If you configure an AI provider, review what you send and the provider's own terms. Do not enter secrets, third-party personal information, or file contents you are not authorized to send.",
    "terms.support.title": "Support and changes",
    "terms.support.body": "Support is provided through the method listed on the support page. Features, requirements, support methods, and these terms may be updated for improvements, legal compliance, or App Store requirement changes. Important changes will be shown on this site with an updated date.",
    "terms.disclaimer.title": "Disclaimer",
    "terms.disclaimer.body": "To the extent allowed by applicable law, OpenDroidBridge is provided as is. The developer does not guarantee that the app will work with every device, OS version, or ADB environment, or that every data loss scenario can be prevented. Disclaimers or limitations that are not permitted by mandatory law do not apply.",
    "terms.contact.title": "Contact",
    "terms.contact.body": "For questions about these terms, use the contact method listed on the support page.",

    "legal.title": "Specified Commercial Transactions Act Notice - OpenDroidBridge",
    "legal.description": "Specified Commercial Transactions Act notice for OpenDroidBridge, assuming a paid one-time App Store distribution model and listing price, payment, delivery, refunds, and requirements.",
    "legal.hero.eyebrow": "Legal Notice",
    "legal.hero.title": "Specified Commercial Transactions Act Notice",
    "legal.hero.lead": "This page summarizes transaction conditions for offering OpenDroidBridge in Japan as a paid one-time app. If this page conflicts with the App Store listing or Apple's procedures, the App Store listing and Apple procedures may apply first.",
    "legal.note.title": "Important",
    "legal.note.body": "This notice assumes OpenDroidBridge is offered as a paid one-time Mac App Store app. The phone number will be disclosed without delay when legally requested.",
    "legal.seller.title": "Seller",
    "legal.seller.body": "Yuto Masamura",
    "legal.manager.title": "Representative",
    "legal.manager.body": "Yuto Masamura",
    "legal.address.title": "Address",
    "legal.address.body": "Shibuya Dogenzaka Tokyu Building 2F-C, 1-10-8 Dogenzaka, Shibuya-ku, Tokyo 150-0043, Japan",
    "legal.contact.title": "Contact",
    "legal.contact.body": "info@tkgshoyu.jp. The phone number will be disclosed without delay when requested under Japan's Specified Commercial Transactions Act. To request disclosure, email with the subject 'Request for SCTA display items.'",
    "legal.price.title": "Sales price",
    "legal.price.body": "The price shown on the App Store product page. Price may vary by country or region, tax, and App Store pricing.",
    "legal.fees.title": "Required fees other than price",
    "legal.fees.body": "Users are responsible for internet access, data charges, USB cable, compatible devices, Mac hardware, and any environment needed to install Android platform-tools. No shipping fee applies because the app is digital.",
    "legal.payment.title": "Payment method and timing",
    "legal.payment.body": "Payment is processed at purchase through payment methods available in the App Store and Apple Account. The developer does not directly receive credit card numbers or other payment credentials.",
    "legal.delivery.title": "Delivery timing",
    "legal.delivery.body": "After App Store purchase is complete, the app becomes available for download from the App Store. Device, network, or App Store conditions may affect when use can begin.",
    "legal.cancel.title": "Returns, cancellation, and refunds",
    "legal.cancel.body": "Because this is a digital product, returns or cancellations for user convenience after purchase are generally not accepted by the developer. Refund requests for App Store purchases should follow Apple's process such as reportaproblem.apple.com. Contact support if the app has a defect.",
    "legal.environment.title": "Operating environment",
    "legal.environment.body": "macOS 14 or later, adb from Android platform-tools, a USB data cable, an Android device with USB debugging approved, or a Meta Quest with Developer Mode enabled are required. See the marketing and support pages for details.",
    "legal.special.title": "Special sales conditions",
    "legal.special.body": "The release model assumed on this site is paid one-time distribution through the Mac App Store. There are no subscriptions, in-app purchases, recurring purchase agreements, or physical shipments. If these are added later, this notice will be updated before use."
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
    ogImage.setAttribute("content", `https://zero-f00.github.io/OpenDroidBridge-site/OpenDroidBridge/assets/og-image-${lang}.png`);
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
