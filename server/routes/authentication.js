const express = require("express");

const loginController = require("../controllers/authentication/login");

const router = express.Router();

router.post("/login", loginController.login);

module.exports = router;
