const {
  capitalizeFirstLetter,
  encodeToBase64,
  decodeFromBase64,
} = require("../utils/func");

function generateBreadcrumb(req, res, next) {
  const query = req.query; // Get the query parameters from URL

  const breadcrumbs = req.originalUrl
    .split("/")
    .filter((segment) => segment) // Menghilangkan segmen kosong
    .map((segment, index, array) => {
      // Menghilangkan query jika ada tanda tanya di segmen
      const cleanSegment = segment.split("?")[0].replace(/-/g, " ");
      const url = `/${
        array
          .slice(0, index + 1)
          .join("/")
          .split("?")[0]
      }`; // Menghapus setelah tanda tanya pada URL
      return {
        name: capitalizeFirstLetter(cleanSegment), // Nama breadcrumb dengan huruf kapital
        url: url,
      };
    });

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
