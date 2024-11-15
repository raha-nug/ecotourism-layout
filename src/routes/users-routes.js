const express = require("express");
const assessmentRoute = require("./assessment-routes");
const router = express.Router();

router.use("/*", (req, res, next) => {
  res.locals.originalUrl = req.originalUrl;
  next();
});

router.get("/", (req, res) => {
  res.render("templates/dashboard", {
    sidebar_include: "user-sidebar",
    content_include: "user-dashboard",
  });
});

router.get("/assessment", (req, res) => {
  res.render("templates/dashboard", {
    sidebar_include: "user-sidebar",
    content_include: "user-assessment",
  });
});

router.get("/profile/", (req, res) => {
  res.render("templates/dashboard", {
    sidebar_include: "user-sidebar",
    content_include: "user-profile",
  });
});

router.use("/assessment/", assessmentRoute);

module.exports = router;
