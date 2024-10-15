const express = require("express");
const generateBreadcrumb = require("../middleware/breadcrumbMiddleware");
const router = express.Router();

const incicatorMenu = [
  { name: "Dashboard", url: "/users", icon: "bi bi-grid-fill", active: false },
  {
    name: "Assessment",
    url: "/users/tasks",
    icon: "bi bi-file-check",
    active: false,
  },
];

router.get("/*", (req, res) => {
  res.render("dashboard", { content: "dashboard", sideMenu: sidebarMenu });
});


module.exports = router;
