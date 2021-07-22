const usersRouter = require("express").Router();
const { getUser, createUser, updateUser } = require("../controllers/users");

usersRouter.get("/:id", getUser);
usersRouter.post("/", createUser);
usersRouter.patch("/:id", updateUser);

module.exports = usersRouter;
