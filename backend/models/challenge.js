// backend/models/challenge.js - Challenge Model
// Copywrite (C) 2018, Brett Broadhurst
//

const mongoose = require('mongoose');

const challengeSchema =  mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	title: {type: String, required: true},
	creator: {type: String, required: true},
	description: {type: String, required, true}
	xp: Number
});

module.exports = mongoose.model('Challenge', challengeSchema)
