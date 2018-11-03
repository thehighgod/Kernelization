// backend/models/user_profile - User profile model
// Copywrite (C) 2018, Brett Broadhurst
//

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userProfileSchema = Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true
	},

	status: {
		type: String,
		required: false
	},

	bio: {
		type: String,
		required: false
	},

	level: {
		type: Number,
		required: true
	},

	xp: {
		type: Number,
		required: true
	},

	joined: {
		type: date,
		default: Date.now(),
		required: true
	}
});

module.exports = mongoose.model("UserProfile", userProfileSchema);
