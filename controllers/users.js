const { find, create, update } = require("../models/users");

const getUsers = async (req, res) => {
  const [data] = await find();
  res.json(data);
};

const createUser = async (req, res) => {
  try {
    await create(req.body);
    res.status(201).send("User created");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating the user");
  }
};

const updateUser = async (req, res) => {
  try {
    await update(req.params.id, req.body);
    res.status(200).send("User updated");
  } catch (err) {
    res.status(500).send("Error updating a user");
  }
};

module.exports = { getUsers, createUser, updateUser };
