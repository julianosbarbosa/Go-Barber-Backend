const { Router } = require("express");

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ Nome: "Juliano" });
});

module.exports = routes;
