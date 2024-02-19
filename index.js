//import required modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

//load local environment variables from .env
dotenv.config(); 

//import page routes
const pageRouter = require("./modules/pages/router");
const adminMenuRouter = require("./modules/menuLinks/router");

//set up Express object and port
const app = express();
const port = process.env.PORT || "8888";

//set up template engine (PUG)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//set some page routes
// app.get("/", async (request, response) => {
// response.render("index", { title: "Home" });
// });
// app.get("/dresses", (request, response) => {
// response.render("index", { title: "Dresses" });
// });
// app.get("/about", (request, response) => {
// response.render("index", { title: "About Us" });
// });

//set up a path for static files
app.use(express.static(path.join(__dirname, "public")));

//Use page routes from module
app.use("/", pageRouter); //save it please
app.use("/admin/menu", adminMenuRouter);


//set up server listening
app.listen(port, () => {
console.log(`Listening on http://localhost:${port}`);
});
