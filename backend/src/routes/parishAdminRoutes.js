const { Router } = require("express");
const { login, newParishAdmin } = require("../controllers/parishAdmin");

const router = Router();

router.post("", newParishAdmin);

router.post("/login", login);

module.exports = router;
