import { Router } from "express";
import { login, newParishAdmin } from "../controllers/parishAdmin";

const router = Router();

router.post("", newParishAdmin);

router.post("/login", login);

export default router;
