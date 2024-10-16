const express = require("express");
const generateBreadcrumb = require("../middleware/breadcrumbMiddleware");
const router = express.Router();

const sidebarMenu = [
    { name: "Dashboard", url: "/auditor", icon: "bi bi-grid-fill", active: false },
    {
      name: "Assessment & Reporting",
      url: "/auditor/tasks",
      icon: `bi bi-clipboard-check`,
      active: false,
    },
    // {
    //   name: "Action plans",
    //   url: "/auditor/action-plans",
    //   icon: `bi bi-clipboard-check`,
    //   active: false,
    // },
    // {
    //   name: "Sustainability report",
    //   url: "/auditor/sustainability-report",
    //   icon: `bi bi-clipboard-check`,
    //   active: false,
    // },
    // {
    //   name: "Remarks Report",
    //   url: "/auditor/remark-report",
    //   icon: `bi bi-clipboard-check`,
    //   active: false,
    // },
    // {
    //   name: "Audit Report",
    //   url: "/auditor/report",
    //   icon: `bi bi-clipboard-check`,
    //   active: false,
    // },
    // {
    //   name: "Guidance Report",
    //   url: "/auditor/gudance-report",
    //   icon: `bi bi-clipboard-check`,
    //   active: false,
    // },
    // {
    //   name: "All Documents",
    //   url: "/auditor/gudance-report",
    //   icon: `bi bi-clipboard-check`,
    //   active: false,
    // },
];

router.get("/auditor", (req, res) => {
    res.render("auditor/dashboard", {
      user: "Jhon",
      role: "Desk Auditor",
      title: "Assessment & Reporting",
      subtitle: "Dior Hotel",
      pages: [''],
      sideMenu: sidebarMenu,
    });
});

  
module.exports = router;