// backend/models/user.js - User model
// Copywrite (C) 2018, Brett Broadhurst
//

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	email: {type: String, required: true, unique: true},
	username: {type: String, required: true},
	password: {type: String, required: true}
});

module.exports = mongoose.model("User", userSchema);
