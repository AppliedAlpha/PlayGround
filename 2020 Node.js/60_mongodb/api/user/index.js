const express = require("express");
const router = express.Router();
const ctrl = require("./user.ctrl");

router.get("/signup", ctrl.showSignupPage);
router.get("/login", ctrl.showLoginPage);

router.post("/signup", ctrl.signup);

module.exports = router;
