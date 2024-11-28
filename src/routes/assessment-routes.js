const express = require("express");
const router = express.Router();
const { getAllData } = require("../controllers/applier.controller");


router.get("/:slug", async (req, res) => {
  const slug = req.params.slug;
  const data = await getAllData(req, res);
  const theme = data.filter((theme) => theme.name === slug);

  const themesSidebar = data.map((theme) => ({
    name: theme.name,
    active: theme.name === slug,
  }));

  res.render("templates/assessment-template", {
    sidebar_content: themesSidebar,
    sidebar_include: "theme-sidebar",
    content_include: "list-criteria",
    theme: theme,
  });
});

module.exports = router;
