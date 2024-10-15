// breadcrumbMiddleware.js
const { capitalizeFirstLetter } = require("../utils/func");

function generateBreadcrumb(req, res, next) {
  const fullPath = req.originalUrl.split("/").filter((part) => part);
  
  const pages = fullPath.map((part, index) => {
    return {
      name: capitalizeFirstLetter(part),
      url: "/" + fullPath.slice(0, index + 1).join("/"),
    };
  });

  // Menyimpan breadcrumb di res.locals agar dapat diakses di semua rute yang memerlukan
  res.locals.pages = pages;
  res.locals.title = capitalizeFirstLetter(fullPath[fullPath.length - 1]);
  next();
}

module.exports = generateBreadcrumb;
