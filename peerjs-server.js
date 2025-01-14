const { PeerServer } = require("peer");

const peerServer = PeerServer({
  port: process.env.PORT || 3001, // Use the Render-assigned port
  path: "/peerjs",
});

console.log("PeerJS server running...");
