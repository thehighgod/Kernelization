// models/lesson.js - Lesson model
// Copywrite (C) 2018, Brett Broadhurst
//

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Lesson schema consists of lesson ID,
// name of the lesson, content of the lesson,
// the flag that must be validated in order to
// complete the lesson, and xp awarded upon completion.
const lessonSchema = Schema({
	_id: Schema.Types.ObjectId,

	// Name of the lesson.
	name: {
		type: String,
		required: true
	},

	// Text content of the lesson.
	// This is temporary until I figure out how to
	// do something more complicated.
	content: {
		type: String,
		required: true
	},

	// Submission flag for bootcamps.
	// This is also temporary and will only be
	// relevant in the cyber bootcamp.
	flag: {
		type: String,
		required: true
	},

	// The amount of XP rewarded for a correct submission.
	xp: {
		type: Number,
		required: true
	}	
});

module.exports = mongoose.model("Lesson", lessonSchema)
