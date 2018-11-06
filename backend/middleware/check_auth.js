// backend/middleware/check_permissions.js - Middleware for checking login.
// Copywrite (C) 2018, Brett Broadhurst
//

const jwt = require("jsonwebtoken");

// This middleware verifies whether a user is logged in or not.
// Add this to any routes that you want auth protected.
module.exports = function(req, res, next)
{
	try {
		const token = req.headers.authorization.split(" ")[1];
		const decoded = jwt.verify(token, process.env.JWT_KEY);
		req.userData = decoded;
		next();
	} catch (err) {
		return res.status(401).json({
			message: "Authentication Failed."
		});
	}
};
