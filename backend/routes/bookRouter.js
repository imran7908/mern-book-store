//external imports
const express = require("express");
const router = express.Router();

//internal imports
const getAllBooks = require("../controllers/bookController");

router.get("/", getAllBooks);

module.exports = router;
