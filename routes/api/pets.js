const router = require("express").Router();
const petsController = require("../../controllers/petsController");

// Matches with "/api/books"
router.route("/")
  .get(petsController.findAll)
  .post(petsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(petsController.findById)
  .put(petsController.update)
  .delete(petsController.remove);

module.exports = router;
