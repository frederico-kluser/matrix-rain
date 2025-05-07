# Matrix Rain Examples

This directory contains examples of how to use the Matrix Rain animation with different configurations and features.

## Examples

1. **Basic Usage** (`basic.js`)
   - Shows basic initialization with default message
   - Displays a custom message after 5 seconds
   - Automatically stops after 10 seconds

   ```bash
   node examples/basic.js
   ```

2. **Custom Initial Message** (`custom-initial.js`)
   - Starts with a custom initial message
   - Displays a new message after 5 seconds
   - Automatically stops after 10 seconds

   ```bash
   node examples/custom-initial.js
   ```

3. **Timed Message Sequence** (`timed-sequence.js`)
   - Displays a sequence of messages at predetermined times
   - Creates a narrative through a series of messages
   - Automatically stops after all messages have been displayed

   ```bash
   node examples/timed-sequence.js
   ```

4. **Interactive Messages** (`interactive.js`)
   - Allows you to type messages that appear in the matrix
   - Type any message and press Enter to display it
   - Type 'exit' to stop the animation

   ```bash
   node examples/interactive.js
   ```

## API Overview

```javascript
// Import the matrix rain function
const matrixRain = require('../index');

// Start matrix animation with optional initial message
const matrix = await matrixRain("CUSTOM MESSAGE");

// Display a new message at any time
matrix.display("NEW MESSAGE");

// Stop the animation when done
matrix.stop();
```