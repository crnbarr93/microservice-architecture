const express = require("express");
const userRouter = require("./users");
const baseRouter = express.Router();

baseRouter.use("/user", userRouter);

module.exports = baseRouter;
