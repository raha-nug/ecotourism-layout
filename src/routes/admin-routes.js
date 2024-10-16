const express = require("express");
const generateBreadcrumb = require("../middleware/breadcrumbMiddleware");
const router = express.Router();

const sidebarMenu = [
  { name: "Dashboard", url: "/admin", icon: "bi bi-grid-fill", active: false },
];

const subMenu = [
  {
    name: "Manage Theme",
    url: "/admin/theme",
    icon: "bi bi-file-check",
    active: false,
  },
  {
    name: "Manage Criteria",
    url: "/admin/criteria",
    icon: "bi bi-file-check",
    active: false,
  },
  {
    name: "Manage Indicator",
    url: "/admin/indikator",
    icon: "bi bi-file-check",
    active: false,
  },
];

const theme = [
  {
    name: "Adaptive Management (AM)",
    desc: "Maximizing the Benefits and Minimizing the Negative Impacts",
  },
  {
    name: "Sustainable Use (SU)",
    desc: "Contributing to Natural Conservation",
  },
  {
    name: "Safeguarding (SG)",
    desc: "Contributing to Preservation of Cultural Heritage and Spiritual Assets",
  },
  {
    name: "Community Welfare (CW)",
    desc: "Improving Livelihood, Local Economy, and Welfare",
  },
  {
    name: "Stakeholder Awareness (SA)",
    desc: "Increasing Understanding of Stakeholder on Ecotourism",
  },
  {
    name: "Leveraging Appreciation (LA)",
    desc: "Providing interpretation to Improve Tourists Appreciation",
  },
  {
    name: "Quality Experience (QE)",
    desc: "Enhancing the quality of tourist experience by providing an excellent service",
  },
  {
    name: "Partnership and Collaboration (PC)",
    desc: "Maintaining sustainability by strengthening collaboration",
  },
  {
    name: "Safety and Security (SS)",
    desc: "Mitigating risks to ensure business continuity and tourist safety",
  },
];

router.get("/admin", (req, res) => {
  res.render("dashboard-admin", {
    content: "dashboard",
    sideMenu: sidebarMenu,
    subMenu: subMenu,
  });
});

router.get("/admin/theme", (req, res) => {
  res.render("dashboard-admin", {
    content: "List Theme",
    title: "List Theme",
    subtitle: "Theme Manajamen",
    pages: [""],
    path_include: "contents/admin/theme",
    sideMenu: sidebarMenu,
    subMenu: subMenu,
    theme: theme,
  });
});

module.exports = router;
