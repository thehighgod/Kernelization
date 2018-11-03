// backend/routes/box.js - Box Model routes
// Copywrite (C) 2018, Brett Broadhurst
//

const express = require('express');
const multer = require('multer');
const router = express.Router();

// Middleware
const checkPerms = require('../middleware/check_permissions');

// Controllers
const boxController = require('../controllers/boxes');

// Set file upload settings such as max filesize
// (currently 5MB).
const upload = multer({
	storage: multer.diskStorage({
		destination: function(req, file, cb) {
			cb(null, './uploads/');
		},
		filename: function(req, file, cb) {
			cb(null, `${new Date().toISOString().replace(/:/g, '-')}${file.originalname}`);
		}
	}),
	limits: {
		fileSize: 1024 * 1024 * 5
	},
	fileFilter: function(res, file, cb) {
		if (file.mimetype === 'image/jpeg' ||
		   file.mimetype === 'image/png') {
			cb(null, true);
		} else {
			cb(null, false);
		}
	}
	});

// All Boxes GET
router.get("/", boxController.getBoxesAll);

// All Boxes POST
router.post("/", checkPerms,
			upload.single("boxImage"),
			boxController.addBox);

// Specific Box GET
router.get("/:boxID", boxController.getBox);

// Specific Box PATCH
router.patch("/:boxID", checkPerms, boxController.updateBox);

// Specific Box DELETE
router.delete("/:boxID", checkPerms, boxController.removeBox);

module.exports = router;
