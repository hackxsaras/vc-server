const { PeerServer } = require("peer");
let port = 9000;
if(process.env && process.env.PORT) port = process.env.PORT;
const peerServer = PeerServer({ port, path: "/myapp" });