const router = require("express").Router();
const playerRoutes = require("./players");

// pool routes
router.use("/players", playerRoutes);


module.exports = router;
