const express = require("express");
const router = express.Router();
const bookRoutes = require("./bookRoutes");

// OR
// const router = require("express").Router

//localhost/3000/api/v1 because of index.js src
router.get("/", (request, response) => {
  response
    .status(200)
    .json({ message: `${request.method} verb to the API`, success: true });
});

router.use("/books", bookRoutes);
module.exports = router;
