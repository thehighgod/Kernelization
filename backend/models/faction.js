// backend/models/faction - Faction model
// Copywrite (C) 2018, Brett Broadhurst
//

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const factionSchema = Schema({
	_id: Schema.Types.ObjectId,
	name: {
		type: String,
		required: true
	},

	description: {
		type: String,
		default: "Describe your faction!",
		required: true
	},

	started: {
		type: Date,
		default: Date.now(),
		required: true
	},

	founder: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true
	},

	members: [
		{
			type: Schema.Types.ObjectId,
			ref: "User",
		}
	]
});

module.exports = mongoose.model("Faction", factionSchema);
