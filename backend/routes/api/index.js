const router = require("express").Router();
const bookRoute = require("./book");

// Book routes
router.use("/book", bookRoute);

module.exports = router;
