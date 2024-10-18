const { capitalizeFirstLetter } = require("../utils/func");

function generateBreadcrumb(req, res, next) {
  const query = req.query; // Get the query parameters from URL
  const breadcrumbs = [];

  // Membangun URL secara bertahap berdasarkan query parameters
  let baseUrl = req.baseUrl || req.path;

  Object.keys(query).forEach((key, index) => {
    baseUrl += `${index === 0 ? "?" : "&"}${key}=${query[key]}`;
    breadcrumbs.push({
      name: capitalizeFirstLetter(query[key]), // Nama breadcrumb dengan huruf kapital
      url: baseUrl, // URL breadcrumb
    });
  });

  // Menyimpan breadcrumb di res.locals agar dapat diakses di semua rute yang memerlukan
  res.locals.pages = breadcrumbs;
  next();
}

module.exports = generateBreadcrumb;
