const express = require("express");
const generateBreadcrumb = require("../middleware/breadcrumbMiddleware");
const router = express.Router();

router.post("/login", (req, res) => {
  console.log(req.body);
  if (req.body.email === "userTest") {
    return res.render("dashboard", {
      content: "dashboard",
      sideMenu: sidebarMenu,
    });
  } else if (req.body.email === "auditorTest") {
    return res.redirect("/auditor");
  } else return res.sendFile(path.join(__dirname, "src/views/auth/login.html"));
});

module.exports = router;
