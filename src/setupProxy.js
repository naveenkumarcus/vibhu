
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/authn/",
    createProxyMiddleware({
      target: "http://vibhu-smart-learn-alb-81055878.ap-south-1.elb.amazonaws.com",
    //   target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
  app.use(
    "/api/user/",
    createProxyMiddleware({
      target: "http://vibhu-smart-learn-alb-81055878.ap-south-1.elb.amazonaws.com",
    //   target: "http://localhost:4000",
      changeOrigin: true,
    })
  );
  app.use(
    ["/api/course/", "/api/content/","/api/order/"],
    createProxyMiddleware({
      // target: "http://vibhu-smart-learn-alb-81055878.ap-south-1.elb.amazonaws.com",
      target: "http://localhost:4500",
      changeOrigin: true,
    })
  );
};
