// backend/middleware/check_permissions.js - Middleware for route permissions.
// Copywrite (C) 2018, Brett Broadhurst
//

const jwt = require('jsonwebtoken');

// This middleware verifies whether a user is logged in or not.
// Add this to any routes that you want auth protected.

module.exports = function(req, res, next) {
	try {
		const decoded = jwt.verify(res.body.token,
								   process.env.JWT_TOKEN);
		req.userData = decoded;
		next();
	} catch (err) {
		return res.status(401).json({
			message: "Authentication Failed."
		});
	}
};
