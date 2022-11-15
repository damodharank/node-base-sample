const http = require("http");
require("dotenv").config();

const hostname = "127.0.0.1";
const port = process.env.PORT || 3002;
const server = http.createServer((req, res) => {
  console.log("POST FROM ENV ===>", process.env.PORT);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello Node World welcome you ");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
