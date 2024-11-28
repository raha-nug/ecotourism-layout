const express = require("express");
const generateBreadcrumb = require("../middleware/breadcrumbMiddleware");
const router = express.Router();

const sidebarMenu = [
  {
    name: "Dashboard",
    url: "/admin",
    icon: "bi bi-grid-fill",
    active: false,
  },
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

const subMenuLandingPage = [
  {
    name: "CMS Audited",
    url: "/admin/cms-audited",
    icon: "bi bi-file-check",
  },
  {
    name: "CMS Events",
    url: "/admin/cms-events",
    icon: "bi bi-file-check",
  },

  {
    name: "CMS News",
    url: "/admin/cms-news",
    icon: "bi bi-file-check",
  },
  {
    name: "CMS Staf",
    url: "/admin/cms-staf",
    icon: "bi bi-file-check",
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
const Events = [
  {
    no: "01",
    title: "Reinvest profits from ecotourism development  ",
    date: "28 Oktober 2022",
    location: "Indonesia",
  },
];
const News = [
  {
    no: "01",
    title: "Reinvest profits from ecotourism development  ",
    date: "28 Oktober 2022",
    location: "Indonesia",
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
    subMenu: subMenu,
    subMenuLandingPage: subMenuLandingPage,
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
    subMenu: subMenu,
    subMenuLandingPage: subMenuLandingPage,
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
    subMenu: subMenu,
    subMenuLandingPage: subMenuLandingPage,
    landingPage: subMenu,
    criteria: Criteria,
  });
});

router.get("/admin/cms-events", (req, res) => {
  res.render("dashboard-admin", {
    content: "CMS Events",
    title: "CMS Events",
    subtitle: "Theme Criteria",
    pages: [""],
    path_include: "contents/admin/cms-events/index",
    sideMenu: sidebarMenu,
    subMenu: subMenu,
    subMenuLandingPage: subMenuLandingPage,
    landingPage: subMenu,
    event: Events,
  });
});
router.get("/admin/edit-event", (req, res) => {
  res.render("dashboard-admin", {
    content: "CMS Events",
    title: "CMS Events",
    subtitle: "Theme Criteria",
    pages: [""],
    path_include: "contents/admin/cms-events/edit-event",
    sideMenu: sidebarMenu,
    subMenu: subMenu,
    subMenuLandingPage: subMenuLandingPage,
    landingPage: subMenu,
    criteria: Criteria,
  });
});
router.get("/admin/add-events", (req, res) => {
  res.render("dashboard-admin", {
    content: "CMS Events",
    title: "CMS Events",
    subtitle: "Theme Criteria",
    pages: [""],
    path_include: "contents/admin/cms-events/cms-event",
    sideMenu: sidebarMenu,
    subMenu: subMenu,
    subMenuLandingPage: subMenuLandingPage,
    landingPage: subMenu,
    criteria: Criteria,
  });
});
router.get("/admin/cms-news", (req, res) => {
  res.render("dashboard-admin", {
    content: "CMS Events",
    title: "CMS Events",
    subtitle: "Theme Criteria",
    pages: [""],
    path_include: "contents/admin/cms-news/index",
    sideMenu: sidebarMenu,
    subMenu: subMenu,
    subMenuLandingPage: subMenuLandingPage,
    landingPage: subMenu,
    news: News,
  });
});
router.get("/admin/add-news", (req, res) => {
  res.render("dashboard-admin", {
    content: "CMS Events",
    title: "CMS Events",
    subtitle: "Theme Criteria",
    pages: [""],
    path_include: "contents/admin/cms-news/add-news",
    sideMenu: sidebarMenu,
    subMenu: subMenu,
    subMenuLandingPage: subMenuLandingPage,
    landingPage: subMenu,
    news: News,
  });
});
router.get("/admin/edit-news", (req, res) => {
  res.render("dashboard-admin", {
    content: "CMS Events",
    title: "CMS Events",
    subtitle: "Theme Criteria",
    pages: [""],
    path_include: "contents/admin/cms-news/edit-news",
    sideMenu: sidebarMenu,
    subMenu: subMenu,
    subMenuLandingPage: subMenuLandingPage,
    landingPage: subMenu,
    news: News,
  });
});
router.get("/admin/cms-audited", (req, res) => {
  res.render("dashboard-admin", {
    content: "CMS Events",
    title: "CMS Events",
    subtitle: "Theme Criteria",
    pages: [""],
    path_include: "contents/admin/cms-audited/index",
    sideMenu: sidebarMenu,
    subMenu: subMenu,
    subMenuLandingPage: subMenuLandingPage,
    landingPage: subMenu,
    news: News,
  });
});
router.get("/admin/add-audited", (req, res) => {
  res.render("dashboard-admin", {
    content: "CMS Events",
    title: "CMS Events",
    subtitle: "Theme Criteria",
    pages: [""],
    path_include: "contents/admin/cms-audited/add-audited",
    sideMenu: sidebarMenu,
    subMenu: subMenu,
    subMenuLandingPage: subMenuLandingPage,
    landingPage: subMenu,
    news: News,
  });
});
router.get("/admin/edit-audited", (req, res) => {
  res.render("dashboard-admin", {
    content: "CMS Events",
    title: "CMS Events",
    subtitle: "Theme Criteria",
    pages: [""],
    path_include: "contents/admin/cms-audited/edit-audited",
    sideMenu: sidebarMenu,
    subMenu: subMenu,
    subMenuLandingPage: subMenuLandingPage,
    landingPage: subMenu,
    news: News,
  });
});
router.get("/admin/cms-staf", (req, res) => {
  res.render("dashboard-admin", {
    content: "CMS Events",
    title: "CMS Events",
    subtitle: "Theme Criteria",
    pages: [""],
    path_include: "contents/admin/cms-staf/index",
    sideMenu: sidebarMenu,
    subMenu: subMenu,
    subMenuLandingPage: subMenuLandingPage,
    landingPage: subMenu,
    news: News,
  });
});
router.get("/admin/add-staf", (req, res) => {
  res.render("dashboard-admin", {
    content: "CMS Events",
    title: "CMS Events",
    subtitle: "Theme Criteria",
    pages: [""],
    path_include: "contents/admin/cms-staf/edit-staf",
    sideMenu: sidebarMenu,
    subMenu: subMenu,
    subMenuLandingPage: subMenuLandingPage,
    landingPage: subMenu,
    news: News,
  });
});
router.get("/admin/edit-staf", (req, res) => {
  res.render("dashboard-admin", {
    content: "CMS Events",
    title: "CMS Events",
    subtitle: "Theme Criteria",
    pages: [""],
    path_include: "contents/admin/cms-staf/edit-staf",
    sideMenu: sidebarMenu,
    subMenu: subMenu,
    subMenuLandingPage: subMenuLandingPage,
    landingPage: subMenu,
    news: News,
  });
});

module.exports = router;
