# TelestgramDM v5

## 追加・改善
- 始めるボタンのエラー表示
- 自動ログイン
- プロフィール写真
- プロフィール / ひとこと
- 最終オンライン
- 未読ライン
- @メンション候補
- URL自動リンク
- 一番下へ移動
- 返信
- リアクション
- 自分のメッセージ編集
- 送信取り消し
- メッセージ検索
- 入力中表示
- 下書き自動保存
- ルームURLコピー
- ルーム名変更
- 管理者コード
- テーマ切替
- 文字サイズ変更
- コンパクト表示
- アプリアイコン / PWA
- スマホ表示改善
- 通信を軽量化

## 管理者コード
TGDM-ADMIN-2026

## 重要
Firebase Console → Firestore Database → ルール
に `firestore.rules` の中身を貼って「公開」してください。

管理者コードはGitHub Pagesだけで動く簡易ロックです。
完全なサーバー側管理者権限ではありません。

## GitHubへ上書き
- index.html
- firestore.rules
- manifest.webmanifest
- icon.svg
- firebase-messaging-sw.js

公開後、古い画面が出る場合:
Ctrl + Shift + R
または URL の最後に ?v=5
