import { Router } from "express";
import { initSub } from "../controllers/subscription";
import { auth } from "../middleware/auth";

const router = Router();

router.post("", initSub);

export default router;
