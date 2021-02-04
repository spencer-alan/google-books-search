const router = require("express").Router();
const bookRoute = require("./book");

// Book routes
router.use("/books", bookRoute);

module.exports = router;
