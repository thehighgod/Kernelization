// backend/models/user_profile - User profile model
// Copywrite (C) 2018, Brett Broadhurst
//

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userProfileSchema = Schema({
	firstName:  {
		type: String,
		required: false
	},

	lastName: {
		type: String,
		required: false
	},

	status: {
		type: String,
		required: false
	},

	avatar: {
		type: String,
		default: "",
		required: false
	},

	bio: {
		type: String,
		required: false
	},

	level: {
		type: Number,
		default: 1,
		required: true
	},

	xp: {
		type: Number,
		default: 0,
		required: true
	},

	rep: {
		type: Number,
		default: 0,
		required: true,
	},

	joined: {
		type: date,
		default: Date.now(),
		required: true
	}
});

module.exports = mongoose.model("UserProfile", userProfileSchema);
