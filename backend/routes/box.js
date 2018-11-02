// backend/routes/box.js - Box Model routes
// Copywrite (C) 2018, Brett Broadhurst
//

const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const router = express.Router();
const Box = require('../models/box'); 

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
router.get("/", function(req, res, next) {
	Box.find()
		.select("title url boxImage _id")
		.exec()
		.then(docs => {
			const response = {
				count: docs.length,
				boxes: docs.map(box => {
					return {
						title: box.title,
						url: box.url,
						boxImage: box.boxImage,
						_id: box._id,
						request: {
							type: 'GET',
							url: 'http://localhost:3000/api/v1/boxes/'
								+ box._id 
						}
					};
				})
			};
			
			res.status(200).json(docs);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({error: err});
		});
});

// All Boxes POST
router.post("/", upload.single("boxImage"), function(req, res, next) {
	const box = new Box({
		_id: new mongoose.Types.ObjectId(),
		title: req.body.title,
		url: req.body.url,
		boxImage: req.file.path
	});
	
	box.save()
		.then(result => {
			console.log(result);
			res.status(201).json({
				message: "Created box successfully",
				newBox: {
					title: result.title,
					url: result.url,
					_id: result._id
				}
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});


// Specific Box GET
router.get("/:boxID", function(req, res, next) {
	const id = req.params.boxID;
	Box.findById(id)
		.select("title url boxImage _id")
		.exec()
		.then(doc => {
			console.log(doc);
			if (doc) {
				res.status(200).json({
					product: doc,
					request: {
						type: 'GET',
						url: "http://localhost:3000/api/v1/boxes/",
					}
				});
			} else {
				res.status(404).json({
					message: "No entry found for provided ID."
				});
			}
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({error: err});
		});
});

// Specific Box PATCH
router.patch("/:boxID", function(req, res, next) {
	const id = req.params.boxID;
	const updates = {};
	for (const ops of req.body) {
		updates[ops.propName] = ops.value;
	}

	Box.update({_id: id}, {$set: updates})
		.exec()
		.then(result => {
			res.status(200).json({
				message: "Box updated!",
				request: {
					type: 'GET',
					url: "http://localhost:3000/api/v1/boxes/" + id
				}
			});
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
});

// Specific Box DELETE
router.delete("/:boxID", function(req, res, next) {
	const id = req.params.boxID;

	Box.remove({_id: id})
		.exec()
		.then(result => {
			res.status(200).json({
				message: "Box deleted!",
				/*request: {
				  type: 'POST',
				  url: "http://localhost:3000/boxes",
				  body: {title: 'String', }
				  }*/
			})
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
});

module.exports = router;
