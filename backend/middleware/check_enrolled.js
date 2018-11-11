// middleware/check_enrolled.js - Bootcamp enrolled middleware
// Copywrite (C) 2018, Brett Broadhurst
//

const mongoose = require("mongoose");
const Bootcamp = require("../models/bootcamp");
const User     = require("../models/user");

// This middleware checks if the user who sent the request
// to the server is enrolled in the bootcamp which the
// content belongs to. If not, the request is rejected.
module.exports = function(req, res, next)
{
	try {
		const user = req.userData; 
		const btitle = req.params.bootcampId;

		User.find()
			.select("name enrolled")
			.exec()
			.then(docs => {
				
			})
			.catch(err => {
				res.status(500).json({
					error: err
				});
			});
		
		next();
		
	} catch (err) {
		return res.status(401).json({
			message: "You are not allowed to access this content."
		});
	}
};
