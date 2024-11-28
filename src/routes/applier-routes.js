const express = require("express");
const assessmentRoute = require("./assessment-routes");
const { getAllData } = require("../controllers/applier.controller");
const router = express.Router();

router.use("/*", (req, res, next) => {
  res.locals.originalUrl = req.originalUrl;
  next();
});

router.get("/", (req, res) => {
  res.render("templates/dashboard", {
    sidebar_include: "applier-sidebar",
    content_include: "applier-dashboard",
  });
});

router.get("/assessment", async (req, res) => {
  const data = await getAllData(req, res);
  res.render("templates/dashboard", {
    data: data,
    sidebar_include: "applier-sidebar",
    content_include: "applier-assessment",
  });
});

router.get("/profile/", (req, res) => {
  res.render("templates/dashboard", {
    sidebar_include: "applier-sidebar",
    content_include: "applier-profile",
  });
});

router.use("/assessment/theme/", assessmentRoute);

module.exports = router;
