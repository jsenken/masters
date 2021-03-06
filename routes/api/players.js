const router = require("express").Router();
const playersController = require("../../controllers/playersController");

router.route("/")
  .get(playersController.findAll)
  .post(playersController.create);

// Matches with "/api/players/:id"
router
  .route("/:id")
  .get(playersController.findById)
  .put(playersController.update)
  .delete(playersController.remove)
  .post(playersController.create);

module.exports = router;