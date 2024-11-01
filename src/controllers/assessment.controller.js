const showAssessments = async (req, res) => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/assesment/listTheme`, {
      headers: {
        Authorization: req.cookies.token,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to log in");
    }

    console.log(data)


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
    res.render("templates/assessment-template", {
      sidebar_content: req.query.criteria ? indicators : themes,
      sidebar_include: req.query.criteria
        ? "assessment-sidebar"
        : "theme-sidebar",
      content_include: req.query.criteria ? "assessment" : "list-criteria",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ error: error.message || "An error occurred" });
  }
};

module.exports = { showAssessments };
