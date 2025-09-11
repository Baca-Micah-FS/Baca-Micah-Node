const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserbyId,
  updateUser,
  deleteUser,
  createUser,
} = require("../controllers/bookController");

let books = [];
// localhost: 3000/api/v1/books
router.get("/:id", getUserbyId);

router.get("/", getAllUsers);

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
