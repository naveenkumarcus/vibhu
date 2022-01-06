
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
    "/api/course/",
    createProxyMiddleware({
    //   target: "http://vibhu-smart-learn-alb-81055878.ap-south-1.elb.amazonaws.com",
      target: "http://localhost:4500",
      changeOrigin: true,
    })
  );
  app.use(
    "/api/order/",
    createProxyMiddleware({
      target: "http://vibhu-smart-learn-alb-81055878.ap-south-1.elb.amazonaws.com",
      changeOrigin: true,
    })
  );
  //   app.use(
  //     '/api/upload/',
  //     createProxyMiddleware({
  //       target: 'http://localhost:3080',
  //       changeOrigin: true,
  //     })
  //   );
};
