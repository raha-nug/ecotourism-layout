const express = require("express");
const taskRoute = require("./tasks-routes");
const generateBreadcrumb = require("../middleware/breadcrumbMiddleware");
const router = express.Router();

const sidebarMenu = [
  { name: "Dashboard", url: "/users", icon: "bi bi-grid-fill", active: false },
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

router.get("/users", (req, res) => {
  res.render("dashboard", { content: "dashboard", sideMenu: sidebarMenu });
});

router.get("/users/opt1", (req, res) => {
  res.render("dashboard", {
    content: "tasks",
    title: "Assessment Progress",
    subtitle: "Dior Hotel",
    pages: [""],
    path_include: "contents/users/options/option-1",
    sideMenu: sidebarMenu,
  });
});

router.get("/users/opt1", (req, res) => {
  res.render("dashboard", {
    content: "tasks",
    title: "Assessment Progress",
    subtitle: "Dior Hotel",
    pages: [""],
    path_include: "contents/users/optional-dashboard-1",
    sideMenu: sidebarMenu,
  });
});

router.get("/users/tasks/", generateBreadcrumb, (req, res) => {
  res.render("dashboard", {
    content: "tasks",
    title: "Assessment Progress",
    subtitle: "Dior Hotel",
    pages: res.locals.pages,
    path_include: "contents/users/tasks-users",
    sideMenu: sidebarMenu,
  });
});

router.get("/users/profile/", generateBreadcrumb, (req, res) => {
  res.render("dashboard", {
    content: "tasks",
    title: "Profile",
    subtitle: "Dior Hotel",
    pages: res.locals.pages,
    path_include: "contents/users/profile-users",
    sideMenu: sidebarMenu,
  });
});

router.use("/users/tasks/*", taskRoute);

module.exports = router;
