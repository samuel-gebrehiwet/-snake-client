// input.js

let connection;

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
};
const handleUserInput = function (key) {
  if (key === "w") {
    connection.write("Move: up");
  } else if (key === "a") {
    connection.write("Move: left");
  } else if (key === "s") {
    connection.write("Move: down");
  } else if (key === "d") {
    connection.write("Move: right");
  } else if (key === "1") {
    connection.write("Say: Hello!");
  } else if (key === "2") {
    connection.write("Say: Have fun!");
  } else if (key === "3") {
    connection.write("Say: LOL");
  } // Add more cases for other keys/messages
};

module.exports = { setupInput };
