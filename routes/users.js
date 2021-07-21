const usersRouter = require("express").Router();
const { getUsers, createUser, updateUser } = require("../controllers/users");

usersRouter.get("/", getUsers);
usersRouter.post("/", createUser);
usersRouter.patch("/:id", updateUser);

module.exports = usersRouter;
