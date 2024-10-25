const {
  capitalizeFirstLetter,
  encodeToBase64,
  decodeFromBase64,
} = require("../utils/func");

function generateBreadcrumb(req, res, next) {
  const query = req.query; // Get the query parameters from URL

  const breadcrumbs = [
    // {
    //   name: capitalizeFirstLetter(req.baseUrl),
    //   url: req.baseUrl,
    // },
  ];

  // Membangun URL secara bertahap berdasarkan query parameters
  let baseUrl = req.baseUrl || req.path;

  Object.keys(query).forEach((key, index) => {
    baseUrl += `${index === 0 ? "?" : "&"}${key}=${encodeToBase64(query[key])}`;
    breadcrumbs.push({
      name: capitalizeFirstLetter(decodeFromBase64(query[key])), // Nama breadcrumb dengan huruf kapital
      url: baseUrl, // URL breadcrumb
    });
  });

  // Menyimpan breadcrumb di res.locals agar dapat diakses di semua rute yang memerlukan
  res.locals.pages = breadcrumbs;
  next();
}

module.exports = generateBreadcrumb;
