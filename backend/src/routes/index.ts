import { Express, Request, Response } from "express";

const adminRoutes = require("./adminRoutes");
const parishAdminRoutes = require("./parishAdminRoutes");

// const swaggerSpec = require("../../swagger");
// const swaggerUi = require("swagger-ui-express");

export function setupRoutes(app: Express) {
  // server swagger docs
  // app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get("/success", (_: Request, res: Response) => res.send("Successfull"));

  app.get("/failure", (_: Request, res: Response) => res.send("failure"));

  app.use("/admin", adminRoutes);
  app.use("/parish-admin", parishAdminRoutes);
}
