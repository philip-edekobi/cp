const express = require("express");
const path = require("path");
// const waitlistRoutes = require("./waitlistRoutes");

// const swaggerSpec = require("../../swagger");
// const swaggerUi = require("swagger-ui-express");

module.exports.setupRoutes = function (app) {
  // server swagger docs
  // app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get("/success", (_, res) => res.send("Successfull"));

  app.get("/failure", (_, res) => res.send("failure"));

  // app.use("/waitlist", waitlistRoutes);
};
