// backend/controllers/boxes.js - Box Controller
// Copywrite (C) 2018, Brett Broadhurst
//

const mongoose = require('mongoose');
const Box = require('../models/box');

// Controller method to return all boxes.
exports.get_boxes_all = function(req, res, next) {

	// Find boxes and format output.
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
};

// Controller method to add a new box.
exports.add_box = function(req, res, next) {
	const box = new Box({
		_id: new mongoose.Types.ObjectId(),
		title: req.body.title,
		url: req.body.url,
		boxImage: req.file.path
	});

	// Save the new box to the database.
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
};

// Controller method to get a box.
exports.get_box = function(req, res, next) {
	const id = req.params.boxID;

	// Find a box from the URL parameter and format output.
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
};

// Controller method to update a box.
exports.update_box = function(req, res, next) {
	const id = req.params.boxID;
	const updates = {};
	for (const ops of req.body) {
		updates[ops.propName] = ops.value;
	}

	// Update box.
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
};

// Controller method to delete a box.
exports.remove_box = function(req, res, next) {
	const id = req.params.boxID;

	Box.remove({_id: id})
		.exec()
		.then(result => {
			res.status(200).json({
				message: "Box deleted!",
				/*request: {
				  type: 'POST',
				  url: "http://localhost:3000/api/v1/boxes",
				  body: {title: 'String', }
				  }*/
			})
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
};
