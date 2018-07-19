const router = require("express").Router();
const fortunesController = require("../../controllers/fortunesController");

// Matches with "/api/fortunes"
router.route("/")
  .get(fortunesController.findAll)
  .post(fortunesController.saveFortune);

router.route("/random")
  .get(fortunesController.findOne);

router.route("/Home/" + _id)
  .get(fortunesController.findById)

module.exports = router;
