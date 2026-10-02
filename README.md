# TelestgramDM Mark.7.2

追加:
- 管理者がメンバーを退会させる
- 退会理由
- 書き込み禁止 / 解除
- 管理者バッジ
- メンバー検索
- ルーム説明
- オンライン状態
- お気に入りメッセージ
- お気に入り一覧からジャンプ
- 投票締切
- Mark.7 UI調整

管理者コード: TGDM-ADMIN-2026

重要: Firebase Console → Firestore Database → ルール で firestore.rules の中身に入れ替えて公開してください。

管理者コードは無料構成の簡易管理者です。退会・書き込み禁止は通常利用には効きますが、改造クライアントまで完全に防ぐサーバー管理者認証ではありません。

GitHubへ上書き:
- index.html
- firestore.rules
- manifest.webmanifest
- firebase-messaging-sw.js
- icon-192.png
- icon-512.png

公開後: https://nyooooooooichi.github.io/telegram.DM/?v=7


## Mark.7.1 修正
- 送信ボタンを明示的に送信処理へ接続
- 送信中 / 成功 / 失敗を画面に表示
- 失敗時はFirebaseのエラーコードも表示
- ChromebookではEnterで送信、Shift+Enterで改行


## Mark.7.2 修正
- 古い100件ではなく最新100件をリアルタイム表示
- 新規送信が100件超過後に見えなくなる問題を修正
