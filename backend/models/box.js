// backend/models/box.js - Box Model
// Copywrite (C) 2018, Brett Broadhurst
//

const mongoose = require('mongoose');

const boxSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	title: {type: String, required: true},
	url: {type: String, required: true}
});

module.exports = mongoose.model('Box', boxSchema);
