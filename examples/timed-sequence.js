// Example with timed sequence of messages

// Import the matrix rain function
const matrixRain = require('../index');

// Usage with a timed sequence of messages
async function startWithSequence() {
  // Start with custom initial message
  const matrix = await matrixRain("INITIALIZING SYSTEM");
  
  // Create a sequence of messages with timing
  const messageSequence = [
    { text: "SCANNING NETWORK", time: 3000 },
    { text: "ACCESS POINTS DETECTED", time: 6000 },
    { text: "BYPASSING SECURITY", time: 9000 },
    { text: "FIREWALL BREACHED", time: 12000 },
    { text: "DOWNLOADING DATA", time: 15000 },
    { text: "DOWNLOAD COMPLETE", time: 18000 },
    { text: "ERASING TRACKS", time: 21000 },
    { text: "OPERATION SUCCESSFUL", time: 24000 }
  ];
  
  // Display each message at its specified time
  messageSequence.forEach(({ text, time }) => {
    setTimeout(() => {
      matrix.display(text);
    }, time);
  });
  
  // Stop the animation after all messages have been displayed (plus a little extra time)
  setTimeout(() => {
    matrix.stop();
    console.log("Sequence complete. Matrix animation stopped.");
  }, 27000);
}

// Run the example
startWithSequence();