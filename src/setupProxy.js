const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "apps/demo-application",
    createProxyMiddleware({
      target: "https://geoanalytics.ai/",
      changeOrigin: true,
    })
  );
};
