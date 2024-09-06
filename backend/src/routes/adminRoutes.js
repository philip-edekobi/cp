const { Router } = require("express");
const { login, newAdmin } = require("../controllers/admin");

const router = Router();

router.post("", newAdmin);

router.post("/login", login);

module.exports = router;
