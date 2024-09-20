import { Router } from "express";
import { login, newAdmin } from "../controllers/admin";

const router = Router();

router.post("", newAdmin);

router.post("/login", login);

export default router;
