// middleware/check_enrolled.js - Bootcamp enrolled middleware
// Copywrite (C) 2018, Brett Broadhurst
//

const mongoose = require("mongoose");
const Bootcamp = require("../models/bootcamp");

// This middleware checks if the user who sent the request
// to the server is enrolled in the bootcamp which the
// content belongs to. If not, the request is rejected.
module.exports = function(req, res, next)
{
	try {
		const btitle = req.params.bootcampId;

		
		
		next();
		
	} catch (err) {
		return res.status(401).json({
			message: "You are not allowed to access this content."
		});
	}
};
