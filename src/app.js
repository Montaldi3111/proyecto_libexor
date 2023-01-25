const express = require("express");
const session = require("express-session");
const cookie = require("cookie-parser");
const app = express();
const path = require("path");
const userRoutes = require("./routes/user");
const mainRoutes = require("./routes/main");
const productRoutes = require("./routes/product");
const userIsLogged= require("./middlewares/userMiddleware");

// Set settings
 app.set("port", process.env.PORT || 3000);
 app.set("views", path.resolve(__dirname, "views"));
 app.set("view engine", "ejs");

 // Server
 app.listen(app.get("port"), () => console.log("Running server on https://localhost:" + app.get("port")));

// Use settings
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.static(path.resolve(__dirname, "../public/images/uploads")));
app.use(session({secret: "secret", saveUninitialized: true, resave: false}));
app.use(cookie());
app.use(userIsLogged);
// Routes

app.use(mainRoutes);
app.use(userRoutes);
app.use(productRoutes);