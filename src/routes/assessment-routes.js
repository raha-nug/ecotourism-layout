const express = require("express");
const router = express.Router();

router.get("/*", (req, res) => {
  res.render("templates/assessment-template", {
    sidebar_include: "assessment-sidebar",
    content_include: "assessment",
  });
});

module.exports = router;
