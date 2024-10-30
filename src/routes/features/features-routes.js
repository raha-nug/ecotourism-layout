const express = require("express");
const themeRoutes = require("./theme-routes");
const router = express.Router();

router.use("/themes", themeRoutes);

module.exports = router;
