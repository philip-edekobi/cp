import { Express, Request, Response } from "express";

import adminRoutes from "./adminRoutes";
import parishAdminRoutes from "./parishAdminRoutes";
import churchMemberRoutes from "./churchMemberRoutes";
import subscriptionRoutes from "./subscriptionRoutes";
import contributionRoutes from "./contributionRoutes";
import programRoutess from "./programRoutes";
import attendanceRoutes from "./attendanceRoutes";
import inventoryRoutes from "./inventoryRoutes";

import { swaggerSpec } from "../swagger";
import swaggerUi from "swagger-ui-express";

export function setupRoutes(app: Express) {
  // serve swagger docs

  app.get("/success", (_: Request, res: Response) => res.send("Successfull"));

  app.get("/failure", (_: Request, res: Response) => res.send("failure"));

  app.use("/admin", adminRoutes);
  app.use("/parish-admin", parishAdminRoutes);
  app.use("/member", churchMemberRoutes);
  app.use("/subscription", subscriptionRoutes);
  app.use("/contribution", contributionRoutes);
  app.use("/inventory", inventoryRoutes);
  app.use("/program", programRoutess);
  app.use("/attendance", attendanceRoutes);

  app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
