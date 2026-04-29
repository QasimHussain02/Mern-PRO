const { log } = require("console");
const app = require("./app");
const port = process.env.PORT || 3000;
const connectDb = require("./db/db");
const http = require("http");
connectDb();
const server = http.createServer(app);

server.listen(port, () => {
  console.log("The server is connected to " + port);
});
