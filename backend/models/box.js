// backend/models/box.js - Box Model
// Copywrite (C) 2018, Brett Broadhurst
//

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Box schema consists of a box id,
// creator associated with a user,
// title, description download link,
// thumbnail, and rewards to be gained.
const boxSchema = Schema({
	_id: Schema.Types.ObjectId,
	
	creator: {
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
	},
	
	url: {
		type: String,
		required: true
	},
	
	boxImage: {
		type: String,
		required: true
	},

	xp: {
		type: Number,
	}
});

module.exports = mongoose.model('Box', boxSchema);
