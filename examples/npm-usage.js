// This example shows how to use matrix-rain as an npm package in your own project
// Usage: npm install the-matrix-rain

// Import the matrix-rain package
const matrixRain = require('the-matrix-rain');

// Messages to display in sequence
const messages = [
  "INSTALLING MATRIX",
  "CONNECTING TO MAINFRAME",
  "ACCESS GRANTED",
  "WELCOME TO THE REAL WORLD"
];

// Simple function to create a delay
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Function to run the demo
async function runMatrixDemo() {
  console.log("Starting Matrix Rain demo...");
  
  try {
    // Initialize with custom message
    const matrix = await matrixRain("MATRIX RAIN DEMO");
    
    // Display messages in sequence with delays
    for (const message of messages) {
      await delay(3000); // Wait 3 seconds between messages
      matrix.display(message);
    }
    
    // After displaying all messages, wait 5 seconds and then exit
    await delay(5000);
    
    // Clean up and exit
    matrix.stop();
    console.log("Matrix Rain demo completed.");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Run the demo
runMatrixDemo();