const trainingsRouter = require("express").Router();

const {
  getTrainings,
  getOneTraining,
  createTraining,
  updateTraining,
} = require("../controllers/trainings");

trainingsRouter.get("/", getTrainings);
trainingsRouter.get("/:id", getOneTraining);
trainingsRouter.post("/", createTraining);
trainingsRouter.patch("/:id", updateTraining);

module.exports = trainingsRouter;
