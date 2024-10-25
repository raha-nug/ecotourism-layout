const express = require("express");
const router = express.Router();


router.get("/auditor", (req, res) => {
    res.render("dashboard", {
      sidebar_include: "",
      content_include: ""
    });
});

  
module.exports = router;