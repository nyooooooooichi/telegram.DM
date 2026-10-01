# TelestgramDM 公開用

Firebase設定とWeb Push(VAPID)公開鍵は設定済みです。

GitHub Pagesで公開する場合:
1. GitHubで新しい公開Repositoryを作成
2. index.html と firebase-messaging-sw.js をアップロード
3. Settings → Pages
4. Source: Deploy from a branch
5. Branch: main / root
6. Save
7. 数分後に表示される https://ユーザー名.github.io/リポジトリ名/ を共有

注意:
- Authentication の「匿名」が有効になっている必要があります。
- Firestoreルールは同梱の firestore.rules と同じ内容にしてください。
- HTTPSで公開してください（GitHub PagesはHTTPS）。
- この版の通知は、ページが開いている/バックグラウンドタブにいる時に動作します。
- ブラウザを完全に閉じた状態でも、送信者の投稿をきっかけに全員へPush通知を送るには、Cloud Functions等のサーバー側送信処理が別途必要です。
