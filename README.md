# Matrix Rain

Terminal-based Matrix digital rain animation with message display capabilities. Recreates the iconic "digital rain" effect from The Matrix films, directly in your terminal.

## Features

- Displays falling Matrix-style characters (katakana, numbers, and letters)
- Center-aligned message display
- Pause/resume with space bar
- Custom initial message support
- Message display API for creating timed sequences or interactive displays

## Installation

```bash
git clone https://github.com/frederico-kluser/matrix-rain.git
cd matrix-rain
npm install
```

## Usage

### Basic Usage

The `matrixRain` function returns a Promise, so it must be used with async/await or Promise chains:

```javascript
const matrixRain = require('./index');

// Example with async/await
async function startMatrix() {
  // Start with default "WAKE UP NEO" message or custom message
  const matrix = await matrixRain();  // or await matrixRain("CUSTOM MESSAGE");

  // Display a custom message
  matrix.display("THE MATRIX HAS YOU");

  // Stop the animation when done
  matrix.stop();
}

// Call the async function
startMatrix();

// Alternative using Promise syntax
matrixRain().then(matrix => {
  matrix.display("THE MATRIX HAS YOU");
  
  // Later, stop the animation
  setTimeout(() => matrix.stop(), 5000);
});
```

### NPM Scripts

The project includes several npm scripts to run examples:

```bash
# Run the basic example
npm run example:basic

# Run with custom initial message
npm run example:custom

# Run a timed sequence of messages
npm run example:sequence

# Run interactive mode (type messages to display)
npm run example:interactive

# Run with random Matrix quotes
npm run example:quotes

# List available examples
npm run examples
```

## Examples

The `/examples` directory contains various demos showing different ways to use the Matrix Rain animation. 
You can run these examples using the npm scripts listed above.

- `examples/basic.js` - Simple example with default initial message
- `examples/custom-initial.js` - Custom initial message example
- `examples/timed-sequence.js` - Timed sequence of messages
- `examples/interactive.js` - Type messages to display while running
- `examples/random-quotes.js` - Shows random Matrix movie quotes

Each example demonstrates different features of the Matrix Rain animation. To run an example directly:

```bash
node examples/interactive.js
```

## API

### matrixRain([initialMessage])

Starts the Matrix rain animation.

- `initialMessage` (optional): Custom message to display initially (default: "WAKE UP NEO")
- Returns: Promise resolving to an object with `display` and `stop` methods

### matrix.display(message)

Displays a message in the center of the screen.

- `message`: String to display

### matrix.stop()

Stops the animation and cleans up the terminal.

## Controls

- `Space`: Pause/resume the animation
- `M`: Show "MATRIX HAS YOU" message (when using the default mode)
- `Ctrl+C`: Exit the application

## License

MIT