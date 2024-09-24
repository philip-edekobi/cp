import { Express, Request, Response } from "express";

import adminRoutes from "./adminRoutes";
import parishAdminRoutes from "./parishAdminRoutes";
import churchMemberRoutes from "./churchMemberRoutes";
import { swaggerSpec } from "../swagger";
import swaggerUi from "swagger-ui-express";

export function setupRoutes(app: Express) {
  // serve swagger docs

  app.get("/success", (_: Request, res: Response) => res.send("Successfull"));

  app.get("/failure", (_: Request, res: Response) => res.send("failure"));

  app.use("/admin", adminRoutes);
  app.use("/parish-admin", parishAdminRoutes);
  app.use("/member", churchMemberRoutes);

  app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
