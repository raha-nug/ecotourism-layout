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
    }
];

router.post("/login", (req, res) => {
    console.log(req.body);
    if(req.body.email === "userTest")
    {
        return res.render("dashboard", { content: "dashboard", sideMenu: sidebarMenu });
    }
    else if(req.body.email === "auditorTest")
    {
        res.render("auditor-layout", {
            user: "Jhon",
            role: "Desk Auditor",
            title: "Assessment & Reporting",
            subtitle: "Dior Hotel",
            pages: [''],
            path_include: "contents/auditors/dashboard",
            sideMenu: sidebarMenu,
        });
    }

});


module.exports = router;
