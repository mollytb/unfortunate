const router = require("express").Router();
const fortunesController = require("../../controllers/fortunesController");

// Matches with "/api/fortunes"
router.route("/")
  .get(fortunesController.findAll)
  .post(fortunesController.create);

router.route("/random")
.get(fortunesController.findOne)

module.exports = router;
