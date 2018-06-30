const router = require("express").Router();
const fortunesController = require("../../controllers/fortunesController");

// Matches with "/api/fortunes"
router.route("/")
  .get(fortunesController.findOne)
  .get(fortunesController.findAll)
  .post(fortunesController.create);

module.exports = router;
