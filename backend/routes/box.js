// backend/routes/box.js - Box Model routes
// Copywrite (C) 2018, Brett Broadhurst
//

const express = require('express');
const router = express.Router();
const Box = require('../models/box');

router.get("/", function(req, res, next) {
	Box.find()
		.select("title url _id")
		.exec()
		.then(docs => {
			const response = {
				count: docs.length,
				boxes: docs.map(box => {
					return {
						title: box.title,
						url: box.url,
						_id: box._id,
						request: {
							type: 'GET',
							url: 'http://localhost:3000/boxes/' + box._id 
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

router.get("/:boxID", function(req, res, next) {
	const id = req.params.boxID;
	Box.findById(id)
		.exec()
		.then(doc => {
			console.log(doc);
			res.status(200).json(doc);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({error: err});
		});
	
});

router.patch("/:boxID", function(req, res, next) {
	res.status(200).json({
		message: "Processing PATCH request to /boxes/:boxID."
	});
});

router.post("/:boxID", function(req, res, next) {
	res.status(201).json({
		message: "Processing POST request to /boxes/:boxID."
	});
});

router.delete("/:boxID", function(req, res, next) {
	const id = req.params.boxID;
	
	res.status(200).json({
		message: "Processing DELETE request to /boxes/:boxID."
	});
});

module.exports = router;
