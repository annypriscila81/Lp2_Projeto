const dia = require('../models/index');

const index = async (req, res) => {
  const dias = await temp.create(req.body);
  res.json(dias);
};

const readAll = async (req, res) => {
  const dias = await dia.readAll();

  res.json(dias);
};

module.exports = { index, readAll };