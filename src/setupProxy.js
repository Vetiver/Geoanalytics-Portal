const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/apps/demo-application",
    createProxyMiddleware({
      target: "http://geoanalytics.ai:8000",
      changeOrigin: true,
    })
  );
};
