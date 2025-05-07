// Example with interactive input for displaying messages

// Import required modules
const matrixRain = require('../index');
const readline = require('readline');

// Create interface for reading from terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Start matrix rain with interactive messages
async function startInteractive() {
  console.log("Starting Matrix Rain animation...");
  console.log("Type messages to display in the Matrix (or 'exit' to quit)");
  
  // Start with no initial message (empty string)
  const matrix = await matrixRain("");
  
  // Function to prompt for messages
  function promptForMessage() {
    rl.question('Enter message: ', (message) => {
      if (message.toLowerCase() === 'exit') {
        matrix.stop();
        rl.close();
        console.log("Matrix animation stopped.");
        return;
      }
      
      // Display the entered message
      matrix.display(message);
      
      // Prompt for next message
      promptForMessage();
    });
  }
  
  // Start prompting for messages
  promptForMessage();
}

// Run the interactive example
startInteractive();

// Cleanup on exit
process.on('SIGINT', () => {
  rl.close();
  process.exit();
});