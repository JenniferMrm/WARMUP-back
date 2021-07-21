const db = require("../db-config");

const find = async () => {
  return db.promise().query("SELECT * FROM trainings");
};

const create = async ({ title, description, link, author }) => {
  return db
    .promise()
    .query(
      "INSERT INTO trainings (title, description, link, author) VALUES (?, ?, ?, ?)",
      [title, description, link, author]
    );
};

const update = async (id, newAttributes) => {
  return db
    .promise()
    .query("UPDATE trainings SET ? WHERE id = ?", [newAttributes, id]);
};

module.exports = { find, create, update };
