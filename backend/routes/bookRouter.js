//external imports
const express = require("express");
const router = express.Router();

//internal imports
const { getAllBooks, addBook } = require("../controllers/bookController");

router.get("/", getAllBooks);
router.get("/:id")
router.post("/", addBook);

module.exports = router;
