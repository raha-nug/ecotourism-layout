const express = require('express')
const app = express();
const path = require("path");
const port = 3000;


app.use(express.static("src/public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

// Menambahkan folder statis untuk Bootstrap
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use(
  "/bootstrap",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);

// Menambahkan folder statis untuk Bootstrap Icons
app.use(
  "/bootstrap",
  express.static(path.join(__dirname, "node_modules/bootstrap-icons/font"))
);

// popper dropdown
app.use(
  "/popper",
  express.static(path.join(__dirname, "node_modules/@popperjs/core/dist/umd"))
);


app.get("/", (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
