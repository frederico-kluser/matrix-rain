// Basic example of matrix rain usage

// Import the matrix rain function
const matrixRain = require('../index');

// Basic usage - uses default "WAKE UP NEO" message
async function startBasic() {
  const matrix = await matrixRain();
  
  // Display a message after 5 seconds
  setTimeout(() => {
    matrix.display("THE MATRIX HAS YOU");
  }, 5000);
  
  // Stop after 10 seconds
  setTimeout(() => {
    matrix.stop();
    console.log("Matrix animation stopped.");
  }, 10000);
}

// Run the example
startBasic();