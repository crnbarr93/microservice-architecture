const express = require("express");
const userStore = require("../lib/users");
const userRouter = express.Router();
const { validate } = require("../validation/users");

userRouter.get("/", function (req, res) {
  res.send(userStore.users);
});

userRouter.post("/", validate("createUser"), function (req, res) {
  console.log(req.body);
  userStore.saveUser(req.body);

  res.send(req.body);
});

userRouter.get("/:id", function (req, res) {
  const savedUser = userStore.getUserById(req.params.id);
  if (!savedUser) {
    res.status(404).send();
  } else {
    res.send(savedUser);
  }
});

userRouter.patch("/:id", validate("updateUser"), function (req, res) {
  userStore.saveUser(req.body);

  res.send(req.body);
});

userRouter.delete("/:id", function (req, res) {
  userStore.deleteUser(req.params.id);

  res.send(true);
});

userRouter.get("/:id/cats", async function (req, res) {
  const savedUser = userStore.getUserById(req.params.id);
  if (!savedUser) res.status(404).send();

  const likedCats = await savedUser.getLikedCats();

  res.send({ ...savedUser, likedCats });
});

userRouter.post("/:id/likecat/:catid", function (req, res) {
  const savedUser = userStore.getUserById(req.params.id);
  if (!savedUser) res.status(404).send();

  savedUser.likeCat(parseInt(req.params.catid));
  res.send(true);
});

module.exports = userRouter;
