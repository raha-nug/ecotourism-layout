const express = require("express");
const { login, register, logout } = require("../controllers/auth.controller");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.get("/register-form", (req, res) => {
  res.render("auth/formRegister");
});

router.get("/email-verification", (req, res) => {
  res.render("auth/infoVerifikasi");
});

router.post("/login", login);
router.post("/register", register);
router.post("/logout", logout);

module.exports = router;
