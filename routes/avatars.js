const avatarsRouter = require("express").Router();
const { getAvatars } = require("../controllers/avatars");

avatarsRouter.get("/", getAvatars);

module.exports = avatarsRouter;
