//external imports
const express = require("express");
const router = express.Router();

//internal imports
const { getAllBooks, addBook, getBookById } = require("../controllers/bookController");

router.get("/", getAllBooks);
router.get("/:id", getBookById)
router.post("/", addBook);

module.exports = router;
