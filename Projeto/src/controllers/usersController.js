const User = require('../models/User');

const create = async (req, res) => {
  res.render('./index.jade');
};

const store = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = { name, email, password };

    await User.createAutoInc(newUser);

    res.redirect('/');
  } catch (err) {
    console.error(err);
  }
};

module.exports = { create, store };
