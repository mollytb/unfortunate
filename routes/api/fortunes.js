const router = require("express").Router();
const fortunesController = require("../../controllers/fortunesController");

// Matches with "/api/fortunes"
router.route("/")
  .get(fortunesController.findAll)
  .post(fortunesController.create);

// Matches with "/api/fortunesController/:id"
router
  .route("/:id")
  .get(fortunesController.findById)
  .put(fortunesController.update)
  .delete(fortunesController.remove);

module.exports = router;
