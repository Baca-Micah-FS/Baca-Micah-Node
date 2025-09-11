const Book = require("../models/Book");

const getAllUsers = async (request, response) => {
  try {
    const books = await Book.find({});
    response.status(200).json({
      message: `${request.method} verb to the books controller`,
      books: books,
      sucess: true,
    });
  } catch (error) {
    response.status(400).json({ message: error.message, success: false });
  }
};

const getUserbyId = async (request, response) => {
  try {
    const book = await Book.findById(request.params.id);
    response.status(200).json({
      message: `${request.method} Get books by ID`,
      book: book,
      success: true,
    });
  } catch (error) {
    response.status(400).json({ message: error.message, success: false });
  }
};

const createUser = async (request, response) => {
  try {
    const book = await Book.create(request.body);
    response.status(200).json({
      message: `${request.method} Create Books`,
      success: true,
      book: book,
    });
  } catch (error) {
    response.status(400).json({ message: error.message, success: false });
  }
};

const updateUser = async (request, response) => {
  try {
    const book = await Book.findByIdAndUpdate(request.params.id, request.body, {
      new: true,
    });
    response.status(200).json({
      message: `${request.method} Update Books`,
      success: true,
      book: book,
    });
  } catch (error) {
    response.status(400).json({ message: error.message, success: false });
  }
};

const deleteUser = async (request, response) => {
  try {
    await Book.findByIdAndDelete(request.params.id);
    response
      .status(200)
      .json({ message: `${request.method} Delete Books`, success: true });
  } catch (error) {
    response.status(400).json({ message: error.message, success: false });
  }
};

module.exports = {
  getAllUsers,
  getUserbyId,
  updateUser,
  deleteUser,
  createUser,
};
