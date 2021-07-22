const { find, findOne, create, update } = require("../models/trainings");

const getTrainings = async (req, res) => {
  const [data] = await find();
  res.json(data);
};

const getOneTraining = async (req, res) => {
  const [data] = await find(req.params.id);
  res.json(data);
};

const createTraining = async (req, res) => {
  try {
    await create(req.body);
    res.status(201).send("Training created");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating this training");
  }
};

const updateTraining = async (req, res) => {
  try {
    await update(req.params.id, req.body);
    res.status(200).send("Training updated");
  } catch (err) {
    res.status(500).send("Error updating a training");
  }
};

module.exports = {
  getTrainings,
  getOneTraining,
  createTraining,
  updateTraining,
};
