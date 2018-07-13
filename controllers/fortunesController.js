const db = require("../models");

// Defining methods for the fortuneController
module.exports = {
  findAll: function(req, res) {
    db.Fortune
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findOne: function(req, res) {
      console.log(db.Fortune, ' this is fortunate')
      var query = { state: 'OK' };
      var n = db.Fortune.count(query);
      var r = Math.floor(Math.random() * n);
      var randomElement = db.Fortune.aggregate(
        [{$sample: {size:1}}])
        .then(dbModel => res.json(dbModel[0]))
        .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.Fortune
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
