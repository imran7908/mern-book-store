//external imports
const express = require("express");
const router = express.Router();

//internal imports
const {
  getAllBooks,
  addBook,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.post("/", addBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook)

module.exports = router;
