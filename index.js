const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");

const port = 3000;
const userRoutes = require("./src/routes/users-routes");
const authRoutes = require("./src/routes/auth-routes");
const featureRoute = require("./src/routes/features/features-routes");
const adminRoutes = require("./src/routes/admin-routes");
const generateBreadcrumb = require("./src/middleware/breadcrumbMiddleware");
const checkLogin = require("./src/middleware/authMiddleware");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
require("dotenv").config();

app.use("/*", generateBreadcrumb);

app.use(express.static(path.join(__dirname, "src/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

// Node modules static file configuration
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));

app.use("/auth", authRoutes);

app.use((req, res, next) => {
  res.locals.req = req;
  next();
}, adminRoutes);

app.use("/users", checkLogin, userRoutes);

app.use("/features", featureRoute);

app.get("/", (req, res) => {
  if (req.cookies.token) {
    // Next
    return res.redirect("/users"); // custom by roles
  }
  res.redirect("/auth/login");
});

app.get("/cms", (req, res) => {
  res.render("cms-news/index", { title: "About Us" });
});

app.get("/admin/cms-event", (req, res) => {
  res.render("CMS-LandingPage/event/index.ejs");
});
app.get("/admin/add-event", (req, res) => {
  res.render("CMS-LandingPage/event/form.ejs");
});
app.get("/admin/cms-news", (req, res) => {
  res.render("CMS-LandingPage/news/index");
});
app.get("/admin/cms-audited", (req, res) => {
  res.render("CMS-LandingPage/audited/index");
});
app.get("/admin/cms-staf", (req, res) => {
  res.render("CMS-LandingPage/staf/index");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
