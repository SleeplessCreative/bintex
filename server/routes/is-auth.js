const express = require("express");

const isAuth = require("../middlewares/is-auth");

const router = express.Router();

router.post("/", isAuth);

module.exports = router;
