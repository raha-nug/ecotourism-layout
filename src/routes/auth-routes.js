const express = require("express");
const generateBreadcrumb = require("../middleware/breadcrumbMiddleware");
const router = express.Router();

router.post("/login", (req, res) => {
  const sidebarMenu = [
    {
      name: "Dashboard",
      url: "/users",
      icon: "bi bi-grid-fill",
      active: false,
    },
    {
      name: "Assessment",
      url: "/users/tasks",
      icon: "bi bi-file-check",
      active: false,
    },
    {
      name: "Profile",
      url: "/users/profile",
      icon: "bi bi-person",
      active: false,
    },
  ];
  if (req.body.email === "userTest") {
    return res.redirect('/users')
  } else if (req.body.email === "auditorTest") {
    return res.redirect("/auditor");
  } else return res.sendFile(path.join(__dirname, "src/views/auth/login.html"));
});

module.exports = router;
