const express = require("express");
const router = express.Router();

// localhost: 3000/api/v1/books
router.get("/", (request, response) => {
  response
    .status(200)
    .json({ message: `${request.method} verb to book API`, success: true });
});

router.post("/", (request, response) => {
  console.log(">>>", request.body);
  response
    .status(200)
    .json({ message: `${request.method} verb to book API`, success: true });
});

router.put("/", (request, response) => {
  response
    .status(200)
    .json({ message: `${request.method} verb to book API`, success: true });
});

module.exports = router;
