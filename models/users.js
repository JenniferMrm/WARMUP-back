const db = require("../db-config");

const find = async (id) => {
  return db
    .promise()
    .query(
      "SELECT name, instrument, experience, training_time, src FROM users JOIN avatars ON users.avatar_id = avatars.id WHERE users.id = ?",
      [id]
    );
};

const create = async ({
  name,
  password,
  instrument,
  experience,
  avatar_id,
}) => {
  return db
    .promise()
    .query(
      "INSERT INTO users (name, password, instrument, experience, avatar_id) VALUES (?, ?, ?, ?, ?, ?)",
      [name, password, instrument, experience, avatar_id, 0]
    );
};

const update = async (id, newAttributes) => {
  return db
    .promise()
    .query("UPDATE users SET ? WHERE id = ?", [newAttributes, id]);
};

module.exports = { find, create, update };
