// backend/routes/users.js - User Routes
// Copywrite (C) 2018, Brett Broadhurst
//

const express  = require("express");
const router   = express.Router();
const userController = require("../controllers/users");

// All users GET
router.get("/", userController.getUsers);

// Register Route
router.post("/register", userController.registerUser);

// Login Route
router.post("/login", userController.loginUser);

// Specific user GET
router.get("/:userId", userController.getUser);

// Specific user PUT
router.put("/:userId", userController.editUser);

// Specific user DELETE
router.delete("/:userId", userController.deleteUser);

module.exports = router
