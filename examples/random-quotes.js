// Example with random Matrix movie quotes on a timer

// Import the matrix rain function
const matrixRain = require('../index');

// Famous quotes from The Matrix movies
const matrixQuotes = [
  "THERE IS NO SPOON",
  "FOLLOW THE WHITE RABBIT",
  "KNOCK KNOCK NEO",
  "THE MATRIX HAS YOU",
  "WELCOME TO THE DESERT OF THE REAL",
  "FREE YOUR MIND",
  "WHAT IS REAL?",
  "I KNOW KUNG FU",
  "CHOICE IS AN ILLUSION",
  "EVERYTHING THAT HAS A BEGINNING HAS AN END",
  "IGNORANCE IS BLISS",
  "THERE IS A DIFFERENCE BETWEEN KNOWING THE PATH AND WALKING THE PATH",
  "NEVER SEND A HUMAN TO DO A MACHINE'S JOB"
];

// Get a random quote from the array
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * matrixQuotes.length);
  return matrixQuotes[randomIndex];
}

// Start matrix rain with random quotes on a timer
async function startWithRandomQuotes() {
  // Start with a random quote
  const matrix = await matrixRain(getRandomQuote());
  
  // Display a new random quote every 5 seconds
  const quoteInterval = setInterval(() => {
    matrix.display(getRandomQuote());
  }, 5000);
  
  // Stop after 1 minute
  setTimeout(() => {
    clearInterval(quoteInterval);
    matrix.stop();
    console.log("Matrix animation stopped after 1 minute.");
  }, 60000);
}

// Run the example
startWithRandomQuotes();