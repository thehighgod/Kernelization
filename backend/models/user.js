// backend/models/user.js - User model
// Copywrite (C) 2018, Brett Broadhurst
//

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User schema consists of a user id,
// email, username, password and profile.
const userSchema = Schema({
	_id: Schema.Types.ObjectId,
	
	email: {
		type: String, 
		required: true, 
		unique: true,
		match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
	},
	
	username: {
		type: String,
		required: true,
		unique: true,
	},
	
	password: {
		type: String,
		required: true
	},
	
	role: {
		type: String,
		default: "User",
		required: true
	},

	enrolled: [String],

	isAdmin: {
		type: Boolean,
		default: false,
		required: true
	},

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
		default: "Tell us what you're up to!",
		required: false
	},

	avatar: {
		type: String,
		default: "",
		required: false
	},

	bio: {
		type: String,
		default: "New to Kernelization!",
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
		type: Date,
		default: Date.now(),
		required: true
	}
});

module.exports = mongoose.model("User", userSchema);
