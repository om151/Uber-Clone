const http = require("http");
const app = require("./app");
const port = process.env.PORT || 3000;
const { initializeSocket } = require("./socket");

const sever = http.createServer(app);
const io = initializeSocket(sever); // initialize socket.io

sever.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
