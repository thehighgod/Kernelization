// controllers/bootcamps.js - Bootcamp Controller
// Copywrite (C) 2018, Brett Broadhurst
//

const mongoose = require("mongoose");
const Bootcamp = require("../models/bootcamp");

const API_VERSION = "v1";
const API_LINK = `https://localhost:3000/api/${API_VERSION}`;
const API_MODEL = "bootcamps";

// Return all bootcamps.
exports.getBootcampsAll = function(req, res, next)
{
	Bootcamp.find()
			.select("title subtitle instructor description status sstyle cstyle bootcampImage lessons participants _id")
			.exec()
			.then(docs => {
				const response = {
					count: docs.length,
					bootcamps: docs.map(bc => {
						return {
							title: bc.title,
							subtitle: bc.subtitle,
							instructor: bc.instructor,
							description: bc.description,
							bootcampImage: bc.bootcampImage,
							status: bc.status,
							sstyle: bc.sstyle,
							cstyle: bc.cstyle,
							lessons: bc.lessons.length,
							participants: bc.participants.length,
							_id: bc._id,
							request: {
								type: "GET",
								url: `${API_LINK}/${API_MODEL}/` + bc._id
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
		subtitle: req.body.subtitle,
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
	const id = req.params.bootcampId;

	Bootcamp.findById(id)
			.select("title instructor description lessons participants _id")
			.exec()
			.then(doc => {
				console.log(doc);

				if (doc) {
					res.status(200).json({
						bootcamp: doc,
						request: {
							type: "GET",
							url: `${API_LINK}/${API_MODEL}/` + doc._id
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
				res.status(500).json({
					error: err
				});
			})

}

// Update a bootcamp with an ID.
exports.updateBootcamp = function(req, res, next)
{
	const id = req.params.bootcampId;
	const updateOps = {};

	// Only execute the update operations provided
	// and no more.
	for (const ops of req.body) {
		updateOps[ops.propName] = ops.value;
	}

	Bootcamp.update({_id: id}, {$set: updateOps})
			.exec()
			.then(result => {
				res.status(200).json({
					message: "Bootcamp updated!",
					request: {
						type: "GET",
						url: `${API_LINK}/${API_MODEL}/` + id
					}
				});
			})
			.catch(err => {
				res.status(500).json({
					error: err
				});
			});
}

// Delete a bootcamp with an ID.
exports.deleteBootcamp = function(req, res, next)
{
	const id = req.params.bootcampId;

	Bootcamp.remove({_id: id})
			.exec()
			.then(result => {
				res.status(200).json({
					message: "Bootcamp deleted.",
					request: {
						type: "POST",
						url: `${API_LINK}/${API_MODEL}/`,
						body: {}
					}
				});
			})
			.catch(err => {
				res.status(500).json({
					error: err
				});
			});
}

// Lessons //
// Return all lessons in a bootcamp.
exports.getLessonsAll = function(req, res, next)
{
	const bootcampID = req.params.bootcampId;

	// Use bootcamp ID to display all lessons for that
	// bootcamp in the database.
	Bootcamp.findById(bootcampID)
			.select("lessons")
			.exec()
			.then(docs => {
				const response = {
					count: docs.lessons.length,
					lessons: docs.lessons.map(lesson => {
						return {
							name: lesson.name,
							content: lesson.content,
							flag: lesson.flag,
							xp: lesson.xp,
							_id: lesson._id
						};
					}),
					request: {
						type: "POST",
						url: `${API_LINK}/${API_MODEL}/`,
						body: {
							"title": "[string]",
							"subtitle": "[string]",
							"instructor": "[userID]",
							"description": "[string]",
							"bootcampImage": "[string]"
						}
					}

					res.status(200).json(response);
				};
			})
			.catch(err => {
				res.status(500).json({
					error: err
				});
			});
}

// Get a lesson by ID from a bootcmap with an ID.
exports.getLesson = function(req, res, next)
{
	const bootcampID = req.params.bootcampId;
	const lessonID = req.params.lessonId;

	Bootcamp.findById(bootcampId)
			.select("lesson")
			.exec()
			.then(result => {
				const response = {

				};
				
				res.status(200).json(response);
			})
			.catch(err => {
				res.status(500).json({
					error: err
				})
			});
}

// Add a new lesson to a bootcamp with an ID.
exports.addLesson = function(req, res, next)
{
	const lesson = new Lesson({
		_id: new mongoose.Types.ObjectId(),
		name: req.body.name,
		content: req.body.content,
		flag: req.body.flag,
		xp: req.body.xp,
	});

	// Save a subdocument inside a bootcamp.
}


// Update a lesson with an ID in a bootcamp with an ID.
exports.updateLesson = function(req, res, next)
{
	return res.status(200).json({
		message: "Under construction."
	});
}

// Remove a lesson with an ID from a bootcamp with an ID.
exports.removeLesson = function(req, res, next)
{
	return res.status(200).json({
		message: "Under construction."
	});
}

// Submissions //
exports.submit = function(req, res, next)
{
	const bootcampID = req.params.bootcampId;
	const lessonID = req.params.lessonId;

}
