const db = require("../db-config");

const find = async () => {
  return db.promise().query("SELECT * FROM users");
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
