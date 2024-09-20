import { Router } from "express";
import { login, newMember } from "../controllers/churchMember";

const router = Router();

router.post("", newMember);

router.post("/login", login);

export default router;
