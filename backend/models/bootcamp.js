// models/bootcamp.js - Bootcamp model
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

	name: {
		type: String,
		required: true
	},

	content: {
		type: String,
		required: true
	},

	flag: {
		type: String,
		required: true
	},

	xp: {
		type: Number,
		required: true
	}
	
});

// Bootcamp schema consists of a bootcamp id,
// instructor associated with a user, title,
// lessons, description, status, image link,
// and participants.
const bootcampSchema = Schema({
	_id: Schema.Types.ObjectId,

	instructor: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true
	},

	title: {
		type: String,
		required: true
	},

	description: {
		type: String,
		required: true
	},

	bootcampImage: {
		type: String,
		required: true
	},

	lessons: [lessonSchema],

	participants: [{
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true
	}]
});

module.exports = mongoose.model("Bootcamp", bootcampSchema);
