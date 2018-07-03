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
      db.Fortune
      var query = { state: 'OK' };
      var n = db.fortunes.count(query);
      var r = Math.floor(Math.random() * n);
      var randomElement = db.fortunes.find(req.query).limit(1).skip(r)
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
        console.log("TEST----> " + randomElement);
  },

  create: function(req, res) {
    db.Fortune
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
