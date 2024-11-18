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

const Criteria = [
  {
    name: "AM.1",
    desc: "Reinvest profits from ecotourism development to maintain the quality of natural and cultural resources",
    level: "Mandatory",
    activities: false,
    fasilities: true,
    services: true,
  },
];
const theme = [
  {
    name: "AM.1",
    desc: "Reinvest profits from ecotourism development to maintain the quality of natural and cultural resources",
    level: "Mandatory",
    activities: false,
    fasilities: true,
    services: true,
  },
];

router.get("/admin", (req, res) => {
  res.render("dashboard-admin", {
    content: "dashboard",
    sideMenu: sidebarMenu,
    subMenu: subMenu.assesment,
    landingPage: subMenu,
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
    subMenu: subMenu.assesment,
    landingPage: subMenu,
    theme: theme,
  });
});

router.get("/admin/criteria", (req, res) => {
  res.render("dashboard-admin", {
    content: "List Criteria",
    title: "List Criteria",
    subtitle: "Theme Criteria",
    pages: [""],
    path_include: "contents/admin/criteria",
    sideMenu: sidebarMenu,
    subMenu: subMenu.assesment,
    landingPage: subMenu,
    criteria: Criteria,
  });
});

module.exports = router;
