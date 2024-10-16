const taskSidebar = (req, res, next) => {
  const currentUrl = req.originalUrl; // Ambil URL saat ini

  // List of menu sections
  const menuSections = [
    {
      key: "adaptiveManagement",
      label: "Adaptive Management",
      path: "adaptive-management",
      icon: "bi bi-gear", // Icon for Adaptive Management
      subMenus: [
        "AM-1",
        "AM-2",
        "AM-3",
        "AM-4",
        "AM-5",
        "AM-6",
        "AM-7",
        "AM-8",
        "AM-9",
        "AM-10",
        "AM-11",
        "AM-12",
      ],
    },
    {
      key: "sustainableUse",
      label: "Sustainable Use ",
      path: "sustainable-use",
      icon: "bi bi-recycle", // Icon for Sustainable Use
      subMenus: [
        "SU-1",
        "SU-2",
        "SU-3",
        "SU-4",
        "SU-5",
        "SU-6",
        "SU-7",
        "SU-8",
        "SU-9",
        "SU-10",
        "SU-11",
        "SU-12",
        "SU-13",
        "SU-14",
        "SU-15",
      ],
    },
    {
      key: "safeguarding",
      label: "Safeguarding ",
      path: "safeguarding",
      icon: "bi bi-shield-check", // Icon for Safeguarding
      subMenus: ["SG-1", "SG-2", "SG-3"],
    },
    {
      key: "communityWelfare",
      label: "Community Welfare ",
      path: "community-welfare",
      icon: "bi bi-people", // Icon for Community Welfare
      subMenus: ["CW-1", "CW-2", "CW-3"],
    },
    {
      key: "stakeholderAwareness",
      label: "Stakeholder Awareness ",
      path: "stakeholder-awareness",
      icon: "bi bi-bell", // Icon for Stakeholder Awareness
      subMenus: ["SA-1", "SA-2", "SA-3"],
    },
    {
      key: "leveragingAppreciation",
      label: "Leveraging Appreciation ",
      path: "leveraging-appreciation",
      icon: "bi bi-graph-up-arrow", // Icon for Leveraging Appreciation
      subMenus: ["LA-1", "LA-2", "LA-3"],
    },
    {
      key: "qualityExperience",
      label: "Quality Experience ",
      path: "quality-experience",
      icon: "bi bi-award", // Icon for Quality Experience
      subMenus: ["QE-1", "QE-2", "QE-3"],
    },
    {
      key: "partnershipCollaboration",
      label: "Partnership and Collaboration ",
      path: "partnership-collaboration",
      icon: "bi bi-diagram-3", // Icon for Partnership and Collaboration
      subMenus: ["PC-1", "PC-2", "PC-3"],
    },
    {
      key: "safetySecurity",
      label: "Safety and Security ",
      path: "safety-security",
      icon: "bi bi-shield-lock", // Icon for Safety and Security
      subMenus: ["SS-1", "SS-2", "SS-3"],
    },
  ];

  // Set `currentPath` untuk path utama dan submenu
  menuSections.forEach((section) => {
    section.isActive = currentUrl.includes(section.path); // Menentukan apakah section ini aktif
    section.subMenus = section.subMenus.map((subMenu) => {
      return {
        name: subMenu,
        isActive: currentUrl.includes(`${section.path}/${subMenu}`), // Cek apakah submenu ini aktif
      };
    });
  });

  // Menyimpan ke res.locals untuk digunakan di EJS
  res.locals.menuSections = menuSections;
  res.locals.currentUrl = currentUrl;

  next();
};

module.exports = taskSidebar;
