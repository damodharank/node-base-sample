const http = require("http");
const { Server } = require("./server");
const serverConfig = require('./server-config');
const {
  https: { key, cert },
  port,
  isHttps,
  serviceUrl,
} = serverConfig;

// HTTP Server 
async function startHttpServer() {
  console.log("Start Http Server ...");
  const { httpServer } = await Server.GetHttpServer();
  httpServer.listen(port);
  console.log(`Server running at http://${serviceUrl}:${port}/`);
}
//HTTPS Server
async function startHttpsServer() {
  console.log("Start Https Server ...");
  const credentials = { key, cert };
  const { httpsServer } = await Server.GetHttpsServer(credentials);
  await new Promise((resolve) =>
    httpsServer.listen(
      {
        port: JSON.parse(port),
      },
      resolve
    )
  );
  console.log(`Server running at http://${serviceUrl}:${port}/`);
}
startHttpServer();


