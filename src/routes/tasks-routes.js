const express = require("express");
const taskSidebar = require("../middleware/tasks-sidebar");
const generateBreadcrumb = require("../middleware/breadcrumbMiddleware");
const router = express.Router();

router.get("/*", generateBreadcrumb, taskSidebar, (req, res) => {

  
  res.render("tasks-template", {
    content: "tasks",
    title: "",
    subtitle: "",
    pages: res.locals.pages,
    path_include: "contents/users/tasks",
  });
});

module.exports = router;
