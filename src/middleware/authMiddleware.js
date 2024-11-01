function checkLogin(req, res, next) {
  // Ambil token dari cookie
  const token = req.cookies.token;

  try {
    // Periksa apakah token ada
    if (!token) {
      return res.redirect("/auth/login");
    }
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid token." });
  }
}

module.exports = checkLogin;
