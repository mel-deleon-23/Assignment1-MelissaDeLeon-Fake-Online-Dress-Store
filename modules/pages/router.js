const express = require("express");
const pageRouter = express.Router();
const menuLinks = require("../menuLinks/function");

pageRouter.get("/", async (request, response) => {
    links = await menuLinks.getLinks();
    response.render("index", { title: "Home", menu: links });
});

pageRouter.get("/dresses", async (request, response) => {
    links = await menuLinks.getLinks();
    response.render("dresses", { title: "Dresses", menu: links });
});

pageRouter.get("/about", async (request, response) => {
    links = await menuLinks.getLinks();
    response.render("about", { title: "About", menu: links });
});

module.exports = pageRouter;