# 🧠 Matrix Rain 🌧️

> *"Unfortunately, no one can be told what the Matrix is. You have to see it for yourself."* - Morpheus

Terminal-based Matrix digital rain animation that brings the iconic "digital rain" effect from The Matrix films directly to your terminal. Choose the red pill 💊 and see how deep the rabbit hole goes...

*Read this in other languages: [English](README.en.md), [Português](README.pt-br.md), [Español](README.es.md), [Français](README.fr.md), [Deutsch](README.de.md), [中文](README.zh.md), [日本語](README.ja.md), [Русский](README.ru.md), [العربية](README.ar.md), [हिन्दी](README.hi.md)*

## ✨ Features

- 📊 Mesmerizing falling Matrix-style characters (katakana, numbers, and letters)
- 💬 Center-aligned message display ("THE MATRIX HAS YOU")
- ⏯️ Pause/resume with space bar (freeze time in the Matrix)
- 📝 Custom initial message support (be your own Oracle)
- 🔄 Message display API for creating timed sequences or interactive displays
- 🐇 Follow the white rabbit with interactive controls

## 💾 Installation

```bash
# Free your mind...
git clone https://github.com/frederico-kluser/the-matrix-rain.git
cd the-matrix-rain
npm install
```

## 🕹️ Usage

### Basic Usage

The `matrixRain` function returns a Promise, so it must be used with async/await or Promise chains:

```javascript
const matrixRain = require('the-matrix-rain');

// Example with async/await (There is no spoon)
async function startMatrix() {
  // Start with default "WAKE UP NEO" message or custom message
  const matrix = await matrixRain();  // or await matrixRain("CUSTOM MESSAGE");

  // Display a custom message
  matrix.display("THE MATRIX HAS YOU");

  // Stop the animation when done (exit the construct)
  matrix.stop();
}

// Call the async function
startMatrix();

// Alternative using Promise syntax (Remember... all I'm offering is the truth)
matrixRain().then(matrix => {
  matrix.display("THE MATRIX HAS YOU");
  
  // Later, stop the animation
  setTimeout(() => matrix.stop(), 5000);
});
```

### NPM Scripts

The project includes several npm scripts to run examples:

```bash
# Run the basic example (Blue pill option)
npm run example:basic

# Run with custom initial message (Speak like the Oracle)
npm run example:custom

# Run a timed sequence of messages (Like talking to the Architect)
npm run example:sequence

# Run interactive mode - type messages to display (Be your own Agent)
npm run example:interactive

# Run with random Matrix quotes (Like déjà vu in the Matrix)
npm run example:quotes

# List available examples (What if I told you...)
npm run examples
```

## 🧪 Examples

The `/examples` directory contains various demos showing different ways to use the Matrix Rain animation. 
You can run these examples using the npm scripts listed above.

- `examples/basic.js` - Simple example with default initial message
- `examples/custom-initial.js` - Custom initial message example (like choosing your own red pill)
- `examples/timed-sequence.js` - Timed sequence of messages (glitches in the Matrix)
- `examples/interactive.js` - Type messages to display while running (be the One)
- `examples/random-quotes.js` - Shows random Matrix movie quotes (wisdom from Zion)

Each example demonstrates different features of the Matrix Rain animation. To run an example directly:

```bash
node examples/interactive.js
```

## 🔌 API

### matrixRain([initialMessage])

Starts the Matrix rain animation.

- `initialMessage` (optional): Custom message to display initially (default: "WAKE UP NEO")
- Returns: Promise resolving to an object with `display` and `stop` methods

### matrix.display(message)

Displays a message in the center of the screen (like a glitch in the Matrix).

- `message`: String to display

### matrix.stop()

Stops the animation and cleans up the terminal (exit the Matrix).

## 🎮 Controls

- `Space`: Pause/resume the animation (freeze the Matrix)
- `M`: Show "MATRIX HAS YOU" message (feel the déjà vu)
- `Ctrl+C`: Exit the application (take the blue pill)

## 🔓 License

MIT

---

> *"I know kung fu."* - Neo