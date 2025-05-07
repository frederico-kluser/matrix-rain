// Simple runner script for the-matrix-rain index.js module

// Import the matrix rain function
const matrixRain = require('./index');

// Start the matrix animation with default settings
// This will run in the current terminal with "WAKE UP NEO" message
async function main() {
  try {
    const matrix = await matrixRain();
    
    // Show a different message after 5 seconds
    setTimeout(() => {
      matrix.display("THE MATRIX HAS YOU");
    }, 5000);
    
    // Stop the animation after 15 seconds
    setTimeout(() => {
      matrix.stop();
      console.log("Matrix animation completed!");
    }, 15000);
  } catch (error) {
    console.error("Error running matrix rain:", error);
  }
}

// Run the main function
main();