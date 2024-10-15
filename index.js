const express = require("express");
const app = express();
const path = require("path");
const { countries } = require("country-data"); // Import data negara
const port = 3000;
const userRoutes = require("./src/routes/users-routes");
const authRoutes = require("./src/routes/auth-routes");

app.use(express.static(path.join(__dirname, "src/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

// Material Tailwind
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));

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
}, authRoutes);
// Mengambil data negara dan mengirimkannya ke client
app.get("/countries", (req, res) => {
  const countryList = countries.all.map((country) => ({
    name: country.name,
    alpha2: country.alpha2, // Kode negara 2 huruf
  }));

  res.json(countryList); // Kirim data sebagai JSON
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views/auth/login.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views/auth/register.html"));
});
app.get("/form-register", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views/auth/formRegister.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views/auth/login.html"));
});

app.get("/landingPage", (req, res) => {
  res.sendFile(path.join(__dirname, "src/views/landingPage/index.html"));
  res.render("index");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
