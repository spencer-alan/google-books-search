const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// prettier-ignore
router.route("/")
  .get(bookController.getBook)
  .post(bookController.addBook);

// prettier-ignore
router.route("/:id")
  .delete(bookController.deleteBook);

module.exports = router;
