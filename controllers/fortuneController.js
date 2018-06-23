const db = require("../models");

// Defining methods for the fortuneController
module.exports = {
  findAll: function(req, res) {
    db.Fortune
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.Fortune
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};