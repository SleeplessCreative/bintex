const express = require("express");

const authController = require("../controllers/authentication");

const router = express.Router();

router.post("/login", authController.login);

module.exports = router;
