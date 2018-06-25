const router = require("express").Router();
const bookRoutes = require("./fortunes");

// Fortune routes
router.use("/fortunes", fortuneRoutes);

module.exports = router;
