var express = require("express");
var router = express.Router();

const model = require("./function");

//Admin pages
router.get("/", async (request, response) => {
    let links = await model.getLinks();
    response.render("admin/menu-admin", { title: "Admin menu links", 
    menu: links });
});
router.get("/add", async (request, response) => {
    let links = await model.getLinks();
    response.render("admin/menu-add", { title: "Add menu link",
    menu: links });
});

//Form processing paths
router.post("/add/submit", async (request, response) => {
    //For POST data, retrieve data using request.body.<field-name>
    //For GET form, use app.get() and request.query.<field-name> to retrieve GET form data
    
    //retrieve values from submitted POST form
    let wgt = request.body.weight;
    let path = request.body.path;
    let name = request.body.name;
    let newLink = {
        "weight": wgt,
        "path": path,
        "name": name
    }
    model.addLink(newLink);
    response.redirect("/admin/menu");
})

module.exports = router;