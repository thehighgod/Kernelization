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

});

module.exports = mongoose.model("User", userSchema);
