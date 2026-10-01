# TelestgramDM FREE

完全無料構成です。
Firebase Storageは使いません。

機能:
- テキストチャット
- 既読人数
- 送信取り消し
- 通知設定
- 設定画面
- 設定内キャッシュリセット
- 新UI

使うFirebase機能:
- Authentication（匿名ログイン）
- Firestore Database
- Cloud Messaging（ブラウザ通知用）

## Firestoreルール
Firebase Console → Firestore Database → ルール
`firestore.rules` の内容に置き換えて公開してください。

## GitHubで更新するファイル
- index.html
- firebase-messaging-sw.js
- firestore.rules
- README.md

※ 画像、動画、ボイスメッセージはありません。
※ Firebase Storageは不要です。
