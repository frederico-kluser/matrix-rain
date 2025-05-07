#!/usr/bin/env node

const matrixRain = require('../index');

// Define command line arguments
const args = process.argv.slice(2);
const HELP_MESSAGE = `
🧠 Matrix Rain 🌧️ - Terminal-based Matrix digital rain animation

Usage: matrix-rain [options] [message]

Options:
  -h, --help              Display this help message
  -t, --time <seconds>    Run for specific time in seconds
  -r, --random            Display random Matrix quotes
  -i, --interactive       Interactive mode - type messages to display

Examples:
  matrix-rain                     Run with default "WAKE UP NEO" message
  matrix-rain "FOLLOW THE RABBIT" Run with custom message
  matrix-rain -t 10               Run for 10 seconds
  matrix-rain -r                  Show random Matrix quotes
  matrix-rain -i                  Interactive mode
`;

async function run() {
  // Parse args
  let timeLimit = null;
  let initialMessage = "WAKE UP NEO";
  let randomQuotes = false;
  let interactive = false;

  // Process arguments
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    
    if (arg === '-h' || arg === '--help') {
      console.log(HELP_MESSAGE);
      process.exit(0);
    } else if (arg === '-t' || arg === '--time') {
      timeLimit = parseInt(args[i + 1], 10) * 1000 || 10000;
      i++; // Skip next argument since we've used it
    } else if (arg === '-r' || arg === '--random') {
      randomQuotes = true;
    } else if (arg === '-i' || arg === '--interactive') {
      interactive = true;
    } else if (!arg.startsWith('-')) {
      // If it's not an option flag, treat as message
      initialMessage = arg;
    }
  }

  // Start the matrix rain
  const matrix = await matrixRain(initialMessage);

  // Handle random quotes if enabled
  if (randomQuotes) {
    const quotes = [
      "THE MATRIX HAS YOU",
      "FOLLOW THE WHITE RABBIT",
      "KNOCK KNOCK, NEO",
      "THERE IS NO SPOON",
      "FREE YOUR MIND",
      "WELCOME TO THE DESERT OF THE REAL",
      "RED PILL OR BLUE PILL?",
      "WHAT IS REAL?",
      "THE ANSWER IS OUT THERE",
      "I KNOW KUNG FU"
    ];
    
    let quoteIndex = 0;
    
    const quoteInterval = setInterval(() => {
      matrix.display(quotes[quoteIndex]);
      quoteIndex = (quoteIndex + 1) % quotes.length;
    }, 4000);
    
    // Clean up interval on exit
    const cleanUp = () => {
      clearInterval(quoteInterval);
    };
    
    process.on('SIGINT', cleanUp);
    process.on('exit', cleanUp);
  }

  // Handle interactive mode if enabled
  if (interactive) {
    console.log('\x1b[2J'); // Clear the console
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (data) => {
      const message = data.toString().trim();
      if (message) {
        matrix.display(message);
      }
    });
  }

  // If time limit is set, stop after that time
  if (timeLimit !== null) {
    setTimeout(() => {
      matrix.stop();
      process.exit(0);
    }, timeLimit);
  }
}

// Run the application
run().catch(error => {
  console.error('An error occurred:', error);
  process.exit(1);
});