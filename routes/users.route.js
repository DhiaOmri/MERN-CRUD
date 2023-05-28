const express = require("express");
const {
  AddUser,
  FindAllUser,
  FindSingleUser,
  UpdateUser,
  DeleteUser,
} = require("../controller/users.cotroller");
const router = express.Router();

// Add USER
router.post("/users", AddUser);

// Find all USERS
router.get("/users", FindAllUser);

// Find single  USER
router.get("/users/:id", FindSingleUser);

// Update USER
router.put("/users/:id", UpdateUser);

// Delete USER
router.delete("/users/:id", DeleteUser);
module.exports = router;
