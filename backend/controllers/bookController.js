//external imports

//internal exports
const Book = require("../model/Book");

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return res.status(404).json({ message: "No books found!" });
  }

  return res.status(200).json({ books });
};

const getBookById = async (req, res, next) => {
  const { id } = req.params;
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(404).json({ message: "No book found with this id!" });
  }

  return res.status(200).json({ book });
};

const addBook = async (req, res, next) => {
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
      image,
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({ message: "Unable to Add!" });
  }

  return res.status(201).json({ message: "Successfully added!" });
};

const updateBook = async (req, res, next) => {
  const { id } = req.params;
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(404).json({ message: "Unable to Update by this id!" });
  }

  return res.status(200).json({ message: "Successfully updated!" });
};

const deleteBook = async (req, res, next) => {
  const { id } = req.params;
  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(404).json({ message: "Unable to delete by this id!" });
  }

  return res.status(200).json({ message: "Successfully deleted!" });
};

module.exports = { getAllBooks, addBook, getBookById, updateBook, deleteBook };
