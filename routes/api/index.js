const router = require("express").Router();
const fortuneRoutes = require("./fortunes");

// Fortune routes
router.use("/fortunes", fortuneRoutes);

module.exports = router;
