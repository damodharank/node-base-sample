require("dotenv").config();
const fs = require("fs");

function buildConfig() {
  let config = {
    serviceUrl: process.env.SERVICE_URL,
    port: process.env.PORT || 3005,
    https: {
      key: process.env.HTTPS_KEY,
      cert: process.env.HTTPS_CERT,
    },
  };

  config.isHttps = isHttps(config);
  if (config.isHttps) {
    config = loadCertificateFiles(config);
  }
  return config;
}

function isHttps(config) {
  return config.https.key > "" && config.https.cert > "";
}

function loadCertificateFiles(config) {
  // load https certs file content
  if (config && config.https) {
    ["key", "cert"].forEach((key) => {
      if (config.https[key]) {
        let file = config.https[key];
        config.https[key] = fs.readFileSync(file);
      }
    });
  }
  return config;
}

function buildServerConfigFromParams() {
  return buildConfig();
}

const serverConfig = buildServerConfigFromParams();

module.exports = serverConfig;
