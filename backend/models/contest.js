// backend/models/contest.js - Model for contests.
// Copywrite (C) 2018, Brett Broadhurst
//

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Contests contain a unique id, contest creator
// associated with a user, creation date,
// start and end dates (to and from), contest state,
// and an array of participants.
const contestSchema = Schema({
	_id: Schema.Types.ObjectId,
	
	creator: {
		type: Schema.Types.ObjectId,
		ref: "User"
		required: true
	},
	
	created: {
		type: date,
		default: Date.now(),
		required: true
	},

	from: {
		type: date,
		required: true
	},

	to: {
		type: Date,
		required: true
	},

	status: {
		type: String,
		required: true
	}
	
	participants: [
		{
			type: Schema.Types.ObjectId,
			ref: "User",
			required: false
		}
	]
});

module.exports = mongoose.model("Contest", contestSchema);
