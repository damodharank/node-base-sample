const express = require("express");
const http = require("http");
const https = require("https");
const cors = require("cors");
const compression = require("compression");

class Server {
  static app;
  // FOR EXPRESS APP
  static async GetExpressApp() {
    const app = express();
    app.use(cors());
    app.use(compression());
    
    return app;
  }

  //FOR APOLLO SERVER
  static async GetApolloServer() {
    return null;
  }
  // FOR HTTP SERVER
  static async GetHttpServer() {
    let expApp = this.GetExpressApp();
    const httpSrv = http.createServer(expApp);
    return { httpServer: httpSrv, app: expApp };
  }

  // FOR HTTP SERVER
  static async GetHttpsServer(credentials) {
    let expApp = this.GetExpressApp();
    const httpsSrv = https.createServer(credentials , expApp);
    return { httpsServer: httpsSrv, app: expApp };
  }

  // RETURN ALL SERVER
  static async GetAllServer() {
    let expApp = this.GetExpressApp();
    let apolloServer = this.GetExpressApp();
    let httpSrv = this.GetHttpServer();
    return { apolloServer: apolloServer, httpServer: httpSrv, app: expApp };
  }
}

module.exports = {
  Server,
};
