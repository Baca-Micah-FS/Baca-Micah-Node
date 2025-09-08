const express = require("express");
const router = express.Router();
let books = [];
// localhost: 3000/api/v1/books
router.get("/:id", (request, response) => {
  const { id } = request.params;
  const book = books.find((x) => x.id == id);
  response.status(200).json({
    message: `${request.method} Get books by ID`,
    success: true,
    book,
  });
});

router.get("/", (request, response) => {
  response.status(200).json({
    message: `${request.method} Get all Books`,
    books,
  });
});

router.post("/", (request, response) => {
  const { bookName } = request.body;
  let newId = 1;
  if (books.length > 0) {
    newId = books.sort((a, b) => b.id - a.id)[0].id + 1;
  }
  books.push({ id: newId, name: bookName });

  response.status(200).json({
    message: `${request.method} Create Books`,
    success: true,
    bookName,
    newId,
  });
});

router.put("/:id", (request, response) => {
  const { id } = request.params;
  const { bookName } = request.body;
  const book = books.find((x) => x.id == id);
  if (book != null) {
    book.name = bookName;
  }

  response.status(200).json({
    message: `${request.method} Update Books`,
    success: true,
    bookName,
    id,
  });
});

router.delete("/:id", (request, response) => {
  const { id } = request.params;
  const book = books.find((x) => x.id == id);

  if (!book) {
    response.status(400).json({ message: `${request.method}`, sucess: false });
  }
  if (book) {
    books = books.filter((b) => b.id != id);
  }
  response
    .status(200)
    .json({ message: `${request.method} Delete Books`, success: true, id });
});

module.exports = router;
