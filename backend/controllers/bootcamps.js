// controllers/bootcamps.js - Bootcamp Controller
// Copywrite (C) 2018, Brett Broadhurst
//

const mongoose = require("mongoose");
const Bootcamp = require("../models/bootcamp");

// Return all bootcamps.
exports.getBootcampsAll = function(req, res, next)
{
	Bootcamp.find()
			.select("title instructor description bootcampImage lessons participants _id")
			.exec()
			.then(docs => {
				const response = {
					count: docs.length,
					bootcamps: docs.map(bc => {
						return {
							title: bc.title,
							instructor: bc.instructor,
							description: bc.description,
							bootcampImage: bc.bootcampImage,
							lessons: bc.lessons.length,
							participants: bc.participants.length,
							_id: bc._id,
							request: {
								type: "GET",
								url: "http://localhost:3000/api/v1/bootcamps/" + bc._id
							}
						}
					})
				};

				res.status(200).json(response);
			})
			.catch(err => {
				console.log(err);
				res.status(500).json({
					error: err
				});
			});
}

// Add a bootcamp.
exports.addBootcamp = function(req, res, next)
{
	const bootcamp = new Bootcamp({
		_id: new mongoose.Types.ObjectId(),
		title: req.body.title,
		instructor: req.body.instructor,
		description: req.body.description,
		bootcampImage: req.body.bootcampImage,
		lessons: [],
		participants: []
	});

	// Save new bootcamp in the database.
	bootcamp.save()
	   .then(result => {
		   console.log(result);
		   res.status(201).json({
			   message: "Created bootcamp successfully.",
			   bootcamp: {
				   title: result.title,
				   instructor: result.instructor,
				   description: result.description,
				   bootcampImage: result.bootcampImage,
				   lessons: result.lessons.length,
				   participants: result.participants.length,
				   _id: result._id
			   }
		   });
	   })
	   .catch(err => {
		   res.status(500).json({
			   error: err
		   });
	   });
}

// Get a bootcamp with an ID.
exports.getBootcamp = function(req, res, next)
{
	return res.status(200).json({
		
	});
}

// Update a bootcamp with an ID.
exports.updateBootcamp = function(req, res, next)
{
	return res.status(200).json({
		
	});
}

// Delete a bootcamp with an ID.
exports.deleteBootcamp = function(req, res, next)
{
	return res.status(200).json({
		
	});
}

// Lessons //

exports.getLessonsAll = function(req, res, next)
{
	return res.status(200).json({
		
	});
}

exports.getLesson = function(req, res, next)
{
	return res.status(200).json({
		
	});
}

exports.addLesson = function(req, res, next)
{
	return res.status(200).json({
		
	});
}

exports.updateLesson = function(req, res, next)
{
	return res.status(200).json({
		
	});
}

exports.removeLesson = function(req, res, next)
{
	return res.status(200).json({
		
	});
}
