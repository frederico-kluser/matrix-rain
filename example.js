// Example usage of the matrix rain module

// Import the matrix rain function
const matrixRain = require('./index');

// Start the matrix animation and get the instance
async function start() {
  const matrix = await matrixRain();
  
  // Change displayed message after 5 seconds
  setTimeout(() => {
    matrix.display("FOLLOW THE WHITE RABBIT");
  }, 5000);
  
  // Change displayed message after 10 seconds
  setTimeout(() => {
    matrix.display("KNOCK KNOCK NEO");
  }, 10000);
  
  // Stop the animation after 15 seconds
  setTimeout(() => {
    matrix.stop();
    console.log("Matrix animation stopped programmatically.");
  }, 15000);
}

// Run the example
start();