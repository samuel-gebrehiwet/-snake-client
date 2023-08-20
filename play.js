const net = require("net");
const { connect } = require("./client"); // Import the connect function from client.js

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput); // Register the event listener for keyboard input

  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') { // Check for CTRL + C input (End of Text)
    process.exit(); // Terminate the game
  }
};

console.log("Connecting ...");
const conn = connect();
setupInput(conn);
