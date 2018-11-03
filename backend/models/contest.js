// backend/models/contest.js - Model for contests.
// Copywrite (C) 2018, Brett Broadhurst
//

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
