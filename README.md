# TelestgramDM Mark.6

## Mark.6 追加機能
- 管理者専用パネル
- ピン留めメッセージ
- 管理者のお知らせ投稿
- 既読した人一覧
- リアクションした人一覧
- スマホ長押しメニュー
- @メンション強調 + ブラウザ通知
- 投票機能
- 参加 / ログアウト時のシステムメッセージ
- Mark.6 UI刷新
- スローモード
- PNGアプリアイコン 192 / 512
- PWAキャッシュ改善

## 既存機能
- 自動ログイン
- プロフィール写真 / ひとこと
- URLリンク化
- 最終オンライン
- 未読ライン
- 返信
- リアクション
- 編集 / 送信取り消し
- 検索
- 入力中表示
- 下書き保存
- 一番下へ移動
- テーマ / 文字サイズ / コンパクト表示

## 管理者コード
TGDM-ADMIN-2026

## 重要
Firebase Console → Firestore Database → ルール
で `firestore.rules` の中身に入れ替えて「公開」してください。

管理者コードは無料構成の簡易ロックです。
ルーム名・ピン留め・お知らせ等を画面上では管理者だけに見せますが、
GitHub Pagesだけでは完全なサーバー側権限にはなりません。

## GitHubへ上書きするファイル
- index.html
- firestore.rules
- manifest.webmanifest
- firebase-messaging-sw.js
- icon-192.png
- icon-512.png

公開後に古い画面が出る場合:
Ctrl + Shift + R
または URL の最後に `?v=6`
