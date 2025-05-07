// Basic example of matrix rain usage

// Import the matrix rain function
const matrixRain = require('../index');

// Track the matrix instance for cleanup
let matrixInstance = null;

// Basic usage - uses default "WAKE UP NEO" message
async function startBasic() {
  matrixInstance = await matrixRain();
  
  // Display a message after 5 seconds
  setTimeout(() => {
    if (matrixInstance) {
      matrixInstance.display("THE MATRIX HAS YOU");
    }
  }, 5000);
  
  // Stop after 10 seconds
  setTimeout(() => {
    if (matrixInstance) {
      matrixInstance.stop();
      matrixInstance = null;
      console.log("Matrix animation stopped.");
      process.exit(0);
    }
  }, 10000);
}

// Graceful shutdown handling
process.on('SIGINT', () => {
  if (matrixInstance) {
    matrixInstance.stop();
    matrixInstance = null;
    console.log("\nMatrix animation interrupted by user.");
    process.exit(0);
  }
});

// Run the example
startBasic();