const express = require("express");
const catsRouter = require("./cats");
const baseRouter = express.Router();

baseRouter.use("/cats", catsRouter);

module.exports = baseRouter;
