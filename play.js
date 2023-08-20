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
  conn.on("data", (data) => {
    console.log("Message from server:", data);
  });

  return conn;
};

console.log("Connecting ...");
connect();
