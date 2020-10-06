const express = require("express");

const loginController = require("../controllers/authentication/login");
const registerController = require("../controllers/authentication/register");

const router = express.Router();

router.post("/login", loginController.login);
router.post("/register", registerController.login);

module.exports = router;
