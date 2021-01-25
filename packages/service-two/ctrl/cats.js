const { Router } = require("express");
const express = require("express");
const catsStore = require("../lib/cats");
const catsRouter = express.Router();
const { validate } = require("../validation/cats");

catsRouter.get("/", function (req, res) {
  res.send(catsStore.cats);
});

catsRouter.post("/", validate("createCat"), function (req, res) {
  catsStore.saveCat(req.body);

  res.send(req.body);
});

catsRouter.get("/:id", function (req, res) {
  const savedUser = catsStore.getCatById(req.params.id);
  if (!savedUser) {
    res.status(404).send();
  } else {
    res.send(savedUser);
  }
});

catsRouter.patch("/:id", validate("updateCat"), function (req, res) {
  catsStore.saveCat(req.body);

  res.send(req.body);
});

module.exports = catsRouter;
