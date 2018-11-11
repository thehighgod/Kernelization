// routes/bootcamps.js - Bootcamp Model routes
// Copywrite (C) 2018, Brett Broadhurst
//

const express = require("express");
const router = express.Router();

// Middleware
const checkAuth = required("../middleware/check_auth");
const checkAdmin = required("../middleware/check_permissions");
const checkEnrolled = require("../middleware/check_enrolled");

// Model controller
const bootcampController = require("../controllers/bootcamps");

// All Bootcamps GET
router.get("/",
		   checkAuth, checkAdmin
		   bootcampController.getBootcampsAll);

// Add a new Bootcamp
router.post("/",
			checkAuth, checkAdmin
			bootcampController.addBootcamp);

// Get a bootcamp
router.get("/:bootcampId",
		   checkAuth, checkAdmin
		   bootcampController.getBootcamp);

// Update a bootcamp
router.patch("/:bootcampId",
			 checkAuth, checkAdmin
			 bootcampController.updateBootcamp);

// Delete a bootcamp
router.delete("/:bootcampId",
			  checkAuth, checkAdmin
			  bootcampController.deleteBootcamp);

// Get all lessons from a bootcamp with an ID.
router.get("/:bootcampId/lessons/",
		   checkAuth, checkAdmin
		   bootcampController.getLessonsAll);

// Add a lesson to a bootcamp with an ID.
router.post("/:bootcampId/lessons/",
			checkAuth, checkAdmin
		   bootcampController.addLesson);

// Get a lesson with an ID from a bootcamp.
router.get("/:bootcampId/lessons/:lessonId",
		   checkAuth, checkEnrolled,
		   bootcampController.getLesson);

// Update a lesson with an ID in a bootcamp with an ID.
router.patch("/:bootcampId/lessons/:lessonId",
			 checkAuth, checkAdmin,
			 bootcampController.updateLesson);

// Delete a lesson with an ID in a bootcamp with an ID.
router.delete("/:bootcampId/lessons/:lessonId",
			  checkAuth, checkAdmin,
			  bootcampController.removeLesson);

module.exports = router;
