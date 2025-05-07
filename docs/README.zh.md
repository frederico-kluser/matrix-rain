# 🧠 黑客帝国数字雨 🌧️

> *"不幸的是，没有人能够被告知什么是母体（Matrix）。你必须亲自去看。"* - 墨菲斯

基于终端的黑客帝国数字雨动画，将电影《黑客帝国》中标志性的"数字雨"效果直接带入您的终端。选择红色药丸 💊，看看兔子洞有多深...

*其他语言版本: [English](README.en.md), [Português](README.pt-br.md), [Español](README.es.md), [Français](README.fr.md), [Deutsch](README.de.md), [中文](README.zh.md), [日本語](README.ja.md), [Русский](README.ru.md), [العربية](README.ar.md), [हिन्दी](README.hi.md)*

## ✨ 特性

- 📊 令人着迷的黑客帝国风格下落字符（片假名、数字和字母）
- 💬 居中显示消息（"THE MATRIX HAS YOU"）
- ⏯️ 使用空格键暂停/恢复（冻结母体中的时间）
- 📝 自定义初始消息支持（成为你自己的先知）
- 🔄 消息显示API，用于创建定时序列或交互式显示
- 🐇 使用交互式控件跟随白兔

## 💾 安装

```bash
# 释放你的思想...
git clone https://github.com/frederico-kluser/matrix-rain.git
cd matrix-rain
npm install
```

## 🕹️ 使用方法

### 基本用法

`matrixRain`函数返回一个Promise，所以必须使用async/await或Promise链：

```javascript
const matrixRain = require('./index');

// 使用async/await的示例（没有勺子）
async function startMatrix() {
  // 使用默认的"WAKE UP NEO"消息或自定义消息启动
  const matrix = await matrixRain();  // 或 await matrixRain("自定义消息");

  // 显示自定义消息
  matrix.display("THE MATRIX HAS YOU");

  // 完成后停止动画（退出构造）
  matrix.stop();
}

// 调用异步函数
startMatrix();

// 使用Promise语法的替代方案（记住...我提供的只是真相）
matrixRain().then(matrix => {
  matrix.display("THE MATRIX HAS YOU");
  
  // 稍后停止动画
  setTimeout(() => matrix.stop(), 5000);
});
```

### NPM脚本

该项目包含几个运行示例的npm脚本：

```bash
# 运行基本示例（蓝色药丸选项）
npm run example:basic

# 使用自定义初始消息运行（像先知一样说话）
npm run example:custom

# 运行定时消息序列（就像与设计师对话）
npm run example:sequence

# 运行交互模式 - 输入要显示的消息（成为你自己的特工）
npm run example:interactive

# 运行随机黑客帝国引用（像在母体中的似曾相识）
npm run example:quotes

# 列出可用示例（如果我告诉你...）
npm run examples
```

## 🧪 示例

`/examples`目录包含展示使用Matrix Rain动画不同方式的各种演示。
您可以使用上面列出的npm脚本运行这些示例。

- `examples/basic.js` - 带默认初始消息的简单示例
- `examples/custom-initial.js` - 自定义初始消息示例（就像选择你自己的红色药丸）
- `examples/timed-sequence.js` - 定时消息序列（母体中的故障）
- `examples/interactive.js` - 在运行时输入要显示的消息（成为救世主）
- `examples/random-quotes.js` - 显示随机的黑客帝国电影引用（锡安的智慧）

每个示例都展示了Matrix Rain动画的不同功能。要直接运行示例：

```bash
node examples/interactive.js
```

## 🔌 API

### matrixRain([initialMessage])

启动Matrix雨动画。

- `initialMessage`（可选）：最初显示的自定义消息（默认："WAKE UP NEO"）
- 返回：Promise，解析为具有`display`和`stop`方法的对象

### matrix.display(message)

在屏幕中央显示消息（像母体中的故障）。

- `message`：要显示的字符串

### matrix.stop()

停止动画并清理终端（退出母体）。

## 🎮 控制

- `空格`：暂停/恢复动画（冻结母体）
- `M`：显示"MATRIX HAS YOU"消息（感受似曾相识）
- `Ctrl+C`：退出应用程序（选择蓝色药丸）

## 🔓 许可证

MIT

---

> *"我会功夫。"* - 尼奥