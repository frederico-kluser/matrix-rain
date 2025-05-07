// This example shows how to use Matrix Rain as a module in an application

// Import the Matrix Rain animation
const matrixRain = require('../index');

// Create a simple terminal-based interface
const readline = require('readline');

// Create command menu
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// State to track matrix instance
let matrixInstance = null;
let isRunning = false;

// Display menu
function showMenu() {
  console.clear();
  console.log('\x1b[32m'); // Green text
  console.log("🧠 MATRIX RAIN CONTROL PANEL 🌧️\n");
  console.log("1. Start Matrix Rain");
  console.log("2. Display custom message");
  console.log("3. Pause/Resume animation");
  console.log("4. Stop Matrix Rain");
  console.log("5. Exit program");
  console.log('\x1b[0m'); // Reset color
  
  rl.question("\nEnter choice (1-5): ", handleChoice);
}

// Handle user menu choice
async function handleChoice(choice) {
  switch (choice.trim()) {
    case '1': // Start Matrix Rain
      if (!isRunning) {
        console.log("Starting Matrix Rain...");
        matrixInstance = await matrixRain("MATRIX CONTROL PANEL");
        isRunning = true;
        console.log("Matrix Rain started. Press Enter to return to menu.");
        rl.question("", showMenu);
      } else {
        console.log("Matrix Rain is already running!");
        setTimeout(showMenu, 1500);
      }
      break;
      
    case '2': // Display custom message
      if (isRunning && matrixInstance) {
        rl.question("Enter message to display: ", (message) => {
          matrixInstance.display(message);
          console.log(`Displaying message: "${message}"`);
          setTimeout(showMenu, 1500);
        });
      } else {
        console.log("Matrix Rain is not running! Start it first.");
        setTimeout(showMenu, 1500);
      }
      break;
      
    case '3': // Pause/Resume
      if (isRunning && matrixInstance) {
        // We don't have direct access to togglePause() from the public API,
        // but pressing space does this, so we could simulate that
        process.stdin.write(' ');
        console.log("Toggled pause/resume state");
        setTimeout(showMenu, 1500);
      } else {
        console.log("Matrix Rain is not running! Start it first.");
        setTimeout(showMenu, 1500);
      }
      break;
      
    case '4': // Stop Matrix Rain
      if (isRunning && matrixInstance) {
        matrixInstance.stop();
        matrixInstance = null;
        isRunning = false;
        console.log("Matrix Rain stopped");
        setTimeout(showMenu, 1500);
      } else {
        console.log("Matrix Rain is not running!");
        setTimeout(showMenu, 1500);
      }
      break;
      
    case '5': // Exit program
      console.log("Exiting program...");
      if (isRunning && matrixInstance) {
        matrixInstance.stop();
      }
      rl.close();
      process.exit(0);
      break;
      
    default:
      console.log("Invalid choice! Please enter a number between 1-5.");
      setTimeout(showMenu, 1500);
  }
}

// Handle program exit
process.on('SIGINT', () => {
  if (isRunning && matrixInstance) {
    matrixInstance.stop();
  }
  rl.close();
  process.exit(0);
});

// Start the program
console.log("Welcome to the Matrix Rain Control Panel");
showMenu();