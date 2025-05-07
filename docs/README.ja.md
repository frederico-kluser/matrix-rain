# 🧠 マトリックスレイン 🌧️

> *「残念ながら、マトリックスが何かを説明することはできない。自分自身で見るしかないのだ。」* - モーフィアス

マトリックス映画からの象徴的な「デジタルレイン」効果をターミナルに直接再現するターミナルベースのマトリックスデジタルレインアニメーション。赤い錠剤 💊 を選び、ウサギの穴がどれだけ深いか確かめてみましょう...

*他の言語で読む: [English](README.en.md), [Português](README.pt-br.md), [Español](README.es.md), [Français](README.fr.md), [Deutsch](README.de.md), [中文](README.zh.md), [日本語](README.ja.md), [Русский](README.ru.md), [العربية](README.ar.md), [हिन्दी](README.hi.md)*

## ✨ 特徴

- 📊 魅惑的なマトリックススタイルの落下文字（カタカナ、数字、文字）
- 💬 中央揃えのメッセージ表示（「THE MATRIX HAS YOU」）
- ⏯️ スペースバーでの一時停止/再開（マトリックスで時間を凍結）
- 📝 カスタム初期メッセージのサポート（自分自身のオラクルになる）
- 🔄 タイムドシーケンスやインタラクティブディスプレイを作成するためのメッセージ表示API
- 🐇 インタラクティブコントロールで白いウサギを追う

## 💾 インストール

### グローバルコマンドラインツールとして

```bash
# グローバルにインストール
npm install -g the-matrix-rain

# Matrix rainアニメーションを実行
matrix-rain

# カスタムメッセージで実行
matrix-rain "FOLLOW THE WHITE RABBIT"

# ランダムなマトリックスの引用を表示
matrix-rain --random

# インタラクティブモードで実行
matrix-rain --interactive

# 特定の時間実行（秒単位）
matrix-rain --time 30

# ヘルプとその他のオプション
matrix-rain --help
```

> **注意**：グローバルにインストールすると、`matrix-rain`コマンドは任意のターミナルから利用できます。`node index.js`を手動で実行する必要はありません！

### プロジェクトの依存関係として

```bash
# プロジェクトに追加
npm install the-matrix-rain

# または
yarn add the-matrix-rain
```

### ソースから

```bash
# 心を解放せよ...
git clone https://github.com/frederico-kluser/the-matrix-rain.git
cd the-matrix-rain
npm install
```

## 🕹️ 使用方法

### コマンドラインオプション

グローバルにインストールされている場合、次のコマンドラインオプションを使用できます：

```bash
# デフォルトの「WAKE UP NEO」メッセージで実行
matrix-rain

# カスタムメッセージで実行
matrix-rain "FOLLOW THE WHITE RABBIT"

# 特定の時間実行（秒単位）
matrix-rain --time 30

# ランダムなマトリックスの引用を表示
matrix-rain --random

# インタラクティブモード - 表示するメッセージを入力
matrix-rain --interactive

# ヘルプを表示
matrix-rain --help
```

### 基本的な使い方

`matrixRain`関数はPromiseを返すため、async/awaitまたはPromiseチェーンで使用する必要があります：

```javascript
const matrixRain = require('the-matrix-rain');

// async/awaitを使った例（スプーンなどない）
async function startMatrix() {
  // デフォルトの「WAKE UP NEO」メッセージまたはカスタムメッセージで開始
  const matrix = await matrixRain();  // または await matrixRain("カスタムメッセージ");

  // カスタムメッセージを表示
  matrix.display("THE MATRIX HAS YOU");

  // 終了時にアニメーションを停止（構築物から出る）
  matrix.stop();
}

// 非同期関数を呼び出す
startMatrix();

// Promiseの構文を使った代替方法（覚えておいて...私が提供するのは真実だけだ）
matrixRain().then(matrix => {
  matrix.display("THE MATRIX HAS YOU");
  
  // 後でアニメーションを停止
  setTimeout(() => matrix.stop(), 5000);
});
```

### NPMスクリプト

プロジェクトには例を実行するためのいくつかのnpmスクリプトが含まれています：

```bash
# 基本的な例を実行（青い錠剤オプション）
npm run example:basic

# カスタム初期メッセージで実行（オラクルのように話す）
npm run example:custom

# メッセージの時間シーケンスを実行（アーキテクトとの会話のように）
npm run example:sequence

# インタラクティブモードを実行 - 表示するメッセージを入力（自分自身のエージェントになる）
npm run example:interactive

# ランダムなマトリックス引用で実行（マトリックスでのデジャヴのように）
npm run example:quotes

# 利用可能な例を一覧表示（もし私があなたに言ったら...）
npm run examples
```

## 🧪 例

`/examples`ディレクトリには、Matrix Rainアニメーションを使用するさまざまな方法を示すデモが含まれています。
上記のnpmスクリプトを使用してこれらの例を実行できます。

- `examples/basic.js` - デフォルトの初期メッセージを持つ単純な例
- `examples/custom-initial.js` - カスタム初期メッセージの例（自分自身の赤い錠剤を選ぶように）
- `examples/timed-sequence.js` - メッセージの時間シーケンス（マトリックスのグリッチ）
- `examples/interactive.js` - 実行中に表示するメッセージを入力（選ばれし者になる）
- `examples/random-quotes.js` - マトリックス映画からのランダムな引用を表示（ザイオンの知恵）

各例はMatrix Rainアニメーションのさまざまな機能を示しています。例を直接実行するには：

```bash
node examples/interactive.js
```

## 🔌 API

### matrixRain([initialMessage])

Matrixレインアニメーションを開始します。

- `initialMessage`（オプション）：最初に表示するカスタムメッセージ（デフォルト：「WAKE UP NEO」）
- 戻り値：`display`および`stop`メソッドを持つオブジェクトに解決するPromise

### matrix.display(message)

画面中央にメッセージを表示します（マトリックスのグリッチのように）。

- `message`：表示する文字列

### matrix.stop()

アニメーションを停止し、ターミナルをクリーンアップします（マトリックスを出る）。

## 🎮 コントロール

- `スペース`：アニメーションの一時停止/再開（マトリックスを凍結）
- `M`：「MATRIX HAS YOU」メッセージを表示（デジャヴを感じる）
- `Ctrl+C`：アプリケーションを終了（青い錠剤を取る）

## 🔓 ライセンス

MIT

---

> *「カンフーを知っている。」* - ネオ