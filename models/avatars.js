const db = require("../db-config");

const find = async () => {
  return db.promise().query("SELECT * FROM avatars");
};

module.exports = { find };
