const express = require("express");
const router = express.Router();
const {
  capitalizeFirstLetter,
  encodeToBase64,
  decodeFromBase64,
} = require("../utils/func");

// router.get("/*", (req, res) => {
//   res.render("templates/assessment-template", {
//     sidebar_include: "assessment-sidebar",
//     content_include: "assessment",
//   });
// });

const themes = [
  {
    name: "Adaptive Management",
    icon: "bi bi-gear",
  },
  {
    name: "Sustainable Use",
    icon: "bi bi-recycle",
  },
  {
    name: "Safeguarding",
    icon: "bi bi-shield-lock",
  },
  {
    name: "Community Welfare",
    icon: "bi bi-people",
  },
  {
    name: "Stakeholder Awareness",
    icon: "bi bi-eye",
  },
  {
    name: "Leveraging Appreciation",
    icon: "bi bi-trophy",
  },
  {
    name: "Quality Experience",
    icon: "bi bi-star",
  },
  {
    name: "Partnership and Collaboration",
    icon: "bi bi-diagram-3",
  },
  {
    name: "Safety and Security",
    icon: "bi bi-shield-check",
  },
];


const indicators = [
  {
    name: "AM.1.1",
    icon: "bi bi-circle",
    encodedName: encodeToBase64("AM.1.1"),
  },
  {
    name: "AM.1.2",
    icon: "bi bi-circle",
    encodedName: encodeToBase64("AM.1.2"),
  },
  {
    name: "AM.1.3",
    icon: "bi bi-circle",
    encodedName: encodeToBase64("AM.1.3"),
  },
];


router.get("/:slug", (req, res) => {
  // console.log(req.params.slug)
  res.render("templates/assessment-template", {
    sidebar_content: req.query.criteria ? indicators : themes,
    sidebar_include: req.query.criteria
      ? "assessment-sidebar"
      : "theme-sidebar",
    content_include: req.query.criteria ? "assessment" : "list-criteria",
  });
});

module.exports = router;
