const express = require("express");
const app = express();
const path = require("path");
//const userRoutes = require("./routes/user.js");
const mainRoutes = require("./routes/main");

// Set settings
 app.set("port", process.env.PORT || 3000);
 app.set("views", path.resolve(__dirname, "views"));
 app.set("view engine", "ejs");

 // Server
 app.listen(app.get("port"), () => console.log("Running server on https://localhost:" + app.get("port")));

// Use settings
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../public")));

// Routes

app.use(mainRoutes);