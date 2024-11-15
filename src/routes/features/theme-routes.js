const express = require("express");
const { getThemes } = require("../../controllers/theme.controller");
const router = express.Router();

router.get("/", getThemes);

module.exports = router;
