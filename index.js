const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

const userRoutes = require("./src/routes/users-routes");
const auditorRoutes = require("./src/routes/auditor-routes");

app.use(express.static(path.join(__dirname, "src/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

// Menambahkan folder statis untuk Bootstrap
app.use(
  "/bootstrap",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(
  "/bootstrap",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);

// Menambahkan folder statis untuk Bootstrap Icons
app.use(
  "/bootstrap",
  express.static(path.join(__dirname, "node_modules/bootstrap-icons/font"))
);

// Mengatur file statis dari folder node_modules
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));

// Include Routes
app.use((req, res, next) => {
  res.locals.req = req;
  next()
}, userRoutes);
app.use((req, res, next) => {
  res.locals.req = req;
  next()
}, auditorRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
