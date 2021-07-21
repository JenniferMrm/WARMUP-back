const trainingsRouter = require("express").Router();

const {
  getTrainings,
  createTraining,
  updateTraining,
} = require("../controllers/trainings");

trainingsRouter.get("/", getTrainings);
trainingsRouter.post("/", createTraining);
trainingsRouter.patch("/:id", updateTraining);

module.exports = trainingsRouter;
