import { Router } from "express";
import {
  newContribution,
  oneContribution,
  editContribution,
  allContributions,
  allParishContributions,
  newContributionType,
  oneContributionType,
  editContributionType,
  deleteContributionType,
  allContributionTypes,
  parishContributionTypes,
} from "../controllers/contribution";
import { auth, isParishAdmin, isAdmin } from "../middleware/auth";

const router = Router();

router.get("/all", auth, isAdmin, allContributions);

router.get("", auth, allParishContributions);

router.get("/:id", auth, oneContribution);

router.post("", auth, isParishAdmin, newContribution);

router.patch("/:id", auth, editContribution);

// contribution type routes

router.get("/type/all", auth, isAdmin, allContributionTypes);

router.get("/type", auth, parishContributionTypes);

router.get("/type/:id", auth, oneContributionType);

router.post("/type", auth, isParishAdmin, newContributionType);

router.patch("/type/:id", auth, auth, editContributionType);

router.delete("/type/:id", auth, deleteContributionType);

export default router;
