const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactunfortunate",
  {
    useMongoClient: true
  }
);

const fortuneSeed = [
  {
    fortune: "You are just as boring as everyone else.",
    date: new Date(Date.now())
  },
  {
    fortune: "You have to go to work tomorrow.",
    date: new Date(Date.now())
  },
  {
    fortune: "You have more laundry to do.",
    date: new Date(Date.now())
  },
  {
    fortune: "You were on a break.",
    date: new Date(Date.now())
  }
];

db.Fortune
  .remove({})
  .then(() => db.Fortune.collection.insertMany(fortuneSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });