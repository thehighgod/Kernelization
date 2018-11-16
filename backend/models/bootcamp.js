// models/bootcamp.js - Bootcamp model
// Copywrite (C) 2018, Brett Broadhurst
//

const mongoose = require("mongoose");
const Lesson = require("./lesson");
const Schema = mongoose.Schema;

// Bootcamp schema consists of a bootcamp id,
// instructor associated with a user, title,
// lessons, description, status, image link,
// and participants.
const bootcampSchema = Schema({
	_id: Schema.Types.ObjectId,

	// Instructor for the bootcamp.
	// User ID of a user is accepted here, not the name.
	// Need to figure out how to get the name from
	// a reference ID.
	instructor: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true
	},

	// Title of the bootcamp.
	title: {
		type: String,
		required: true
	},

	// Subtitle of the bootcamp.
	subtitle: {
		type: String,
		required: true
	},

	// A brief description of the bootcamp/
	description: {
		type: String,
		required: true
	},

	// Displayed image on the bootcamps list page.
	bootcampImage: {
		type: String,
		required: true
	},

	// Operational status: active, starting soon,
	// inactive, under construction.
	status: {
		type: String,
		default: "Under Construction",
		required: true
	},

	// Color data
	sstyle: {
		type: String,
	},

	// Color data
	cstyle: {
		type: String
	},

	// Array of subdocuments for lessons.
	lessons: [Lesson],

	// Array of userIDs for participants.
	participants: [{
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true
	}]
});

module.exports = mongoose.model("Bootcamp", bootcampSchema);
