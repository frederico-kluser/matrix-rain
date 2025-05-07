// Example with custom initial message

// Import the matrix rain function
const matrixRain = require('../index');

// Usage with custom initial message
async function startWithCustomMessage() {
  const matrix = await matrixRain("SYSTEM INITIALIZED");
  
  // Display a message after 5 seconds
  setTimeout(() => {
    matrix.display("ACCESS GRANTED");
  }, 5000);
  
  // Stop after 10 seconds
  setTimeout(() => {
    matrix.stop();
    console.log("Matrix animation stopped.");
  }, 10000);
}

// Run the example
startWithCustomMessage();