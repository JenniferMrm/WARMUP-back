const { find } = require("../models/avatars");

const getAvatars = async (req, res) => {
  const [data] = await find();
  res.json(data);
};

module.exports = { getAvatars };
