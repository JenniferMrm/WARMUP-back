const usersRouter = require("./users");
const trainingsRouter = require("./trainings");
const avatarsRouter = require("./avatars");

module.exports = (app) => {
  app.use("/api/users", usersRouter);
  app.use("/api/trainings", trainingsRouter);
  app.use("/api/avatars", avatarsRouter);
};
