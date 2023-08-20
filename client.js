const net = require("net");
const { IP, PORT } = require("./constants");

// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");

  // Event listener for incoming data
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SAMI"); // Replace YOUR_INITIALS with your initials
    conn.write("Move: up"); // Send the Move: up command
  });

  return conn;
};

module.exports = { connect };
