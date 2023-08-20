const net = require("net");

// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', // Replace with the server's IP address
    port: 50541, // Replace with the server's port number
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");

  // Event listener for incoming data
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: YOUR_INITIALS"); // Replace YOUR_INITIALS with your initials
    conn.write("Move: up"); // Send the Move: up command
  });
  

  return conn;
};

module.exports = { connect };
