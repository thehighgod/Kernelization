// backend/routes/users.js - User Routes
// Copywrite (C) 2018, Brett Broadhurst
//

const express  = require("express");
const router   = express.Router();
const userController = require("../controllers/users");
const checkAuth = require("../middleware/check_auth");
const checkAdmin = require("../middleware/check_permissions");

// All users GET
router.get("/", checkAuth, checkAdmin, userController.getUsers);

// Register Route
router.post("/register",
			userController.registerUser);

// Login Route
router.post("/login",
			userController.loginUser);

// Specific user GET
router.get("/:userId",
		   userController.getUser);

// Specific user PUT
router.put("/:userId",
		   checkAuth, checkAdmin,
		   userController.editUser);

// Specific user DELETE
router.delete("/:userId",
			  checkAuth, checkAdmin,
			  userController.deleteUser);

module.exports = router
