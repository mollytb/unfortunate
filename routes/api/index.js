const router = require("express").Router();
const bookRoutes = require("./fortunes");

// Book routes
router.use("/fortunes", fortuneRoutes);

module.exports = router;
